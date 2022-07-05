let array = [2, 5, 7, 8, 9];
const solution = (numbers) => {
  // Type your solution here
    let largest = numbers.sort((a,b)=>a-b).reverse()[0]
    console.log(largest)
};
solution(array);
