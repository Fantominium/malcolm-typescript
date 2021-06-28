
Run dockerfile to build image (period included)
` docker build -t malcolm-test-site-container:dev .`

run image in interactive mode for development
`docker run -it -d --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true malcolm-test-site-container:dev`


followed this for dockerising:

https://mherman.org/blog/dockerizing-a-react-app/

Didn't use the -g option as i didn't want it installed globally in the container.

Context being passed correctly, however the issue is updating the dom and having the change persist through navigation and page refresh

Also figure out how to have change reflected in styled components

###TODO
    - Create tests for this; unit, integration, and snapshot.
    - integragtion script for github actions to run above tests and build project
    - re-implement styling on old react site for these in styled components.
    - continue working on using the context to change the color of the banner.
    - solve the persistence issue of the context through navigation.