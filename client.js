// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
let employee1 = {
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000', 
  reviewRating: 3
}

let employee2 =  {
  name: 'Jem',
  employeeNumber: '62347',
  annualSalary: '63500',
  reviewRating: 4
}
let employee3 = {
  name: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5
}
let employee4 = {
  name: 'Robert',
  employeeNumber: '26835',
  annualSalary: '66000',
  reviewRating: 1
}
let employee5 = {
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
}



// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  //take in an employee which is an object
  //const bonusObject = {}
  //let bonusPercentage = 0;
  let employeeBonuses = []
  //let totalBonus = bonusPercentage * employee.annualSalary;
  //let totalCompensation = employee.annualSalary + totalBonus;
  for (let i = 0; i < employee.length; i++) {
    const bonusObject = {}
    let bonusPercentage = 0;

  

  //put the name in bonusObject from employeeObject
  if (employee[i].reviewRating === 3) {
    bonusPercentage = .04;
  }
    //console.log('expect bonusPercentage to be .04: ', bonusPercentage);
  else if (employee[i].reviewRating === 4) {
    bonusPercentage = 0.06;
  }
  else if (employee[i].reviewRating === 5) {
    bonusPercentage = 0.10;
  }
  if (employee[i].employeeNumber.length === 4) {
    bonusPercentage += .05;
    //console.log('expect 4: ', employee.employeeNumber.length);
  }

  if(employee[i].annualSalary > 65000) {
    bonusPercentage -= .01;
  }

  if(bonusPercentage > .13) {
    bonusPercentage = .13;
  }

  if(bonusPercentage < 0) {
    bonusPercentage = 0;
  }

  let totalBonus = bonusPercentage * (employee[i].annualSalary * 1);
  let totalCompensation = (employee[i].annualSalary * 1) + totalBonus;
  
  bonusObject.name = employee[i].name
  bonusObject.bonusPercentage = bonusPercentage
  bonusObject.totalCompensation = totalCompensation
  bonusObject.totalBonus = totalBonus

  employeeBonuses.push(bonusObject);
  }
  //console.log('expect .09: ', bonusPercentage);
  // console.log(totalBonus)
  // console.log(totalCompensation)


  
  
  // return new object with bonus results
    //return bonusObject;
    return employeeBonuses
}

console.log(calculateIndividualEmployeeBonus(employees));