let num = parseFloat(prompt('Please, enter a number')); 

let fibArr = [1,1];

for(let i=1; i<=num; i++)
{
    fibArr.push(fibArr[i]+fibArr[i-1])
    
}
document.write(fibArr.pop());
