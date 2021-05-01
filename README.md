# GitHub Issues Explorer

A small client application using github [QraphQL API](https://docs.github.com/en/graphql).

## How to run the app

### 1. Get your GitHub access token

Follow the steps in [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to create a token.

To match the behavior of the [GraphQL Explorer](https://docs.github.com/en/graphql/guides/using-the-explorer), request the following scopes:

```
user
public_repo
repo
repo_deployment
repo:status
read:repo_hook
read:org
read:public_key
read:gpg_key
```

Save your new access token.

### 2. Clone the repo

```
git clone git@github.com:vuongvu1/github-issues-explorer.git
```

### 3. Install dependencies

(recommended)

```
yarn install
```

or

```
npm install
```

### 4. Add environment variables

- Create an `.env` file in the project root directory
- Copy the content in `.env-template` to the `.env`
- Copy your new access token in step 1 to the value `REACT_APP_GITHUB_TOKEN`

### 5. Start the app

```
yarn start
```

or

```
npm start
```
