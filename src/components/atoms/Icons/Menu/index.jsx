import React from "react";
import PropTypes from "prop-types";
import { ic_menu } from "react-icons-kit/md";

import { IconBase } from "components/atoms";

const Menu = ({ title, ...rest }) => (
  <IconBase {...rest} icon={ic_menu} title={title} />
);

Menu.propTypes = {
  title: PropTypes.string
};
Menu.defaultProps = { title: "Menu" };

export default Menu;
