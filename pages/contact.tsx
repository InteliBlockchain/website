import Image from 'next/image';
import Header from '@components/Header';
import Layout from '@components/Layout';
import Link from 'next/link';
import instagram from 'assets/instagram.png';
import email from 'assets/email.png';

const Contact = () => {
  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="Contato" />
      <div className="text-center">
        <h1 className="pt-14 montserrat text-gradient font-bold text-8xl">
          Contato
        </h1>
        <p className="text-2xl p-3 montserrat mb-10">
          Fale conosco e siga-nos nas redes sociais!
        </p>
        <Image src={instagram} width={50} height={50}></Image>
        <Link href={'https://www.instagram.com/inteli_blockchain/'}>
          <p className=" transition text-4xl  montserrat hover:cursor-pointer hover:scale-110">
            @inteli_blockchain
          </p>
        </Link>
        <br />
        <br />
        <br />
        <Image src={email} width={50} height={50}></Image>
        <p className="text-3xl  montserrat">blockchain+contato@inteli.edu.br</p>
      </div>
    </Layout>
  );
};

export default Contact;
