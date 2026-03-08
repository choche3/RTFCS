//the animation functionn that will happen 
//on every page. smooth page transitioning

import { Variants } from "framer-motion"

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition : {
            duration: 1,
            ease: "easeOut"
        }
    }
}

export const staggerContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15
        }
    }
}