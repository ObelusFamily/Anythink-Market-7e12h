# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

**[TODO 05/01/2018 @vanessa-cooper]:** _It's been a while since anyone ran a fresh copy of this repo. I think it's worth documenting the steps needed to install and run the repo on a new machine?_

1. Install Docker
2. Verify version by running `docker -v` and `docker-compose -v`
3. Navigate to the root of the repo, run `docker-compose up`
4. Test the backend at http://localhost:3000/api/ping
5. Test the front end at http://localhost:3001/register
6. You may use `docker exec` to run commands on the container