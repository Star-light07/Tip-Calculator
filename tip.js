let billDisplay = document.getElementById('bill-display');
let tipDisplay = document.getElementById('tip-display');
let display = document.getElementById('total')
let addPeople = document.getElementById('add')
let subPeople = document.getElementById('sub')
let peopleNum = document.getElementById('numberOfPeople')

peopleNum = Number(addPeople.value)

const totalPrice = () => {

    let bill = Number(billDisplay.value)

    let tip = Number(tipDisplay.value)

    tipPercentage = tip/100
    tipAmount = tipPercentage * bill
    total = tipAmount + bill

    display.innerText = `$${total}`


}



const increasePeople = () => {


    addPeople += 1

   // let addPeople = Number(addPeople)

    peopleNum.innerText = Number(addPeople)
   

  

  return addPeople

  totalPrice()



}
increasePeople()
increasePeople()

const decreasePeople = () => {

    subPeople.value += 1

    peopleNum.innerText = Number(subPeople.value)
    totalPrice()


}
