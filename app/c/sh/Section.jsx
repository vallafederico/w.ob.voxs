export default function Section({ children, className }) {
  return <section className={`Section ${className}`}>{children}</section>;
}
