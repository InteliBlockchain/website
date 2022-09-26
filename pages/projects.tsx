import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Card = ({ title, desc = "" }) => {
  return (
    <div className="rounded-lg border px-4 py-24 border-red-500 mt-4 md:mt-0 montserrat w-full">
      <div className="my-auto flex flex-col justify-between">
        <p className="font-bold text-2xl text-center">{title}</p>

        <p className="text-lg text-center">{desc}</p>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Inteli ID",
      description:
        "Já pensou como seria ter todo seu currículo de estudante em uma blockchain? Esse foi o projeto realizado com a parceria do Inteli",
    },
    {
      title: "Our Neighbours",
      description:
        "Fazer doações para outro país parece meio enviável...certo? Errado! Com o Our Neighbours, projeto desenvolvido no hackathon Ethereum SP, isso se tornou mais fácil e prático. ",
    },
    {
      title: "Em breve...",
    },
  ];

  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="Projetos" />

      <div className="flex flex-col p-2 mb-8 w-full lg:w-5/6 mx-auto">
        <div className="text-6xl md:text-7xl md:m-2 mb-4">
          <p className="montserrat text-gradient font-bold text-left">
            Projetos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 justify-items-center">
          {projects.map((project) => (
            <Card title={project.title} desc={project.description} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
