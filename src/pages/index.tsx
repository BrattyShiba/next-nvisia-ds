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
import CheckBox from "../components/Checkbox";
import Modal, { ModalContent } from "../components/Modal";
import { Header } from "../components/Header";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NV Design System</title>
        <meta name="description" content="Nvisia design system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Hero
          title="Fat Bear Week"
          description="The 2022 CHUNKY BEAR ELECTION BEGINS"
          image="/bear-hero.jpg"
          imageAlt="imageAlt"
        >
          <Button label="Register for Voting" />
        </Hero>
        <Gallery />
      </main>
    </div>
  );
}
