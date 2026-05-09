interface Props {
  label: string;
}
function Button({ label }: Props) {
  return (
    <>
      <button className="bg-amber-600 text-white text-2xl p-4 m-6 rounded-md hover:px-6">
        {label}
      </button>
      <button className="border-2 border-amber-600 text-black text-2xl p-2 m-4 rounded-md">
        {label}
      </button>

      <button className="border-2 border-amber-600 text-black text-2xl p-4 m-6 rounded-4xl">
        {label}
      </button>

      <button className="border-2 bg-amber-800 text-yellow-400 text-2xl p-4 m-6 hover:bg-amber-500 hover:text-white">
        {label}
      </button>
    </>
  );
}

export default Button;
