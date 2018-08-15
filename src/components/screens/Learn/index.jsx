import React from "react";

import { ButtonNav } from "components/atoms";
import { Paragraph } from "styles";
import { StyledH2 } from "styles";

const Learn = () => (
  <main>
    <StyledH2>What is Wobbly?</StyledH2>
    <Paragraph>
      Wobbly is a workers chat app designed for new or expanding workplace
      organising groups. We want to provide the tools for groups to grow,
      communicate with each other, and federate into bigger, more powerful
      movements.
    </Paragraph>
    <StyledH2>How do multiple workplaces connect?</StyledH2>
    <Paragraph>
      Wobbly uses a democratic organising model, where the decisions of the
      larger body are made by the groups comprising them.
    </Paragraph>
    <StyledH2>What's the role of the traditional organiser?</StyledH2>
    <Paragraph>
      We respect the knowledge, experience, and energy of the traditional
      organiser. Wobbly isn't a replacement for traditional organiser, but an
      augmentation. We want to provide space for organisers to direct the idea
      development.
    </Paragraph>
    <StyledH2>What should be added next?</StyledH2>
    <Paragraph>
      Wobbly is developed democratically. We use
      <a href="https://discordapp.com/invite/SDTUsWa"> discord </a>
      to talk to each other. If you have an idea for a new feature, join us
      there and start a conversation.
    </Paragraph>
    <Paragraph>
      Send an email to john@onethreethree.net if you'd like to find out more.
    </Paragraph>
    <ButtonNav to="/">Return</ButtonNav>
  </main>
);

export default Learn;
