export function Svg({ children, className }) {
  return (
    <figure className={`Svg min-w-[20px] ${className}`}>{children}</figure>
  );
}

// --------- VOX svg logo
export function LogoVox() {
  return <Svg className="Logo Vox"></Svg>;
}

// --------- VOX svg logo
export function LogoGala() {
  return <Svg className="Logo Gala"></Svg>;
}
