import React from "react";
import { Layout, Menu, Dropdown, Avatar } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import "./userProfileHeader.css";

const { Header } = Layout;

const UserProfileHeader = () => {
  const menu = (
    <Menu>
      {/* Add your dropdown menu items here */}
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
