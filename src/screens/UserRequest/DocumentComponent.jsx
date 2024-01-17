import React from "react";
import { Row, Col, Card, Button, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

const DocumentComponent = () => {
  const handleMenuClick = (e) => {
    // Handle menu click
  };

  const menu = (
    <Menu className="menu" onClick={handleMenuClick}>
      <Menu.Item key="Approve">Approve</Menu.Item>
      <Menu.Divider className="menu-divider" />
      <Menu.Item key="Reject">Reject</Menu.Item>
    </Menu>
  );

  return (
    <div className="component-container">
      <Row gutter={16}>
        <Col span={12}>
          <p className="title">Employer document</p>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                className="card"
                cover={<img alt="Rib Document" src="your_image_url_rib" />}
              />
              <p className="image-container">Rib Document</p>
              <p className="image-container">
                <Button className="button">View</Button>
              </p>
              <div className="image-container">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="menu-button">
                    <Space>
                      Actions
                      <DownOutlined className="docDown" />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
            </Col>

            <Col span={12}>
              <Card
                className="card"
                cover={<img alt="EPassport*" src="your_image_url_passport" />}
              />
              <p className="image-container">Passport*</p>
              <div className="image-container">
                <Button className="combo">View</Button>
                <Button className="button secondary-button">History</Button>
              </div>
              <p className="image-container">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="menu-button">
                    <Space>
                      Actions
                      <DownOutlined className="docDown" />
                    </Space>
                  </Button>
                </Dropdown>
              </p>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <p className="title">User document</p>
          <Row gutter={16}>
            <Col span={12}>
              <Card
                className="card"
                cover={<img alt="UserPassport*" src="your_image_url_rib" />}
              />
              <p className="image-container">Passport*</p>
              <div className="image-container">
                <Button className="combo">View</Button>
                <Button className="button secondary-button">History</Button>
              </div>
              <p className="image-container">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="menu-button2">
                    <Space>
                      Actions
                      <DownOutlined className="docDown" />
                    </Space>
                  </Button>
                </Dropdown>
              </p>
            </Col>

            <Col span={12}>
              <Card
                className="card"
                cover={<img alt="Current" src="your_image_url_passport" />}
              />
              <p className="image-container">Current photo (e.g. selfie)</p>
              <div className="image-container">
                <Button className="combo">View</Button>
                <Button className="button secondary-button">History</Button>
              </div>
              <p className="image-container">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="menu-button2">
                    <Space>
                      Actions
                      <DownOutlined className="docDown" />
                    </Space>
                  </Button>
                </Dropdown>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default DocumentComponent;
