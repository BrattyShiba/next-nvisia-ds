import { Button } from "../components/Button";
import CheckBox from "../components/Checkbox";
import { Dropdown, DropdownItem } from "../components/Dropdown";
import { InputField } from "../components/InputField";

const BearForm = () => {
  return (
    <div className="bearform-container">
      <div className="bearform-header">
        <h2>Registration Form Page</h2>
        <h3>SECONDARY LINE ABOUT THE FORM</h3>
      </div>
      <form className="bearform-form">
        <h3>Personal Details</h3>
        <InputField label="Name" name="name" />
        <InputField label="Address" name="address" />
        <InputField label="Phone" name="phone" />

        <h3>Pick a species</h3>
        <Dropdown label="Please Select an option">
          <DropdownItem value="bear">Bear</DropdownItem>
          <DropdownItem value="dog">Dog</DropdownItem>
          <DropdownItem value="cat">Cat</DropdownItem>
          <DropdownItem value="bird">Bird</DropdownItem>
        </Dropdown>

        <h3>Pick a Bear</h3>
        <Dropdown label="Please Select an option">
          <DropdownItem value="polar">Polar</DropdownItem>
          <DropdownItem value="grizzly">Grizzly</DropdownItem>
          <DropdownItem value="yogi">Yogi</DropdownItem>
          <DropdownItem value="panda">Panda</DropdownItem>
        </Dropdown>

        <h3>Keep in touch!</h3>
        <CheckBox
          label="Contact me with information to support bears and wildlife conservation"
          id="ads"
        />
        <Button label="Submit" mode="primary" />
      </form>
    </div>
  );
};
export default BearForm;
