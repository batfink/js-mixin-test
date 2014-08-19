(function() {

  "use strict";

  var proto = Object.create(HTMLButtonElement.prototype, {
    createdCallback: {
      value: function () {
        this.readAttributes();
        // extend this prototype with the mixins prototype
        window.extend(proto, window.mixins);
        // use the setter method to set the value of the msg property on the mixin prototype to the html-attribute of the custom element (see index.html)
        this.msg = this.message || 'default message';
        // use the sayHello method from the mixin
        this.addEventListener('click', this.sayHello);
      }
    },
    readAttributes : {
      value: function () {
        // get the html-attribute from the custom element
        this.message = this.getAttribute('msg');
      }
    }
  });

  document.registerElement('mongo-button', {
    prototype: proto,
    extends: 'button'
  });

}());
