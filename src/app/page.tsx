// import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="roots">
      <h1>hello</h1>
      <Link href='/about'>
        <Button variant={'default'} className="btn" onClick={() => {
          
        }}>Submit</Button>
      </Link>
    </div>
  );
}
