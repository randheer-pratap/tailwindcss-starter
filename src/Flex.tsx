import Logo from "./Logo";

function Flex() {
  return (
    <>
      <div className="flex h-64 border-2 border-blue-500 m-4 p-4 justify-center items-center">
        <Logo />
        <Logo />
        <Logo />
      </div>
      <div className="flex h-64 border-2 border-purple-500 m-4 p-4 justify-around items-end">
        <Logo />
        <Logo />
        <Logo />
      </div>
      <div className="flex h-64 border-2 border-green-500 m-4 p-4 justify-around items-center">
        <Logo />
        <Logo />
        <Logo />
      </div>

      <div className="flex h-64 border-2 border-violet-500 m-4 p-4 justify-end items-center">
        <Logo />
        <Logo />
        <Logo />
      </div>
      {/* Flex Col */}
      <div className="flex flex-col w-auto border-2 border-slate-500 m-4 p-4 items-center">
        <Logo />
        <Logo />
        <Logo />
      </div>

      <div className="flex flex-col w-auto border-2 border-slate-500 m-4 p-4 items-end">
        <Logo />
        <Logo />
        <Logo />
      </div>

      <div className="flex flex-col w-auto border-2 border-slate-500 m-4 p-4 justify-end items-start">
        <Logo />
        <Logo />
        <Logo />
      </div>
    </>
  );
}

export default Flex;
