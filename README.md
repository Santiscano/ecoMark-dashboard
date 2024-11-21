# EcoMarkDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



### Librerias instaladas no preinstaladas por angular
```shell
$ npm i tailwindcss postcss lodash chroma-js autoprefixer @types/lodash-es @types/lodash @types/chroma-js @tailwindcss/typography @tailwindcss/line-clamp -D
```

```shell
$ npm i quill perfect-scrollbar lodash-es
```

#### Configurcion de angular.json
```json
{
  "projects": {
    "ecoMark-dashboard":{
      "architect": {
        "build":{
          "options":{
            "styles":[
              "src/app/sami/styles/tailwind.scss",
              "src/app/sami/styles/themes.scss",
              "src/styles/vendors.scss",
              "src/app/sami/styles/main.scss",
              "src/styles/styles.scss",
              "src/styles/tailwind.scss"
            ]
          }
        }
      }
    }
  }
}
```

#### Configurcion de angular.json
```json
{
  "compilerOptions":{
    "paths": {
      "@app/*": ["./src/app/*"],
      "@core/*": ["./src/app/core/*"],
      "@layout/*": ["./src/app/layout/*"],
      "@shared/*": ["./src/app/shared/*"],
      "@theme/*": ["./src/app/theme/*"]
    }
  }
}
```
