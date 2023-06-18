import Link from 'next/link'
import styles from './index.module.scss'
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { delay, motion } from 'framer-motion';

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
                    className={styles.sneaker__title}>WOMEN`S SHOE</motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    transition={{
                        delay: 0.4
                    }}
                    variants={divVariants}
                    className={styles.sneaker__name}>Nike Outburst</motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    transition={{
                        delay: 0.6
                    }}
                    variants={divVariants}
                    className={styles.sneaker__text}>
                    The Nike Outburst Women's Shoe features a plush mesh
                    construction with leather overlays,
                    plus lightweight foam cushioning for all-day comfort.
                </motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
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
                <motion.div
                    whileHover={{
                        scale: 1.2
                    }}
                    className={styles.sneaker__circle}>
                    {!isMedia900 &&
                        (<img src='/img/sneaker-1.png'
                            alt='sneaker'
                            style={{ width: 460, height: 320 }} />)
                    }
                    {isMedia900 &&
                        (<img src='/img/sneaker-1.png'
                            alt='sneaker'
                            style={{ width: 400, height: 260 }} />)
                    }
                </motion.div>
            </motion.div>
        </>
    );
}

export default Sneaker;