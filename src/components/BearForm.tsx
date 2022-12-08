import { ChangeEvent, useReducer, useState } from "react";
import { Button } from "../components/Button";
import CheckBox from "../components/Checkbox";
import { Dropdown, DropdownItem } from "../components/Dropdown";
import { InputField } from "../components/InputField";

const BearForm = () => {
  const [form, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    species: "",
    bear: "",
    check: "off",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleDropdown = (d: string, e: string) => {
    setFormData({
      ...form,
      [d]: e,
    });
  };

  const handleCheck = () => {
    if (form.check == "off") {
      setFormData({
        ...form,
        check: "on",
      });
    } else {
      setFormData({
        ...form,
        check: "off",
      });
    }
  };
  const validForm = () => {
    return form.name.length > 0 && validBear;
  };
  const handleSubmit = () => {
    const bodyRequest = JSON.stringify({
      messageType: "designsystem",
      message: `New submission from the Chonk form at the Design System`,
      json: form,
    });
    fetch("/api", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${process.env.APIKEY}`,
      },
      body: bodyRequest,
    });
  };

  const validBear = form.species !== "" && form.species === "bear";

  return (
    <div className="bearform-container">
      <div className="bearform-header">
        <h2>Registration Form Page</h2>
        <h3>Data will not be stored</h3>
      </div>
      <form className="bearform-form">
        <div className="form-container">
          <h3>Personal Details</h3>
          <InputField
            label="Name*"
            name="name"
            onChangeEvent={(e) => handleChange(e)}
            required={true}
          />
          <InputField
            label="Address"
            name="address"
            onChangeEvent={(e) => handleChange(e)}
          />
          <InputField
            label="Phone"
            name="phone"
            onChangeEvent={(e) => handleChange(e)}
          />
        </div>
        <div className="form-container">
          <h3>Pick a species</h3>
          <Dropdown
            label="Please Select an option"
            name="species"
            onValueChange={handleDropdown}
            error={!validBear}
          >
            <DropdownItem value="bear">Bear</DropdownItem>
            <DropdownItem value="dog">Dog</DropdownItem>
            <DropdownItem value="cat">Cat</DropdownItem>
            <DropdownItem value="bird">Bird</DropdownItem>
          </Dropdown>
          {!validBear && <p>You must choose bear to vote</p>}

          <h3>Pick a Bear</h3>

          <Dropdown
            label="Please Select an option"
            name="bear"
            onValueChange={handleDropdown}
            disabled={!validBear}
          >
            <DropdownItem value="polar">Polar</DropdownItem>
            <DropdownItem value="grizzly">Grizzly</DropdownItem>
            <DropdownItem value="yogi">Yogi</DropdownItem>
            <DropdownItem value="panda">Panda</DropdownItem>
          </Dropdown>
        </div>
        <div className="form-container">
          <h3>Keep in touch!</h3>
          <CheckBox
            label="Contact me with information to support bears and wildlife conservation"
            id="ads"
            value={form.check}
            onCheckedChange={handleCheck}
          />
        </div>
        <div className="submit-container">
          <Button
            label="Submit"
            mode="primary"
            onClickEvent={handleSubmit}
            disabled={!validForm()}
          />
        </div>
      </form>
    </div>
  );
};
export default BearForm;
