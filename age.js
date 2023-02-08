var ageCalculator = () =>{
    while(1){
    let inputDate = Date.parse(prompt("Please enter your birthday in the form YYYY-MM-DD:"))
    let currentDate = Date.now()

    if (inputDate < currentDate){
        let age = Math.floor((currentDate - inputDate)/(1000*60*60*24*365))
        return age
    } else {
        console.log("ERROR: You have entered an invalid date. Please try again.")
    }
}
}
console.log(`You are ${ageCalculator()} years old.`)