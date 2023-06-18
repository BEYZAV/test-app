import { BsFillBox2Fill } from 'react-icons/bs'
import { HiAcademicCap } from 'react-icons/hi'
import { MdSportsCricket } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import styles from './index.module.scss'
import { motion } from 'framer-motion'

const Team = () => {

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
                    JOIN THE GREATEST TEAM IN SPORTS
                </motion.div>
                <div className={styles.team__content}>
                    <motion.div
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ amount: 0.2 }}
                        transition={{
                            delay: 0.6
                        }}
                        variants={divVariants}
                        className={styles.team__content__inner}>
                        <div className={styles.team__content__inner__icon}>
                            <BsFillBox2Fill size={40} color='#fff' />
                        </div>
                        <div className={styles.team__content__inner__title}>
                            Member Exclusive Products
                        </div>
                        <div className={styles.team__content__inner__text}>
                            Early access to our latest drops,
                            exclusives just for you and your favorite
                            products reserved in your size.
                        </div>
                    </motion.div>
                    <motion.div
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ amount: 0.2 }}
                        transition={{
                            delay: 0.8
                        }}
                        variants={divVariants}
                        className={styles.team__content__inner}>
                        <div className={styles.team__content__inner__icon}>
                            <HiAcademicCap size={40} color='#fff' />
                        </div>
                        <div className={styles.team__content__inner__title}>
                            Expert Guidance & Advice
                        </div>
                        <div className={styles.team__content__inner__text}>
                            Your Nike Experts are real athletes with real answers. Chat with them
                            to get recommendations on training and products you can trust.
                        </div>
                    </motion.div>
                    <motion.div
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ amount: 0.2 }}
                        transition={{
                            delay: 1
                        }}
                        variants={divVariants}
                        className={styles.team__content__inner}>
                        <div className={styles.team__content__inner__icon}>
                            <MdSportsCricket size={40} color='#fff' />
                        </div>
                        <div className={styles.team__content__inner__title}>
                            Access To Sport, Anytime, Anywhere
                        </div>
                        <div className={styles.team__content__inner__text}>
                            100+ on-the-go workouts, weekly challenges and personalized
                            training plans that adapt to your goals and schedule.
                        </div>
                    </motion.div>
                    <motion.div
                        initial={'hidden'}
                        whileInView={'visible'}
                        viewport={{ amount: 0.2 }}
                        transition={{
                            delay: 1.2
                        }}
                        variants={divVariants}
                        className={styles.team__content__inner}>
                        <div className={styles.team__content__inner__icon}>
                            <IoMdTime size={40} color='#fff' />
                        </div>
                        <div className={styles.team__content__inner__title}>
                            Inspiring Experiences
                        </div>
                        <div className={styles.team__content__inner__text}>
                            From courtside to race day, get priority access to the
                            events and sessions you don’t want to miss.
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Team;