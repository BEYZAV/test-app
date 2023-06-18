import { FC } from "react";
import styles from './index.module.scss'
import Slider from "@/components/elements/slider/Slider";
import Sneaker from "@/components/elements/sneaker/sneaker";
import Shoe from "@/components/elements/shoe/Shoe";
import Dress from "@/components/elements/dress/Dress";
import Team from "@/components/elements/team/Team";
import Woman from "@/components/elements/woman/Woman";
import Shipping from "@/components/elements/shipping/Shipping";

const Home: FC = () => {

    return (
        <>
            <div className={styles.home}>
                <div className={styles.section}>
                    <Slider />
                </div>
                <div className={styles.section}>
                    <Sneaker />
                </div>
                <div className={styles.section}>
                    <Shoe />
                </div>
                <div className={styles.section}>
                    <Dress />
                </div>
                <div className={styles.section}>
                    <Team />
                </div>
                <div className={styles.section}>
                    <Woman />
                </div>
                <div className={styles.section}>
                    <Shipping />
                </div>
            </div>

        </>
    );
}

export default Home;