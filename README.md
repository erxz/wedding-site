# Motivation

[![Build Status](https://travis-ci.com/erxz/wedding-site.svg?branch=master)](https://travis-ci.com/erxz/wedding-site)

A friend of mine is getting married and they wanted a site, so [enreckless](https://enreckless.com/) and I decided to help them.
This time I was looking to experiment with some new tools and I found [Poi](https://poi.js.org/) a great bundler to create powerful web apps without too much hassle.

## Build your own

Get the repo

```shell
git clone https://github.com/erxz/wedding-site
```

Install dependencies

```shell
yarn install or npm install
```

Run the commands. You can replace `yarn` with `npm run` here

```bash
# build for production
yarn build

# development mode
yarn dev

# run unit tests
yarn test

# serve the bundled dist folder in production mode
yarn serve

# deploy your site to firebase. You'll need an account first
yarn deploy
```

> If you're using `VSCode` you might want to remove the setings I added to hide the files

## Features

This is project is based on the [Vue-Land](https://github.com/vue-land/create-vue-app) template that have already some interesting features like PWA, hot reloading, normalize etc. I also added

- Vue router
- Poi 10
- Deployment to Firebase using Travis CI

## Bits and pices

- Add more testing
- Travis Tweaks

## Credits

Thank you!

- [Egoist](https://github.com/egoist/poi)
- [POI](https://github.com/egoist/poi)
- [SAO](https://sao.js.org/)
- [Bourbon](https://www.bourbon.io/)

## License

The code is available under the [MIT license](LICENSE)
