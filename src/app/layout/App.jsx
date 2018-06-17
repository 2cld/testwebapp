import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import SubjectDashboard from "../../features/subject/SubjectDashboard/SubjectDashboard";
import SubjectForm from "../../features/subject/SubjectForm/SubjectForm";
import SessionDashboard from "../../features/session/SessionDashboard/SessionDashboard";
import SessionDetailPage from "../../features/session/SessionDetail/SessionDetailPage";
import SessionForm from "../../features/session/SessionForm/SessionForm";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import TestComponent from "../../features/testarea/TestComponent";
import ModalManager from "../../features/modals/ModalManager";

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager/>
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
                <Route path="/subject/:id" component={SubjectForm} />
                <Route path="/createSubject" component={SubjectForm} />
                <Route path="/sessions" component={SessionDashboard} />
                <Route path="/session/:id" component={SessionDetailPage} />
                <Route path="/manage/:id" component={SessionForm} />
                <Route path="/createSession" component={SessionForm} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route path="/test" component={TestComponent} />
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
