const container = document.querySelector('.container');

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
    
    

    rowElement.setAttribute('class', 'row');
    //tableHead2 text area to enter tasks
    textArea.setAttribute('class', 'w-100 h-100 border border-light taskTextArea');
    textArea.setAttribute('type', 'text');
    tableHead2.appendChild(textArea);

    tableHead1.setAttribute('class', 'timeOfDay col-sm-1 border border-dark d-flex align-items-center justify-content-center');
    tableHead2.setAttribute('class', 'dailyTask col-sm-10 border border-dark');
    textArea.classList.add(`text-${timeAdjuster}`);
    tableHead3.setAttribute('class', 'localStorageBtn col-sm-1 border border-dark d-flex align-items-center justify-content-center');
    saveBtn.setAttribute('class', 'btn btn-primary saveButton');
    tableHead3.appendChild(saveBtn);
    rowElement.appendChild(tableHead1);
    rowElement.appendChild(tableHead2);
    rowElement.appendChild(tableHead3);
    container.appendChild(rowElement);
}

$('.saveButton').on('click', function(){
    $(this).closest('tr').find('.taskTextArea').each(function() {
        console.log(this.value)
    });
})
