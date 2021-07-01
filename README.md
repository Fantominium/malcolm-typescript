
###Run dockerfile to build image locally (period included)
` docker build -t malcolm-test-site-container:dev .`

###Pull the image
`docker pull fantominium/malcolm-ts-test:dev`

run image (in development mode)
`docker compose up -d --build`

followed this for dockerising:
https://mherman.org/blog/dockerizing-a-react-app/

This video was also  helpful:
https://www.youtube.com/watch?v=iqqDU2crIEQ&t=1276s

Didn't use the -g option as i didn't want it installed globally in the container.

Context being passed correctly, however the issue is updating the dom and having the change persist through navigation and page refresh

Also figure out how to have change reflected in styled components

Image published to dockerhub. Will try pulling and running soon

Refactor DarkModeContext to being a toggle.

###TODO
    - Create tests for this; unit, integration, and snapshot.
    - integragtion script for github actions to run above tests and build project
    - re-implement styling on old react site for these in styled components.
    - solve the persistence issue of the context through navigation.