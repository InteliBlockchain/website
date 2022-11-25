import Header from '@components/Header';
import Layout from '@components/Layout';
import Button from '@components/Button/Button';
import Cube from '@components/Cube';
import { useEffect, useState } from 'react';
import Modal from '@components/Modal';
import Footer from '@components/Footer';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import Timer from '@components/Timer';

import useTranslation from 'next-translate/useTranslation';

const IndexPage = () => {
  const router = useRouter()

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const Router = useRouter();

  const { t } = useTranslation();

  useEffect(() => {
    if (!Router.isReady) return;

    if (
      Router.query.tokenError &&
      Router.query.errorMessage &&
      Router.query.errorMessage != '[object Object]'
    ) {
      toast.error('Error: ' + Router.query.errorMessage);
    }
  }, [Router.isReady]);

  return (
    <>
      <Modal
        isOpened={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
      <div
        onClick={() => setModalVisible(false)}
        className={`modal absolute md:fixed w-full min-h-screen h-full flex flex-1 top-0 items-center justify-center bg-black bg-opacity-70 z-20 inset-0 ${modalVisible ? '' : 'hidden'
          }`}
      ></div>

      <Layout title="Inteli Blockchain" hide={false}>
        <Header selectedPage="Home" />

        <div className="flex flex-1 flex-col md:flex-row justify-around px-8 lg:px-0 w-full lg:w-5/6 mx-auto my-auto h-full pb-24">
          {/* Div 1 - Text */}
          <div className="md:w-3/4 lg:w-1/2 w-full justify-center py-8 mb-2 md:pt-12 h-auto">
            <div className="text-6xl md:text-7xl lg:text-8xl md:mx-6 md:my-2 items-center">
              <div>
                <p className="font-bold text-zinc-800 montserrat text-left">
                  {t('common:Process1')}{' '}
                </p>
                <span className="montserrat text-gradient font-bold">
                  {t('common:Process2')}
                </span>
              </div>
            </div>

            <div className="text-6xl md:text-7xl md:mx-6 items-center md:w-1/2 my-8">
              <p className="montserrat text-lg text-zinc-800 mb-2">
                {t('common:oport')}
              </p>
            </div>

            <div className="md:mx-6 md:mt-2 justify-center md:justify-start flex mt-2 w-1/3 mx-auto">
              <div className="cursor-pointer">
                <Button
                  onClick={() =>
                    router.push(
                      '/about'
                    )
                  }
                  className={''}
                />
              </div>
            </div>
          </div>

          {/* Div 2 - Image */}
          <div className="hidden lg:flex md:w-1/4 lg:w-1/2 w-full p-0 m-0">
            <Cube />
          </div>
        </div>

        <div className='absolute bottom-0 w-full'>
          <Footer hide={false} />
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
