const sockMatching = (n, arr) => {
  let pairs = 0;
  let search = new Set();

  for (const sock of arr) {
    if (search.has(sock)) {
      pairs++;
      search.delete(sock);
    }else
    search.add(sock);
  }
  return pairs;
};


// const sockPairs = sockMatching(7, [5,4,2,2,5,1,8])
// console.log(sockPairs)


