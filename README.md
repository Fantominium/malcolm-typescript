##Use useReducer and useContext to enable dark mode functionality for users visiting

Run dockerfile to build image (period included)
` docker build -t malcolm-test-site-container:dev .`

run image in interactive mode for development
`docker run -it -d --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true malcolm-test-site-container:dev`


followed this for dockerising:

https://mherman.org/blog/dockerizing-a-react-app/

Didn't use the -g option as i didn't want it installed globally in the container.

###use context inplemented at a basic level for understanding, use reducer will be the same for a simple login

Login func to be built into reducer
