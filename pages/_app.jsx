// import { AppProps } from "next/app";
import '../styles/index.css'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

require('dotenv').config()

import Maintenance from '../components/Maintenance'

const MyApp = ({ Component, pageProps }) => {
    if (process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true') {
        return <Maintenance />
    }

    return <Component {...pageProps} />
}

export default MyApp
