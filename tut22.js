console.log("welcomet o tut 22");
let notesObj = [];
showNotes();

// If user add a note added to the local storage
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {

    let addtxt = document.getElementById("addtxt");
    let addtitle = document.getElementById("addTitle");

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);


    }

    let myobje={
        title:addtxt.value,
        text:addtitle.value
    }

    notesObj.push(myobje);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = " ";
    addtitle.value =" ";
    // console.log(notesObj );

    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);


    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
          
                <div class="card-body">
                  <h5 class="card-title"> ${element.title + 1}</h5>
                  <p class="card-text">${element.text}</p>
                  <button id="${index}"  onclick="deleteNode(this.id)" class="btn btn-primary">Delte Notes</button>
                </div>
            </div>
            `
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use Add a  " section above the add nodes`
    }
}

// function to delete a node 

function deleteNode(index) {
    console.log('I am deleting', index);


    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);


    }
notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));
showNotes();

}




let search=document.getElementById('searchTxt');

search.addEventListener("input",function(){
    let inputVal=search.value.toLowerCase();
    console.log("Input event fired",inputVal);
    let notecards=document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;

        if(cardTxt.includes(inputVal)){
            element.style.display="block";

        }
        else{
            element.style.display="none";

        }
        // console.log(cardTxt);

    })


})






 