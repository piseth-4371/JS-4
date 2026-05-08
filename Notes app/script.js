const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".inputBox");

showNotes();

createBtn.addEventListener('click', ()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.classList ="inputBox";
    inputBox.setAttribute("contenteditable", "true");
    img.src="images/trash.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click', function(e){
    if(e.target.tagName ===  "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".inputBox");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorage(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}
document.addEventListener("keydown", event =>{
    if(event.key =="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
// localStorage.clear();
   