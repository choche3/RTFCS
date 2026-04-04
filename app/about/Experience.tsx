"use client"

import { fadeUp, staggerContainer } from "@/lib/animations"
import { motion, useInView } from "framer-motion"
import { use, useEffect, useRef, useState } from "react"

//custom hook: counting up from 0 to a target number
//only when the element is in view

function useCountUp(target: number, duration: number = 2000) {
    const [count, setCount ] = useState(0)
    const ref = useRef<HTMLHeadingElement>(null)
    const inView = useInView(ref, { once: true})    

    useEffect(() => {
        if (!inView) return

        let startTime: number | null = null
        const startValue = 0

        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const elapsed = timestamp - startTime
            const progress = Math.min(elapsed / duration, 1)
            
            //ease out so it slows down near the end
            const easedProgress = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easedProgress * (target - startValue) + startValue))

            if (progress < 1) {
                requestAnimationFrame(step)
            } else {
                setCount(target) //ensure it ends exactly at target
            }

        }
        requestAnimationFrame(step)
    }, [inView, target, duration]
    ) 
    return { count, ref }
}

//Stat item that shows a number with a suffix (like +) or plain text


function AnimatedStat({
    target,
    suffix = "",
    label,
    isText = false,
    staticText = "",
    }: {
        target?: number
        suffix?: string
        label: string
        isText?: boolean
        staticText?: string
    }) {
        const { count, ref } = useCountUp(target ?? 0)

        return (
            <motion.div 
                variants={fadeUp}
            >
                <h3 ref={ref} className="text-4xl font-extrabold text-yellow-600 mb-4">
                    {isText ? staticText : `${count}${suffix}`}
                </h3>
                <p className="uppercase tracking-wide text-steel">{label}</p>
            </motion.div>
        )
    }


export default function Experience() {
    return(
        <section className="bg-navy py-20 text-white">
            <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-12 text-center">
                    <AnimatedStat target={13} suffix="+" label="Years of Operation" />
                    <AnimatedStat target={100} suffix="+" label="Completed Projects" />
                    <AnimatedStat isText staticText="Dedicated" label="skilled Team" />

            </motion.div>
        </section>
    )
}