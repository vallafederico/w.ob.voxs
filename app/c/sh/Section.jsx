export default function Section({ children, className }) {
  return (
    <section className={`Section min-h-[50vh] py-[10vh] ${className}`}>
      {children}
    </section>
  );
}
