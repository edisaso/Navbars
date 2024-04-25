import Link from "next/link";
import { BsTwitch } from "react-icons/bs";


export const Logo = () => {
    return (
      <Link href="/">
        <div className="flex items-center gap-x-4 hover:opacity-75 transition">
          <div className=" ">
            <BsTwitch className="fill-violet-400 size-7 translate hover:size-10 hover:delay-150"
            />
          </div>
        </div>
      </Link>
    );
  };