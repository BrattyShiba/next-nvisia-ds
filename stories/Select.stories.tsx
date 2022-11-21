import { Dropdown, DropdownItem } from "../src/pages/components/Dropdown";
import ThemeProvider from "../src/pages/context/ThemeContext";

export default {
  title: "Example/Select",
};

export function Default() {
  return (
    <Dropdown defaultValue="1" label={"Dropdown"}>
      <DropdownItem value="1">Item 1</DropdownItem>
      <DropdownItem value="2">Item 2</DropdownItem>
      <DropdownItem value="3">Item 3</DropdownItem>
      <DropdownItem value="4">Item 4</DropdownItem>
    </Dropdown>
  );
}
