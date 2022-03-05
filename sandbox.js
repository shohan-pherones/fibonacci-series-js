function fibonacciSeries(seriesNumbers){
    if(typeof seriesNumbers != 'number'){
        console.log('Please enter the number.');
    }
    else if(seriesNumbers < 2){
        console.log('Please enter the correct series limit.');
    }
    else{
        const fibo = [0, 1];
        for(let i = 2; i < seriesNumbers; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        }
        return fibo;
    }
}
const mySeries = fibonacciSeries(15);
console.log(mySeries);
