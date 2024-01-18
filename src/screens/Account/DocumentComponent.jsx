import React, { useState } from "react";
import { Row, Col, Card, Button, Dropdown, Menu, Space, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./Account.css";
const DocumentComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const handleMenuClick = (e) => {
    // Handle menu click
  };

  const handleViewButtonClick = (imageSrc) => {
    setModalImage(imageSrc);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
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
                style={{ height: "200px", overflow: "hidden" }}
              >
                <img
                  alt="Rib Document"
                  src="https://source.unsplash.com/x8i6FfaZAbs"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                {/* Other Card content */}
              </Card>
              <p className="image-container">Rib Document</p>
              <p className="image-container">
                <Button
                  className="button"
                  onClick={() =>
                    handleViewButtonClick(
                      "https://source.unsplash.com/x8i6FfaZAbs"
                    )
                  }
                >
                  View
                </Button>
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
                style={{ height: "200px", overflow: "hidden" }}
              >
                <img
                  alt="EPassport*"
                  src="https://source.unsplash.com/0QcSnCM0aMc"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                {/* Other Card content */}
              </Card>
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
                style={{ height: "200px", overflow: "hidden" }}
              >
                <img
                  alt="EPassport*"
                  src="https://source.unsplash.com/0QcSnCM0aMc"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                {/* Other Card content */}
              </Card>
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
                style={{ height: "200px", overflow: "hidden" }}
              >
                <img
                  alt="Current"
                  src="https://source.unsplash.com/rDEOVtE7vOs"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
                {/* Other Card content */}
              </Card>
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

      {/* Modal */}
      <Modal
        visible={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={600}
      >
        {modalImage && (
          <img
            alt="Modal View"
            src={modalImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        )}
      </Modal>
    </div>
  );
};

export default DocumentComponent;
