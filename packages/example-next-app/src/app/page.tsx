import Image from "next/image";
import styles from "./page.module.css";
import { Foobar } from "./foobar/component";
import { foobar } from "./foobar/actions";

export default function Home() {
  return (
    <div>
      <Foobar action={foobar} />
    </div>
  );
}
