import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>HiringAi</h1>
      <ul className={styles.navLinks}>
        <li><button><Link href="/">Home</Link></button></li>
        <li><button><Link href="/login">Login</Link></button></li>
        <li><button><Link href="/signup">Sign Up</Link></button></li>
      </ul>
    </nav>
  );
}