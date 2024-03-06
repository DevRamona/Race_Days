let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = false;
const age = 19;
if(age > 18 && registeredEarly) {
raceNumber += 1000;
console.log(`You are an adult and registered early. Your race number is ${raceNumber}. You will race at 9:30 am.`);
} else if(age > 18 && !registeredEarly){
  console.log(`You're an adult and registered late. Your race numbe is ${raceNumber}.You will race at 11:00`)
} else if (age < 18){
  console.log(`You're a youth, so the racenumber is ${raceNumber}. You will race at 12:30pm`)
}else {
    console.log(`Please see the registration desk.`);
}



