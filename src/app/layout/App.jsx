import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import SubjectDashboard from "../../features/subject/SubjectDashboard/SubjectDashboard";
import SubjectDetailPage from "../../features/subject/SubjectDetail/SubjectDetailPage";
import SubjectForm from "../../features/subject/SubjectForm/SubjectForm";
import SessionDashboard from "../../features/session/SessionDashboard/SessionDashboard";
import SessionDetailPage from "../../features/session/SessionDetail/SessionDetailPage";
import SessionForm from "../../features/session/SessionForm/SessionForm";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailPage from "../../features/user/UserDetail/UserDetailPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Route path="/subjects" component={SubjectDashboard} />
                <Route path="/subjects/:id" component={SubjectDetailPage} />
                <Route path="/createSubject" component={SubjectForm} />
                <Route path="/sessions" component={SessionDashboard} />
                <Route path="/sessions/:id" component={SessionDetailPage} />
                <Route path="/createSession" component={SessionForm} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailPage} />
                <Route path="/settings" component={SettingsDashboard} />
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
