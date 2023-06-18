import { BsFillBox2Fill } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi'
import { MdSportsCricket } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import styles from './index.module.scss'
import { motion } from 'framer-motion'

const Shipping = () => {

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
            <div className={styles.team}>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ amount: 0.2 }}
                    transition={{
                        delay: 0.2
                    }}
                    variants={divVariants}
                    className={styles.team__title}>
                    FREE SHIPPING AND 30-DAY SPORTS BRA TRIALS
                </motion.div>
                <motion.div
                    initial={'hidden'}
                    whileInView={'visible'}
                    viewport={{ amount: 0.2 }}
                    transition={{
                        delay: 0.4
                    }}
                    variants={divVariants}
                    className={styles.team__content}>
                    Love it or return it. Sign up for a free NikePlus account at
                    checkout to get free shipping and 30-day returns.
                </motion.div>
            </div>
        </>
    );
}

export default Shipping;