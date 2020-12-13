import {render, settled} from "@ember/test-helpers";
import {setupRenderingTest} from "ember-qunit";
import hbs from "htmlbars-inline-precompile";
import {module, test} from "qunit";
import {PropertyEnum} from "computed-properties/models/test-model";

module("Integration | Component | test-component", function (hooks) {
  setupRenderingTest(hooks);

  test("test", async function (assert) {
    const store = this.owner.lookup("service:store");
    const record = store.createRecord("test-model", {
      property: PropertyEnum.Option1
    });

    await render(hbs`<TestComponent />`);

    assert.dom('[data-test="works"]').hasText("true");
    assert.dom('[data-test="does-not-work"]').hasText("true");

    record.property = PropertyEnum.Option2;
    await settled();

    assert.dom('[data-test="works"]').hasText("false");
    assert.dom('[data-test="does-not-work"]').hasText("false");
  });
});
