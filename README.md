# React Native Boilerplate

This project was bootstrapped with [React Native CLI](https://reactnative.dev/docs/environment-setup).
Make sure you configured environment as described in above tutorial.

## Setup

If after environment configuration you will get error 
```
SDK location not found.
``` 
 - Go to ```android/ ```
 - Create a file ```local.properties ``` and add this line :

```bash
sdk.dir = /Users/USERNAME/Library/Android/sdk
```
Where ```USERNAME``` is your macOS username

## Installation

Use the package manager yarn to install the app.

```bash
yarn
```
#### Run metro:
```bash
yarn start
```

#### For iOS:
```bash
yarn ios
```

#### For Android:
```bash
yarn android
```

##  Folders structure explanation

 - src
	 - api 
	  `API configuration`
	 - assets 	
	  `Assets used in project`
	 - components
	  `Reusable components`
	 - context
	  `Context config (e.g. app theme, app locale)`
	 - hooks
	  `Reusable custom hooks`
	 - i18n
	  `Translations configuration`
	 - navigations
	  `Navigation configuration`
	 - redux
	  `State management configuration`
	 - screens
	  `Separated app screens`
	 - styles
	  `Shared styles configuration related to theme (e.g. colors)`
	 - tests
	  `Test configuration`
	 - utils
	  `Reusable functions, helpers (e.g. date format function)`