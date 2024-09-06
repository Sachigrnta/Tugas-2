document.getElementById('formdata').addEventListener('submit', function(event){
    event.preventDefault();
    const valueInput = document.getElementById('input').value;
    console.log(valueInput);

    if(valueInput <= 40){
        document.getElementById('hasil').innerHTML = "E";
    }else if(valueInput > 40 && valueInput <= 55){
        document.getElementById('hasil').innerHTML = "D";
    }else if(valueInput > 55 && valueInput <= 70){
        document.getElementById('hasil').innerHTML = "C";
    }else if(valueInput > 70 && valueInput <= 80){
        document.getElementById('hasil').innerHTML = "B";
    }else if(valueInput > 80 && valueInput <= 100){
        document.getElementById('hasil').innerHTML = "A";
    }
})