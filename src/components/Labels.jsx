// Label.js
import React from "react";
import styled from "styled-components";
import { COLORS } from "./constant";
import DraggableField from "./DraggableField";

const SIZES = {
  small: {
    "--borderRadius": "2px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "6px 12px",
  },
  medium: {
    "--borderRadius": "2px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "14px 20px",
  },
  large: {
    "--borderRadius": "4px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "18px 32px",
  },
};

const Label = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;
  if (variant === "fill") {
    Component = FillLabel;
  } else if (variant === "outline") {
    Component = OutlineLabel;
  } else if (variant === "ghost") {
    Component = GhostLabel;
  } else {
    throw new Error(`Unrecognized Label variant: ${variant}`);
  }

  return (
    <DraggableField
      id={`label-${variant}-${size}-${Math.random().toString(36).substr(2, 9)}`}
    >
      <Component style={styles}>{children}</Component>
    </DraggableField>
  );
};

const LabelBase = styled.span`
  display: inline-block;
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 500;

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

const FillLabel = styled(LabelBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;

const OutlineLabel = styled(LabelBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;

const GhostLabel = styled(LabelBase)`
  color: ${COLORS.gray};
  background-color: transparent;

  &:focus {
    outline-color: ${COLORS.gray};
  }

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Label;
