const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const clearAllButton = document.createElement("button"); // Create a new button element
clearAllButton.textContent = "Clear All"; 
clearAllButton.classList.add("clear-all"); 
function  addTask(){
    if(inputBox.value==='')
        {
        alert("Nothing to add here ! Write something to add.");
    }
    else
    {
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);


    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
     if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
     }
     else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
     }

}, false);

document.querySelector(".todo-app").appendChild(clearAllButton);

clearAllButton.addEventListener("click", function () {
  // Confirm before clearing the list
  if (confirm("Are you sure you want to clear all tasks?")) {
    listContainer.innerHTML = ""; 
    saveData(); 
  }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showList(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showList();

