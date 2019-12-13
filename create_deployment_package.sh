#!/bin/bash
npm run build
zip -r deploy.zip .ebextensions dist package.json .npmrc