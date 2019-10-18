// Display today's date.  Use .text method to set the text content of the today-date element to the real time date using the moment() method.format(date).  WANT TO CHANGE TIME FROM MILITARY TIME

$(document).ready(function () {

    var todayDate = $('.today-date');


    todayDate.text(moment().format('MM-DD-YYYY'))


    // Use momentsjs to find out the current time
    // If it's less than current time (PAST) - it's in the and change color to blue.

    // Get the 2 things I need to compare.  WHY DO I NEED TO USE .get HERE?

    var timeBlock = $('.time-block').get();
    var currentTime = moment().format('HH')
    var table = $("td");

    //  The .each can make the timeBlock elements an  array.  

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
        //   Need to parse the string time into an integter. If currentHour is less than currentTime then we need to change the color of the row. 

        if (parseInt(currentHour) < parseInt(currentTime)) {

            console.log("inside if")
            // It will iterater and target each timeBlock to change the value of the class to the .past style 
            $("#" + i).attr("class", "past");

        } else if (parseInt(currentHour) == parseInt(currentTime)) {
            $("#" + i).attr("class", "present");
            
        } 
        
        else 
     // (parseInt(currentHour) < parseInt(currentTime)) 
        {
            $("#" + i).attr("class", "future");
        }

    }

    // STORE THE TIME AND USER INPUT IN LOCAL STORAGE.  BUT DON'T DISPLAY IT, I GUESS?  Need to set the info for storage. But since we don't need to display the info, no need to "get" it
    // Need an event listener for when user clicks on the save button, then value of currentHour and input text is stored in local storage.  Should probably use .each() to iterate over each of the matched elements.

    // CHECK THE STORAGE in the console to make sure data being saved.  IT'S UNDEFINED!

    $(".saveBtn").on("click", function() {
        // get nearby values
                // TODO :  get hold of the description

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


