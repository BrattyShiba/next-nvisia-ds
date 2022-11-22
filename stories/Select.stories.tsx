import { Dropdown, DropdownItem } from ".././src/pages/components/Dropdown";
import ThemeProvider from "../src/pages/context/ThemeContext";

export default {
  title: "Example/Select",
  decorators: [WithColorScheme],
};

export function Default({ theme, ...props }) {
  console.log(theme);
  return (
    <Dropdown defaultValue="1" label={"Dropdown"}>
      <DropdownItem value="1">Item 1</DropdownItem>
      <DropdownItem value="2">Item 2</DropdownItem>
      <DropdownItem value="3">Item 3</DropdownItem>
      <DropdownItem value="4">Item 4</DropdownItem>
    </Dropdown>
  );
}

function WithColorScheme(Story, context) {
  let { theme } = context.globals;
  console.log(theme);
  function Flex(props) {
    return <div {...props} />;
  }
  return (
    <ThemeProvider>
      <Story theme={theme} />
    </ThemeProvider>
  );
}
