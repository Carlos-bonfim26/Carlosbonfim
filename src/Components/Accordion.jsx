import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";

const Accordion = ({ items }) => {
  const [active, setActive] = useState(null);

  const handleToggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <ul className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          active={active}
          handleToggle={handleToggle}
          item={item}
        />
      ))}
    </ul>
  );
};

export default Accordion;
