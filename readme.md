# React Voice
A voice driven search POC for searching target.com built with
* [React]
* [Redux]
* [React Router]
* [Webpack]
* [Web Speech API]

### Requirements
* node v4.x or higher or v.012 with the harmony flag ```node --harmony``` for better es2015/16 support
* npm
* bower
* chrome 45+

[React]: <https://facebook.github.io/react/>
[Redux]: <http://redux.js.org/>
[React Router]: <https://github.com/reactjs/react-router>
[Webpack]: <https://webpack.github.io/>
[Web Speech API]: <https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API>

### Installation
Install node dependencies ```npm install```
Install bower dependencies ```bower install```

**Optional Command Line Tool**
Run ```npm link``` from the project folder to enable ```react``` command line shortcuts.

### Starting The Project
You can start the project with ```npm``` scripts or with the ```react``` utility
```
npm start
```
or
```
react s
```

### React CLI
Optional convenience utility for creating/removing components, starting dev server and building.

Run ```npm link``` from the project folder to enable.

**Available Commands**

  ```react g```, ```generate``` ***<component|action|container|reducer>
  <name|folder/name>***
    -Creates a new component, action, container or reducer.

  ```react d```, ```delete``` **<component|action|container|reducer> <name|folder/name>**
    -Deletes a component, action, container or reducer. *-WIP*

  ```react s```, ```serve```
    -Starts the development server with the development environment.

  ```react s:dist```, ```serve:dist```
    -Starts the development server with the production environment. *-WIP*

  ```react b```, ```build```
    -Builds the project for production. *-WIP*

  ```react h```, ```help```
    -Displays the help menu.

#### Generators
Generators provide a convenient way to create new components, containers, actions and reducers with out have to write a bunch of boiler plate.

Example
```
react g component common/button
```
or
```
npm run generate component common/button
```
The above commands create a directory in components/common called "button" and contains a ```component.js``` and ```styles.scss``` file
