class A {
    a: number = 100
    b: number = 200
}
class B extends A {
    addition() {
        let c = this.a + this.b
        return c
    }
}
let obj = new B()
console.log(obj.addition())