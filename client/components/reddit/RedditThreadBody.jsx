import React from "react";

const RedditThreadBody = ({ body }) =>
  <div className="body" dangerouslySetInnerHTML={{ __html: body }} />;

export default RedditThreadBody;
