
# Course Management API

A REST API developed using NestJS and TypeScript for APWT Lab Task 01.

## Features

The API demonstrates the Module, Controller, and Service architecture.

- Get all courses
- Get a course by ID
- Create a course
- Update a course
- Partially update a course
- Delete a course

## Technologies

- Node.js
- NestJS
- TypeScript
- REST API

## Installation

Install the project dependencies:

```bash
npm install
```

## Run the Application

```bash
npm run start:dev
```

The API runs at:

http://localhost:3000

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | /course | Get all courses |
| GET | /course/5 | Get a course by ID |
| POST | /course | Create a course |
| PUT | /course/5 | Update a course |
| PATCH | /course/5 | Partially update a course |
| DELETE | /course/5 | Delete a course |

## Testing

Run unit tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npm run test:e2e
```

Build the project:

```bash
npm run build
```
