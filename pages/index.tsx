import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Button from "../components/Button/Button";
import Cube from "../components/Cube";
import { useState } from "react";
import Modal from "../components/Modal";
import axios from "axios";

const IndexPage = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal isOpened={modalVisible} />
      <Layout title="Inteli Blockchain">
        <Header selectedPage="Home" />

        <div className="flex flex-col md:flex-row p-2 justify-around mb-8 w-full lg:w-5/6 mx-auto my-auto ">
          {/* Div 1 - Text */}
          <div className="md:w-3/4 lg:w-1/2 w-full justify-center py-8 mb-2 md:pt-16">
            <div className="text-6xl md:text-7xl lg:text-8xl md:mx-6 md:my-2 items-center">
              <p className="font-bold text-zinc-800 montserrat text-left">
                Participe do nosso{" "}
                <p className="montserrat text-gradient font-bold">
                  Processo seletivo!
                </p>
              </p>
            </div>

            <div className="text-6xl md:text-7xl md:mx-6 items-center md:w-1/2 my-8">
              <p className="montserrat text-lg text-zinc-800">
                É a sua chance de aprender mais sobre o mundo da tecnologia
                Blockchain e participar dos projetos do clube!
              </p>
            </div>

            <div className=" md:mx-6 md:my-2 justify-center md:justify-start flex mt-2">
              <button
                className="cursor-default"
                onClick={() => setModalVisible(!modalVisible)}
              >
                <a className="cursor-default">
                  <Button />
                </a>
              </button>
            </div>
          </div>

          {/* Div 2 - Image */}
          <div className="md:w-1/4 lg:w-1/2 w-full md:mt-0">
            <Cube />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
