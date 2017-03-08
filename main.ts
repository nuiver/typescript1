interface Person {
  name: string;
  age: number;
}
function reality(person: Person):  void{
  console.log( person.name + " is " + person.age + "jaar oud.")
}

var nuiver = {
  name: "Mark",
  age: 39
};

reality(nuiver);
