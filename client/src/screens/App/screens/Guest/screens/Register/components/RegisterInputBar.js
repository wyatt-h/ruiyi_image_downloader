import React, { useState } from "react";

const RegisterInputBar = ({ title }) => {
  const [content, setContent] = useState("");
  return (
    <div className="input-box form-group">
      <label className="input-box-title">{title}</label>
      <input
        className="input-box-bar form-control"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
};

export default RegisterInputBar;
