let myTask = document.querySelector("#taskValue");
let myList = document.querySelector("#myTasks")
let AddBtn = document.querySelector("#addTask");
let ClearBtn = document.querySelector("#clearAll");
const itemStorage = JSON.parse(localStorage.getItem('items')) ? JSON.parse(localStorage.getItem('items')) : [];

itemStorage.map((element) => {
    myList.innerHTML += `
        <div class="task d-flex justify-content-between align-items-center mx-auto my-3 rounded">
            <p class="m-2 h5">${element}</p>
            <span onclick="deleteTask(this)" class="myCenter bg-danger rounded p-2 m-2 text-white">&#10008;</span>
        </div>
    `;
});

AddBtn.addEventListener("click", () => {
    if(myTask.value){
        itemStorage.push(myTask.value)
        localStorage.setItem('items', JSON.stringify(itemStorage))

        myList.innerHTML += `
            <div class="task d-flex justify-content-between align-items-center mx-auto my-3 rounded">
                <p class="m-2 h5">${myTask.value}</p>
                <span onclick="deleteTask(this)" class="myCenter bg-danger rounded p-2 m-2 text-white">&#10008;</span>
            </div>
        `;
        myTask.value = "";
    }
    else{
        alert("Please Enter a Task")
    }
});

ClearBtn.addEventListener("click", function(){
    localStorage.clear();
    myList.innerHTML = "";
})

function deleteTask(element){
    let deleteMe = element.parentNode.firstElementChild.innerHTML;
    let index = itemStorage.indexOf(deleteMe);
    if (index >= 0) {
        itemStorage.splice( index, 1 );
    }
    localStorage.setItem('items', JSON.stringify(itemStorage))
    element.parentNode.remove();
}