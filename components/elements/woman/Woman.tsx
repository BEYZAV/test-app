import Link from 'next/link'
import styles from './index.module.scss'
import { motion } from 'framer-motion';

const Woman = () => {

    const divVariants = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }

    return (
        <>

            <div className={styles.sneaker}>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ amount: 0.2 }}
                    transition={{
                        delay: 0.2
                    }}
                    variants={divVariants}

                    className={styles.sneaker__title}>WOMAN</motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ amount: 0.2 }}
                    transition={{
                        delay: 0.4
                    }}
                    variants={divVariants}

                    className={styles.sneaker__name}>Compare Light Support</motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ amount: 0.2 }}
                    transition={{
                        delay: 0.6
                    }}
                    variants={divVariants}

                    className={styles.sneaker__text}>
                    Great for training, spinning and that dance class you love.
                    These super versatile, supportive designs minimize
                    bounce while maximizing comfort.
                </motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ amount: 0.2 }}
                    transition={{
                        delay: 0.8
                    }}
                    variants={divVariants}
                    className={styles.sneaker__description}>
                    <div>Shown: White/Neutral Grey/Black/University Red</div>
                    <div>Style: AQ1273-100</div>
                </motion.div>
                <Link href={'https://nextjs.org/docs/pages/api-reference/components/image'}>
                    <motion.div
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ amount: 0.2 }}
                        transition={{
                            delay: 1
                        }}
                        variants={divVariants}
                        className={styles.sneaker__btn}>shop now</motion.div>
                </Link>
            </div>

            <div className={styles.sneaker}>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                    }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
                    className={styles.sneaker__inner}>
                    <div className={styles.sneaker__inner__block}></div>
                </motion.div>
            </div>
        </>
    );
}

export default Woman;