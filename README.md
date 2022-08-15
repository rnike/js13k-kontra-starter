# A startup template for [js13kGames](https://js13kgames.com/) with the game engine [kontra](https://straker.github.io/kontra) included.

> This is a fork from [mtmckenna/js13k-webpack-typescript-starter-party](https://github.com/mtmckenna/js13k-webpack-typescript-starter-party), thanks @mtmckenna for all the works.

## Requirements

The commands assume [Yarn](https://yarnpkg.com/en/docs/install) is installed.

## Quick start

1. `git clone` and `cd` to this repo
2. `yarn install`
3. `yarn start` and start your development
4. when complete, run `yarn party`

## Commands

### `yarn install`

Installs dependencies.

### `yarn start`

Starts [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) at `http://0.0.0.0:8080`. You should be able to access the server on your mobile device from your home network by going to your computer's IP address (e.g. `http://192.168.0.2:8080`).

### `yarn build`

Builds, minifies, and inlines the game to `./dist/index.html`. This command also runs [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer), and places the report in `./dist/report.html`. This report may be handy in figuring out which of your source files is putting you over the edge of 13k.

### `yarn party`

Builds, minifies, inlines, and zips the game to `./zipped/game.zip`. This command finishes with a log message letting you know if the zip file is under 13k.

## Notes

- Put your TS or JS in `src/index.ts`
- Put your css in `src/index.html`
- Put your images or other assets in `assets/`
- This starter pulls in [this plugin](https://github.com/facebook/create-react-app/blob/edc671eeea6b7d26ac3f1eb2050e50f75cf9ad5d/packages/react-dev-utils/InlineChunkHtmlPlugin.js#L10) from Facebook's [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) to inline the JS into the HTML file.
