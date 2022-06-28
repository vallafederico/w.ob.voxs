export default function Cont({ children, className }) {
  return (
    <div
      className={`Cont min-h-[20vh] w-[80vw] border-y-2 mx-auto border-red ${className}`}
    >
      {children}
    </div>
  );
}
