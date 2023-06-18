import Link from 'next/link'
import styles from './index.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { motion } from 'framer-motion';

const Sneaker = () => {

    const isMedia900 = useMediaQuery(900)

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
                    className={styles.sneaker__title}>WOMEN'S TENNIS DRESS</motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ amount: 0.2 }}
                    transition={{
                        delay: 0.4
                    }}
                    variants={divVariants}
                    className={styles.sneaker__name}>NikeCourt Maria</motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ amount: 0.2 }}
                    transition={{
                        delay: 0.6
                    }}
                    variants={divVariants}
                    className={styles.sneaker__text}>
                    The NikeCourt Maria Women's Tennis Dress combines soft, stretchy
                    jersey fabric with mesh panels for breathable comfort on the court.
                    A scalloped hem allows the dress to move freely, and crisscross
                    straps stay in place as you play.
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
                    <div>Shown: White/Black/Team Orange</div>
                    <div>Style: AO1069-106</div>
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
                        className={styles.sneaker__btn}>view collection</motion.div>
                </Link>


            </div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                }}
                transition={{ ease: "easeOut", duration: 1.5 }}
                className={styles.sneaker}>
                <div className={styles.sneaker__inner}>
                    <div className={styles.sneaker__inner__foot}>
                    </div>
                    <div className={styles.sneaker__inner__circle}>
                        {!isMedia900 &&
                            (<img />)
                        }
                        {isMedia900 &&
                            (<img />)
                        }
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default Sneaker;