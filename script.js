// Display today's date.  Use .text method to set the text content of the today-date element to the real time date using the moment() method.format(date).  WANT TO CHANGE TIME FROM MILITARY TIME

$(document).ready(function () {

    var todayDate = $('.today-date');


    todayDate.text(moment().format('MM-DD-YYYY'))


    // Use momentsjs to find out the current time
    // If it's less than current time (PAST) - it's in the and change color to blue.

    // Get the 2 things I need to compare.  

    var timeBlock = $('.time-block').get();
    var currentTime = moment().format('HH')

    console.log(timeBlock)

    // Loop through the timeBlock array and declare i.

    for (var i = 0; i < timeBlock.length; i++) {

        // Set the value of the currentHour object to the value of the iterated timeBlock array. 
        // Looping through the timeBlocks and grabbing the hour. The currentHour object is defined as the timeBlock index. 

        var currentHour = $(timeBlock[i]).text();
        console.log(currentHour);
        console.log(currentTime);
        console.log(parseInt(currentHour));

        // An if statement to compare current time and time on calendar
        // Need to parse the string time into an integter. If currentHour is less than currentTime then we need to change the color of the row. 

        if (parseInt(currentHour) < parseInt(currentTime)) {

            console.log("inside if")
            // Iterate and target each timeBlock to change the value of the class to the .past style 

            $("#" + i).attr("class", "past");

// Use else if - iterate and target each timeBlock to change the value of the class to the .present style 

        } else if (parseInt(currentHour) == parseInt(currentTime)) {
            $("#" + i).attr("class", "present");
            
        } 

        // If neither of those are true, then else - has future class
        
        else 
     // (parseInt(currentHour) < parseInt(currentTime)) 
        {
            $("#" + i).attr("class", "future");
        }

    }

    // Need an event listener for when user clicks on the save button, then value of currentHour and input text is stored in local storage. 

    // Checked in the console to make sure data being saved.

    $(".saveBtn").on("click", function() {
       

        var value = $(this).parent().parent().find('textarea').val();
        console.log(value)

        var time = $(this).parent().parent().attr('id')
        console.log(time)
        // get hold of the ids ;
        
        // save in localStorage
        localStorage.setItem(time, value);
      });

})
   
    // NEED TO WRITE README.md  






// });


