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
        $("#msgbox").text("This adds text to the box");
        $("#msgbox").show();
});

$( "#input1" ).focusout(function() {
    //validate input when the user leaves
    if(this.value == "a"){
        //valid
        $("#msgbox").text("This adds text to the box");
        $("#input1").addClass("ok");
        validFields["input1"] = true;
    }
    else{
        //invalid
        $("#msgbox").text("This adds text to the box");
        $("#input1").removeClass("ok");
        validFields["input1"] = false;

    }
});

$("#submit").click(function() {
    //validate
    if(validFields["input1"]){
        //valid answer
        //go to win screen
        window.location.href = "http://google.com";
    }

})
 
});

//global data needed
//data for image toggling
var toggled = {img12 : false};
var primaryImage = {img12 : "pictures/squareIcon.jpg"};
var secondaryImage = {img12 : "pictures/escher.jpg"};

//data for image rotation
var currentRotation = {img42 : 0};

function toggleImage(id) { 
    if(!toggled[id]){
        //get from secondary array
        document.getElementById(id).src = secondaryImage[id];
    }
    else{
        //get from primary array
        document.getElementById(id).src = primaryImage[id];
    }

    toggled[id] = !toggled[id];
}


function rotateImage(id) {
    currentRotation[id] += 90;
    if(currentRotation[id] == 360){
        currentRotation[id] = 0;
    }
    document.getElementById(id).style.transform = "rotate(" + currentRotation[id] + "deg)";
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
    document.getElementById("img24").src = "pictures/openDoor.jpg";
}


//JQuery input validation


