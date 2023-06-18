// @ts-nocheck

import { SlArrowUp } from 'react-icons/sl'
import styles from './index.module.scss'

const BottomTop = () => {

    const scrollTop = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <div className={styles.top} onClick={scrollTop}>
                <div>
                    <SlArrowUp size={30} />
                </div>
            </div>
        </>
    );
}

export default BottomTop;