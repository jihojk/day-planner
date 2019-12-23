$(document).ready(function(){
moment(Date);
const storageIndetifier = "storeID";
const dateIdentifier = "dateID" ;

var storeID = JSON.parse(localStorage.getItem(storageIndetifier));
var dateID = localStorage.getItem(dateIdentifier);

function setColor(){
    var now = moment().get("h") - 9;
    
    $(".hourBlock").each(function (index){
        $(this).children(".when").removeClass("past present future");
        if (index < now){
            $(this).children(".when").addClass("past");
        } else if (index === now){
            $(this).children(".when").addClass("present");
        } else {
            $(this).children(".when").addClass("future");
        };
    });
};

function saveNote(event) {
    event.preventDefault();
    var index =$(".saveButton").index(this);
    storeID[index]=$(this).parent().children(".when").val();
    localStorage.setItem(storageIndetifier,JSON.stringify(storeID));
}

function fillNote(){
    $(".when").each(function(index){
        if(storeID[index] !== null && storeID[index] !== ""){
            $(this).val(storeID[index]);
        }
    });
}

if(storeID === null){
    var storeID = new Array(9);
}
if(dateID===null){
    var dateID = moment().format('ddd, MMM Do YYY, h:mm a');
}


$("#currentDayTime").text(moment().format('ddd MMM Do YYYY, h:mm a'));
localStorage.setItem(dateIdentifier,moment().format('ddd MMM Do YYY, h:mm a'));

if(dateID !== moment().format('ddd MMM Do YYYY, h:mm a')){
    if(storeID !== undefined){
        storeID.fill("");
    }
}

setColor();

fillNote();

$(".saveButton").on("click", saveNote);
});

