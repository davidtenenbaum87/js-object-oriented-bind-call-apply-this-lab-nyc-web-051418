//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg);
}

function setThisWithApply(fn, thisValue, args) {
  const argArr = [];
  args.forEach(function (arg) {
    argArr.push(arg);
  })
  return fn.apply(thisValue, argArr);
}

function returnNewFunctionOf(functionToBeCopied, thisValue) {
  return functionToBeCopied.bind(thisValue);
}
