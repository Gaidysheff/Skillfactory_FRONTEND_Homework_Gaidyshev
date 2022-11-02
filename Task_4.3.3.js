const newObjWithProto = function () {
  const obj = {};
  return obj;
};
const newObjWithoutProto = () => {
  return Object.create(null);
};

console.log(newObjWithProto());
console.log("--------------------------");
console.log(newObjWithoutProto());
