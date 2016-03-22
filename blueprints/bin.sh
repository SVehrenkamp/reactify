#!/bin/bash
#Run Generator Command
# Example Commands:
# react component common/Button :: Generates a Component and SCSS file
# react action global/NEXT_ITEM :: Generates an Action
# react container UserContainer :: Generates a Container Component

node blueprints/generator.js $1 $2
