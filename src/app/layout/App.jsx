import React, { Component } from "react";
//import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
//import NavBar from "../../features/nav/NavBar/NavBar";
//import HomePage from "../../features/home/HomePage";
//import SubjectDashboard from "../../features/subject/SubjectDashboard/SubjectDashboard";
//import SubjectForm from "../../features/subject/SubjectForm/SubjectForm";
//import SessionDashboard from "../../features/session/SessionDashboard/SessionDashboard";
//import SessionDetailPage from "../../features/session/SessionDetail/SessionDetailPage";
import SessionDetailPage from "../../features/session/RalphDetail/SessionDetailPage";
import RequestDetailPage from "../../features/request/RequestDetail/RequestDetailPage";
//import SessionForm from "../../features/session/SessionForm/SessionForm";
//import SessionForm from "../../features/session/RalphForm/SessionForm";
import RequestForm from "../../features/request/RequestForm/RequestForm";
//import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
//import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
//import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
//import TestComponent from "../../features/testarea/TestComponent";
import TestComponent from "../../features/callRalph/TestComponent";
import ModalManager from "../../features/modals/ModalManager";
//import NotFound from "../../app/layout/NotFound";
//import NoSessions from "../../app/layout/NoSessions";

class App extends Component {
  render() {
    return (
      <div>
        <ModalManager/>
        <Switch>
          <Route exact path="/" component={RequestForm} />
          <Route exact path="/callRalph" component={TestComponent} />
          <Route exact path="/session/:id" component={SessionDetailPage} />
          <Route exact path="/request/:id" component={RequestDetailPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

/* Route with navbar stuff was messing up top bar on mobile
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
                <Route path="/error" component={NotFound} />
                <Route path="/noSessions" component={NoSessions} />
                {/* <Route component={NotFound} />
              </Container>
            </div>
          )}
        />
*/