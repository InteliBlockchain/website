import { useEffect, useState } from 'react';

const Timer = () => {
  const [dateDiff, setDateDiff] = useState<{
    days: number | string;
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
  }>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const dateNow = new Date();
      const dateFuture = new Date(2022, 9, 26, 0, 30, 0);

      const diff = dateFuture.getTime() - dateNow.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setDateDiff({
        days,
        hours,
        minutes,
        seconds
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dateDiff]);

  if (
    dateDiff.days === 0 &&
    dateDiff.hours === 0 &&
    dateDiff.minutes === 0 &&
    dateDiff.seconds === 0
  ) {
    return <p>Inscrições encerradas!</p>;
  }

  return (
    <span>
      Faltam {dateDiff.days} dias, {dateDiff.hours} horas, {dateDiff.minutes}{' '}
      minutos e {dateDiff.seconds} segundos...
    </span>
  );
};

export default Timer;
