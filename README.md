# Bundle!

## Introduction
This app will aggregate media content from several sources and bundle them up into a single page app.
The purpose of this app is to make a single home page for users to check daily.
It removes the chore of navigating to the users fav. sites just to see if something new has been posted.
In the future users will have the ability to add/remove media channels.


## Navigating the Repo
_----Node build is deprecated!----_

The Rails build is the latest version of the app.

##### Steps to get the Rails server up and started:
1. Change into the Rails directory with `cd rails_build`

2. Run `bundle install` to install gems

3. Run `rake db:create` to create the Postgres server

4. Run `rake db:migrate` to create the tables in the Postgres server

5. Change into the client directory with `cd client`

6. Install npm packages with `npm install`

7. Compile production ready build with `npm run build`

8. Change into the build directory with `cd build`

9. Copy all of the contents to the `rails_build/public` directory with `cp -rf * ../../public`

10. Change back to the `rails_build` root directory with `cd ../..`

11. Run the Rails server on port :9000 `rails s -p 9000`

12. Navigate to `localhost:9000`

### Changelog
#### Version 2.1
- Add Twitch channels

#### Version 2.0
- Add user login and signup

#### Version 1.5
- Migrate to Rails Backend

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
