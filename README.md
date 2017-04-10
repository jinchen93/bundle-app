# Bundle App

## Work in progress - tune in later for more
This app is being updated with features piece by piece. Check in later for more!

### Introduction
This app will aggregate media content from several sources and bundle them up into a single page app.
The purpose of this app is to make a single home page for users to check daily.
It removes the chore of navigating to the users fav. sites just to see if something new has been posted.
In the future users will have the ability to add/remove media channels.

### Instructions
To run the latest production build on a server:

```shell
$ cd server
$ npm install
$ node app.js
```

### Changelog
#### Version 1.4
- Add Reddit comments

#### Version 1.3
- Add Reddit

#### Version 1.2
- Add React Router
- Add branding

#### Version 1.1
- New bootstrap layout following Google's Material Design
- Revamped delete channel behavior
- Add App bar

#### Version 1.0
- Fully integrated app with MongoDB

### Features that I am Currently Working On:
#### User signup and login
- Users can choose username, password will be like connect the dots (like the Android phone lock screen) because I don't want to store real passwords in my toy app.
#### Home page
- Lets users select specific youtube channels or subreddits to populate the homepage with.
- Display the current and upcoming weather. Users can either select their city or use browser geolocation properties.
#### Youtube / Reddit tabs
- Confirmation screen for when users are deleting channels/subreddit.
- Confirmation screen when users successfully added a channel to the list.
