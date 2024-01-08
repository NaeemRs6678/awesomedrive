/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Contact from "@/components/Layout/Contact";
import Footer from "@/components/Layout/Footer";
import Header2 from "@/components/Layout/Header2";

import "@/styles/globals.css";
// import "@/styles/carousal.css";
import Head from "next/head";
import Script from "next/script";

// import "react-whatsapp-widget/dist/index.css";
// import { WhatsAppWidget } from "react-whatsapp-widget";

export default function App({ Component, pageProps }) {


  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css"
        />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Header2 />
      <div className="lg:pt-20 md:pt-[4.2rem] pt-[4rem]">
        <Component {...pageProps} />
      </div>
      <Contact />
      <Footer />
      {/* <ScrollToTop className="bg-black" showUnder={160}>
        <span className="w-10 h-10 bg-black ScrollToTop">
          <img src="/images/arrow-down.svg" className="w-5 md:w-10" />{" "}
        </span>
      </ScrollToTop> */}
      {/* <WhatsAppWidget phoneNumber="+971524052485" />
      <a
        href={`tel:+971524052485`}
        className="flex items-center text-lg font-medium leading-normal bg-white lg:w-16 lg:h-16 w-12 h-12 rounded-full justify-center fixed left-5 bottom-24 shadow-lg text-gray-800 whitespace-nowrap"
  
      >
        <div className="">
          <FontAwesomeIcon icon={faPhone} className="w-6" />
        </div>
      </a> */}
    </>
  );
}
