testwebapp dev detail
=====================

Step-01 - testwebapp-checkpoint-01_
-----------------------------------

Just getting things setup for baseline ReactJS project with documentation on gooberu-testwebapp-readthedocs_

#. Create new React-App Web Application::

    catmini:bast23 cat$ npx create-react-app testwebapp

#. Pull in docs structure::

    macci:testwebapp cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ (copy in base docs from 2cld-readthedocs-demo_ setup)
    macci:testwebapp cat$ vi docs/conf.py
    macci:testwebapp cat$ vi docs/index.rst (and various others)
    macci:testwebapp cat$ cd docs
    macci:docs cat$ make html (fix errors)
    macci:docs cat$ open build/html/index.html

#. Verify docs build here gooberu-testwebapp-localdocs_ on local system

#. Adjust .gitignore (add docs/build/)::

    # See https://help.github.com/ignore-files/ for more about ignoring files.
    
    # dependencies
    /node_modules

    # testing
    /coverage

    # production
    /build

    # misc
    .DS_Store
    .env.local
    .env.development.local
    .env.test.local
    .env.production.local

    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*

    #######################
    # readthedocs gitignore

    # sphinx build folder
    docs/build/

#. Create testwebapp react web application baseline::

    macci:testwebapp cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ yarn start
    Compiled successfully!

    You can now view testwebapp in the browser.

    Local:            http://localhost:3000/
    On Your Network:  http://192.168.1.200:3000/

    Note that the development build is not optimized.
    To create a production build, use yarn build.

#. Browser should have opened to http://localhost:3000/ and you should see the "Welcome to React"

#. Add the following Visual Studio Code Extentions (bottom icon on left under debug)
    #. Auto Rename Tag (Jun Han)
    #. Bracket Pair Colorizer (CoenraadS)
    #. Debugger for Chrome (Microsoft)
    #. ES7 React/Redux/GraphQL/React-Native snippets (dsznajder)
    #. ESLint (Dirk Baeumer)
    #. Material Icon Theme (Philipp Kief)
    #. npm Intellisense (Christian Kohler)
    #. Path Intellisense (Christian Kohler)
    #. Prettier (Esben Petersen)

#. Extension setup
    #. ESLint (Dirk Baeumer)
        #. add .eslintrc at project root { "extends": "react-app" }
    #. Debugger (icon button on left)
        #. Top Click on "No Configuration" select "Add Configuration" -> Chrome
        #. Mod "url": "https://localhost:3000"
        #. Mod "webRoot": "${workspaceFolder}/src"
        #. Test to make sure the debugger works by setting a breakpoint and running

#. Setup hot module reload edit index.js to the following::

    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './app/layout/App';
    import registerServiceWorker from './registerServiceWorker';

    const rootEl = document.getElementById('root');

    let render = () => {
    ReactDOM.render(<App />, rootEl)
    }

    if (module.hot) {
    module.hot.accept('./app/layout/App', () => {
        setTimeout(render)
    })
    }

    render()

    registerServiceWorker();

#. Setup feature style under src directory structure
    #. (dir) app
        #. (dir) layout
            #. (file) App.jsx ::

                import React, { Component } from 'react';

                class App extends Component {
                    render() {
                        return (
                        <div>
                            <h1>GooberU</h1>
                        </div>
                        );
                    }
                }

                export default App;

    #. (dir) features
    #. (file) index.css
    #. (file) index.js ::

        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';
        import App from './app/layout/App';
        import registerServiceWorker from './registerServiceWorker';

        const rootEl = document.getElementById('root');

        let render = () => {
        ReactDOM.render(<App />, rootEl)
        }

        if (module.hot) {
        module.hot.accept('./app/layout/App', () => {
            setTimeout(render)
        })
        }

        render()

        registerServiceWorker();

    #. (file) registerServiceWorker.js

#. Verify working app at gooberu-testwebapp-localdocs_

