# Create Angular Widget App


### Get started
Angular is a development platform for building mobile and desktop web applications
using Typescript/JavaScript and other languages.

### Clone the repo

```shell
https://bitbucket.org/apptiumtechnologies/pion-poc/src/master/
cd Micro-Frontends/Angular/my-app
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

### Widget Build
```shell
ng build --prod --project <Project Name> --single-bundle true --output-hashing none --vendor-chunk false
```
The build artifacts will be stored in the `dist/` directory.

## Widget Export Code
Once widget application is `build` then copy required files.
```shell
ngDoBootstrap() {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('my-app-widget', el);
}
```
## Widget Export file
After `build` copy the required files from the below folders
```shell
\dist\my-app
```

```
my-app
├── node_modules
├── src
├── package.json
├── dist
│   ├── my-app
```
