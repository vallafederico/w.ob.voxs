export default function Section({ children, className, id }) {
  return (
    <section id={id} className={`Section min-h-[50vh] py-[10vh] ${className}`}>
      {children}
    </section>
  );
}
