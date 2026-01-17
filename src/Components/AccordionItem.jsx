import { useRef } from "react";
import "./Accordion.css";

const AccordionItem = ({ handleToggle, active, item, index }) => {
  const contentEl = useRef(null);
  const { header, content } = item;

  return (
    <li className="accordion-item">
      <h2
        className={active === index ? "active" : ""}
        onClick={() => handleToggle(index)}
      >
        {header}
        <span className="accordion-icon">ler mais</span>
      </h2>

      <div
        ref={contentEl}
        className="accordion-content"
        style={{
          height:
            active === index
              ? `${contentEl.current?.scrollHeight}px`
              : "0px",
        }}
      >
        <p>{content}</p>
      </div>
    </li>
  );
};

export default AccordionItem;
