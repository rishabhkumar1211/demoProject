import React from "react";
import { Popover } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const MAX_CHARACTERS = 100;

const Content = ({ content }) => {
  if (content.length > MAX_CHARACTERS) {
    return (
      <div className="popContent">
        <span className="textStyle">Content exceeds 100 characters</span>
      </div>
    );
  }

  return (
    <div className="popContent">
      <span className="textStyle">{content}</span>
    </div>
  );
};

const originalContent = "Rejected"; // Original content without any HTML tags

const CustomPopover = () => {
  return (
    <Popover content={<Content content={originalContent} />} trigger="click">
      <InfoCircleOutlined />
    </Popover>
  );
};

export default CustomPopover;
