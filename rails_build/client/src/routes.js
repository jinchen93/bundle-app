import { Route, IndexRoute } from "react-router";
import React from "react";

import App from "./app/components/app";
import Main from "./app/components/main";
import YoutubeApp from "./youtube/containers/app";
import RedditApp from "./reddit/containers/app";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="/youtube" component={YoutubeApp} />
    <Route path="/reddit" component={RedditApp} />
  </Route>
)
