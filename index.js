var types = require('node-sass').types;

module.exports = {
  'pow($base, $exp)': function(base, exp) { return types.Number(Math.pow(base.getValue(), exp.getValue()), base.getUnit()); },
  'sqrt($val)': function(val) { return types.Number(Math.sqrt(val.getValue()), val.getUnit()); }
};
