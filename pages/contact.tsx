import Image from 'next/image';
import Header from '@components/Header';
import Layout from '@components/Layout';
import instagram from 'assets/instagram.png'

const Contact = () => {
  return (
    <Layout title="Inteli Blockchain">
      <Header selectedPage="Contato" />
      <div className="text-center">
        <h1 className="pt-14 montserrat text-gradient font-bold text-8xl">Contato</h1>
        <p className="text-2xl p-3 montserrat mb-10">
          Fale conosco e siga-nos nas redes sociais!
        </p>
        <Image src={instagram} width={50} height={50}></Image>
        <p className="text-4xl  montserrat">@inteli_blockchain</p>
      </div>
    </Layout>
  );
};

export default Contact;
