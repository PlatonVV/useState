import React from "react";

export type PropsType = {
  on: boolean;
};
const onStyle = {};
const offStyle = {};
const indicatorStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "15px",
  border: "1px solid black",
};

export function OnOff(props: PropsType) {
  return (
    <div>
      <div></div>
      <div></div>
      <div style={indicatorStyle}></div>
    </div>
  );
}
