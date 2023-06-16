function mostFrequent(arr) {
    let map = new Map();
    let maxCount = 0;
    let maxItem = null;
  
    for (let item of arr) {
      let count = map.has(item) ? map.get(item) + 1 : 1;
      map.set(item, count);
      if (count > maxCount) {
        maxCount = count;
        maxItem = item;
      }
    }
  
    return maxItem;
  }
  
  let arr = [1, 2, 4, 4, 3, 4, 5, 5, 6];
  let mostFrequentItem = mostFrequent(arr);
  console.log(mostFrequentItem);