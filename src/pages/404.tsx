import styles from "@/styles/404.module.scss";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img src="/not_found.png" alt="404" className={styles.error__img} />
      <div>404 | Halaman Tidak Ditemukan</div>
    </div>
  );
};

export default Custom404;
