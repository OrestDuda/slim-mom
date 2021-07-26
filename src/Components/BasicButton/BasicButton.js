import React from "react";

import s from "./BasicButton.module.scss";

const BasicButton = ({ children, ...props }) => {
  return (
    <button className={s.basic_button} {...props}>
      {children}
    </button>
  );
};

export default BasicButton;
