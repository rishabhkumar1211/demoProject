import React from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import "../css/userProfileHeader.css";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const UserProfileHeader = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    // Access the key of the clicked menu item
    const key = e.key;

    // Conditionally handle click events based on the key
    if (key === "1") {
      console.log("Item 1 clicked!");
      // Add your logic for Item 1
    } else if (key === "2") {
      console.log("Item 2 clicked!");
      // Add your logic for Item 2
    } else if (key === "3") {
      navigate("/");
    }
  };

  const menu = (
    <Menu onClick={handleClick}>
      <Menu.Item key="1">xxxx@xxxx.com</Menu.Item>
      <Menu.Item key="2">123234253</Menu.Item>
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header className="header">
      <div className="profile-info">
        <Avatar size="small" icon={<UserOutlined />} />
        <span className="profile-name">John Doe</span>
      </div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <DownOutlined />
      </Dropdown>
    </Header>
  );
};

export default UserProfileHeader;
