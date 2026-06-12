class ConstructorWithObject {
    public emp

    constructor(emp: { id: number, name: string }) {
        this.emp = emp
    }
    display(): void {
        console.log(this.emp.id)
        console.log(this.emp.name)
    }
}

const details = new ConstructorWithObject({ id: 45, name: "Pruthvi" })
details.display()
