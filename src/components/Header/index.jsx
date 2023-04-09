import styles from "./Header.module.css";

const Header = ({ logo }) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <img className={styles.logoImg} src={logo} alt="IMC" />
        <h1>Calculadora de IMC</h1>
      </div>
    </header>
  );
};

export default Header;
