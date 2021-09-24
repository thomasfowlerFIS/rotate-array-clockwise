const rotateArray = (arr, k) => {
  const length = arr.length
  return arr.reduce((p, c, i) => {
    const steps =  k >= length ? (k % length) + i : k + i
    const newIndex = steps >= length ? steps - length : steps
    p[newIndex] = c
    return p
  }, [])
}

if (require.main === module) {
  // add your own tests in here
  console.log("Given: [1, 2, 3, 4], 1");
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Given: [1, 2, 3], 2");
  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Given: [1, 2, 3], 5");
  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 5));

  console.log("");

  console.log("Expecting: [1, 2, 3], 3");
  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
