interface Person {
  name: string;
  age: number;
}
function reality(person: Person):  string {
  let verdict: string = person.name + " is " + person.age + " jaar oud.";
  return verdict;
}

let nuiver = {
  name: "Mark",
  age: 39
};

console.log(reality(nuiver));
