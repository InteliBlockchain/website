import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";

const Admin = () => {
  const [data, setData] = useState([]);

  const loadSubscriptions = async () => {
    const response = await axios.get("http://localhost:5500/subs/get");
    return response.data;
  };

  useEffect(() => {
    loadSubscriptions().then((data) => setData(data));
  }, []);

  return (
    <Layout title="Inteli Blockchain" hide={true}>
      <Header />

      <div className="flex flex-col md:flex-row p-2 justify-around mb-8 w-full lg:w-5/6 mx-auto my-auto">
        {/* Div 1 - Text */}
        <div className="justify-center pt-8 md:pt-64 md:fixed w-full md:w-1/2 lg:w-1/2 md:left-8 lg:left-32 mb-8 md:mb-0 px-2">
          <div className="text-6xl md:text-7xl md:mx-6 md:my-2 items-center">
            <p className="font-bold text-zinc-800 montserrat text-left">
              Inscritos{" "}
              <span className="montserrat text-gradient font-bold">
                no processo seletivo 2022.2
              </span>
            </p>
          </div>
        </div>

        {/* Div 2 - Image */}
        <div className="grid grid-col-1 justify-items-center md:pt-64 md:absolute md:right-8 lg:right-32 px-2 montserrat md:w-1/2">
          {/* mx-auto justify-items-center montserrat md:absolute w-full md:w-5/12 md:right-32 border border-black">  */}

          {data.length > 0 ? (
            data.map(
              (sub: {
                name: string;
                email: string;
                bornDate: string;
                github: string;
                linkedin?: string;
              }) => (
                <div className="flex flex-col mb-8">
                  <p className="text-xl font-bold text-zinc-800">
                    {sub.name},{" "}
                    <span className="text-lg font-normal text-zinc-800">
                      {sub.email}
                    </span>
                  </p>

                  <p className="text-md text-zinc-800">
                    Data de nascimento: {sub.bornDate} |{" "}
                    {new Date().getFullYear() -
                      new Date(sub.bornDate).getFullYear()}{" "}
                    anos
                  </p>
                  <div className="text-md text-zinc-800 flex flex-row">
                    <a href={sub.github} target="_blank" className="mr-8">
                      <Github />
                    </a>
                    <a href={sub.linkedin} target="_blank">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              )
            )
          ) : (
            <p>Não há inscritos</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
