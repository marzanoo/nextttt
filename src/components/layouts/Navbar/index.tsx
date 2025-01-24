import { signIn, signOut, useSession } from "next-auth/react";
import stylesNavbar from "./Navbar.module.css";

const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={stylesNavbar.navbar}>
      <div className="big">Navbar</div>
      <div>
        {data && data.user.fullname}
        {data ? (
          <button className={stylesNavbar.button} onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <button className={stylesNavbar.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
