import styles from './index.module.scss'

const FooterTop = () => {
    return (
        <>
            <div className={styles.footer__top}>
                <div className={styles.footer__top__inner}>
                    <div className={styles.footer__top__inner__container}>
                        <div className={styles.footer__top__inner__container__title}>
                            HEADLINE
                        </div>
                        <div className={styles.footer__top__inner__container__text}>
                            Sample footer text
                        </div>
                    </div>
                    <div className={styles.footer__top__inner__container}>
                        <div className={styles.footer__top__inner__container__title}>
                            HEADLINE
                        </div>
                        <div className={styles.footer__top__inner__container__text}>
                            Sample footer text
                        </div>
                    </div>
                    <div className={styles.footer__top__inner__container}>
                        <div className={styles.footer__top__inner__container__title}>
                            HEADLINE
                        </div>
                        <div className={styles.footer__top__inner__container__text}>
                            Sample footer text
                        </div>
                    </div>
                </div>
                <div className={styles.footer__top__content}>
                    Sample footer text
                </div>
            </div>
        </>
    );
}

export default FooterTop;