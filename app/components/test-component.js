import Component from "@ember/component";
import {computed} from "@ember/object";
import {inject as service} from "@ember/service";

export default Component.extend({
  tagName: "",

  store: service(),

  model: null,
  property: false,

  init() {
    this._super(...arguments);
    this.set("model", this.store.peekAll("test-model").firstObject);
  },

  someResult: computed(
    "model.{computedProperty,property}", "property",
    function () {
      return (this.model && this.model.computedProperty) || this.property;
    }
  )
});
