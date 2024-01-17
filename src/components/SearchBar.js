import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "./index.css";
const SearchBar = ({ count }) => {
  return (
    <Input
      prefix={<SearchOutlined style={{ color: "#777777", marginRight: 10 }} />}
      placeholder="Search First Name, Last Name and NI#"
      className="custom-search-input"
    />
  );
};

export default SearchBar;
