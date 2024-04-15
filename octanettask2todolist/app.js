    let inputData=document.querySelector("[input-task]");
    console.log(inputData);
    const addTaskBtn=document.querySelector("[add-task]");
    console.log(addTaskBtn);
    let list=document.querySelector("[display-list]");


   let taskList=[];

    addTaskBtn.addEventListener("click",()=>{
        let value=inputData.value;
        if(value.trim()!==""){
            taskList.push(value);
            addTaskToUi();
        }else{
            alert("add some task: task should not be empty ");
        }
        inputData.value="";
     
    });

    const addTaskToUi=()=>{
   
        console.log(taskList);
         let task=taskList[taskList.length-1];
            console.log(task);
            let li=document.createElement("li");
            li.textContent=task;
            list.appendChild(li);
            // adding delete icon
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
       
    }

    list.addEventListener("click",(e)=>{
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
        }
    },false)




  // let taskValue = inputData.value;
        // if (taskValue.trim() !== "") { // Check if the input is not empty or only contains whitespace
        //     let li = document.createElement("li"); // Create a new <li> element
        //     li.textContent = taskValue; // Set the text content of the <li> to the task value
    
        //     list.appendChild(li); // Append the <li> to the <ul>
    
        //     inputData.value = ""; // Clear the input field after adding the task
        // }

        // let taskvalue=inputData.value;
        // list.innerHTML += `<li>${taskvalue}</li>`;
        // inputData.value="";    
   

 


  