function reality(person) {
    var verdict = person.name + " is " + person.age + "jaar oud.";
    return verdict;
}
var nuiver = {
    name: "Mark",
    age: 39
};
console.log(reality(nuiver));
