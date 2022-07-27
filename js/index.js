let headings = ["Length (Meter/Feet)","Volume (Liters/Gallons)","Mass (Kilograms/Pounds)"]
let paragraphs = []
let container = document.querySelector(".container")
let number = document.getElementById('num-el')
let convertBtn = document.getElementById('convert-btn')

convertBtn.addEventListener("click",function(){
    let num = number.value
    let check = document.querySelector(".main")
    if(num == ""){
        if(check){
            container.removeChild(check)
        }
        paragraphs = []
        alert("Enter a number into the text field")
        return 0
    }
    
    if(check || check && num == ""){
        container.removeChild(check)
        paragraphs = []
    }
    metersAndFeet(paragraphs, num)
    litersAndGallons(paragraphs, num)
    kilogramsAndPounds(paragraphs, num)

    createMainElement(container);

    for(let i =0; i<paragraphs.length; i++){
        render(headings[i],paragraphs[i])
    }
    
})

function createMainElement(container){
    let main = document.createElement("main")
    let row = document.createElement("div")
    row.classList.add("row")
    main.classList.add("main")
    main.appendChild(row)
    container.appendChild(main)
    
}

function render(heading, paragraph){
    let main = document.querySelector(".main")
    let row = document.querySelector(".row")
    let col = document.createElement("div")
    col.classList.add("col")
    row.appendChild(col)
    let head = document.createElement("h2")
    col.appendChild(head)
    head.textContent = heading
    let para = document.createElement("p")
    col.appendChild(para)
    para.textContent = paragraph
}

function metersAndFeet(arr,number){
    let feets = (number * 3.281).toFixed(3)
    let meters = (number / 3.281).toFixed(3)
    let statement = `${number} meters = ${feets} feet | ${number} feets = ${meters} meters`
    arr.push(statement)
}

function litersAndGallons(arr,number){
    let gallons = (number * 0.264).toFixed(3)
    let liters = (number / 0.264).toFixed(3)
    let statement = `${number} liters = ${gallons} gallons | ${number} gallons = ${liters} liters`
    arr.push(statement)
}

function kilogramsAndPounds(arr,number){
    let pounds = (number * 2.204).toFixed(3)
    let kilos = (number / 2.204).toFixed(3)
    let statement = `${number} kilos = ${pounds} pounds | ${number} pounds = ${kilos} kilos`
    arr.push(statement)
}