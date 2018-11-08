import maths, { double, triple } from "./maths";

describe('maths', () => {
  it('double zero', () => {
    var expected = 0;

    var actual = double(0);

    expect(actual).toStrictEqual(expected);
    expect(actual).toBe(expected);
  });
  
  it('doubles negatives', () => {
    expect(double(-2)).toStrictEqual(-4);
  });

  it('doubles positives', () => {
    expect(double(2)).toStrictEqual(4);
    
  });

});

describe('Name of the group', () => {
  
});