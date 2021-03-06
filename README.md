# Friendmate

Friendmate is a Facebook clone that replicates many of its core features, allowing users to sign up, add friends, and post multimedia and text to each other and respond to them via comments and likes.

[Friendmate Live](https://friendmate.herokuapp.com/?#/)

### Technologies

Friendmate is built primarily with the following: 

* PostgreSQL
* Ruby on Rails
* Javascript
* React
* Redux
* HTML/CSS
* AWS S3

### Features

#### User Creation and Sign Up
Users are able to create an account or log in with their credentials. Custom selector fields for birthday and gender as well as individualized error bars for incomplete fields.

<img src="/readme/fm_login.gif" width="400" height="364">

#### News Feed
Each User when they log in is greeted by a Feed, which is a compilation of all the content created by the user and their network of friends. Posts and associated comments are loaded on demand as the user scrolls to optimize load speed.

<img src="/readme/fm_feed.gif">

#### Profiles

Each User has a personalized profile, which is customizable and serves as a platform for the user or their friends to communicate in a more intimate place.

<img src="/readme/fm_wall.png">

#### Posts
Users are able to create posts, with a combination of text and multimedia content. 

<img src="/readme/fm_post.gif" width="600" height="500">

Users are able to react to other posts by commenting on them by text, pictures, or a mix of both, or by liking them.

<img src="/readme/fm_comment.gif" width="400" height="209">

<img src="/readme/fm_like.gif" width="400" height="209">

#### Friends
Users are able to find other users and friend them, connecting different users in a communal network where they can see and interact with each other's content.

<img src="/readme/fm_friends.png">

Users are able to add different users as friends, pending their approval.

<img src="/readme/add_friend.gif">

Users are able to quickly see all other users who have sent a friend request, and can then either approve or delete the request with live updates.

<img src="/readme/friend_update.gif">

### Future Features

* Filters for post accessibility
* Messenger
* Events
* Groups








