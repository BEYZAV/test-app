// @ts-nocheck
import { SiNike } from 'react-icons/si'
import styles from './index.module.scss'
import { useState, useEffect } from 'react'
import BottomTop from '../bottomTop/BottomTop';

const Header = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY <= 1) {
                setScroll(true)

            } else {
                setScroll(false)

            }
        });
    }, [scroll]);
    return (
        <>

            <div className={scroll ? `${styles.header}` : `${styles.sticky}`}>
                <SiNike size={70} color='#d53d29' />
            </div>
            <BottomTop />
        </>
    );
}

export default Header;