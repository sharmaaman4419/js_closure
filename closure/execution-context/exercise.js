// Create the execution context flow of the this function

var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
})();

counter.value(); output = 0;
counter.increment(); undefined
counter.increment(); undefined
counter.value(); 2
counter.decrement(); undefined
counter.value(); 1
