export const Sidebar = async () => {
return(
<aside className="mt-6 fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-[#18181b] border-r border-[#2D2E35] z-40">
        <div className="cursor-pointer">
        <div className="pl-6 mb-4 hidden lg:block">
          <p className="text-sm text-muted-foreground font-bold">
            For You
          </p>
        </div>

        <ul className="space-y-2 px-2 flex flex-col">
        <div className="flex items-center w-full gap-x-4 justify-center max-lg:mt-10 hover:bg-slate-600 hover:rounded-md">
        <div>
          <img className="relative flex h-10 w-10 justify-center items-center shrink-0 overflow-hidden rounded-full"   src="https://i.imgur.com/30bky.png"></img>
          </div>
          <div className="flex-col hidden lg:block">
          <a className="flex h-full w-full items-center justify-center rounded-full bg-muted">Test</a>
          <a className="flex h-full w-full items-center justify-center rounded-full bg-muted">Just Chatting</a>
          </div>

          <div className="flex flex-col">
          <div className="bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide hidden lg:block">Live</div>
          </div>
    </div>



        <div className="flex items-center w-full gap-x-4 justify-center max-lg:mt-10 hover:bg-slate-600 hover:rounded-md">
        <div>
          <img className="relative flex h-10 w-10 justify-center items-center shrink-0 overflow-hidden rounded-full"   src="https://i.imgur.com/30bky.png"></img>
          </div>
          <div className="flex-col hidden lg:block">
          <a className="flex h-full w-full items-center justify-center rounded-full bg-muted">Test</a>
          <a className="flex h-full w-full items-center justify-center rounded-full bg-muted">Just Chatting</a>
          </div>

          <div className="flex flex-col">
          <div className="bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide hidden lg:block">Live</div>
          </div>
        </div>
        </ul>
        </div>
</aside>
);
};

export default Sidebar;