import React from "react";
import { BellOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import { Link } from "react-router-dom";

const NotificationIcon = ({ count }) => {
  return (
    <Badge count={count} overflowCount={99} style={{ fontSize: 10 }}>
      <Link to={{ pathname: "/notification" }} className="linkacc">
        <BellOutlined
          style={{ fontSize: "20px", color: "#77777", cursor: "pointer" }}
        />
      </Link>
    </Badge>
  );
};

export default NotificationIcon;
