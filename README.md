# HackSC official UI kit

We build everything here :)

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the UI kit for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run release`

Release the UI kit in public mode to NPM (requires you to be logged into NPM and have access to
the `hacksc` organization)

## Testing the UI kit in a demo app

If you want to test your changes for the UI kit on a separate React app, you
will need to temporarily symlink the React dependency of your demo app to this package.

The reason is because we use React hooks in this UI kit :) and you would be running 2 instances of React per [this](https://legacy.reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react) when you do `npm link @hacksc/ui-kit` in your demo app if you don't do the below steps (or equivalent steps to ensure only one React instance is present on your demo app).

1. `cd` to your demo app folder (should be a React/Next.js app)
2. Make sure you installed all dependencies in your demo app via your favorite `install` command. This app must have a React dependencies version that is compatible with the React version specified in this package (in `package.json`'s `peerDependencies`)
3. `cd` back to our UI kit folder, and `npm link ${PATH_TO_APP}/node_modules/react` to temporarily symlink the demo app's React to this UI kit.
   the UI kit's 
4. Run `npm link` to create a global symlink for this UI kit
6. `cd` back to the demo app
7. Run `npm link @hacksc/ui-kit` to symlink the global symlink for the UI kit
   into the app's `node_modules`
8. Start the demo app and start playing around with the kit! Since it's a
   symlink, any changes to the UI kit in the `ui-kit/` folder will reflect on
   the demo app.
