testwebapp dev detail
=====================

Step - testwebapp-checkpoint-01_
--------------------------------

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



Step Template
=============

Step-NN - testwebapp-checkpoint-NN_
-----------------------------------

The NAME_OF_GOAL Step-NN intent is to blahblahblah.

#. Create NAME_OF_GOAL for testwebapp-checkpoint-NN_

    #. tbd  
    #. tbd 

#. Produce testwebapp-checkpoint-NN_ NAME_OF_GOAL

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
#. Ubuntu Font Family at download-UbuntuFontFamily_
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
