 
export const getfilterHits = (filterHits) => {
  const {
    hits,
  } = filterHits;

  const values2 = [
    {
      name: 'hits',
      value: hits,
    },
     
  ];

  return values2;
};
