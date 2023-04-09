import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <img className={styles.logoImg} src="https://play-lh.googleusercontent.com/PmOnpf2uN_o-0Uoff75f4nppoNNRW3IX7HFEmnRsuSzCWeD3L0iixBtJ9lIAaCWcGA" alt="IMC" />
        <h1>Calculadora de IMC</h1>
      </div>
    </header>
  );
};

export default Header;
