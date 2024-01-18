import React from "react";
import { Col, Divider, List } from "antd";
import './Account.css';
const data = [
  {
    title: "NI#",
    content: "XXXXXXXX",
  },
  {
    title: "First name",
    content: "John",
  },
  {
    title: "Last name",
    content: "Doe",
  },
  {
    title: "RSS Role",
    content: "Yes",
  },
  {
    title: "Request on",
    content: "03 Sep 23",
  },
  {
    title: "Email address",
    content: "xxxxxx@xxx.com",
  },
  {
    title: "Employer NI#",
    content: "xxxxxxxx",
  },
  {
    title: "ESS Role",
    content: "Yes",
  },
  {
    title: "User type",
    content: "Admin",
  },
  {
    title: "Date of birth",
    content: "03/08/1975",
  },
];

const BasicInfoComponent = () => {
  return (
    <>
      {data.map((item, index) => (
        <>
          {index % 6 === 0 && index !== 0 && (
            <Divider key={`divider-${index}`} />
          )}
          <Col key={item.title} span={4} className="basic-info-container">
            <div className="basic-info-title">{item.title}</div>
            <div className="basic-info-content">{item.content}</div>
          </Col>
        </>
      ))}
      <Divider />
      <div className="account-history-title">Account History</div>

      <List
        size="large"
        dataSource={["The user has been Rejected"]}
        renderItem={(item) => (
          <List.Item className="list-item-container">
            <div className="list-item-content">
              <div className="list-item-text">{item}</div>
              <div className="list-item-details">
                <div className="list-item-author">
                  by <span>Rogers Martin</span>
                </div>
                <div className="list-item-date">Oct 5 | 09:22PM</div>
              </div>
            </div>
          </List.Item>
        )}
      />

      {/* Second List - User Registered */}
      <List
        size="large"
        dataSource={["User Registered"]}
        renderItem={(item) => (
          <List.Item className="list-item-container">
            <div className="list-item-content">
              <div className="list-item-text">{item}</div>
              <div className="list-item-details">
                <div className="list-item-author">
                  by <span>George Martin</span>
                </div>
                <div className="list-item-date">Oct 5 | 09:22PM</div>
              </div>
            </div>
          </List.Item>
        )}
      />
    </>
  );
};

export default BasicInfoComponent;
