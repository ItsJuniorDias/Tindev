# Tindev
![print-horz_1](https://user-images.githubusercontent.com/50254416/65558895-d0f89900-df0e-11e9-9971-e71d585cfe42.png)
# Week Omnistack #8 | Rocketseat
 - Development of an application using the stack *Node.js*, *ReactJS* e *React Native*
 
## Why?
This project is part of my portfolio, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: juniordias_@live.com
Connect with me at [LinkedIn](https://www.linkedin.com/in/alexandre-junior-236894190/).

## Installers
If you want to test the App in the Production mode, the installers are listed below
- NodeJs [link](https://nodejs.org/en/download/)for backend.
- ReactJs [](https://reactjs.org/docs/getting-started.html)for frontend.
- ReactNative [](https://facebook.github.io/react-native/docs/getting-started) for mobile

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
- Using **axes** to handle external API requests.

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
