testwebapp fork todo
====================

#. NEED TO FIX
    #. Pages have too much top margin (fix formating)
        #. Done... basically rip out navbar in App.jsx
    #. Home form needs to
        #. Get and input GeoLoc into form - Save this for later... have had issues loading npm react-geolocated things
        #. Send form to firebase - See Fix below
        #. Verify valid user - See Fix below
    #. Alert Tutor page
        #. Tutor Feedback ??
    #. Tutor Chat Page
        #. Location Selection form ?? - need to pass data to this - See fix below

#. Fix-1 - Send Request info from homepage to firebase.
    #. Mod src/features/session/RalphForm/SessionForm.jsx and add createSession(values); call from onFormSubmit
    #. Decide to create the data type 'requests' where tutors transistion 'requests' into 'sessions'
    #. Create src/features/request to hold request code and copy over SessionForm model
    #. The idea is to get request data model to replace session/RalphForm model in app
    #. Replace call to SessionForm to RequestForm in App.jsx
    #. Add requestReducer to src/app/reducers/rootReducers.js get the request model into redux
    #. I did modify to write a request to a new data-store on firebase (see firebase data)
    #. I did NOT begen to modify the objects used by master... yet... got DIVERTED
#. DIVERTED - at this point I got diverted back to main so wanted to push the changes up to github
    #. I think I did not commit changes of testwebapp-checkpoint-15 so I may need to re-create from 14
    #. Pull from https://github.com/gooberu/testwebapp (last 'commit for testwebapp-checkpoint-14 - SUBJECT_CRUD')
    #. Recreate from this local repo the changes intended for testwebapp-checkpoint-15 via docs/source/testwebapp-dev-detail.rst
    #. Cleanup docs for commit testwebapp-checkpoint-15
    #. Deploy based on testwebapp-checkpoint-15
    #. Pull https://github.com/gooberu/testwebfeatures
    #. Test deploy site https://gooberu-testscreens.firebaseapp.com/ and make testwebfeatures work
#. DIVERTED - Want to go back to main and bring up UI/UX testing again
#. DIVERTED - Fix-2 - Pass Request Session info to pages (make location info come from firebase)
#. DIVERTED - Fix-3 - Hack up Tutor Mode - so Ralph can play with both sides of conversation
#. DIVERTED - Fix-4 - Work on Chat Page - work through a Chat session
#. DIVERTED - Fix-5 - Hack up Admin Mode - Something for administative accounting
#. DIVERTED - Fix-6 - Pickup Valid User (require login)

#. DIVERTED - Deploy to Firebase
    #. Add to package.json in "scripts" ::

        "deploy": "npm run build && firebase deploy"

    #. npm run deploy
    #. Should get "Deploy complete!" should get hosturl to verify
    #. Verify app at https://gooberu-testscreens.firebaseapp.com

#. DIVERTED - Record video testwebapp-fork-ralph-cp01-deploy_ of Changes for feedback Published ??.

.. _testwebapp-fork-ralph-cp01-deploy: https://www.youtube.com/channel/UCSQEZvXfURrMnDoG6ACB9xg