import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Hackathon = () => (
  <Layout title="Inteli Blockchain">
    <Header selectedPage="Hackathon" />

    <div className="flex flex-col md:flex-row p-2 justify-around mb-8 w-full lg:w-5/6 mx-auto">
      {/* Div 1 - Text */}
      <div className="md:w-3/4 lg:w-1/2 w-full justify-center py-8 mb-2">
        <div className="text-6xl md:text-8xl md:mx-6 md:my-2 items-center">
          <p className="font-bold text-zinc-800 montserrat text-left">
            <p className="montserrat text-gradient font-bold">Coming soon...</p>
          </p>
        </div>
      </div>

      {/* Div 2 - Image */}
      <div className="md:w-1/4 lg:w-1/2 w-full mt-8 md:mt-0 flex items-center"></div>
    </div>
  </Layout>
);

export default Hackathon;