#. npm shrinkwrap use this to freeze package updates
    #. copy package.json and npm-shrinkwrap.json files to freeze packages
    #. run "npm install" (which loads up the shrinkwrap)

#. Add react-devtools-chrome_ should get the react icon in the upper right of chrome browser

#. Create the git repo gooberu-testwebapp-github_
    #. Goto gooberu-github_ create testwebapp repo
    #. Goto gooberu-testwebapp-github_ and setup the local origin::

        git remote add origin https://github.com/gooberu/testwebapp.git

    #. Goto gooberu-testwebapp-github-collaboration_ and setup local user collaboration
    #. Should be able to push via the UI... but can use the next CLI steps

#. Produce testwebapp-checkpoint-01_ Command line ::

    macci:testwebapp cat$ cd ~/bast23/testwebapp/docs
    macci:docs cat$ vi source/testwebapp-dev-detail.rst (update doc)
    macci:docs cat$ vi source/conf.py (Bump minor version to 0.0.1 to match checkpoint-01)
    macci:docs cat$ make html 
    macci:docs cat$ open build/html/index.html (verify docs)
    macci:docs cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ git init
    macci:testwebapp cat$ git add *
    macci:testwebapp cat$ git add .eslintrc  
    macci:testwebapp cat$ git add .gitignore
    macci:testwebapp cat$ git commit -m "commit for testwebapp-checkpoint-01"
    macci:testwebapp cat$ git tag testwebapp-checkpoint-01
    macci:testwebapp cat$ git remote add origin https://github.com/gooberu/testwebapp.git
    macci:testwebapp cat$ git push --set-upstream origin master
    macci:testwebapp cat$ git push origin testwebapp-checkpoint-01

#. Create gooberu-testwebapp-readthedocs_
    #. Go to readthedocs_
    #. Sign in with Github: gooberu
    #. Import github gooberu-testwebapp-github_ repo
    #. Verify gooberu-testwebapp-readthedocs_

#. Verify checkpoint testwebapp-checkpoint-01_ Baseline

Step-02 - testwebapp-checkpoint-02_
-----------------------------------

The BasicReactSetup Step-02 intent is to setup a static mock, state and dataflow.

#. Create BasicReactSetup for testwebapp-checkpoint-02_

#. App Components
    #. NavBar
    #. SessionDashboard
        #. SessionList
        #. SessionListItem
        #. SessionChat
    #. SubjectSearch
        #. SubjectList
        #. SubjectListItem
        #. SubjectSessionRequest

#. Semantic UI framework css-sematic-ui_
    #. in package.json verify "semantic-ui-css" and "semantic-ui-react" are loaded
    #. in index.js - import 'sematic-ui-css/sematic.min.css';
    #. in index.css - add css styles for sematic-ui
    #. in app/layout/App.jsx
        #. import { Button } from 'semantic-ui-react';
        #. Add <Button icon="smile" content="React Button"/>

#. Build components in the Folder structure from /src ::

        catmini:src cat$ tree
        .
        ├── app
        │   └── layout
        │       └── App.jsx
        ├── features
        │   ├── nav
        │   │   └── NavBar
        │   │       └── NavBar.jsx
        │   ├── session
        │   │   ├── SessionDashboard
        │   │   │   └── SessionDashboard.jsx
        │   │   ├── SessionForm
        │   │   │   └── SessionForm.jsx
        │   │   └── SessionList
        │   │       ├── SessionList.jsx
        │   │       ├── SessionListAttendee.jsx
        │   │       └── SessionListItem.jsx
        │   └── subject
        │       ├── SubjectDashboard
        │       │   └── SubjectDashboard.jsx
        │       ├── SubjectForm
        │       │   └── SubjectForm.jsx
        │       └── SubjectList
        │           ├── SubjectList.jsx
        │           ├── SubjectListItem.jsx
        │           └── SubjectListProvider.jsx
        ├── index.css
        ├── index.js
        └── registerServiceWorker.js

        13 directories, 15 files

