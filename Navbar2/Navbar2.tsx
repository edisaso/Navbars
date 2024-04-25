import { Logo } from "./logo"
import DropMenu  from "./DropMenu"
import  Search  from "./Search"

const Navbar2 = () => {


    return (
<nav className="fixed top-0 w-full h-12 z-[49] bg-[#18181b] px-2 lg:px-4 flex items-center shadow-sm justify-between">
<div className="flex gap-7 items-center">
<div>
<Logo />
</div>
<div className="font-bold text-lg hover:text-violet-400 hover:cursor-pointer"><a>Following</a></div>
<div className="font-bold text-lg hover:text-violet-400 hover:cursor-pointer"><a>Browse</a></div>
<div>
    <DropMenu />
</div>
</div>
<div className="gap-5">
<Search />
</div>
<div className="hidden lg:block">
<img
              alt="Profile pic"
              className="rounded-full"
              height="50"
              src="https://i.imgur.com/30bky.png"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width="40"
            />
</div>

</nav>
    )
}


export default Navbar2;