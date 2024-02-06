
 const oddNumber = [];

function oddNumbers(numbers){
    for(const number of numbers){
        if(number % 2 === 1){

            oddNumber.push(number);
        }
    }
    console.log(oddNumber);

    let sum = 0;
    for(const number of oddNumber){
        sum = sum + number;
        // return sum;
    }
    console.log(sum);

    const avg = sum / oddNumber.length;
    console.log('average: ', avg);
}


const numbers = [12, 14, 21, 34, 55, 23, 87, 101,13];
const data = oddNumbers(numbers);
// console.log(data);