

function display(id){;
    if (id.style.display == "none") {
        id.style.display = "block";
    } else {
        id.style.display = "none";
    }           
}



function SidebarDropdownFunction() {
    var x = document.getElementById("Dropdown");
    display(x);
  }


  function ClientInfoDropdownFunction(){
    var x = document.getElementById("ClientInfoDropdown");
    display(x);
}

function CaregiversDataDropdownFunction(){
    var x = document.getElementById("CaregiversDataDropdown");
    display(x);
}

function DocumentsDropdownFunction(){
    var x = document.getElementById("DocumentsDropdown");
    display(x);
}


function FormsDropdownFunction(){
    var x = document.getElementById("FormsDropdown");
    display(x);
}


function SummaryDisplayFunction(){
    var x = document.getElementById("Summary");
    display(x);

}

function ClientInfoDisplayFunction(){
    var x = document.getElementById("new-Client");
    display(x);
}

function ActiveClientsDisplayFunction(){
    var x = document.getElementById("active-Clients");
    display(x);
}

function AddCaregiverDisplayFunction(){
    var x = document.getElementById("add-Caregiver");
    display(x);
}

function ActiveCaregiversDisplayFunction(){
    var x = document.getElementById("active-Caregivers");
    display(x);
}

document.addEventListener('DOMContentLoaded', function() {
    SummaryDisplayFunction();
    SidebarDropdownFunction();
    SummaryDisplayFunction();
    SidebarDropdownFunction();
    ClientInfoDisplayFunction();
    ActiveClientsDisplayFunction();
    AddCaregiverDisplayFunction();
    ActiveCaregiversDisplayFunction();
}, false);

window.onload = initDate;
function initDate() {
     var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday");
     var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
     var now = new Date();
     var dateString = dayName[now.getDay()] + ", " + monthName[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
     document.getElementById("displayDate"). innerHTML = dateString;
}






// function isActive(){
    
// }
