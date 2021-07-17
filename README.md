
# Instructions and outstanding tasks

## Build the container

`docker build -t malcolm-test-site-container:dev .`

## Pull the image

`docker pull fantominium/malcolm-ts-test:dev`

## Run image (in development mode)

`docker compose up -d --build`

followed this for dockerising:
<https://mherman.org/blog/dockerizing-a-react-app/>

This video was also  helpful:
<https://www.youtube.com/watch?v=iqqDU2crIEQ&t=1276s>

Didn't use the -g option as i didn't want it installed globally in the container.

## Objectives

using the init func in the reducer, but i need to figue out whats happening with useEffect and Local storage
its being set and changed, but not maintained, being reset somewhere. **DONE**

- Needed to check to see if the window obj was created, since my app renders first on
the server, which presents my next challenge:
- How to hydrate the darkmode context on the server side before presenting data to the client

Will use the malcolm branch to write and push tests!

### Come back to testing in the tests folder for checking on what is rendered

### TODO

    - Create tests for this; unit, integration, and snapshot. **Using Malcolm branch for this**
    - integragtion script for github actions to run above tests and build project. **IN PROG**
    - re-implement styling on old react site for these in styled components. (Not yet, will do soon)
    - **DONE** solve the persistence issue of the context through navigation. (Will need a session/broser cookie, or make an api to take the easy route) 
