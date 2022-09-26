import Link from "next/link";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Contact = () => (
  <Layout title="Inteli Blockchain">
    <Header selectedPage="Contato" />

    <h1>Contact</h1>
    <p>
      <Link href="/about">
        <a>Contact</a>
      </Link>
    </p>
  </Layout>
);

export default Contact;
