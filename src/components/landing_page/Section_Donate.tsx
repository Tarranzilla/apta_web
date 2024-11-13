import { useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

interface AccordionProps {
    title: string;
    explanation: string[];
}

const faqData = [
    {
        title: "Como posso fazer minha doação?",
        explanation: [
            "É muito simples. Você precisa criar uma conta, inserir uma forma de pagamento e então escolher com qual valor e recorrência deseja apoiar nosso projeto. Após a conclusão, você receberá um e-mail de confirmação e o recibo de sua doação.",
        ],
    },
    {
        title: "Com qual frequência posso fazer doações?",
        explanation: [
            "O doador poderá optar por uma doação única ou mensal. Na modalidade mensal, a recorrência será debitada diretamente no cartão de crédito ou débito selecionado, na mesma data da primeira doação.",
        ],
    },
    {
        title: "A APTA aceita doações de produtos ou serviços?",
        explanation: [
            "Sim, para mais detalhes, entre em contato com nossa área de Investimentos Sociais pelo e-mail doe@apta.com.br ou pelo telefone (41) 99999-9999.",
        ],
    },
    {
        title: "Como saber o que foi feito com o valor da minha doação?",
        explanation: [
            "A APTA tem o compromisso com a transparência e a credibilidade. Desse modo, nos comprometemos a prestar contas de todas doações recebidas pela associação mensalmente através de um relatório de prestação de contas.",
        ],
    },
];

const FAQ_Accordion = ({ title, explanation }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="donate_faq_question">
            <div className="faq_question_header" onClick={() => setIsOpen(!isOpen)}>
                <h3>{title}</h3>
                <m.span
                    className="material-icons-outlined"
                    animate={{ rotate: isOpen ? 45 : 0 }} // Rotate icon
                    transition={{ duration: 0.2 }}
                >
                    add
                </m.span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="accordion_paragraph_container"
                    >
                        {explanation.map((paragraph, index) => (
                            <m.p
                                className="accordion_paragraph"
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {paragraph}
                            </m.p>
                        ))}
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Section_Donate = () => {
    return (
        <div className="common_section section_donate">
            <div className="section_header">
                <h1 className="section_title">Considere nos apoiar!</h1>
                <h3 className="section_subtitle">Seu apoio transforma vidas e nos ajuda a continuar nossa missão de impactar a comunidade!</h3>
            </div>

            <div className="section_donate_info_container">
                <div className="section_donate_text_container">
                    <h4 className="section_donate_text">
                        A APTA, fundada em 1987, é uma entidade filantrópica que atua no combate ao alcoolismo e à dependência química, oferecendo
                        tratamento e apoio a quem mais precisa. Nosso trabalho é movido pela dedicação a vidas que buscam recomeçar e é reconhecido
                        pela sua importância social e pública.
                    </h4>
                    <h4 className="section_donate_text">
                        Cada contribuição é essencial para mantermos e aprimorarmos nosso atendimento no Instituto de Pesquisa e Tratamento do
                        Alcoolismo (IPTA), onde oferecemos internação, apoio psicológico e reintegração social por meio de uma equipe especializada e
                        um espaço que acolhe e respeita nossos pacientes.
                    </h4>
                    <h4 className="section_donate_text">
                        Trabalhamos com transparência e estamos comprometidos a prestar contas de cada recurso investido. Com sua doação, você
                        fortalece nossa capacidade de oferecer um tratamento digno e de qualidade, ajudando a transformar vidas e apoiar famílias em
                        um momento crucial de recuperação.
                    </h4>

                    <a className="landing_page_link">Seja um Doador</a>
                </div>

                <div className="section_donate_faq">
                    {faqData.map((item, index) => (
                        <FAQ_Accordion key={index} title={item.title} explanation={item.explanation} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section_Donate;
