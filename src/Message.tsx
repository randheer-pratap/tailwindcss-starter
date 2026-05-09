interface MessageProps {
  label: string;
  bgColor: string;
  textColor: string;
  children: string;
}

function Message({ label, children }: MessageProps) {
  return (
    <div className="text-4xl text-green-400 bg-red-400 border-4 border-amber-400 rounded-2xl">
      {label}: {children}
    </div>
  );
}

export default Message;
