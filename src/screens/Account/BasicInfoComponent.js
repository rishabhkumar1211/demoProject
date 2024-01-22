import React from "react";
import { Col, Divider, List, Avatar } from "antd";
import "./Account.css";
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
  const renderListItem = (item, author, date, avatarSrc) => (
    <List.Item className="list-item-container">
      <div className="list-item-content">
        <div className="list-item-text">{item}</div>
        <div className="list-item-details">
          <div className="list-item-author">
            by <span>{author}</span>
          </div>
          <div className="list-item-date">{date}</div>
        </div>
      </div>
      <Avatar src={avatarSrc} />
    </List.Item>
  );

  return (
    <>
      {data.map((item, index) => (
        <React.Fragment key={`fragment-${index}`}>
          {index % 6 === 0 && index !== 0 && (
            <Divider key={`divider-${index}`} />
          )}
          <Col key={item.title} span={4} className="basic-info-container">
            <div className="basic-info-title">{item.title}</div>
            <div className="basic-info-content">{item.content}</div>
          </Col>
        </React.Fragment>
      ))}
      <Divider />
      <div className="account-history-title">Account History</div>

      {/* First List - The user has been Rejected */}
      <List
        size="large"
        dataSource={[
          {
            item: "The user has been Rejected",
            author: "Rogers Martin",
            date: "Oct 5 | 09:22PM",
            avatarSrc: "https://source.unsplash.com/mEZ3PoFGs_k",
          },
          // Add more items as needed
        ]}
        renderItem={(item) =>
          renderListItem(item.item, item.author, item.date, item.avatarSrc)
        }
      />

      {/* Second List - User Registered */}
      <List
        size="large"
        dataSource={[
          {
            item: "User Registered",
            author: "George Martin",
            date: "Oct 5 | 09:22PM",
            avatarSrc: "https://source.unsplash.com/WMD64tMfc4k",
          },
          {
            item: "User Registered",
            author: "George Martin",
            date: "Oct 5 | 09:22PM",
            avatarSrc: "https://source.unsplash.com/WMD64tMfc4k",
          },
          {
            item: "User Registered",
            author: "George Martin",
            date: "Oct 5 | 09:22PM",
            avatarSrc: "https://source.unsplash.com/WMD64tMfc4k",
          },
          // Add more items as needed
        ]}
        renderItem={(item) =>
          renderListItem(item.item, item.author, item.date, item.avatarSrc)
        }
      />
    </>
  );
};

export default BasicInfoComponent;
