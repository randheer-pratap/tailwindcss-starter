function DynamicClass() {
  const boolean = true;
  return (
    <div
      className={`${boolean ? "bg-amber-600" : "bg-blue-700"} text-white text-2xl m-2 p-2`}
    >
      DynamicClass
    </div>
  );
}

export default DynamicClass;
