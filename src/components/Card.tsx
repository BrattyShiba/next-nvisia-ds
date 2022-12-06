import Image from "next/image";
import { Button } from "./Button";

const Card = () => {
  return (
    <div className="card">
      <Image src="/bear-thumb.jpg" height={340} width={340} alt="" />
      <div className="card-content">
        <h3>Card Title</h3>
        <span className="accent">Card Subhead</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut ero labore et dolore.
        </p>
        <Button label="Button Label" />
      </div>
    </div>
  );
};

export default Card;
