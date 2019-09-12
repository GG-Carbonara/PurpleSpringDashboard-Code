// var newDate = new Date();
// newDate.setDate(newDate.getDate() + 1);

// document.getElementById('displayDate').innerHTML = (newDate.getMonth() + 1) + '/' + newDate.getDate() + '/' + newDate.getFullYear();
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
SummaryDisplayFunction();




// function isActive(){
    
// }
