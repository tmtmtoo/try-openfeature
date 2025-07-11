import { Foobar } from "./foobar/component";
import { foobar } from "./foobar/actions";

export default function Home() {
  return (
    <div>
      <Foobar action={foobar} />
    </div>
  );
}
