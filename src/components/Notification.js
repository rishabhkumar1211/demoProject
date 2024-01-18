import React from "react";
import { List } from "antd";
import Layout from "./customLayout";

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
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          minHeight: "100vh",
        }}
      >
        {/* Displaying the page title with reduced font size */}
        <h1 style={{ marginBottom: "20px", fontSize: "20px" }}>
          Notification(5)
        </h1>

        <List
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              style={{
                backgroundColor: index < 2 ? "#add8e6" : "#f0f0f0",
                padding: "10px",
                marginBottom: "10px", // Add margin to the bottom
                borderRadius: "8px",
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    </Layout>
  );
};

export default Notification;
