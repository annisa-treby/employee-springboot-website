import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FaIcon(props) {
  const { icon: iconString, ...faProps } = props;
  const icon = iconString.split(" ");
  // <FontAwesomeIcon icon={[fab, apple]}/>
  return <FontAwesomeIcon icon={icon} {...faProps} />;
}
export default FaIcon;
