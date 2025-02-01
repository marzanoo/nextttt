import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.css";
import LoginView from "@/views/Auth/Login";

const LoginPage = () => {
  return (
    <>
      <LoginView />
    </>
  );
};

export default LoginPage;
