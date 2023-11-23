import Image from "next/image";
import styles from "./[name]/memberDetail.module.css";
export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="space-y-3">
        {/* <figure className={`${styles.loader}`}></figure> */}
        <Image src={"https://media.giphy.com/media/Ij2OT70YU5mMdJqqst/giphy.gif"} alt={"GIF"} width={200} height={200} loading="lazy" />
        <h2 className="text-center">Data Sedang Dimuat</h2>
      </div>
    </div>
  );
}
