import React from "react";

interface CollapseProps {
  children: React.ReactNode[];
}

const AngleRightIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const AngleDownIcon = () => (
  <svg
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    className="mt-1 h-4 w-4"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export function Collapse(props: CollapseProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement | null>(null);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div>
      <div
        role="button"
        onClick={toggle}
        className="my-2 flex justify-start px-4 py-6 text-sm text-black"
      >
        {props.children[0]}
        <span className="ml-auto">
          <span hidden={isOpen}>
            <AngleRightIcon />
          </span>
          <span hidden={!isOpen}>
            <AngleDownIcon />
          </span>
        </span>
      </div>

      <div
        ref={ref}
        aria-hidden={!isOpen}
        className="ease -mt-5 overflow-hidden text-gray-600 duration-300"
        style={
          isOpen
            ? { height: `${ref.current?.scrollHeight}px` }
            : { height: "0" }
        }
      >
        {props.children[1]}
      </div>
    </div>
  );
}
