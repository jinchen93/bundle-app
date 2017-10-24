// @flow

import React from "react";

type Props = {
  body: string,
};

const RedditThreadBody = ({ body }: Props) => (
  <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
);

export default RedditThreadBody;
