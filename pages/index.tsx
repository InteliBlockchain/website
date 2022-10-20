import Header from "../components/Header";
import Layout from "../components/Layout";
import Button from "../components/Button/Button";
import Cube from "../components/Cube";
import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Footer from "../components/Footer";

const IndexPage = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [dateDiff, setDateDiff] = useState<{
    days: number | string;
    hours: number | string;
    minutes: number | string;
    seconds: number | string;
  }>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const loadDateDiff = () => {
    const dateNow = new Date();
    const dateFuture = new Date(2022, 9, 27, 0, 0, 0);

    const diff = dateFuture.getTime() - dateNow.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setDateDiff({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  setTimeout(() => {
    loadDateDiff();
  }, 1000);

  return (
    <>
      <Modal
        isOpened={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
      <div
        onClick={() => setModalVisible(false)}
        className={`modal absolute md:fixed w-full min-h-screen h-full flex flex-1 top-0 items-center justify-center bg-black bg-opacity-70 z-20 inset-0 ${
          modalVisible ? "" : "hidden"
        }`}
      ></div>

      <Layout title="Inteli Blockchain" hide={false}>
        <Header selectedPage="Home" />

        <div className="flex flex-col md:flex-row p-2 justify-around mb-8 w-full lg:w-5/6 mx-auto my-auto ">
          {/* Div 1 - Text */}
          <div className="md:w-3/4 lg:w-1/2 w-full justify-center py-8 mb-2 md:pt-12">
            <div className="text-6xl md:text-7xl lg:text-8xl md:mx-6 md:my-2 items-center">
              <div>
                <p className="font-bold text-zinc-800 montserrat text-left">
                  Participe do nosso{" "}
                </p>
                <span className="montserrat text-gradient font-bold">
                  processo seletivo!
                </span>
              </div>
            </div>

            <div className="text-6xl md:text-7xl md:mx-6 items-center md:w-1/2 my-8">
              <p className="montserrat text-lg text-zinc-800 mb-2">
                É a sua chance de aprender mais sobre o mundo da tecnologia
                Blockchain e participar dos projetos do clube!
              </p>
              <p className="montserrat text-lg text-zinc-800">
                Inscrições até dia 26/09/2022!{" "}
                {dateDiff.days !== 0 &&
                dateDiff.hours !== 0 &&
                dateDiff.minutes !== 0 &&
                dateDiff.seconds !== 0
                  ? `Faltam ${dateDiff.days} dias, ${dateDiff.hours} horas, ${dateDiff.minutes} minutos e ${dateDiff.seconds} segundos...`
                  : ""}
              </p>
            </div>

            <div className=" md:mx-6 md:my-2 justify-center md:justify-start flex mt-2">
              <div className="cursor-pointer">
                <Button
                  onClick={() => setModalVisible(!modalVisible)}
                  className={""}
                />
              </div>
            </div>
          </div>

          {/* Div 2 - Image */}
          <div className="md:w-1/4 lg:w-1/2 w-full md:mt-0">
            <Cube />
          </div>
        </div>

        <Footer hide={false} />
      </Layout>
    </>
  );
};

export default IndexPage;
