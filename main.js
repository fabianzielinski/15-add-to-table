const names = [];
const div = document.querySelector('div');
const button = document.querySelector('button');

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if(input.value.length){
        for(name of names){
            if(name === newName){
                input.value = '';
                alert('To imie już jest!!!');
                return
            }
        }
        names.push(newName);
        div.textContent += newName + ', ';    
        input.value = '';
    }
};

button.addEventListener('click', addName);


