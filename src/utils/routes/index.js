import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../../pages/login";
import Chats from "../../pages/chats";
import Users from "../../pages/users";
import Articles from "../../pages/articles";
import Events from "../../pages/events";
import Reports from "../../pages/reports";
import User from "../../pages/user";
import AddEvent from "../../pages/addEvent";
import Event from "../../pages/event";
import AddArticle from "../../pages/addArticle";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/chats" component={Chats} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/reports" component={Reports} />
        <Route exact path="/user/:id" component={User} />
        <Route exact path="/addEvent" component={AddEvent} />
        <Route exact path="/event/:id" component={Event} />
        <Route exact path="/addArticle" component={AddArticle} />
      </Switch>
    </Router>
  );
}
