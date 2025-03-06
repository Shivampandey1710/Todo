// select everything that will be required!

const input = document.querySelector("input");
const button = document.querySelector("button");
const taskList = document.querySelector(".list");


// User intraction

const inputHandler = function (){

      const newTask= input.value;

      if(newTask.length==0){return;}
      //alert("Task"+newTask);
     const taskElem =  document.createElement("li"); //create Element
     taskElem.innerText=newTask; //data add

      //append
      taskList.appendChild(taskElem);

      input.value = "";
       
      taskElem.addEventListener("click" ,function(){
            taskElem.remove();
      });
}
button.addEventListener("click",inputHandler);


