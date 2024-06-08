export default function Heading({
  type,
  title,
  className,
  size,
  color,
}: {
  type: string;
  title: string;
  className: string;
  size: string;
  color: string;
}) {
  interface Variants {
    size: { [key: string]: string };
    colors: { [key: string]: string };
  }
  const variants: Variants = {
    size: {
      medium: "text-3xl lg:text-4xl",
    },
    colors: {
      default: "text-black",
    },
  };
  return (
    <>
      {type === "h1" ? (
        <h1 className={`${className}`}>{title}</h1>
      ) : (
        <h2
          className={`${className} ${variants.size[size as string]} ${variants.colors[color as string]}`}
        >
          {title}
        </h2>
      )}
    </>
  );
}
