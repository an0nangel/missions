import styles from './Banner.module.css'

export default function Banner() {
  return(
    <>
      <img src="https://4.bp.blogspot.com/-1hBZaDQV6lY/XD930XvmeRI/AAAAAAAAAuM/Mb0nonSZOFkk0umjU7mXMdMhroDjvTq0ACKgBGAs/w0/bitcoin-cryptocurrency-cube-abstract-4-4k.jpg"
           width="100%"
           class={styles.img}/>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class={styles.curve}>
        <path fill="#fff" fill-opacity="1" d="M0,256L80,229.3C160,203,320,149,480,144C640,139,800,181,960,202.7C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
    </>
  );
}
