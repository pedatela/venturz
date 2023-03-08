## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Run Server

I'm using postgresql, so you can run inside a docker, you can connect to a database using this environments
```
NODE_ENV=
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
```
then you can create a database, after that you can run:

``` npx sequelize-cli db:migrate ```<br />
``` npx sequelize-cli db:seed:all ```

then:

`yarn start`

Runs the server in the development mode.<br />
Open [http://localhost:5000/api](http://localhost:3000) to view it in the browser.


