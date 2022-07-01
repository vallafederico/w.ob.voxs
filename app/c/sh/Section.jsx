export default function Section({ children, className, id, childRef }) {
  return (
    <section
      id={id}
      ref={childRef}
      className={`Section min-h-[50vh] py-[10vh] ${className}`}
    >
      {children}
    </section>
  );
}
