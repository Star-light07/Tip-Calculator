let billDisplay = document.getElementById('bill-display');
let tipDisplay = document.getElementById('tip-display');
let display = document.getElementById('total')
let addPeople = document.getElementById('add')
let subPeople = document.getElementById('sub')

let peopleNum = document.getElementById('people-num')

let peopleNumber = Number(peopleNum.innerText)



const totalPrice = () => {

    let bill = Number(billDisplay.value)

    let tip = Number(tipDisplay.value)

    tipPercentage = tip/100
    tipAmount = tipPercentage * bill
    total = tipAmount + bill

    let totalBill = total/peopleNumber

    display.innerText = `$${totalBill}`


}

const increasePeople = () => {


    peopleNumber += 1

    peopleNum.innerText = peopleNumber

   totalPrice()


}



const decreasePeople = () => {

    if (peopleNumber >= 1) {
        peopleNumber -= 1

        peopleNum.innerText = peopleNumber

        totalPrice()
    }

}
