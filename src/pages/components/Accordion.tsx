import React, { PropsWithChildren } from "react";
import * as Accordion from "@radix-ui/react-accordion";

interface AccordionProps {
  mode?: "multiple" | "single";

}
export const AccordionElement = ({
  children,
  mode = "multiple",
  ...props
}: PropsWithChildren<AccordionProps>) => {

  return (
    <Accordion.Root className="accordion-root" type={mode}>
      <Accordion.Item className="accordion-item" value="nvisionaries">
        <Accordion.Header>
          <Accordion.Trigger className="accordion-trigger">
            <span className="trigger-text">nvisionaries</span>
            <span className="accordion-icon" aria-hidden> </span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          Envisioning, forward!
          <ul>
            <li>Oliver Ramirez-Velazquez</li>
            <li>Who's our incredible Designer?</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="accordion-item" value="accessibility">
        <Accordion.Header>
          <Accordion.Trigger className="accordion-trigger">
            <span className="trigger-text">accessibility</span>
            <span className="accordion-icon" aria-hidden></span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          Many elements use Radix:
          <ul>
            <li>Radix Primitives follow the WAI-ARIA authoring practices guidelines and are tested in a wide selection of modern browsers and commonly used assistive technologies.</li>
            <li>Radix Primitives have many of the difficult implementation details related to accessibility, including aria and role attributes, focus management, and keyboard navigation already implemented.</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item className="accordion-item" value="collaboration">
        <Accordion.Header>
          <Accordion.Trigger className="accordion-trigger">
            <span className="trigger-text">collaboration</span>
            <span className="accordion-icon" aria-hidden></span>
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content>
          With a little help from:
          <ul>
            <li>Kat Rohrmeier</li>
            
          </ul>
          <ul>
            and a special shoutout to:
            <li>Shiba</li>
            <li>Jenkins</li>
          </ul>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};
