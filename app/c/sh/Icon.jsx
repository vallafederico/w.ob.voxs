export function Icon({ children, className }) {
  return (
    <figure className={`Icon min-w-[10px] ${className}`}>{children}</figure>
  );
}

export function IconSocial({ type = "facebook" }) {
  return <Icon className={`Social`}>Social Icon by type</Icon>;
}
