# Tasky

## Api Rest for create, read, update and delete tasks

### This project uses Express and MongoDB with TypeScript
#### The routes are written in the [api.rest](./api.rest) file

- Intallation:
    - Clone the repository
    - Then, install the modules with `npm install` or `yarn`.
    - Then create a `.env` file and write `DB_URI=<Your database uri>`
        - Note: the project is using MongoDB and mongoose, you must write an MongoDB url, example `mongodb://<Your hosted db>/<Your database>`
    - Then run `npm run dev` or `yarn dev`.
- Run as production:
    - After clone the repository, run the command `npm run lint && npm run prettier && npm run buid` or `yarn lint && yarn prettier && yarn buid`
    - Then run `npm start` or `yarn start`
