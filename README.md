<h1 align="center">User search dashboard application built with github's graphql api</h1>

<p align="center">
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/Typescript-v3.7.2-blue.svg?logo=TypeScript"></a>
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-v9.1.1-blueviolet.svg"></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/React-v16.10.2-%238DD6F9.svg?logo=React"></a>
  <a href="https://graphql.org/" target="_blank"><img src="https://img.shields.io/badge/GraphQL-v14.5.8-ff69b4.svg?logo=GraphQL"></a>
  <a href="https://github.com/prettier/prettier" target="_blank"><img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg"></a>
</p>

## How to use

- create .env file in the root path.
- add following variables; <br>
  GRAPHQL_URL=https://api.github.com/graphql <br>
  AUTH_TOKEN=([value of your github access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line))

```javascript
npm i
npm run dev
```

- Open [localhost](http://localhost:3000/)

<br>
TODO;

- TypeScript definitions for external packages
- Page loading screen
- Pagination
- Error handling
- Refactor Select component(uses CHANGE_SELECTED, GET_CURRENT_SELECTED as default should be pased as prop)
