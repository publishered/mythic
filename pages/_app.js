import Layout from '@/components/layout/Layout';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({subsets: ['latin'], weight: ['400', '500', '600']})

export default function App({ Component, pageProps }) {
  return <>
   <style jsx global>
      {`
         html {
            font-family: ${inter.style.fontFamily};
         }
      `}
   </style>
   <Layout>
      <Component {...pageProps} />
   </Layout>
  </>
}
