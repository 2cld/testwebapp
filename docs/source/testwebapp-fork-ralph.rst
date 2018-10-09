testwebapp fork ralph
=====================

Step-01 - testwebapp-fork-ralph-01_
-----------------------------------

Just getting things setup for ralph requested modifications

#. Create testwebapp-fork-ralph-01_ from testwebapp-checkpoint-15_
#. Create this document page docs/source/testwebapp-fork-ralph.rst
#. Bump version to rf-0.1.0 in docs/source/conf.py
#. Via conversation with Ralph on 2018.09.11 at 3-4pm CST 
    #. Landing page should be map with just Request input.
    #. Request is sent to tutors on map displayed in Alert Tutors Page
    #. Request waiting indication... on Alert Tutors Page
    #. Tutor acceptance drops user into a chat with student on Session Chat Page
#. Task: Create and change Landing page
    #. Create src/features/session/RalphForm/SessionForm.jsx (copy SessionForm dir)
    #. Mod src/app/layout/App.js to create route callRalph to call features/session/RalphForm/SessionForm.jsx
    #. Mod src/app/layout/App.js to default to SessionForm (but the imported RalphForm/SessionForm.jsx)
    #. Mod src/features/session/RalphForm/SessionForm.jsx with Text Input with Button ONLY
    #. Have form Submit route to callRalph/TestComponet.jsx
#. Task: Create and change Tutor Alert Page (callRalph/TestComponet.jsx)
    #. Create src/features/callRalph/TestComponent.jsx (copy testarea dir)
    #. Mod src/app/layout/App.js to create route callRalph
    #. Mod src/features/callRalph/TestComponent.jsx to get desired display
#. Task: Create and change Session Chat Page
    #. Create src/features/session/RalphDetail/SessionDetailPage.jsx (copy session/SessionDetail dir)
    #. Mod src/app/layout/App.js to create route callRalph
    #. Mod src/features/callRalph/TestComponent.jsx to get desired display
#. Record video testwebapp-fork-ralph-cp01_ of Changes for feedback Published on Sep 12, 2018.
#. Raph feedback via email for testwebapp-fork-ralph-cp01_ youtube demo checkpoint via email Sep 14, 2018::

    Looks good.
    Lets go with that. now we need to do the chat part and close the transaction

#. Produce testwebapp-fork-ralph-01_ Ralph Demo CP01 ::

    macci:testwebapp cat$ cd ~/bast23/testwebapp/docs
    macci:docs cat$ vi source/testwebapp-fork-ralph.rst (update doc)
    macci:docs cat$ vi source/conf.py (Bump minor version to X.X.NN to match checkpoint-01)
    macci:docs cat$ make html 
    macci:docs cat$ open build/html/index.html (verify docs)
    macci:testwebapp cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ git add *
    macci:testwebapp cat$ git commit -m "commit for testwebapp-fork-ralph-01 - Ralph Demo CP01"
    macci:testwebapp cat$ git tag testwebapp-fork-ralph-01
    macci:testwebapp cat$ git push
    macci:testwebapp cat$ git push origin testwebapp-fork-ralph-01
    
#. Verify checkpoint testwebapp-fork-ralph-01_

Step Template
=============

Step-NN - testwebapp-fork-ralph-NN_
-----------------------------------

The NAME_OF_GOAL Step-NN intent is to blahblahblah.

#. Create NAME_OF_GOAL for testwebapp-fork-ralph-NN_

    #. tbd  
    #. tbd 

#. Produce fr-0.1.0-NN_ Ralph Demo CP-NN ::

    macci:testwebapp cat$ cd ~/bast23/testwebapp/docs
    macci:docs cat$ vi source/testwebapp-fork-ralph.rst (update doc)
    macci:docs cat$ vi source/conf.py (Bump minor version to rf-0.1.-NN to match checkpoint-NN)
    macci:docs cat$ make html 
    macci:docs cat$ open build/html/index.html (verify docs)
    macci:testwebapp cat$ cd ~/bast23/testwebapp
    macci:testwebapp cat$ git add *
    macci:testwebapp cat$ git commit -m "commit for testwebapp-fork-ralph-NN - Ralph Demo CP-NN"
    macci:testwebapp cat$ git tag testwebapp-fork-ralph-NN
    macci:testwebapp cat$ git push
    macci:testwebapp cat$ git push origin testwebapp-fork-ralph-NN
    
#. Verify checkpoint testwebapp-fork-ralph-NN_

Resources
---------

#. Github Project Repo: gooberu-testwebapp-github_
#. YouTube GooberU Project: gooberu-testwebapp-youtube_

testwebapp-fork-ralph
---------------------

#. testwebapp-fork-ralph-01_ is a fork started from testwebapp-checkpoint-15_
#. testwebapp-fork-ralph-cp01_ Checkpoint video demo



.. _gooberu-testwebapp-github: https://github.com/gooberu/testwebapp
.. _gooberu-testwebapp-youtube: https://www.youtube.com/channel/UCSQEZvXfURrMnDoG6ACB9xg

.. _testwebapp-checkpoint-15: https://github.com/gooberu/testwebapp/tree/testwebapp-checkpoint-15

.. _testwebapp-fork-ralph-NN: https://github.com/gooberu/testwebapp/tree/testwebapp-fork-ralph-01
.. _testwebapp-fork-ralph-01: https://github.com/gooberu/testwebapp/tree/testwebapp-fork-ralph-01

.. _testwebapp-fork-ralph-cp01: https://youtu.be/wzppHVhFz5M
.. _testwebapp-fork-ralph-cp01-deploy: https://www.youtube.com/channel/UCSQEZvXfURrMnDoG6ACB9xg

.. _fr-0.1.0-NN: https://github.com/gooberu/testwebapp
