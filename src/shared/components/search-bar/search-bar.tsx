import React from "react";
import { Form } from "react-bootstrap";
import "./search-bar.css";
import { searchBarTitles } from "../../constants/defines";

interface searchBarProps {
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar(props: searchBarProps) {
  const { handleSearchChange } = props;
  return (
    <div className="search-bar-container-inner">
      <Form.Control
        name="type"
        onChange={handleSearchChange}
        placeholder={searchBarTitles.placeholder}
        type="text"
        className="search-bar"
      />
    </div>
  );
}
