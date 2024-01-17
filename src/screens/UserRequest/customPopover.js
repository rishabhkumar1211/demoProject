import React from "react";
import { Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const Content = (
  <div className="popContent">
    <span className="textStyle">Rejected</span>
  </div>
);

const CustomPopover = () => {
  return (
    <Popover content={Content} trigger="click">
      <InfoCircleOutlined />
    </Popover>
  );
};

export default CustomPopover;
