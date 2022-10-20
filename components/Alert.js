import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

import { alertService, AlertType } from "../services/alert.service";

export { Alert };

Alert.propTypes = {
  id: PropTypes.string,
  fade: PropTypes.bool,
};

Alert.defaultProps = {
  id: "default-alert",
  fade: true,
};

function Alert({ id, fade }) {
  const mounted = useRef(false);
  const router = useRouter();
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    mounted.current = true;

    // subscribe to new alert notifications
    const subscription = alertService.onAlert(id).subscribe((alert) => {
      // clear alerts when an empty alert is received
      if (!alert.message) {
        setAlerts((alerts) => {
          // filter out alerts without 'keepAfterRouteChange' flag
          const filteredAlerts = alerts.filter((x) => x.keepAfterRouteChange);

          // remove 'keepAfterRouteChange' flag on the rest
          return omit(filteredAlerts, "keepAfterRouteChange");
        });
      } else {
        // add alert to array with unique id
        alert.itemId = Math.random();
        setAlerts((alerts) => [...alerts, alert]);

        // auto close alert if required
        if (alert.autoClose) {
          setTimeout(() => removeAlert(alert), 4500);
        }
      }
    });

    // clear alerts on location change
    const clearAlerts = () => alertService.clear(id);
    router.events.on("routeChangeStart", clearAlerts);

    // clean up function that runs when the component unmounts
    return () => {
      mounted.current = false;

      // unsubscribe to avoid memory leaks
      subscription.unsubscribe();
      router.events.off("routeChangeStart", clearAlerts);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function omit(arr, key) {
    return arr.map((obj) => {
      const { [key]: omitted, ...rest } = obj;
      return rest;
    });
  }

  function removeAlert(alert) {
    if (!mounted.current) return;

    if (fade) {
      // fade out alert
      setAlerts((alerts) =>
        alerts.map((x) =>
          x.itemId === alert.itemId ? { ...x, fade: true } : x
        )
      );

      // remove alert after faded out
      setTimeout(() => {
        setAlerts((alerts) => alerts.filter((x) => x.itemId !== alert.itemId));
      }, 250);
    } else {
      // remove alert
      setAlerts((alerts) => alerts.filter((x) => x.itemId !== alert.itemId));
    }
  }

  function cssClasses(alert) {
    if (!alert) return;

    const classes = ["alert", "alert-dismissable"];

    const alertTypeClass = {
      [AlertType.Success]:
        //add an animation for entering and exiting
        "alert-success p-2 border border-green-200 bg-green-200 text-lg rounded-md shadow-sm mb-2 z-50",
      [AlertType.Error]:
        "alert-danger p-2 border border-red-200 bg-red-200 text-lg rounded-md shadow-sm mb-2 z-50",
      [AlertType.Info]:
        "alert-info p-2 border border-blue-200 bg-blue-200 text-lg rounded-md shadow-sm mb-2 z-50",
      [AlertType.Warning]:
        "alert-warning p-2 border border-yellow-200 bg-yellow-100 text-lg rounded-md shadow-sm mb-2 z-50",
    };

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push("fade");
    }

    return classes.join(" ");
  }

  if (!alerts.length) return null;

  return (
    <div className="fixed right-0 mr-2 mt-8 md:mt-0 w-3/4 md:w-1/4 z-50">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={cssClasses(alert)}
          onClick={() => removeAlert(alert)}
        >
          <a
            className="close mr-1 cursor-pointer"
            onClick={() => removeAlert(alert)}
          >
            &times;
          </a>
          <span dangerouslySetInnerHTML={{ __html: alert.message }}></span>
        </div>
      ))}
    </div>
  );
}
