"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/Card.tsx";
import '../../index.css'
import { useTheme } from "../../ThemeContext.js";

export function ImageAnimateProject() {
  const { theme } = useTheme();
  return (
    <CardContainer >
      <CardBody className="pallete" style={{ backgroundColor: theme === 'light' ? '#FFF' : 'black' }}>
        <CardItem translateZ={100} className="card_Item" >
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="400"
            width="400"
            className="element"
            alt="thumbnail"
          />
        </CardItem>
        {/* <div className="container" >
          <p
            className="button"

          >
            Git →
          </p>
          <CardItem
            translateZ={20}
            as="button"
            className="button2"
          >
            Description
          </CardItem>
        </div> */}
      </CardBody>
    </CardContainer>
  );
}
