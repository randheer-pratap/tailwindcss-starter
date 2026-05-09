interface Props {
  label: string;
  rounded: string;
  color: string;
  textLarge: boolean;
}
function FancyButton({ rounded, color, label, textLarge }: Props) {
  const roundedStyle = rounded ? "rounded-2xl" : "rounded-md";
  const textSize = textLarge ? "text-4xl" : "text";
  const colorChange = color === "blue" ? "bg-amber-500" : "bg-blue-300";
  return (
    <button className={` p-2 m-2 ${colorChange} ${roundedStyle} ${textSize}`}>
      {label}
    </button>
  );
}

export default FancyButton;
