# Day-Planner

## Description

For this project, I was to create a day planner that showed the date in real time. I used momentsjs for this, which is an open source library.  The library is a wrapper for the Date object.  

The instructions for my assignment were to display standard business hours in the planner with a text input, so the user can describe what needs to be done each hour. When clicking the save button, the time and the user input saves in local storage. In addition, when the current time is in the past, the color of the hour row changes to grey. When it is the current hour, the color is red. When the hour is in the future, the color changes to green.  

I started by creating a table using Boostrap. To grab the current time variable, I used momentsjs. I then created a for loop interating through the length of the blocks of time. Within the for loop I made an if statement in order to compare the current time with the time on the calendar.

To save the time and the user input, I made an event listener. Within it, I created variables for the value (user input) and time.  Then I set them to local storage with the SetItem method.



## Instillaton

Visual Studio Code was used as the source-code editor.  Google FU was utilized a lot in this application.  I used Boostrap, JQuery, Momentsjs to complete the app.

## Credits

Classmate Courtney Tucker helped me get started with my for loop. My tutor, instructor and class TAs were also helpful in helping me work out issues.

## License

This project is licensed under the MIT License.
