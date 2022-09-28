import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Button from "../components/Button/Button";

const IndexPage = () => (
  <Layout title="Inteli Blockchain">
    <Header selectedPage="Home" />

    <div className="flex flex-col md:flex-row p-2 justify-around mb-8 w-full lg:w-5/6 mx-auto my-auto">
      {/* Div 1 - Text */}
      <div className="md:w-3/4 lg:w-1/2 w-full justify-center py-8 mb-2 md:pt-32">
        <div className="text-6xl md:text-8xl md:mx-6 md:my-2 items-center">
          <p className="font-bold text-zinc-800 montserrat text-left">
            Participe do nosso{" "}
            <p className="montserrat text-gradient font-bold">Hackathon</p>
          </p>
        </div>

        <div className="text-6xl md:text-7xl md:mx-6 items-center md:w-1/2 my-8">
          <p className="montserrat text-lg text-zinc-800">
            É a sua chance de aprender mais sobre o mundo da tecnologia
            Blockchain!
          </p>
        </div>

        <div className=" md:mx-6 md:my-2 justify-center md:justify-start flex mt-2">
          <Link href="/hackathon" className="cursor-default">
            {/* <a className="bg-gradient py-2 rounded-lg w-1/2 mx-auto md:m-0 hover:shadow-lg hover:scale-105 transition duration-200 ease-linear text-center">
              <p className="text-white rounded-lg text-lg montserrat font-medium">
                Se inscreva
              </p>
              </a> */}
            <a className="cursor-default">
              <Button />
            </a>
          </Link>
        </div>
      </div>

      {/* Div 2 - Image */}
      <div className="md:w-1/4 lg:w-1/2 w-full mt-8 md:mt-0 flex items-center"></div>
    </div>
  </Layout>
);

export default IndexPage;
