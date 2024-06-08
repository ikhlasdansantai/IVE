export default function Heading({ type, children, className, size, color }: { type: string; children: string; className: string; size: string; color: string }) {
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
  return <>{type === "h1" ? <h1 className={`${className}`}>{children}</h1> : <h2 className={`${className} ${variants.size[size as string]} ${variants.colors[color as string]}`}>{children}</h2>}</>;
}
