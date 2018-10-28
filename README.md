## Deck of Legends App
*(Working title)*

Heroku App - https://glacial-falls-95100.herokuapp.com


Love collecting sports trading cards? Interested in easily finding facts and statistics about a MLB Hall of Famer? 
We are a virtual baseball card collecting app for Hall of Fame players. Add your favorite players to your deck and show off your sweet collection to your friends!


**Who is our user?**

- Youth who are more oriented towards using computers and tech rather than using real baseball cards.
- Baseball fans who are interested in a quick and easy way to find and learn statistics about the best players of all time.


**User Stories**
- As a user, I want to be able to login to my account and see my deck of saved cards.
- As a user, I want to easily search for a player in the hall of fame and view the card for that player.
As a user, I want to view that singular card with a picture of the player, statistics next to the card, and a button to add the card to my deck if I want to.
- As a user, I want to view all the cards on one page and scroll through them. 
- As a user, I want to easily navigate to desired page by using navigation in the header of each page. 


**The technical parts...**
The front end will be built using React, Bulma, and custom CSS stylings.  The UI will resemble that of a baseball card, where the user can reference stats of Hall of Fame baseball players.  The backend will consist of a database with two tables, a user table (with email and password authentication), and players (their names, year inducted, primary team, and picture).  The statistics will be fetched from a stats API maintained by Major League Baseball.  The connection of data to components will be made through Express, Node, and React Router.


**Please refer to the ARTIFACTS folder for further documentation about our project.**



