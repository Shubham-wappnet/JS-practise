let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const obj=JSON.parse(text)
console.log(obj)
console.log(obj.employees[1].lastName)


////
const heros=[
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]
  console.log(heros[0].powers[2])
  console.log(heros[1].powers[2])
  console.log(heros[0].name)
  
  const mystring=JSON.stringify(heros)
  console.log(mystring)
  const myobj=JSON.parse(mystring)
  console.log(myobj)
  