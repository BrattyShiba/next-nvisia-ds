import Image from "next/image";
import { PropsWithChildren } from "react";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}
const Hero = ({
  children,
  title,
  description,
  image,
  imageAlt,
  ...props
}: PropsWithChildren<HeroProps>) => {
  return (
    <div className="hero">
      <Image src={image} alt={imageAlt} fill />
      <div className="hero-content">
        <h2>{title}</h2>
        <h3>{description}</h3>
        <div className="hero-content-children">{children}</div>
      </div>
    </div>
  );
};

export default Hero;
