import Link from "next/link";
import Layout from "../components/Layout";

const About = () => (
  <Layout title="Inteli Blockchain - Sobre nós">
    <h1>About Page</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default About;
