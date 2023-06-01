import { Snarky } from '../snarky.js';
import { Field, FieldConst, FieldType, FieldVar } from './field.js';
import { Bool as B } from '../provable/field-bigint.js';

export { BoolVar };

type ConstantBoolVar = [FieldType.Constant, FieldConst];

// same representation, but use a different name to communicate intent / constraints
type BoolVar = FieldVar;

class Bool {
  value: BoolVar;

  constructor(x: Bool | boolean) {
    if (x instanceof Bool) {
      this.value = x.value;
    } else {
      this.value = FieldVar.constant(x ? 1n : 0n);
    }
  }

  // TODO
  toField() {}

  // TODO
  not() {}

  // TODO
  and(y: Bool | boolean) {}

  // TODO
  or(y: Bool | boolean) {}

  // TODO
  assertEquals(y: Bool | boolean, message?: string) {}

  //TODO
  assertTrue(message?: string) {}

  //TODO
  assertFalse(message?: string) {}

  // TODO
  equals(y: Bool | boolean) {}

  // TODO
  sizeInFields() {}

  // TODO
  toFields() {}

  // TODO
  toString() {}

  // TODO
  toJSON() {}

  // TODO
  toBoolean() {}

  static toField(x: Bool | boolean) {}

  static Unsafe: {
    /**
     * Converts a {@link Field} into a {@link Bool}. This is a **dangerous** operation
     * as it assumes that the field element is either 1 or 0
     * (which might not be true).
     * @param x a {@link Field}
     */
    ofField(x: Field | number | string | boolean): Bool;
  };

  static not(x: Bool | boolean) {}

  static and(x: Bool | boolean, y: Bool | boolean) {}

  static or(x: Bool | boolean, y: Bool | boolean) {}

  static assertEqual(x: Bool | boolean, y: Bool | boolean) {}

  static equal(x: Bool | boolean, y: Bool | boolean) {}

  static count(x: Bool | boolean[]) {}

  static sizeInFields() {}

  static toFields(x: Bool) {}

  static toAuxiliary(x?: Bool) {}

  static fromFields(fields: Field[]) {}

  static toJSON(x: Bool) {}

  static fromJSON(x: boolean) {}

  static check(x: Bool) {}
}
