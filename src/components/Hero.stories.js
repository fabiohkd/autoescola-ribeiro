import React from "react";
import { text } from "@storybook/addon-knobs";

import Hero from "./Hero";
import CarImage from "../stories/assets/car-1835506_1280.jpg";
import BuildingImage from "../stories/assets/buildings-1851246_1280.jpg";
import Heading from "./Heading";

export default {
  title: "Hero",
  component: Hero,
};

export const withList = () => (
  <Hero image={BuildingImage}>
    <Heading>
      <h1>
        Ganhe sua <strong> liberdade </strong>
        <br />
        para ir e vir
      </h1>
    </Heading>
    <ul>
      <li>
        Eu anim aliqua duis mollit dolor et ad sint quis sint ullamco cupidatat
        ea.
      </li>
      <li>Adipisicing in ut duis commodo adipisicing exercitation.</li>
      <li>Ipsum ullamco do ad officia ex excepteur consequat pariatur.</li>
    </ul>
  </Hero>
);

export const usage = () => (
  <Hero image={CarImage}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>
      Eu anim aliqua duis mollit dolor et ad sint quis sint ullamco cupidatat
      ea.
    </p>
    <p>Adipisicing in ut duis commodo adipisicing exercitation.</p>
    <p>Ipsum ullamco do ad officia ex excepteur consequat pariatur.</p>
  </Hero>
);
