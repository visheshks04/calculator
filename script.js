function clrscr(){
    result_box = document.getElementById('result')
    result_box.value = "0"
}

function display(ch){
    result_box = document.getElementById('result')
    if(result_box.value == '0' || result_box.value == 'expression error'){
        result_box.value = ch
    }
    else{
        result_box.value += ch
    }
}   

function solve(){
    exp = document.getElementById('result').value
    try{
        f = eval(exp)
    }

    catch (err){
        f = 'expression error'
    }
    document.getElementById('result').value = f
}

function backspace(){
    result_box = document.getElementById('result')

    if(result_box.value != '0'){
        if (result_box.value.length == 1){
            result_box.value = '0'
        }

        else{
            result_box.value = result_box.value.slice(0,-1)
        }
    }
}