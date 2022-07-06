export default function Image({ src, alt = "Vox Image", className }) {
  return <img className={className} src={src} alt={alt} />;
}
