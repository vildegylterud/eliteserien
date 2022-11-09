# Eliteserien 2022 
## Visualization of the eliteserie table for 2022

To install the project you first need to download the source code.

#### Frontend
Prerequisites: 
Node.js

To install follow the link above and download the source code for frontend as described. To run it you must open it in your IDE and run the following commands: <br>
<li><code>npm install</code></li><br>
<li><code>npm run serve</code></li>



### Frontend

##### Assets
Contains image-files for logos and backgrounds

##### Views
Contains all the Vue files representing the different views used in the application. A view can also be describes as a page or the "base layer" of a page. A view usually contains one or more components and is used for the router as described below.

##### Components
Contains all the different components used in the application. Components are elements in the application that is reused multiple places in the application. The components are split into several sub-folders:
* Table
* Team
* Navbar
* ThemeToggle

##### Router
Contains the routerfile for Vue-router which is a library to handle and store and redirect between the different paths for the views in vue-applications.

##### Plugins
Contains the plugin-config used in the project. For this project i have used 
* [Vuetify 3 (Beta)](https://next.vuetifyjs.com/en/getting-started/installation/)
* [Webfontloader](https://github.com/typekit/webfontloader)<br>


##### Services
The services folder contains the service files where the methods to communicate with the server-side is stored. 

##### Store
The Store folder contains the index.ts file used for vuex-store which is a state management library for Vue applications.

### Source Code
The source code for frontend can be found [here](https://github.com/vildegylterud/eliteserien).<br>

To download the project press the download button as shown below and select the preferred download type, or clone the project through SSH or login. 
![download](uploads/fbd1cb25a5a1a0d26d5510aa6e12e571/download.PNG)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
