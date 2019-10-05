# Tindev
![print-horz_1](https://user-images.githubusercontent.com/50254416/65558895-d0f89900-df0e-11e9-9971-e71d585cfe42.png)
# Week Omnistack #8 | Rocketseat
 - Development of an application using the stack *Node.js*, *ReactJS* e *React Native*
 
 ## About this Project

The idea of the App is:

_"a meeting between programmers so they can share and share knowledge and experience"._
 
## Why?
This project is part of my portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: juniordias_@live.com;

Connect with me at [LinkedIn](https://www.linkedin.com/in/alexandre-junior-236894190/).

## Installers
If you want to test the App in the Production mode, the installers are listed below
- NodeJs [Link](https://nodejs.org/en/download/) for backend.
- ReactJs [Link](https://reactjs.org/docs/getting-started.html) for frontend.
- ReactNative [Link](https://facebook.github.io/react-native/docs/getting-started) for mobile

## Backend
## App
 - The application to be developed will be similar to Tinder, but for developers;;
 - Developers will be registered through the Github user;
 - Data returned from a Github API request will be saved to the database;
 - It will be possible to like and dislike users;

 - Due to the architecture of the **Node**, through a **websocket**, communication will be made between the server and the frontend in real time;

## Configuration
  - Configuration **Express** , a microframework that deals with routes, requests and responses;
- Configuration **nodemon** to monitor code changes and restart the server automatically when changes occur;
- Creation of *Models* and *Controllers*;
- Configuration of **mongoose** (ODM that uses Javascript syntax) to handle **MongoDB**, a nonrelational database;
- Using **axios** to handle external API requests.

## Web Socket
  - Configuration **socket.io**, library that abstracts from Node's standard websocket protocol and provides an easier way to work with it
  
  ## Frontend

## Configuration
  - Configuration **BrowserRouter** and **Route** (lib *react-router-dom*) to handle navigation and each route individually;
  - Configuration of **axios** to make the request to the database;
  - Stylization of github Login pages and user listings;
  - Implementation of the like and dislike features;

## Web Socket
  - configuration **socket.io-client**, responsible for creating a connection via websocket protocol;
  
  ## Mobile
  
  ## Configuration
  
- Using **react-navigation** to deal with navigation in a basic way;
- Use of **react-native-gesture-handler**, dependent on *react-navigation*, responsible for handling user gestures;
- Use of **react-native-reanimated**, used to animate transitions at times when the user navigates between screens;
- Configuration of **axios** to make requests to external APIs;
- Using **asyncStorage** as local database in format and working in key format => value

## Getting Started

### Prerequisites

To run this project in the development mode, you'll need to have a basic environment to run a React and React Native App, also,  that can be found [here](https://facebook.github.io/react-native/docs/getting-started).

### Installing

**Cloning the Repository**

```
$ git clone https://github.com/ItsJuniorDias/Tindev-JavaScript

$ cd Tindev-JavaScript
```

**Installing dependencies**

```
$ yarn add nodemon
```

_or_

```
$ npm install
```
**Running**

**Backend**

```
$ cd backend
$ yarn dev
```
-Leave running the backend and run the front after mobile.

**FrontEnd**

```
$ cd frontend
$ yarn start
```

**Mobile**
- You need to have Android Studio installed and configured and your computer to run APP React Native;
- With all dependencies installed and the environment properly configured, you can now run the app;
- With Android Studio running and Emulador open:

Android

```
$ cd Tindev
$ react-native run-android
```

iOS

```
$ cd Tindev
$ react-native run-ios
```





