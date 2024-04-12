export default function ImageGeneral({
  src,
  alt,
  className,
  onClick,
  style,
}: {
  src: string;
  alt?: string;
  className?: string;
  onClick?: () => void;
  style?: any;
}) {
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={className}
      onClick={onClick}
    />
  );
}
