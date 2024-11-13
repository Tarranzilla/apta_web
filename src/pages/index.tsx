import Head from "next/head";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Head>
                <title>IPTA | Instituto para o Tratamento do Alcolismo</title>
                <meta name="description" content="IPTA" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="">
                <h1>IPTA</h1>
            </main>
        </>
    );
}
