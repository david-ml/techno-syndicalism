import React from "react";
import { ListLink, TextVisibility } from "components/atoms";
import { Home } from "components/atoms/Icons";
import { NavItemContainer, StyledList } from "styles";
import SubNavNoAuth from "./SubNavNoAuth";
import SubNavWithAuth from "./SubNavWithAuth";
import { Groups } from "components/atoms/Icons";

const RightNav = ({ user }) => {
  return (
    <StyledList>
      <ListLink to="/home" render={<HomeView />} />
      <ListLink to="/groups" render={<GroupView />} />
      {user ? <SubNavWithAuth {...user} /> : <SubNavNoAuth />}
    </StyledList>
  );
};

const HomeView = () => (
  <NavItemContainer>
    <Home />
    <TextVisibility>Home</TextVisibility>
  </NavItemContainer>
);

const GroupView = () => (
  <NavItemContainer>
    <Groups />
    <TextVisibility>Groups</TextVisibility>
  </NavItemContainer>
);

export default RightNav;
