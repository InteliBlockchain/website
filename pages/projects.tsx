import Link from "next/link";
import Layout from "../components/Layout";

const Projects = () => (
  <Layout title="Inteli Blockchain - Projetos">
    <h1>Projects Page</h1>
    <p>
      <Link href="/Projects">
        <a>Projects</a>
      </Link>
    </p>
  </Layout>
);

export default Projects;
