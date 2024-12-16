function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

let userName = user.join(" ");
console.log(greeter(userName));