function display(id){
    x = document.getElementById(id);
    x.classList.toggle("displayed");    
}

function displaySidebar(id){
    x = document.getElementById(id);
    x.classList.toggle("sidebarDisplay");     
    x.classList.toggle("sidebarDisappear");   
}

function openTabFunction(event, tabName) {
    var i, tab, tabDisplayButton;
  
    tab = document.getElementsByClassName("summaryTab");
    for (i = 0; i < tab.length; i++) {
        tab[i].style.display = "none";
    }
  
    tabDisplayButton = document.getElementsByClassName("tabDisplayButton");
    for (i = 0; i < tabDisplayButton.length; i++) {
        tabDisplayButton[i].className = tabDisplayButton[i].className.replace(" active", " ");
    }
  
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
  }  

function newClientNextTab(currentTab, nextTab, activeTab){
    document.getElementById(currentTab).style.display = "none";
    document.getElementById(nextTab).style.display = "block";

    tabDisplayButton = document.getElementsByClassName("newClientContentBox");
    for (i = 0; i < tabDisplayButton.length; i++) {
        tabDisplayButton[i].className = tabDisplayButton[i].className.replace(" activeNewClientForm", " ");
    }    
    document.getElementById(activeTab).className += " activeNewClientForm";
}

function newClientPreviousTab(currentTab, previousTab, activeTab){
    document.getElementById(currentTab).style.display = "none";
    document.getElementById(previousTab).style.display = "block";
    
    tabDisplayButton = document.getElementsByClassName("newClientContentBox");
    for (i = 0; i < tabDisplayButton.length; i++) {
        tabDisplayButton[i].className = tabDisplayButton[i].className.replace(" activeNewClientForm", " ");
    }    
    document.getElementById(activeTab).className += " activeNewClientForm";
}

function newClientSubmitFunction(){
    alert('test submit forms!');
}

function checkIfCompleted(formName, numberOfForms, currentTab, nextTab, activeTab){
    

}

window.onload = initDate;
function initDate() {
     var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday");
     var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
     var now = new Date();
     var dateString = dayName[now.getDay()] + ", " + monthName[now.getMonth()] + " " + now.getDate() + ", " + now.getFullYear();
     document.getElementById("displayDate"). innerHTML = dateString;
}




// document.addEventListener('DOMContentLoaded', function() {

// }, false);

// function isActive(){
    
// }
