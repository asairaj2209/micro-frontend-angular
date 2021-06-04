# Create Angular Base App


### Get started
Angular is a development platform for building mobile and desktop web applications
using Typescript/JavaScript and other languages.

### Clone the repo

```shell
https://bitbucket.org/apptiumtechnologies/pion-poc/src/master/
cd Micro-Frontends/Angular/base-app/
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
```

### Run the application
```shell
ng serve
```
Once application run, Navigate to [http://localhost:4200/](http://localhost:4200/) The app will automatically reload if you change any of the source files.

### Build the application
```shell
ng build
```
The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

Shut it down manually with `Ctrl-C`.


## Widget Import in same host
Once widget application is `build` then copy required files from `dist` folder and paste it below path. After that `run` or `build` our base application.

```shell
cd Micro-Frontends/Angular/base-app/widgets/
```

```
base-app
├── src
├── node_modules
├── package.json
├── widgets
│   ├── my-app
│   ├── my-app-detail

```

Bind the widget in any component
```shell
<my-account></my-account>
```

## Widget Import in different host
Once widget application is `build` then copy required files path from `dist` folder and paste it `index.html`. After that `run` or `build` our base application.
```shell
<link href="https://react-myaccount.netlify.app/static/css/main.css" rel="stylesheet">
<script type="text/javascript" src="https://react-myaccount.netlify.app/static/js/main.js"></script>
```

```
base-app
├── node_modules
├── widgets
├── package.json
├── src
│   ├── index.html

```