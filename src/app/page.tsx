// import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import ToggleTheme from "@/components/mine/toggletheme";
// import ToggleTheme from "@/components/mine/toggletheme";

export default function Home() {
  
  return (
    <div className="roots">
      <h1>Hello</h1>
      <br></br>
      <ToggleTheme/>
      <Link href='/about'>
        <Button variant={'default'} className="btn">Submit Here</Button>
      </Link>
    </div>
  );
}
