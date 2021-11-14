function func1() {
    var inRef = document.getElementById('input1')
    var hRef = document.getElementById('h1')
    hRef.innerText = ''
    var name = inRef.value 
    if(hRef.innerText=='') {
        hRef.innerText = ("Hello "+name)
        hRef.style.color = "red"
    }
    
}
function func2() {
    var inRef = document.getElementById('input1')
    var hRef = document.getElementById('h1')
    hRef.innerText = ''
    var name = inRef.value 
    if(hRef.innerText=='') {
        hRef.innerText = ("Hello "+name)
        hRef.style.color = "blue"
    }
    
}
function func3() {
    var inRef = document.getElementById('input1')
    var hRef = document.getElementById('h1')
    hRef.innerText = ''
    var name = inRef.value 
    if(hRef.innerText=='') {
        hRef.innerText = ("Hello "+name)
        hRef.style.color = "green"
    }
    
}
