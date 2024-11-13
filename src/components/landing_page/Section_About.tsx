const Section_About = () => {
    return (
        <div className="common_section section_about">
            <div className="section_header">
                <h1 className="section_title">A Nossa História</h1>
                <h3 className="section_subtitle">
                    Fundada em 1987, a APTA (Associação de Pesquisa e Tratamento do Alcoolismo) é uma entidade filantrópica sem fins lucrativos,
                    declarada de utilidade pública municipal, estadual e federal.
                </h3>
            </div>

            <div className="section_about_text_container">
                <h4 className="section_about_text">
                    A APTA oferece um programa de tratamento e prevenção do alcoolismo e outras substâncias químicas, através de uma equipe capacitada
                    e multidisciplinar.
                </h4>
                <h4 className="section_about_text">
                    O tratamento acontence no IPTA (Instituto de Pesquisa e Tratamento do Alcoolismo), que é um hospital com especialidade
                    psiquiátrica de média complexidade, tendo como modelo terapêutico a internação de 45 dias.
                </h4>
                <h4 className="section_about_text">
                    Possuimos um amplo espaço com área construída e infraestrutura adequada para o desenvolvimento de nossas atividades em consonância
                    com a legislação vigente.
                </h4>
            </div>

            <a href="#" className="landing_page_link">
                Leia mais a nosso respeito
            </a>
        </div>
    );
};

export default Section_About;
