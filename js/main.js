// Question 1
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
for(let i = 0; i < Object.values(person3).length; i++){
    console.log(Object.values(person3)[i])
}
//person3.foreach((person)=>console.log(person3.values()))
// Question 2
function People(name, age){
    this.name = name
    this.age = age

    this.printInfo = () => {
        return `You are ${this.name}, you are ${this.age} years old`
    }
    this.incAge = (age) => {
        return this.age += age
    }
}
let new_person1 = new People('Jack',22)
 console.log(new_person1.printInfo())
new_person1.incAge(3)
 console.log(new_person1.printInfo())
 let new_person2 = new People('Bob',30)
 console.log(new_person2.printInfo())

 // Question 3
 const isBigString = (string) => {
    return new Promise((resolve,reject) => {
        if(string.length > 10){
            resolve(true);
        } else {
            reject(false)
        }
    })
}

// Using a promise
isBigString('qwertyuiopa').then((result) => {
    console.log('Big Word')
}).catch((error) => {
    console.log('Small Number')
})