function fibonacciSeries(n:number){
    let first=0
    let second=1

    for(let i=0;i<n;i++){
        console.log("Fibonacci Series: "+ first)
        let next = first + second
        first = second
        second= next
    }
}

fibonacciSeries(6)