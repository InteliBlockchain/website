import Link from 'next/link';
import Header from '@components/Header';
import Layout from '@components/Layout';

const Contact = () => {
  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="Contato" />
      <p>
        <Link href="/about">
          <a>Contact</a>
        </Link>
      </p>
    </Layout>
  );
};

export default Contact;
