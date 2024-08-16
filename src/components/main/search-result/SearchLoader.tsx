import styles from "./search.module.sass";

export function SearchLoader() {
    return (
        <div className={styles.loaderWrapper}>
            {Array(5).fill(0).map((_, i) => (
                <div className={styles.loaderItem} key={i}>
                    <div className={styles.loaderContent}></div>
                </div>
            ))}
        </div>
    );
}
