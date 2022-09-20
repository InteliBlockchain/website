import Link from "next/link";
import Layout from "../components/Layout";

const Contact = () => (
  <Layout title="Inteli Blockchain - Contato">
    <h1>Contact Page</h1>
    <p>
      <Link href="/Contact">
        <a>Contact</a>
      </Link>
    </p>
  </Layout>
);

export default Contact;
