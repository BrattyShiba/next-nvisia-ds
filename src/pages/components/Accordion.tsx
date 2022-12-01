import React, { forwardRef, PropsWithChildren } from "react";
import * as Accordion from "@radix-ui/react-accordion";

import { toKebabCase } from "../../utilities";

interface AccordionProps {
  mode?: "multiple" | "single";
}

export const AccordionElement = ({
  children = [],
  mode = "multiple",
  ...props
}: PropsWithChildren<AccordionProps>) => {
console.log('in Acc.Element, props = ', props);
console.log('in Acc.Element, children = ', children);

  return (
    <Accordion.Root className="accordion-root" type={mode}>
      {(children as any[]).map((child) => {
        return (
          <Accordion.Item
            key={child.props.value || toKebabCase(child.props.trigger)}
            className="accordion-item" 
            value={child.props.value || toKebabCase(child.props.trigger)}
          >
            <Accordion.Header>
              <Accordion.Trigger>
                {child.props.trigger}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
              {child.props.content}
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
};

export const AccordionItem = forwardRef(({ children, ...props}: any, forwardedRef) => {
  return (
    <Accordion.Item
      {...props}
      ref={forwardedRef}
      className="accordion-item"
    >
        {children}
    </Accordion.Item>
  );
});


export const AccordionTrigger = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => {
  return (
    <Accordion.Header className="accordion-header">
      <Accordion.Trigger 
        className="accordion-trigger"
        {...props}
        ref={forwardedRef}
      >
        <span className="trigger-text">{children}</span>
        <span className="accordion-icon" aria-hidden></span>
      </Accordion.Trigger>
    </Accordion.Header>
  );
});

export const AccordionContent = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
  <Accordion.Content
    className="accordion-content"
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Content>
));


export default AccordionElement;