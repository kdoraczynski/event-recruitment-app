# event-recruitment-app

##Installation

####Server
```bash
cd server
yarn install
```
####Frontend
```bash
cd front
yarn install
```
#Run in development mode
####Server
```bash
cd server
yarn docker:start #set valid REACT_API_URL - localhost
yarn start:dev
```
####Frontend
```bash
cd front
cp .env.example .env
yarn start
```
##Run in production mode
####Server
```bash
cd server
cp .env.example .env #set NODE_ENV to production
yarn docker:start
Run src/server.ts
```
####Frontend
```bash
cd front
cp .env.example .env #set valid REACT_API_URL - server url
yarn build
#serve build files
```
##Tests
####Server
```bash
cd server
yarn docker:start
yarn test
```

####Frontend
```bash
cd front
yarn test
```
