var expect = require('chai').expect;

var types = require('node-sass').types;
var helpers = require('./index');

describe('The `pow()` helper', () => {
  var pow = helpers['pow($base, $exp)'];
  it('should compute integer exponents', () => {
    var result = pow(types.Number(10), types.Number(2));
    expect(result.getValue()).to.equal(100);
  });

  it('should compute for rational bases', () => {
    var result = pow(types.Number(1.5), types.Number(2));
    expect(result.getValue()).to.equal(2.25);
  });

  it('should compute for rational exponents greater than one', () => {
    var result = pow(types.Number(10), types.Number(2.5));
    expect(result.getValue()).to.equal(316.22776601683796);
  });

  it('should compute for rational exponents less than one', () => {
    var result = pow(types.Number(10), types.Number(0.5));
    expect(result.getValue()).to.equal(3.1622776601683795);
  });

  it('should compute for negative exponents', () => {
    var result = pow(types.Number(10), types.Number(-1));
    expect(result.getValue()).to.equal(0.1);
  });

  it('should preserve units of the base', () => {
    var result = pow(types.Number(10, 'px'), types.Number(-1));
    expect(result.getUnit()).to.equal('px');
  });
});

describe('The `sqrt()` helper', () => {
  var sqrt = helpers['sqrt($val)'];
  it('should compute the square root of a number', () => {
    var result = sqrt(types.Number(9));
    expect(result.getValue()).to.equal(3);
  });

  it('should preserve the unit', () => {
    var result = sqrt(types.Number(9, 'px'));
    expect(result.getUnit()).to.equal('px');
  });
});
