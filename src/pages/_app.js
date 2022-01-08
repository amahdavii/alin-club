import Head from "next/head";
import MainLayout from "../layout/mainLayout";
import "../../styles/globals.css";
import { store } from '../store/configStore'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MainLayout>
        <Head>
          <title>آلین کلاب | باشگاه مشتریان آلین لند</title>
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
}

export default MyApp;
