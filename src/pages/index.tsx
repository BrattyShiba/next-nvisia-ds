import Head from "next/head";
import Image from "next/image";

import { Button } from "../components/Button";
import { InputField } from "../components/InputField";
import { Dropdown, DropdownItem } from "../components/Dropdown";
import { useTheme } from "./context/ThemeContext";
import { useEffect } from "react";
import { Radios, Radio } from "../components/Radio";
import Toggle from "../components/Toggle";
import { AccordionElement, AccordionItem } from "../components/Accordion";

export default function Home() {
  const { isDarkTheme, toggleTheme } = useTheme();

  const toggleDarkTheme = () => {
    toggleTheme();
  };
  useEffect(() => {
    if (isDarkTheme && document) {
      document.querySelector("body")!.dataset.theme = "dark-theme";
    } else {
      document.querySelector("body")!.dataset.theme = "light-theme";
    }
  }, [isDarkTheme]);

  return (
    <div>
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
        <Button label="cliCK ME 1" name="CTAButton1a" mode="primary" />
        <Button label="cliCK ME 2" name="CTAButton1b" mode="primary" disabled />
        <Button label="cliCK ME 3" name="CTAButton2a" mode="secondary" />
        <Button
          label="cliCK ME 4"
          name="CTAButton2b"
          mode="secondary"
          disabled
        />
        <InputField label="Full Name" name="fullName" />
        <InputField label="Preferred Name" name="preferredName" />
        <InputField label="Favorite Color" name="favoriteColor" />

        <Dropdown defaultValue="1" label={"Dropdown"}>
          <DropdownItem value="1">Item 1</DropdownItem>
          <DropdownItem value="2">Item 2</DropdownItem>
          <DropdownItem value="3">Item 3</DropdownItem>
          <DropdownItem value="4">Item 4</DropdownItem>
        </Dropdown>
        <Radios label={"Radio Group"}>
          <Radio value="1" label="Item 1" id="1"></Radio>
          <Radio value="2" label="Item 2" id="2"></Radio>
          <Radio value="3" label="Item 3" id="3"></Radio>
          <Radio value="4" label="Item 4" id="4"></Radio>
          <Radio value="5" label="Item 5" id="5"></Radio>
        </Radios>
        <Toggle></Toggle>

        <p>
          Below, find an accordion that allows multiple items open at a time!
        </p>
        <AccordionElement mode="multiple">
          <AccordionItem
            value="item 1"
            trigger="What's This"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam doloribus et fuga. Voluptates nobis porro assumenda, magnam accusantium doloremque recusandae aperiam, perspiciatis aut at amet veritatis cum numquam dolor ea?"
          />
          <AccordionItem
            value="item 2"
            trigger="How Cool Is This"
            content="Pretty darned cool, if you ask me."
          />
        </AccordionElement>
      </main>
    </div>
  );
}
