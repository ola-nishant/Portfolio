"use-clinet"
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react';

export default function Reveal({ children, duration = 0.30, delayTime = 0.5, width = '100%', x = 0, y = 75 }) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const controller = useAnimation();

    useEffect(() => {
        if (isInView) {
            controller.start("visible");
        }
    }, [isInView])

    return (
        <div ref={ref} style={{ position: "relative", width: width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: x, y: y },
                    visible: { opacity: 1, x: 0, y: 0 }
                }}
                initial="hidden"
                animate={controller}
                transition={{ duration: duration, delay: delayTime }}
            >
                {children}
            </motion.div>
        </div>
    )
}