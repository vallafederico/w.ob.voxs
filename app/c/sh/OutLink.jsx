export function OutLink({ href, children }) {
  return (
    <a href={href} className="OutLink ">
      {children}
    </a>
  );
}

export function ListLink({ href = "/", children }) {
  return (
    <li>
      <OutLink href={href}>{children}</OutLink>
    </li>
  );
}
