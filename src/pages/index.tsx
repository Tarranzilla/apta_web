import Head from "next/head";

import Section_Intro from "@/components/landing_page/Section_Intro";
import Section_Hero_Banner from "@/components/landing_page/Section_Hero_Banner";
import Section_About from "@/components/landing_page/Section_About";
import Section_Projects from "@/components/landing_page/Section_Projects";
import Section_Donate from "@/components/landing_page/Section_Donate";

export default function Home() {
    return (
        <>
            <Head>
                <title>APTA | Associação de Pesquisa e Tratamento do Alcoolismo</title>
                <meta
                    name="description"
                    content="A APTA (Associação de Pesquisa e Tratamento do Alcoolismo) é uma entidade filantrópica sem fins lucrativos, fundada em 1987 e declarada de utilidade pública municipal, estadual e federal."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main id="landing_page_main" className="content_viewer_main">
                <Section_Intro />
                <Section_Hero_Banner />
                <Section_About />
                <Section_Projects />
                <Section_Donate />
            </main>
        </>
    );
}
