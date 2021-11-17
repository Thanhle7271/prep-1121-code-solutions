var person = {
  firstname: "Thanh",
  Lastname: "Le",
  hobby: "gym",
}
console.log(person);

var fullname = person.firstname + ' ' + person.Lastname;
console.log("The person's name is:",fullname);

person.job = "jerk";
console.log("The person's current job is: ",person.job);

person.previousJob = "amigo" ;
console.log("The person's previous job is:", person.previousJob);

console.log("The complete person object:",person)
