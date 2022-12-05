// const data = null;

// const example = data.map(test => {
//   return test;
// });

// console.log('example :', example);


const data = null;
//Optional chaining 반영
const example = data?.map(test => {
  return test;
});

console.log('example :', example);