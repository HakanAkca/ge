import React from "react";
import classNames from "classnames";
import { style } from "typestyle";

export interface GenericTextProps {
  className?: string;
}

export interface GenericTextState {}

export default class GenericText extends React.Component<
  GenericTextProps,
  GenericTextState
> {
  render() {
    const { children, className } = this.props;
    return (
      <div className={classNames(genericTextStyle, className)}>{children}</div>
    );
  }
}

const genericTextStyle = style({
  fontFamily: "Roboto",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "31px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#FFF",
});
