function receivesAFunction(callBackFunction) {
  callBackFunction();
}

function returnsANamedFunction() {
  function named() {
    return "something"
  }
  return named
}

function returnsAnAnonymousFunction() {
  return function() {}
}