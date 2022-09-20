import Link from "next/link";
import Layout from "../components/Layout";

const Hackathon = () => (
  <Layout title="Inteli Blockchain - Hackathon">
    <h1>Hackathon Page</h1>
    <p>
      <Link href="/Hackathon">
        <a>Hackathon</a>
      </Link>
    </p>
  </Layout>
);

export default Hackathon;
