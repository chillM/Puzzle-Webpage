$(document).ready(function() 
{
    //needed variables
    var validFields = {input1:false, input2:false, input3:false, input4:false};
    //add message boxes
    $( "<span class=\"info\" id=\"i1-msgbox\"></span>" ).insertAfter( "#input1" );
    $( "<span class=\"info\" id=\"i2-msgbox\"></span>" ).insertAfter( "#input2" );
    $( "<span class=\"info\" id=\"i3-msgbox\"></span>" ).insertAfter( "#input3" );
    $( "<span class=\"info\" id=\"i4-msgbox\"></span>" ).insertAfter( "#input4" );
    $("span").hide();

    $( "#input1" ).focusin(function() {
       // $("#msgbox").addClass("info");
        //$("#msgbox").text("This adds text to the box");
        //$("#msgbox").show();
    });

    $( "#input1" ).focusout(function() {
        //validate input when the user leaves
        if(this.value == "y"){
            //valid
            $("#input1").addClass("ok");
            $("#input1").removeClass("error");
            validFields["input1"] = true;
        }
        else{
            //invalid
            $("#input1").removeClass("ok");
            $("#input1").addClass("error");
            validFields["input1"] = false;

        }
    });

    $( "#input2" ).focusout(function() {
        //validate input when the user leaves
        if(this.value == "h"){
            //valid
            $("#input2").addClass("ok");
            $("#input2").removeClass("error");
            validFields["input2"] = true;
        }
        else{
            //invalid
            $("#input2").removeClass("ok");
            $("#input2").addClass("error");
            validFields["input2"] = false;

        }
    });

    $( "#input3" ).focusout(function() {
        //validate input when the user leaves
        if(this.value == "n"){
            //valid
            $("#input3").addClass("ok");
            $("#input3").removeClass("error");
            validFields["input3"] = true;
        }
        else{
            //invalid
            $("#input3").removeClass("ok");
            $("#input3").addClass("error");
            validFields["input3"] = false;

        }
    });

    $( "#input4" ).focusout(function() {
        //validate input when the user leaves
        if(this.value == "m"){
            //valid
            $("#input4").addClass("ok");
            $("#input4").removeClass("error");
            validFields["input4"] = true;
        }
        else{
            //invalid
            $("#input4").removeClass("ok");
            $("#input4").addClass("error");
            validFields["input4"] = false;

        }
    });

    $("#submit").click(function() {
        //validate
        if(validFields["input1"] && validFields["input2"] && validFields["input3"] && validFields["input4"]){
            //valid answer
            //go to win screen
            window.location.href = "win.html";
        }
        else{
            $("#msgbox").text("Not all letters are correct");
            $("#msgbox").addClass("alert alert-danger");
            $("#msgbox").show();
        }

    })

    //section for radio playing audio
    var audioElement = document.createElement('audio');
    var playing = false;
    var tracks = ["audio/Your Call.mp3", "audio/Smooth Lovin.mp3", "audio/Master of the Feast.mp3"];
    var countdownText = ["pictures/seven.jpg", "pictures/nine.jpg", "pictures/ten.jpg"];
    var currentTrack = 0;
    audioElement.setAttribute('src', 'audio/Your Call.mp3');

    $('#img34').click(function() {
        if(playing){
            //stop the music
            audioElement.pause();
            audioElement.currentTime = 0;
            currentTrack = (currentTrack + 1) % tracks.length;
            audioElement.setAttribute('src', tracks[currentTrack]);
            playing = false;
            document.getElementById("img31").src = "pictures/countdownStart.jpg";
            document.getElementById("img32").src = "pictures/one.jpg";
        }
        else{
            //start the music
            audioElement.play();
            playing = true;
            document.getElementById("img31").src = "pictures/countdown.gif";
            document.getElementById("img32").src = countdownText[currentTrack];
        }
    });
 
});

//global data needed
//data for image toggling
var toggled = {img12 : false, img14: false, img23: false};
var primaryImage = {img12 : "pictures/squareIcon.jpg", img13: "pictures/squareIcon.jpg", img14: "pictures/squareIcon.jpg", img23: "pictures/squareIcon.jpg"};
var secondaryImage = {img12 : "pictures/arrow.jpg", img13: "pictures/cup.jpg", img14: "pictures/arrow.jpg", img23: "pictures/arrow.jpg"};

//data for image rotation
var currentRotation = {img41 : 180, img43 : -90};

function toggleImage(id, recursive) { 
    if(!toggled[id]){
        //get from secondary array
        document.getElementById(id).src = secondaryImage[id];
    }
    else{
        //get from primary array
        document.getElementById(id).src = primaryImage[id];
    }

    if(recursive){
        if(id == "img12"){
            toggleImage("img13", false);
        }
        else if(id == "img13"){
            toggleImage("img14", false);
            toggleImage("img23", false);
            toggleImage("img12", false);
        }
        else if(id == "img14"){
            toggleImage("img13", false);
        }
        else if(id == "img23"){
            toggleImage("img13", false);
        }
    }

    toggled[id] = !toggled[id];

    //check if all are toggled
    if(toggled["img12"] && toggled["img13"] && toggled["img14"] && toggled["img23"]){
        //success, reveal the letter
        document.getElementById("img13").src = "pictures/removedCup.jpg";
    }
}


function rotateImage(id) {
    currentRotation[id] += 90;
    if(currentRotation[id] == 360){
        currentRotation[id] = 0;
    }
    document.getElementById(id).style.transform = "rotate(" + currentRotation[id] + "deg)";
    //Check if intended setup is  reached
    if(currentRotation["img41"] == 0 && currentRotation["img43"] == 0){
        //no rotation is necessary
        //change center image
        document.getElementById("img42").src = "pictures/m.jpg";
    }
}


//drag and drop functions
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, id) {
    ev.preventDefault();
    //var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
    document.getElementById("img24").src = "pictures/openDoor2.jpg";
}


