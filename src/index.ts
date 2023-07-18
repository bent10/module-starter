/**
 * A bare-bones template for TypeScript module.
 *
 * ## Install
 *
 * ```bash
 * npm i foo
 * ```
 *
 * ## Usage
 *
 * This package is pure ESM, please read the
 * [esm-package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).
 *
 * ```js
 * import { fooFn } from 'foo'
 *
 * const foo = fooFn()
 * ```
 *
 * @module
 */

export const fooFn = (a: number, b: number): number => a + b
