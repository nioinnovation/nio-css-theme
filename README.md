# n.io SCSS

The SCSS/CSS Framework for developing n.io frontend applications. Include a collection of sass helper functions for use with [node-sass](https://github.com/sass/node-sass)

## n.io SCSS Common

## Math Helpers

### `pow($base, $exp)`

Compute the `$base` to the `$exp` power. Can be used with fractional/rational numbers for either `$base` or `$exp`.

#### Examples

```scss
$big-space: pow(2px, 16); // 65536px
```

Compute musical ratios:

```scss
$tonic: pow(2, 0/12);
$min2:  pow(2, 1/12);
$maj2:  pow(2, 2/12);
$min3:  pow(2, 3/12);
$maj3:  pow(2, 4/12);
$per4:  pow(2, 5/12);
$per5:  pow(2, 7/12);
```

### `sqrt($val)`

Compute the square root of a number. This helper is equivelent to `pow(2, 1/2)`.

#### Examples

Compute the golden ratio:

```scss
$golden-ratio: (1 + sqrt(5)) / 2;
```
