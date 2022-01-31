# Mão Registry Service

`mao-service-registry` is an edge service dedicated to the management of micro-services.

It exposes a set of REST APIs that allow to:

- Register a service
- Unregister a service
- Get the URL of a service


## Getting started

Install dependencies:

```
npm install
```

Create the `.env` file with the following content:

```
MAO_CORE_SERVER_SCHEME=http
MAO_CORE_SERVER_HOST=localhost
MAO_CORE_SERVER_PORT=8080
```

Start the app:

```
npm start
```
