import Head from "next/head";
import Image from "next/image";

import { InputField } from "./components/InputField";
import { Dropdown, DropdownItem } from "./components/Dropdown";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { isDarkTheme, toggleTheme } = useTheme();

  const toggleDarkTheme = () => {
    toggleTheme();
  };
  return (
    <div data-theme={isDarkTheme ? "dark-theme" : "light-theme"}>
      <Head>
        <title>NV Design System</title>
        <meta name="description" content="Nvisia design system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <button onClick={toggleDarkTheme}>Toggle Dark Mode</button>
        <h1>This is the Header 1</h1>
        <h2>This is the Header 2</h2>
        <h3>This is the Header 3</h3>
        <span className="accent">This is an accent</span>
        <a href="#">This is a Link</a>
        <figure>
          <blockquote>This is a block quote</blockquote>
        </figure>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            doloribus et fuga. Voluptates nobis porro assumenda, magnam
            accusantium doloremque recusandae aperiam, perspiciatis aut at amet
            veritatis cum numquam dolor ea?
          </p>
        </div>
        <InputField label="Full Name" name="fullName" required={true} />
        <Dropdown defaultValue="1" label={"Dropdown"}>
          <DropdownItem value="1">Item 1</DropdownItem>
          <DropdownItem value="2">Item 2</DropdownItem>
          <DropdownItem value="3">Item 3</DropdownItem>
          <DropdownItem value="4">Item 4</DropdownItem>
        </Dropdown>
      </main>
    </div>
  );
}
