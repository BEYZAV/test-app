import { SiNike } from 'react-icons/si'
import styles from './index.module.scss'

const Slider = () => {
    return (<>
        <div className={styles.slider__left}>
            <div><SiNike size={72}/></div>
            <div className={styles.slider__left__title}>EVERYTHING YOU NEED TO WIN.</div>
            <div className={styles.slider__left__text}>
                Raise your game in a
                Fcollection ready for tennis all day and all night.
            </div>
            <button className={styles.slider__left__btn}>SHOP THE COLLECTION</button>
        </div>
        <div className={styles.slider__right}>
            <div className={styles.slider__right__title}>WOMEN'S TRAINING HOODIE</div>
            <div className={styles.slider__right__text}>Nike Pro HyperWarm</div>
            <div className={styles.slider__right__price}>$65</div>
        </div>

    </>);
}

export default Slider;