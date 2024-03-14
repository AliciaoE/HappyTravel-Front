import Image from "next/image";
import Link from "next/link";
export default function Btn({
  text,
  type,
  color,
  onClick,
  sourceIcon,
  href,
  className = "",
  classIcon,
  padding,
  ...rest
}) {
  let Component = "button";
  if (type === "Link") {
    Component = Link;
  }
  if (type === "a") Component = "a";
  const linkProps = type === "Link" ? { href } : {};
  return (
    <Component
      {...linkProps}
      onClick={onClick}
      type={type}
      className={`${color} text-lg rounded-full text-primary-yellow font-bold ${padding}`}
    >
      {!sourceIcon && text}
      {sourceIcon && (
        <Image
          height={25}
          width={25}
          alt="icon de eliminar"
          className={classIcon}
          src={sourceIcon}
        />
      )}
    </Component>
  );
}
