import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";

// require('dotenv').config()

const Admin = () => {
  const [data, setData] = useState([]);

  const loadSubscriptions = async () => {
    const response = await axios.get(`https://inteliblockchainserver.herokuapp.com/subs/get`);
    return response.data;
  };

  useEffect(() => {
    const load = async () => {
      const subs = await loadSubscriptions();
      setData(subs);
    };

    load();
    
    console.log(data);
  }, []);

  const onReload = async () => {
    const subs = await loadSubscriptions();
    setData(subs);
  };

  const deleteSub = async (id: string) => {
    await axios.delete(`https://inteliblockchainserver.herokuapp.com/subs/delete/${id}`);
    onReload();
  };

  return (
    <Layout title="Inteli Blockchain" hide={true}>
      <Header />

      <div className="flex flex-col md:flex-row p-2 justify-around mb-8 w-full lg:w-5/6 mx-auto my-auto">
        {/* Div 1 - Text */}
        <div className="justify-center pt-8 md:pt-64 md:fixed w-full md:w-1/2 lg:w-1/2 md:left-8 lg:left-32 mb-8 md:mb-0 px-2">
          <div className="md:mx-6 md:my-2 items-center">
            <p className="font-bold text-zinc-800 montserrat text-left text-6xl md:text-7xl">
              Inscritos{" "}
              <span className="montserrat text-gradient font-bold">
                no processo seletivo 2022.2
              </span>
            </p>
            {/* Refresh button */}
            <a>
              <button className="text-lg mt-2 bg-gradient text-white font-bold p-2 rounded-md" onClick={onReload}>
                Atualizar
              </button>
            </a>
          </div>
        </div>

        {/* Div 2 - Image */}
        <div className="grid grid-col-1 justify-items-center md:pt-24 md:absolute md:right-8 lg:right-32 px-2 montserrat md:w-1/2">
          {data.length > 0 ? (
            data.map(
              (sub: {
                _id: string;
                name: string;
                email: string;
                bornDate: string;
                github?: string;
                linkedin?: string;
                skills: string;
                why: string;
                about: string;
              }) => (
                <div
                  className="flex flex-col mb-8 w-full md:w-4/5"
                  key={sub.email}
                >
                  <p className="text-xl font-bold text-zinc-800 mb-2">
                    {sub.name},{" "}
                    <span className="text-lg font-normal text-zinc-800">
                      {sub.email} 
                    </span>                    
                  </p>
                  
                  <a>
                      <button className="text-md mb-2 bg-red-600 text-white font-bold p-2 rounded-md" onClick={()=>{
                        deleteSub(sub._id)
                      }}>
                        Deletar
                      </button>
                    </a>
                  

                  <p className="text-md text-zinc-800 mb-2">
                    Data de nascimento: {sub.bornDate} |{" "}
                    {new Date().getFullYear() -
                      new Date(sub.bornDate).getFullYear()}{" "}
                    anos
                  </p>

                  <p className="text-md text-zinc-800 mb-2">
                    Habilidades:
                    <br />
                    {sub.skills}
                  </p>

                  <p className="text-md text-zinc-800 mb-2">
                    Por que quer participar do clube?
                    <br />
                    {sub.why}
                  </p>

                  <p className="text-md text-zinc-800 mb-2">
                    Sobre você:
                    <br />
                    {sub.about}
                  </p>

                  <div className="text-md text-zinc-800 flex flex-row">
                    <a href={sub.github} target="_blank" className="mr-4">
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
