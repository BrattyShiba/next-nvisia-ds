import Image from "next/image";
import { Button } from "./Button";

interface CardProps {
  image?: string;
  title?: string;
  subheader?: string;
  description?: string;
  buttonLabel?: string;
}

const Card = ({
  image = "https://unsplash.it/340/340",
  title = "Card Title",
  subheader = "Card Subhead",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore.",
  buttonLabel = "Button Label",
}: CardProps) => (
  <div className="card">
    <Image src={image} height={340} width={340} alt="" />
    <div className="card-content">
      <h3>{title}</h3>
      <span className="accent">{subheader}</span>
      <p>{description}</p>
      <Button label={buttonLabel} />
    </div>
  </div>
);

export default Card;
