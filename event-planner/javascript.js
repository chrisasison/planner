const container = document.querySelector('.container');
let currentHour = new Date().getHours();
let count = 60;
setTime();

for(let i = 0; i < 9; i++){
    const rowElement = document.createElement('tr');
    const tableHead1 = document.createElement('td');
    const tableHead2 = document.createElement('td');
    const tableHead3 = document.createElement('td');
    const textArea = document.createElement('textarea');
    const saveBtn = document.createElement('button');

    //tableHead1 populating time of day
    const timeAdjuster = (9 + i) % 12;
    if(timeAdjuster > 8){
        tableHead1.innerText = timeAdjuster + 'AM';
    }else if(timeAdjuster < 6){
        if(timeAdjuster === 0){
            tableHead1.innerText = '12PM'
        }else{
            tableHead1.innerText = timeAdjuster + 'PM';
        }
    }

    //saveBtn save to local storage
    saveBtn.innerText = 'SAVE';
    saveBtn.addEventListener('click', function(){
        $(this).closest('tr').find('.taskTextArea').each(function() {
            let keyValue = this.value;
            localStorage.setItem(`text-${timeAdjuster}`, keyValue);
        });
    });

    //reloading the tasks in local storage
    window.addEventListener('load', function(){
        document.getElementsByClassName(`text-${timeAdjuster}`)[0].innerText = localStorage.getItem(`text-${timeAdjuster}`);
    });
        


    rowElement.setAttribute('class', 'row');
    //tableHead2 text area to enter tasks
    textArea.setAttribute('class', 'w-100 h-100 border border-light taskTextArea');
    textArea.setAttribute('type', 'text');
    tableHead2.appendChild(textArea);

    tableHead1.setAttribute('class', 'timeOfDay col-sm-1 border border-dark d-flex align-items-center justify-content-center');
    tableHead2.setAttribute('class', 'dailyTask col-sm-10 border border-dark');
    textArea.classList.add(`text-${timeAdjuster}`);
    tableHead3.setAttribute('class', 'localStorageBtn col-sm-1 border border-dark d-flex align-items-center justify-content-center');
    saveBtn.setAttribute('class', `btn btn-primary saveButton`);
    tableHead3.appendChild(saveBtn);
    rowElement.appendChild(tableHead1);
    rowElement.appendChild(tableHead2);
    rowElement.appendChild(tableHead3);
    container.appendChild(rowElement);
}

//clear text area and local storage
const clearBtn = document.createElement('button');
clearBtn.setAttribute('class', 'btn btn-danger btn-lg col-sm-12 my-3');
clearBtn.textContent = 'CLEAR TASKS';
clearBtn.addEventListener('click', function(){
    localStorage.clear();
    $('.taskTextArea').each(function() {
        this.value = '';
    });
})
container.appendChild(clearBtn);




function setTime(){
    const timerInterval = setInterval(function(){
        count--;
        currentHour = new Date().getHours();
        console.log(currentHour);
        if (document.getElementsByClassName(`text-${currentHour}`)[0]) {
            document.getElementsByClassName(`text-${currentHour}`)[0].classList.add('bg-success');
            if (document.getElementsByClassName(`text-${currentHour-1}`)[0]) {
                document.getElementsByClassName(`text-${currentHour-1}`)[0].classList.add('bg-dark');
            }
        }
        if (currentHour === 18) {
            $('.dailyTask').each(function() {
                this.classList.remove('bg-dark');
            });
        }
    }, 5000);
}