#. Jamb some data into the SessionsDashboard and pass it to SessionList to expand
    #. In SessionDashboard.jsx "const sessions = [...]"
    #. Send sessions to EventList via the "this.props"
    #. Use that array to expand out and create the list.

#. Figure out where State should live
    #. Is it passed in from a parent via props ? (if so, probably not state)
    #. Does it change over time ? (if not, probably not state)
    #. Can you compute it base on other state or props ? (if so, probably not state)
    #. What is State for us ?
        #. Sessions [] - Statefull
        #. isOpen - Statefull
        #. SessionForm - (forms manage state) - Statefull
        #. Navbar - (CreateSession, Login, Signout are user interaction) - Statefull

#. Put statefullness in src/features/session/SessionDashboard/SessionDashboard.jsx ::

    class SessionDashboard extends Component {
    state = {
        sessions: sessionsDashboard,
        isOpen: false
    };

#. Hook up the buttons add method to SessionDashboard class :: 

    handleFormOpen = () => { // This pattern binds 
    // handleFormOpen = (passVar) => () = { // This pattern allows props to the function
        // console.log(passVar);
        this.setState({
        isOpen: true
        });
    };

    handleCancel = () => {
        this.setState({
        isOpen: false
        });
    };

#. Produce testwebapp-checkpoint-02_ BasicReactSetup::

    macci:testwebapp cat$ cd ~/bast23/testwebapp/docs
    macci:docs cat$ vi source/testwebapp-dev-detail.rst (update doc)
    macci:docs cat$ vi source/conf.py (Bump minor version to X.X.NN to match checkpoint-02)
    macci:docs cat$ make html 
    macci:docs cat$ open build/html/index.html (verify docs)
    macci:testwebapp cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ git add *
    macci:testwebapp cat$ git commit -m "commit for testwebapp-checkpoint-02 - BasicReactSetup"
    macci:testwebapp cat$ git tag testwebapp-checkpoint-02
    macci:testwebapp cat$ git push
    macci:testwebapp cat$ git push origin testwebapp-checkpoint-02
    
#. Verify checkpoint testwebapp-checkpoint-02_

Step-03 - testwebapp-checkpoint-03_
-----------------------------------

The CRUDForms Step-03 intent is to get the forms event state and data flow and general CRUD structure setup.

#. Create CRUDForms for testwebapp-checkpoint-03_
#. FOR the C in CRUD (create via a Form)
#. Add onFormSubmit into SessionForm.jsx ::

    class EventForm extends Component {

    state = {
        event: {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
        }
    }

    onFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.createEvent(this.state.event)
    }

    onInputChange = (evt) => {
        const newEvent = this.state.event;
        newEvent[evt.target.name] = evt.target.value
        this.setState({
        event: newEvent
        })
    }

#. Tie onFormSubmit function into onSubmit Form event (repeat for all inputs) ::

    render() {

        const {handleCancel} = this.props;
        const {event} = this.state;
        return (
        <Segment>
            <Form onSubmit={this.onFormSubmit}>
            <Form.Field>
                <label>Event Title</label>
                <input name='title' onChange={this.onInputChange} value={event.title} placeholder="Event Title" />
            </Form.Field>

#. Create handleCreateSession function in SessionDashboard.jsx ::

    handleCreateSession = (newSession) => {
        newSession.id = cuid();
        newSession.hostPhotoURL = '/assets/user.png';
        const updatedSessions = [...this.state.sessions, newSession];
        this.setState({
        sessions: updatedSessions,
        isOpen: false
        })
    }

#. Import "import cuid from 'cuid';" we are using to create a temp unique ID.
#. Add user.png to public/assets/user.png for default image url.
#. Pass the function to SessionForm ::

    <Button
    onClick={this.handleFormOpen}
    positive
    content="Create Session"
    />
    {this.state.isOpen && <SessionForm handleCancel={this.handleCancel} createSession={this.handleCreateSession}/>}

#. Add createSession function call to SessionForm onFormSubmit function ::

    onFormSubmit = (evt) => {
        evt.prsessionDefault();
        this.props.createsession(this.state.session);
    };

#. Get error (we do not have attendees to map yet) so put a check in before it is rendered in SessionListItem.jsx ::

          <List horizontal>
          {session.attendees && session.attendees.map((attendee) => (
            <SessionListAttendee key={attendee.id} attendee={attendee}/>
          ))}
          </List>

#. Verify you can add a new Session to the SessionList... debug as needed.
#. FOR the R (read/view) in CRUD (re-use the Form)
#. Setup the Master / Detail view so we can reuse the create form as a display view (read) and eventually to preform the Update event.
#. In SessionDashboard.js create new functions ::

    class SessionDashboard extends Component {
    state = {
        sessions: sessionsDashboard,
        isOpen: false,
        selectedSession: null
    };

    handleFormOpen = () => {
        this.setState({
        selectedSession: null,
        isOpen: true
        });
    };

    handleCancel = () => {
        this.setState({
        isOpen: false
        });
    };

    handleCreateSession = (newSession) => {
        newSession.id = cuid();
        newSession.hostPhotoURL = '/assets/user.png';
        const updatedSessions = [...this.state.sessions, newSession];
        this.setState({
        sessions: updatedSessions,
        isOpen: false
        })
    }

    handleReadSession = (sessionToRead) => () => {
        this.setState({
        selectedSession: sessionToRead,
        isOpen: true
        })
    } 

    handleUpdateSession = (updatedSession) => {
        this.setState({
        sessions: this.state.sessions.map(session => {
            if (session.id === updatedSession.id) {
            return Object.assign({}, updatedSession)
            } else {
            return session
            }
        }),
        isOpen: false,
        selectedSession: null
        })
    }

    handleDeleteSession = (sessionId) => () => {
        const updatedSessions = this.state.sessions.filter(e => e.id !== sessionId);
        this.setState({
        sessions: updatedSessions
        })
    }

#. Call CRUD functions from associated UI Events ::

    render() {
        const {selectedSession} = this.state;
        return (
        <Grid>
            <Grid.Column width={10}>
            <SessionList sessions={this.state.sessions} />
            </Grid.Column>
            <Grid.Column width={6}>
            <Button
                onClick={this.handleFormOpen}
                positive
                content="Create Session"
            />
            {this.state.isOpen && <SessionForm  selectedSession={selectedSession} createSession={this.handleCreateSession} updateSession={this.handleUpdateSession} handleCancel={this.handleCancel}/>}
            </Grid.Column>
        </Grid>
        );
    }

#. Pass props required down to SessionList then SessionListItems and work out the bugs.
#. Now use componentDidMount to configure passed state in SessionForm.jsx ::

    componentDidMount() {
        if (this.props.selectedSession !== null) {
            this.setState({
                session: this.props.selectedSession
            })
        }
    }

#. Now use componentWillReceiveProps to configure updated props re-render ::

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSession !== this.props.selectedSession) {
            this.setState({
                session: nextProps.selectedSession || emptySession
            })
        }
    }

#. Should be able to preform all CRUD on each list item (Sessions and Subjects).
#. Test and fix issues
#. Produce testwebapp-checkpoint-03_ CRUDForms ::

    macci:testwebapp cat$ cd ~/bast23/testwebapp/docs
    macci:docs cat$ vi source/testwebapp-dev-detail.rst (update doc)
    macci:docs cat$ vi source/conf.py (Bump minor version to X.X.NN to match checkpoint-03)
    macci:docs cat$ make html 
    macci:docs cat$ open build/html/index.html (verify docs)
    macci:testwebapp cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ git add *
    macci:testwebapp cat$ git commit -m "commit for testwebapp-checkpoint-03 - CRUDForms"
    macci:testwebapp cat$ git tag testwebapp-checkpoint-03
    macci:testwebapp cat$ git push
    macci:testwebapp cat$ git push origin testwebapp-checkpoint-03
    
#. Verify checkpoint testwebapp-checkpoint-03_

Step-04 - testwebapp-checkpoint-04_
-----------------------------------

The ReactNavRouter Step-04 intent is to create page navigation in our React SPA application.

#. Create ReactNavRouter for testwebapp-checkpoint-04_
#. Create some navigation stateless functional componets
#. Create the SPA pages to get the following tree ::

        catmini:features cat$ tree
        .
        ├── home
        │   └── HomePage.jsx
        ├── nav
        │   └── NavBar
        │       └── NavBar.jsx
        ├── session
        │   ├── SessionDashboard
        │   │   └── SessionDashboard.jsx
        │   ├── SessionDetail
        │   │   └── SessionDetailPage.jsx
        │   ├── SessionForm
        │   │   └── SessionForm.jsx
        │   └── SessionList
        │       ├── SessionList.jsx
        │       ├── SessionListAttendee.jsx
        │       └── SessionListItem.jsx
        ├── subject
        │   ├── SubjectDashboard
        │   │   └── SubjectDashboard.jsx
        │   ├── SubjectDetail
        │   │   └── SubjectDetailPage.jsx
        │   ├── SubjectForm
        │   │   └── SubjectForm.jsx
        │   └── SubjectList
        │       ├── SubjectList.jsx
        │       ├── SubjectListItem.jsx
        │       └── SubjectListProvider.jsx
        └── user
            ├── PeopleDashboard
            │   └── PeopleDashboard.jsx
            ├── Settings
            │   ├── AboutPage.jsx
            │   ├── AccountPage.jsx
            │   ├── BasicPage.jsx
            │   ├── PhotosPage.jsx
            │   ├── SettingsDashboard.jsx
            │   └── SettingsNav.jsx
            └── UserDetail
                └── UserDetailPage.jsx

        17 directories, 22 files

#. Now we can setup some navigation and have pages to navigate to
#. Check we have "react-router-dom" and "react-router-redux" in package.json
#. Put BrowserRouter around the App in index.js
#. Call Route component in App.jsx
#. Fill out the Route table in App.jsx
#. yarn run then browse to http://localhost:3000/subjects and you should see the subjects list
#. Now connect the routes into NavBar.jsx
#. Layout pages and hack in auth for just look and feel
#. Internal Navigation with Settings and add Settings Nav
#. Test stuff by clicking through various pages
#. Now SPA pages should have following tree ::

    catmini:src cat$ tree
    .
    ├── app
    │   └── layout
    │       └── App.jsx
    ├── features
    │   ├── home
    │   │   └── HomePage.jsx
    │   ├── nav
    │   │   ├── Menus
    │   │   │   ├── SignedInMenu.jsx
    │   │   │   └── SignedOutMenu.jsx
    │   │   └── NavBar
    │   │       └── NavBar.jsx
    │   ├── session
    │   │   ├── SessionDashboard
    │   │   │   └── SessionDashboard.jsx
    │   │   ├── SessionDetail
    │   │   │   └── SessionDetailPage.jsx
    │   │   ├── SessionForm
    │   │   │   └── SessionForm.jsx
    │   │   └── SessionList
    │   │       ├── SessionList.jsx
    │   │       ├── SessionListAttendee.jsx
    │   │       └── SessionListItem.jsx
    │   ├── subject
    │   │   ├── SubjectDashboard
    │   │   │   └── SubjectDashboard.jsx
    │   │   ├── SubjectDetail
    │   │   │   └── SubjectDetailPage.jsx
    │   │   ├── SubjectForm
    │   │   │   └── SubjectForm.jsx
    │   │   └── SubjectList
    │   │       ├── SubjectList.jsx
    │   │       ├── SubjectListItem.jsx
    │   │       └── SubjectListProvider.jsx
    │   └── user
    │       ├── PeopleDashboard
    │       │   └── PeopleDashboard.jsx
    │       ├── Settings
    │       │   ├── AboutPage.jsx
    │       │   ├── AccountPage.jsx
    │       │   ├── BasicPage.jsx
    │       │   ├── PhotosPage.jsx
    │       │   ├── SettingsDashboard.jsx
    │       │   └── SettingsNav.jsx
    │       └── UserDetail
    │           └── UserDetailPage.jsx
    ├── index.css
    ├── index.js
    └── registerServiceWorker.js

    21 directories, 28 files


#. Produce testwebapp-checkpoint-04_ ReactNavRouter ::

    macci:testwebapp cat$ cd ~/bast23/testwebapp/docs
    macci:docs cat$ vi source/testwebapp-dev-detail.rst (update doc)
    macci:docs cat$ vi source/conf.py (Bump minor version to X.X.NN to match checkpoint-04)
    macci:docs cat$ make html 
    macci:docs cat$ open build/html/index.html (verify docs)
    macci:testwebapp cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ git add *
    macci:testwebapp cat$ git commit -m "commit for testwebapp-checkpoint-04 - ReactNavRouter"
    macci:testwebapp cat$ git tag testwebapp-checkpoint-04
    macci:testwebapp cat$ git push
    macci:testwebapp cat$ git push origin testwebapp-checkpoint-04
    
#. Verify checkpoint testwebapp-checkpoint-04_

Step-05 - testwebapp-checkpoint-05_
-----------------------------------

The REDUX-Setup Step-05 intent is to add redux to this app.

#. Create REDUX-Setup for testwebapp-checkpoint-05_
#. Create a testarea in the application for scratchpad testing
    #. mkdir src/features/testarea
    #. vi src/features/testarea/TestComponent.jsx
    #. add a route to the application
#. Create a store (create the middleware javascript)
    #. mkdir src/app/store
    #. vi src/app/store/configureStore.js
#. Create reducers 
    #. mkdir src/app/reducers
    #. vi src/app/reducers/rootReducer.js
#. Bring in react-redux and configureStore into index.js
#. Create testarea feature... lots of reducer module stuff... given time I'll go back through it all but
#. Add Redux DevTools to Chrome via redux-devtools-chrome_
#. Add composeWithDevTools into app/store/configureStore.js
#. Add some redux actions in the testarea (get use to redux function use)
#. Start converting to redux store
#. Create actions for app
#. In src/features/session create
    #. sessionActions.jsx
    #. sessionConstants.jsx create event names
    #. sessionReducer.jsx
#. Move the hack data into sessionReducer.jsx (remove from SessionDashboard.jsx)
#. Import the sessionReducer into rootReducer
#. Fix SessionDashboard
#. Build SessionDetail view... lot of hack'n work... maybe I'll come back and explain later...
#. Hack on Subject Search Box
#. Hack on Auth enabled Views
#. Stuff working... push it up ::

    macci:testwebapp cat$ git add *
    macci:testwebapp cat$ git commit -m "temp working commit for testwebapp-checkpoint-05 - REDUX-Setup"

#. Add form: FormReducer to rootReducer.js
#. Connect FormReducer to SessionForm.jsx
#. Convert form fields to Field component from FormReducer
#. This gives the Redux access to the Form (makes managment of form events easier)
#. Work on forms
#. Add Revalidate to add validation to form
#. DatePicker stuff and fix date stuff
#. Convert Subject data to Redux store
    #. Add subjectReducer to src/app/reducers/rootReducer.js
    #. Add subjectActions.js, subjectConstants.jsx and subjectReducer.jsx files to src/features/subject
    #. Create new SubjectForm.jsx with Redux store and validation
    #. Adjust routes (aka send to SubjectForm in <Route path="/subject/:id" component={SubjectForm} /> )


#. Produce testwebapp-checkpoint-05_ REDUX-Setup ::

    macci:testwebapp cat$ cd ~/bast23/testwebapp/docs
    macci:docs cat$ vi source/testwebapp-dev-detail.rst (update doc)
    macci:docs cat$ vi source/conf.py (Bump minor version to X.X.NN to match checkpoint-05)
    macci:docs cat$ make html 
    macci:docs cat$ open build/html/index.html (verify docs)
    macci:testwebapp cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ git add *
    macci:testwebapp cat$ git commit -m "commit for testwebapp-checkpoint-05 - REDUX-Setup"
    macci:testwebapp cat$ git tag testwebapp-checkpoint-05
    macci:testwebapp cat$ git push
    macci:testwebapp cat$ git push origin testwebapp-checkpoint-05
    
#. Verify checkpoint testwebapp-checkpoint-05_

Step Template
=============

Step-NN - testwebapp-checkpoint-NN_
-----------------------------------

The NAME_OF_GOAL Step-NN intent is to blahblahblah.

#. Create NAME_OF_GOAL for testwebapp-checkpoint-NN_

    #. tbd  
    #. tbd 

#. Produce testwebapp-checkpoint-NN_ NAME_OF_GOAL ::

    macci:testwebapp cat$ cd ~/bast23/testwebapp/docs
    macci:docs cat$ vi source/testwebapp-dev-detail.rst (update doc)
    macci:docs cat$ vi source/conf.py (Bump minor version to X.X.NN to match checkpoint-NN)
    macci:docs cat$ make html 
    macci:docs cat$ open build/html/index.html (verify docs)
    macci:testwebapp cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ git add *
    macci:testwebapp cat$ git commit -m "commit for testwebapp-checkpoint-NN - NAME_OF_GOAL"
    macci:testwebapp cat$ git tag testwebapp-checkpoint-NN
    macci:testwebapp cat$ git push
    macci:testwebapp cat$ git push origin testwebapp-checkpoint-NN
    
#. Verify checkpoint testwebapp-checkpoint-NN_

Resources
---------

#. Github Project Repo: gooberu-testwebapp-github_
#. Github Project Repo collaboration: gooberu-testwebapp-github-collaboration_
#. Read the Docs: gooberu-testwebapp-readthedocs_
#. Local Build Docs: gooberu-testwebapp-localdocs_
#. ReadTheDocs demo files: 2cld-readthedocs-demo_
#. GooberU site Architecture document at gooberu-docs-Architecture_
#. GooberU local test site at gooberu-testwebapp-localserver_
#. Semantic-ui CSS framework css-sematic-ui_
#. Firebase console (based on google login) firebase-console_
#. Firebase testwebapp console firebase-testwebapp-console_
#. Firebase debug cert help firebase-debug-cert_
#. firebase-testwebapp-Authentication_
#. firebase-testwebapp-Database_
#. firebase-testwebapp-Database-Rules_
#. firebase-testwebapp-Storage_
#. firebase-testwebapp-Storage-Rules_
#. firebase-testwebapp-Storage-Files_
#. firebase-docs-database-query_
#. youtube-FlutterWireUpFirebaseAuthiOS_
#. Testflight documentation ios-docs-testflight_
#. Testflight Tutorial youtube-ios-tutorial-testflight-1_


.. _readthedocs: https://readthedocs.org/
.. _2cld-readthedocs-demo: https://github.com/2cld/readthedocsdemo
.. _gooberu-testwebapp-readthedocs: http://gooberu-testwebapp.readthedocs.io/en/latest/
.. _gooberu-testwebapp-localdocs: file:///Users/cat/bast23/testwebapp/docs/build/html/index.html
.. _gooberu-testwebapp-localserver: http://localhost:3000/
.. _gooberu-github: https://github.com/gooberu
.. _gooberu-testwebapp-github: https://github.com/gooberu/testwebapp
.. _gooberu-testwebapp-github-collaboration: https://github.com/gooberu/testwebapp/settings/collaboration
.. _gooberu-testwebapp-release-sprints: https://github.com/gooberu/testwebapp/projects
.. _gooberu-docs-Architecture: https://docs.google.com/document/d/1FvM15Qytp0HsxGR6Tm3dTKDvYsCZbecjis9G_oCLgo8
.. _download-UbuntuFontFamily: https://fonts.google.com/download?family=Ubuntu

.. _react-devtools-chrome: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=en
.. _redux-devtools-chrome: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

.. _css-sematic-ui: https://semantic-ui.com/

.. _firebase-console: https://console.firebase.google.com/
.. _firebase-testwebapp-console: https://console.firebase.google.com/project/gooberu-testwebapp/overview
.. _firebase-testwebapp-Authentication: https://console.firebase.google.com/project/gooberu-testwebapp/authentication/users
.. _firebase-testwebapp-Database: https://console.firebase.google.com/project/gooberu-testwebapp/database
.. _firebase-testwebapp-Database-Rules: https://console.firebase.google.com/project/gooberu-testwebapp/database/firestore/rules
.. _firebase-testwebapp-Storage: https://console.firebase.google.com/project/gooberu-testwebapp/storage/gooberu-testwebapp.appspot.com/files
.. _firebase-testwebapp-Storage-Rules: https://console.firebase.google.com/project/gooberu-testwebapp/storage/gooberu-testwebapp.appspot.com/rules
.. _firebase-testwebapp-Storage-Files: https://console.firebase.google.com/project/gooberu-testwebapp/storage/gooberu-testwebapp.appspot.com/files
.. _firebase-testwebapp-Functions: https://console.firebase.google.com/project/gooberu-testwebapp/functions/list
.. _firebase-debug-cert: https://developers.google.com/android/guides/client-auth
.. _firebase-docs-database-query: https://firebase.google.com/docs/reference/js/firebase.database.Query
.. _firebase-docs-sheets-connector: https://sites.google.com/site/scriptsexamples/new-connectors-to-google-services/firebase/tutorials

.. _ios-docs-testflight: https://developer.apple.com/testflight/
.. _apple-developer-portal: https://developer.apple.com/account/
.. _apple-developer-bundle-create: https://developer.apple.com/account/ios/identifier/bundle
.. _apple-itunesconnect-portal: https://itunesconnect.apple.com/
.. _apple-itunesconnect-user-roles: https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/users_roles
.. _apple-itunesconnect-GooberU-testwebapp-Testflight: https://itunesconnect.apple.com/WebObjects/iTunesConnect.woa/ra/ng/app/1390293846/testflight?section=internaltesters&subsection=testers

.. _testwebapp-checkpoint-NN: https://github.com/gooberu/testwebapp
.. _testwebapp-checkpoint-01: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-01
.. _testwebapp-checkpoint-02: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-02
.. _testwebapp-checkpoint-03: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-03
.. _testwebapp-checkpoint-04: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-04
.. _testwebapp-checkpoint-05: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-05
.. _testwebapp-checkpoint-06: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-06
.. _testwebapp-checkpoint-07: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-07
.. _testwebapp-checkpoint-08: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-08
.. _testwebapp-checkpoint-09: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-09
.. _testwebapp-checkpoint-10: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-10
.. _testwebapp-checkpoint-11: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-11
.. _testwebapp-checkpoint-12: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-12

.. _youtube-FlutterWireUpFirebaseAuthiOS: https://www.youtube.com/watch?v=3nFIMej3Tvw
.. _youtube-ios-tutorial-testflight-1: https://www.youtube.com/watch?v=1CcCKQHjDpw
.. _youtube-ios-tutorial-testflight-2: https://www.youtube.com/watch?v=1DVLaMmGxR8

.. _github-projects-configure-projects: https://help.github.com/articles/configuring-automation-for-project-boards/
