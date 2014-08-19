window.mixins = function() {};

window.mixins.prototype = {
  sayHello: function () {
    console.log('msg:', this._msg);
  },
  get msg() {
    return this._msg;
  },
  set msg(msg) {
    this._msg = msg;
  }
};

// extend function
window.extend = function(destination, source) {

  Object.keys(source.prototype).forEach(function(prop) {

    var propertyDescriptor = Object.getOwnPropertyDescriptor(source.prototype, prop);

    // console.log(prop, propertyDescriptor);

    if (propertyDescriptor && propertyDescriptor.get) {
      Object.defineProperty(destination, prop, {
        get: propertyDescriptor.get,
        configurable: true
      })
    }

    if (propertyDescriptor && propertyDescriptor.set) {
      Object.defineProperty(destination, prop, {
        set: propertyDescriptor.set,
        configurable: true
      })
    }

    if (propertyDescriptor && (!propertyDescriptor.set && !propertyDescriptor.get)) {
      destination[prop] = source.prototype[prop];
    }

  })

}
