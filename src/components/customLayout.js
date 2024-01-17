import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../assets/images/logo.png";
import "./customLayout.css";
import UserProfileHeader from "./userProfileHeader";
import NotificationIcon from "./notificationIcon";
import SearchBar from "./SearchBar";

const { Header, Sider, Content } = Layout;

const CustomLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="layoutContainer">
      <Sider
        collapsed={collapsed}
        onCollapse={toggle}
        // collapsedWidth={150}
        breakpoint="md"
        style={{ backgroundColor: "white" }}
      >
        <img src={logo} alt="Logo" className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            User Request
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-content">
            <span onClick={toggle} className="custom-toggle-btn">
              <MenuOutlined />
            </span>
            <SearchBar />
            <UserProfileHeader />
            <NotificationIcon count={5} />
          </div>
        </Header>
        <Content style={{ margin: "16px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default CustomLayout;
