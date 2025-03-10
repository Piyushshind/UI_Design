import styles from "./InputDesign.module.css";

const VerificationStatus = () => {
  return (
    <section className={styles.textContent}>
      <h1 className={styles.title}>Liveliness verification unsuccessful</h1>
      <p className={styles.description}>
        Liveliness verification was not completed within the allotted 15
        seconds.
      </p>
    </section>
  );
};

export default VerificationStatus;
