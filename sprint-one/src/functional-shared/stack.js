var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    count: 0,
    currentIndex: 0,
    storage: {}
  };
  _.extend(obj, stackMethods);
  
  return obj;
};

var stackMethods = {

  push : function(value) {
    this.storage[this.count] = value;
    this.count++;
  
  },

  pop : function() {
    if (this.count !== 0) {
      this.count--;
    }
    return this.storage[this.count];

  },

  size: function() {
    return this.count;
  }
};


