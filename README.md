# event-recruitment-app

## Installation

#### Server
```bash
cd server
yarn install
```

#### Client
```bash
cd client
yarn install
```

## Run in development mode

#### Server
```bash
cd server
cp .env.example .env
yarn docker:start 
yarn start:dev
```

#### Client
```bash
cd client
cp .env.example .env
yarn start
```

## Run in production mode

#### Server
```bash
cd server
cp .env.example .env #set NODE_ENV to production
Run src/server.ts
```
#### Client

```bash
cd client
cp .env.example .env #set valid REACT_API_URL - server url
yarn build
#serve build files
```

## Tests

#### Server

```bash
cd server
yarn docker:start
yarn test
```

#### Client

```bash
cd client
yarn test
```

## Additional information
I decided not to use any state management library because I didn't really find an appropriate use case for it.

### TODO
 
#### Server
- Move app to docker

#### Client
