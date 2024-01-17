import React from "react";
import { BellOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const NotificationIcon = ({ count }) => {
  return (
    <Badge count={count} overflowCount={99} style={{ fontSize: 10 }}>
      <BellOutlined style={{ fontSize: "20px", color: "#77777" }} />
    </Badge>
  );
};

export default NotificationIcon;
