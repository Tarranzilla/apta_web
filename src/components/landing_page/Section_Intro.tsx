import { useRef, useEffect } from "react";
import { motion as m, useInView } from "framer-motion";
import { useDispatch } from "react-redux";
import { set_intro_active } from "@/store/slices/interface_slice";

const Section_Intro = () => {
    const intro_ref = useRef(null);
    const intro_in_view = useInView(intro_ref, { amount: 0.8 });

    const dispatch = useDispatch();
    const update_intro_in_view_action = (action: boolean) => {
        dispatch(set_intro_active(action)); // Dispatch da ação com o valor `action`
    };

    useEffect(() => {
        update_intro_in_view_action(intro_in_view);
    }, [intro_in_view]);

    return <m.div ref={intro_ref} className={intro_in_view ? "common_section section_intro active" : "common_section section_intro"}></m.div>;
};

export default Section_Intro;
