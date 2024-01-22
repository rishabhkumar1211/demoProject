import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/images/logo.svg";
import "../css/customLayout.css";
import UserProfileHeader from "./UserProfileHeader";
import NotificationIcon from "./NotificationIcon";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const CustomLayout = ({ children, onSearchStart }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="layoutContainer">
      <Sider
        collapsed={collapsed}
        onCollapse={toggle}
        breakpoint="md"
        collapsedWidth={120}
        style={{ backgroundColor: "#F8FAFC", marginTop: "-10" }}
      >
        <img src={logo} alt="Logo" className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/user-request" className="linkacc">
              User Request
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <div className="header-content">
            <span onClick={toggle} className="custom-toggle-btn">
              <MenuOutlined />
            </span>
            <SearchBar onSearchStart={onSearchStart} />
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
