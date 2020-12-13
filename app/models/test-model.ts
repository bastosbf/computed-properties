import Model, { attr } from "@ember-data/model";

export enum PropertyEnum {
  Option1 = "option1",
  Option2 = "option2"
}

export default class TestModel extends Model {
  @attr("string")
  property!: PropertyEnum;

  get computedProperty() {
    return this.property === PropertyEnum.Option1;
  }
}
