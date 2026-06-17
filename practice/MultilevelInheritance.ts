class Animal{
    eat(){
        console.log("Animal is Eating")
    }
}
class Dog extends Animal{
    bark(){
        console.log("Dog is barking")
    }
}
class Puppy extends Dog {
    weep(){
        console.log("Puppy is weeping")
    }
}

let action = new Puppy()
action.weep()
action.bark()
action.eat()

let action1 = new Dog()
action1.bark()
action1.eat()