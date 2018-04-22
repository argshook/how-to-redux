/**
  * zip two lists together, items go one after anoother
  *
  * zip([1,2], [3,4]) // <= [1,3,2,4]
  */


const ensureList = a => a ? [a] : [];

// zip :: [a] -> [b] -> [c]
const zip = (a, b) => {
  const [restA, restB, zipped] = (a.length ? a : b).reduce(
    ([a, b, result]) => {
      const [fstA, ...restA] = a;
      const [fstB, ...restB] = b;

      return [
        restA,
        restB,
        [
          ...result,
          ...ensureList(fstA),
          ...ensureList(fstB)
        ]
      ];
    },
    [a, b, []]
  );

  return zipped.concat(restA, restB);
};
export default zip;
