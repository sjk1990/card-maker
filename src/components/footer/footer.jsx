import React, { memo } from "react";
import styles from "./footer.module.css";

const Footer = memo((props) => (
  <footer className={styles.footer}>
    <p className={styles.title}>Card Maker</p>
  </footer>
));
export default Footer;
