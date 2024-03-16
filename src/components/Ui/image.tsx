export default function ImageGeneral({
  src,
  alt,
  className,
  onClick,
}: {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
}) {
  return <img src={src} alt={alt} className={className} onClick={onClick} />;
}
