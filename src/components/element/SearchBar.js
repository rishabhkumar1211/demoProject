import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import "../css/modal.css";
const SearchBar = ({ onSearchStart }) => {
  return (
    <Input
      prefix={<SearchOutlined style={{ color: "#777777", marginRight: 10 }} />}
      placeholder="Search First Name, Last Name and NI#"
      className="custom-search-input search-input"
      onChange={(e) => onSearchStart(e.target.value)}
    />
  );
};

export default SearchBar;
