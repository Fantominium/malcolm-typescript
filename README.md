##Use useReducer and useContext to enable dark mode functionality for users visiting

Run dockerfile to build image (period included)
` docker build -t malcolm-test-site-container:dev .`

run image in interactive mode for development
`docker run -it -d --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true malcolm-test-site-container:dev`


followed this for dockerising:

https://mherman.org/blog/dockerizing-a-react-app/

Didn't use the -g option as i didn't want it installed globally in the container.

Rudementary reducer made, will use context along with it to have the change persist throughout the website

Currently using context incorrectly, need to find out how to pass the value properly with further debugging.