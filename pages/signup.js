import { useState } from "react";
import styles from "../styles/Auth.module.css";
import { useRouter } from "next/router";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signing up with", email, password);
    router.push("/login"); // Redirect to login after signup
  };

  return (
    <div className={styles.authContainer}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="name" placeholder="Name"/>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
        <h3>--------- Or --------</h3>
      </form>
    </div>
  );
}
