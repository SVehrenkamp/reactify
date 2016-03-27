#!/bin/bash
#Run Generator Command
# Example Commands:
# react component common/Button :: Generates a Component and SCSS file
# react action global/NEXT_ITEM :: Generates an Action
# react container UserContainer :: Generates a Container Component

# node blueprints/generator.js $1 $2 $3
Reset='\x1B[0m';
Blu='\x1B[0;34m';
Red='\x1B[0;31m';
Gre='\x1B[0;32m';
Yel='\x1B[0;33m';
Cya='\x1B[0;36m';

# get command type
case $1 in
  # Generate a component/action/container/reducer
  "g" | "generate" | "-g" | "--generate") node blueprints/generator $2 $3;;
  # Start the dev server
  "s" | "serve" | "-s" | "--serve") node server.js --env=dev;;
  # Start the dev server and serve from the dist folder
  "s:dist" | "serve:dist" | "-s:dist" | "--serve:dist") echo -e "You want to start the server and serve from the dist folder!";;
  # Build Project for production
  "b" | "build" | "-b" | "--build") echo -e "You want to build the project for production!";;
  # Delete a component/action/container/reducer
  "d" | "delete" | "-d" | "--delete") echo -e "You want to delete a component ";;
  # Show Help Menu
  "h" | "help" | "-h" | "--help") echo -e "
  Available Commands in React-CLI:

  react g, generate${Reset} ${Yel}<component|action|container|reducer> ${Yel}<name|folder/name>${Reset}
    ${Cya}-Creates a new component, action, container or reducer.${Reset}

  react d, delete${Reset} ${Yel}<component|action|container|reducer> ${Yel}<name|folder/name>${Reset}
    ${Cya}-Deletes a component, action, container or reducer.${Reset}

  react s, serve${Reset}
    ${Cya}-Starts the development server with the development environment.${Reset}

  react s:dist, serve:dist${Reset}
    ${Cya}-Starts the development server with the production environment.${Reset}

  react b, build${Reset}
    ${Cya}-Builds the project for production.${Reset}

  react h, help${Reset}
    ${Cya}-Displays this help menu.${Reset}

    ";;
  # Catch all
  *) echo -e " ${Red} Invalid command '$1'${Reset}
  Available Commands in React-CLI:

  react g, generate${Reset} ${Yel}<component|action|container|reducer> ${Yel}<name|folder/name>${Reset}
    ${Cya}-Creates a new component, action, container or reducer.${Reset}

  react d, delete${Reset} ${Yel}<component|action|container|reducer> ${Yel}<name|folder/name>${Reset}
    ${Cya}-Deletes a component, action, container or reducer.${Reset}

  react s, serve${Reset}
    ${Cya}-Starts the development server with the development environment.${Reset}

  react s:dist, serve:dist${Reset}
    ${Cya}-Starts the development server with the production environment.${Reset}

  react b, build${Reset}
    ${Cya}-Builds the project for production.${Reset}

  react h, help${Reset}
    ${Cya}-Displays this help menu.${Reset}

    ";;
esac
