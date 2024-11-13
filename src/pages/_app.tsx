import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div>Navbar</div>
            <div className="content_viewer">
                <Component {...pageProps} />
            </div>
            <footer>Footer</footer>
        </>
    );
}
