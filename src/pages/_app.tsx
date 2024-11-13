import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { store } from "@/store/store";
import { Provider } from "react-redux";

import Navbar from "@/components/common/Navbar";
import Content_Viewer from "@/components/common/Content_Viewer";
import Footer from "@/components/common/Footer";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Provider store={store}>
                <Navbar />
                <Content_Viewer>
                    <Component {...pageProps} />
                    <Footer />
                </Content_Viewer>
            </Provider>
        </>
    );
}
