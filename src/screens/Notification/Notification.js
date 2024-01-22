import React from "react";
import { List, Typography } from "antd";
import Layout from "../../components/element/CustomLayout";
import "../../components/css/notification.css";

const { Text } = Typography;

const Notification = () => {
  const data = [
    "New User Registration Request Received from John Doe-NI# 123456789 Tuesday 5th September, 11:59 AM",
    "John Doe-NI# 2329783 Submitted a Document Tuesday 5th September, 09:23 AM",
    "New User Registration Request Received from George Smith-NI# 897354 Tuesday 5th September, 11:59 AM",
    "New User Registration Request Received from George Smith-NI# 897354 Tuesday 5th September, 11:59 AM",
    "New User Registration Request Received from George Smith-NI# 897354 Tuesday 5th September, 11:59 AM",
  ];

  return (
    <Layout>
      <div className="user-content">
        <h1 className="notification-title">Notification(5)</h1>

        <List
          dataSource={data}
          renderItem={(item, index) => {
            const splitItem = item.split(" ");
            const notificationText = splitItem.slice(0, -5).join(" ");
            const dateTimeText = splitItem.slice(-5).join(" ");

            return (
              <List.Item
                className={
                  index < 2
                    ? "notification-list-item"
                    : "notification-list-item-alt"
                }
              >
                {notificationText}{" "}
                <Text type="secondary" className="notification-date">
                  {dateTimeText}
                </Text>
              </List.Item>
            );
          }}
        />
      </div>
    </Layout>
  );
};

export default Notification;
