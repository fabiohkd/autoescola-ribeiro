import React from "react";
import Heading from "./Heading";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Heading",
  component: Heading,
};

export const usage = () => (
  <div>
    <Heading>
      <h1>{text("Title", "Título")} 1</h1>
    </Heading>
    <Heading>
      <h2>{text("Title", "Título")} 2</h2>
    </Heading>
    <Heading>
      <h3>{text("Title", "Título")} 3</h3>
    </Heading>
    <Heading>
      <h4>{text("Title", "Título")} 4</h4>
    </Heading>
    <Heading>
      <h5>{text("Title", "Título")} 5</h5>
    </Heading>
    <Heading>
      <h6>{text("Title", "Título")} 6</h6>
    </Heading>
  </div>
);
