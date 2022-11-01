const newObjWithProto = function () {
  const obj = {};
  return obj;
};
const newObjWithoutProto = function () {
  const obj = Object.create(null);
  return obj;
};

console.log(newObjWithProto());
console.log("--------------------------");
console.log(newObjWithoutProto());
