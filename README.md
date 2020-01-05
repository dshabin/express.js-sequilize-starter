# AWS Elastic Beanstalk NodeJS Express Sequilize Starter

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

Simple express-nodejs-sequilize starter ready for AWS Elastic Beanstalk environment.

## Running Local
##### Install packages:
``` npm i ```
##### Run Database Migrations:
``` npm run migrate ```
#####  Run Development server:
``` npm run dev ```
#####  Build :
``` npm run build ```
#####  Create deployment package for AWS Elastic Beanstalk :
``` ./create_deplyment_package.sh ```

## Folder Structure
```
.
├── .ebextensions
│   └── nodecommand.config
├── src
│   ├── db
│   │   ├── migrations
│   │   │   ├── 20190913112934-user.js
│   │   │   └── 20190913113000-token.js
│   │   ├── models
│   │   │   ├── token.js
│   │   │   └── user.js
│   │   ├── config.json
│   │   ├── dbHelpers.js
│   │   └── index.js
│   ├── handlers
│   │   └── auth.js
│   ├── routes
│   │   ├── auth.js
│   │   └── index.js
│   ├── utils
│   │   └── index.js
│   ├── config.json
│   └── index.js
├── .babelrc
├── .gitignore
├── .npmrc
├── .sequelizerc
├── create_deployment_package.sh
├── package.json
└── README.md
```
