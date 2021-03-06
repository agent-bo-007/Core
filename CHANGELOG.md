Changelog
=========

> **Tags:**
> - :boom:       [Breaking Change]
> - :rocket:     [New Feature]
> - :bug:        [Bug Fix]
> - :memo:       [Documentation]
> - :house:      [Internal]
> - :nail_care:  [Polish]

_Note: Gaps between patch versions are faulty, broken or test releases._

## v3.32.0 (2021-02-05)

#### :rocket: New Feature

* Added a new parameter `setter` for `set` `core/prelude/object`

#### :bug: Bug Fix

* Fixed an issue when trying to set a property by the complex path `core/object/watch`
* Fixed parsing of JSON structures `core/request/engines/fetch`

## v3.31.0 (2021-02-03)

#### :rocket: New Feature

* `core/prelude/regexp`:
  * Added new methods `addFlags`, `removeFlags`, `setFlags`
  * Added new static methods `addFlags`, `removeFlags`, `setFlags`, `test`

#### :bug: Bug Fix

* Fixed using of global RegExp-s with the `g` flag

## v3.30.4 (2021-01-29)

#### :bug: Bug Fix

* Fixed the `requestIdleCallback` interface

## v3.30.3 (2021-01-28)

#### :house: Internal

* `core/async`:
  * Optimized clearing of async wrappers
  * Now all promises are wrapped by using `SyncPromise`

## v3.30.2 (2021-01-15)

#### :bug: Bug Fix

* Fixed `Object.get` interface and comments

## v3.30.1 (2021-01-11)

#### :bug: Bug Fix

* Fixed iterations over chained emoji-s `core/prelude/string`
* Fixed Unicode support of char ranges `core/range`

## v3.30.0 (2021-01-10)

#### :boom: Breaking Change

* `build`:
  * Renamed `docs.gulp.js` -> `doc.gulp.js`
  * Renamed `gulp build:docs` -> `gulp build:doc`

#### :rocket: New Feature

* Added `letters` and `String.letters` `core/prelude/string`

#### :bug: Bug Fix

* Improved Unicode support `core/prelude/string`
* Fixed providing of empty strings as API URL-s `core/request`

#### :house: Internal

* Updated `typedoc@0.20.14`

## v3.29.1 (2020-12-23)

#### :bug: Bug Fix

* Added response status checking whether it's 204 before decoding a server response `core/request/response`

#### :house: Internal

* Added mapping `application/octet-stream` to `arrayBuffer` `core/mime-type`

## v3.29.0 (2020-12-22)

#### :rocket: New Feature

* `core/prelude`:
  * Added support of `Map/WeakMap/Set/WeakSet/Array` `Object.select` and `Object.reject`
  * Added overloads for nullable values:
    * `Object.select`
    * `Object.reject`
    * `Object.createDict`
    * `Object.convertEnumToDict`
    * `Object.createEnumLike`
    * `Object.createMap`
    * `Object.fromArray`

#### :house: Internal

* Fixed TS errors `core/log`

## v3.28.2 (2020-11-11)

#### :bug: Bug Fix

* Fixed a security issue with the prototype pollution `core/url/convert`

## v3.28.1 (2020-11-06)

#### :house: Internal

* Updated dependencies: `typescript@4.1.1-rc`

## v3.28.0 (2020-11-06)

#### :rocket: New Feature

* `core/request`:
  * Added new engine based on Fetch API
  * Added decoding text in `Response` into `Document`
  * Added decoding `Buffer` (in Node.js) and `ArrayBuffer` in `Response` into json
  * Supported response type `"blob"` in Node.js request engine
  * Use `"arraybuffer"` (in `XmlHtpRequest` engine ) and `"buffer"` (in Node.js engine) as default `responseType`
  * Use Fetch API by default in browser if `AbortController` is supported

#### :house: Internal

* `core/request`:
  * Run tests with all engines instead of only Node.js one
  * Test aborting the request on timeout
  * Improved stability of tests by using local server instead of remote mock service

## v3.27.8 (2020-11-05)

#### :bug: Bug Fix

* Fixed a bug with the redundant saving of the state `core/prelude/function/curry`

```js
const a = (b, c) => b + c;
const e = a.curry()
console.log(e(4)(5)); // 9
console.log(e(3)(4)); // Error
```

## v3.27.7 (2020-11-04)

#### :bug: Bug Fix

* Fixed resolving a promise after the catch `core/promise/sync`

```js
SyncPromise.resolve(1).catch(() => undefined).then((r) => console.log(r));
```

## v3.27.6 (2020-11-01)

#### :boom: Breaking Change

* Renamed `MockResponseType` -> `MockResponseValue` `core/data`

#### :house: Internal

* Updated dependencies:
  `tslib@2.0.3`
  `got@11.8.0`
  `del@6.0.0`
  `upath@2.0.0`
  `find-up@5.0.0`
  `typedoc@0.19.2`
  `jasmine@3.6.3`
  `@types/jasmine@3.6.0`

## v3.27.5 (2020-09-29)

#### :bug: Bug Fix

* Fixed a bug when cloning an object with cycle links `Object.fastClone`

## v3.27.4 (2020-09-29)

#### :bug: Bug Fix

* `core/object/watch`:
  * Fixed a bug when a deleted property won't be deleted from an object if using `unset`
  * Fixed restoring of an old value `engines/accessors/set`

#### :house: Internal

* Refactoring `core/object/watch`

## v3.27.3 (2020-09-25)

#### :bug: Bug Fix

* Fixed a bug when Dates could be transformed to strings after cloning `Object.fastClone`

## v3.27.2 (2020-09-18)

#### :bug: Bug Fix

* Fixed invalid imports within README `core/data`
* Fixed a bug when a new value to set is equal by a link with the previous `core/object/watch`

## v3.27.1 (2020-09-10)

#### :bug: Bug Fix

* Fixed a bug with iOS and ES6 when the engine hasn't parsed a declaration with nested arrow functions `core/request`

## v3.27.0 (2020-09-04)

#### :boom: Breaking Change

* Dropped `interface.ts`:
  * `core/functools/deprecation`
  * `core/functools/not-implemented`

#### :rocket: New Feature

* Added a new module `core/functools/warning`

#### :house: Internal

* Re-wrote the module with `core/functools/warning`:
  * `core/functools/deprecation`
  * `core/functools/not-implemented`

## v3.26.0 (2020-09-04)

#### :rocket: New Feature

* Added `jsonReviver` to `CreateRequestOptions` `core/request`

#### :bug: Bug Fix

* Fixed a bug when strings could be compiled to Dates after cloning `Object.fastClone`

#### :house: Internal

* Extracted some types to `interface.ts` `core/prelude/object/clone`

## v3.25.1 (2020-09-04)

#### :bug: Bug Fix

* Fixed parsing "1997-07-16T19:20:30.45+0100" format on iOS `core/prelude/date`

## v3.25.0 (2020-09-03)

#### :rocket: New Feature

* Now `deprecate` returns `DeprecatedFn` `core/functools/deprecation`
* Now `notImplement` returns `NotImplementedFn` `core/functools/not-implemented`

## v3.24.2 (2020-09-02)

#### :house: Internal

* Review `any` and `unknown` types

## v3.24.1 (2020-09-01)

#### :bug: Bug Fix

* Fixed TS signatures of `Object.has`, `Object.delete`

## v3.24.0 (2020-08-12)

#### :rocket: New Feature

* Added `Object.delete`

#### :bug: Bug Fix

* Fixed `Object.has` with Set and WeakSet

## v3.23.0 (2020-08-10)

#### :rocket: New Feature

* Added a new engine based on IndexedDB `core/kv-storage`

#### :house: Internal

* Updated dependencies:
  `@v4fire/linters@1.5.4`
  `@types/jasmine@3.5.12`

## v3.22.5 (2020-07-31)

#### :bug: Bug Fix

* Fixed `core/object/watch/engines/accessors/set`

## v3.22.4 (2020-07-30)

#### :bug: Bug Fix

* [Fixed incorrectly ignored errors `build/include`](https://github.com/V4Fire/Core/pull/121)

## v3.22.3 (2020-07-23)

#### :bug: Bug Fix

* [Fixed notice params being ignored `core/functools/deprecation`](https://github.com/V4Fire/Core/pull/120)
* Fixed notice params being ignored `core/functools/not-implemented`

#### :house: Internal

* [Added `component` `core/functools/deprecation/DeprecatedExprType`](https://github.com/V4Fire/Core/pull/120)
* Added `typedoc.tsconfig`

## v3.22.2 (2020-07-21)

#### :boom: Breaking Change

* Set `skipLibCheck` to false `.tsconfig`

#### :bug: Bug Fix

* Fixed errors within `index.d.ts`
* Fixed deep watching by a complex path with overrides `core/object/watch`

```js
const obj = {
  a: {
    b: {
      c: 1
    }
  }
};

const {proxy} = watch(obj, 'a.b.c', (newVal, oldVal) => {
  console.log(newVal, oldVal);
});

proxy.a.b = {c: 1};
```

#### :house: Internal

* Fixed TS errors

## v3.22.1 (2020-07-20)

#### :bug: Bug Fix

* Fixed deep watching with a complex path `core/object/watch`

#### :house: Internal

* Updated dependencies: typescript@3.9.7, @v4fire/linters@1.4.0

## v3.22.0 (2020-07-14)

#### :rocket: New Feature

* Added `core/object/watch/isProxy`

## v3.21.1 (2020-07-13)

#### :bug: Bug Fix

* Fixed the bug when comparing intermediate numbers `core/semver`

## v3.21.0 (2020-07-10)

#### :rocket: New Feature

* Added `build/const/isLayerDep` & `build/const/isExternalDep`

#### :bug: Bug Fix

* Fixed the bug when comparing with `ord` strategy `core/semver`
* Added the project name to `build/const/depsRgxpStr`

#### :house: Internal

* Made timeout interval for async specs bigger
* Refactoring `build/tsconfig.gulp.js`
* Updated dependencies: got@11.5.0, @v4fire/linters@1.2.1

## v3.20.4 (2020-07-06)

#### :bug: Bug Fix

* Fixed passing of constructor options `core/data`

## v3.20.3 (2020-07-06)

#### :bug: Bug Fix

* Fixed passing of constructor options `core/data`

## v3.20.2 (2020-07-06)

#### :bug: Bug Fix

* Fixed constructor accessibility `core/data`

## v3.20.1 (2020-07-06)

#### :house: Internal

* All linter configurations now loaded from @v4fire/linters

## v3.20.0 (2020-07-05)

#### :boom: Breaking Change

* Changed the returning value of `clear` from `Set` to `Map` `core/kv-storage`
* New API and logic `core/queue/merge`
* Removed `core/prelude/number/converters/ex`

#### :rocket: New Feature

* Migration to from TSLint to ESlint
* Added tasks to build core as a standalone library
* Added the code coverage tool
* Added more tests
* Added node.js support for all modules
* Added `SimpleWorkerQueue`

#### :bug: Bug Fix

* Fixed bugs

#### :house: Internal

* Improved doc
* Refactoring

## v3.19.2 (2020-06-19)

#### :bug: Bug Fix

* [Fixed `Object.isCustomObject` for objects without prototypes](https://github.com/V4Fire/Core/issues/112)

## v3.19.1 (2020-06-08)

#### :bug: Bug Fix

* Restored deprecated API `Object.fromArray`

## v3.19.0 (2020-06-08)

#### :boom: Breaking Change

* Review `Object.fromArray` API

## v3.18.0 (2020-05-29)

#### :rocket: New Feature

* Added config hash

#### :house: Internal

* :new: node-object-hash@2.0.0
* Review config files

## v3.17.3 (2020-05-26)

#### :house: Internal

* Fixed TS types

## v3.17.2 (2020-05-25)

#### :house: Internal

* Added `husky`
* [Added `config.expand` method](https://github.com/V4Fire/Core/pull/103)
* [Added `@v4fire/typescript-check`](https://github.com/V4Fire/Core/pull/104)
* [Added `[Typescript check]` action](https://github.com/V4Fire/Core/pull/104)
* Updated dependencies: got@11.1.4

## v3.17.1 (2020-05-24)

#### :house: Internal

* :up: typesctipt@3.9.3, tslib@2.0.0

## v3.17.0 (2020-05-22)

#### :boom: Breaking Change

* [Removed `ts-toolbelt`](https://github.com/V4Fire/Core/pull/99)

#### :rocket: New Feature

* Added tilda ranges `core/semver`

## v3.16.1 (2020-05-22)

#### :bug: Bug Fix

* Fixed `dropCache` `core/data`

## v3.16.0 (2020-05-21)

#### :rocket: New Feature

* Added a feature to provide a custom watch engine `core/object/watch`

#### :bug: Bug Fix

* Fixed watching of arrays `core/object/watch`
* Fixed proxy arrays concatenation `core/object/watch`

## v3.15.4 (2020-05-15)

#### :bug: Bug Fix

* Fixed concatenation with absolute URL-s `core/url/concat`

## v3.15.3 (2020-05-15)

#### :bug: Bug Fix

* Fixed `Object.reject/select` type inferring
* [Fixed `core/semver`](https://github.com/V4Fire/Core/pull/91)

## v3.15.2 (2020-05-13)

#### :bug: Bug Fix

* Fixed TS compile flags

## v3.15.1 (2020-05-10)

#### :bug: Bug Fix

* Fixed `core/data/middlewares/wait` within `encoder` mode
* Fixed TS warnings

## v3.15.0 (2020-05-09)

#### :rocket: New Feature

* Added new build parameters `--client-output`, `--server-output`, `--output`

#### :bug: Bug Fix

* Fixed range validation `core/range`

#### :house: Internal

* Added spec `core/range`

## v3.14.0 (2020-05-08)

#### :rocket: New Feature

* Added jasmine@3.5.0
* Added spec `core/url`

## v3.13.3 (2020-05-01)

#### :bug: Bug Fix

* Fixed clearing of zombie tasks `core/async`

#### :house: Internal

* Refactoring `core/object/watch`

## v3.13.2 (2020-04-29)

#### :bug: Bug Fix

* Fixed watching for "spread" objects `core/object/watch`

## v3.13.1 (2020-04-28)

#### :bug: Bug Fix

* Fixed promise rejecting `core/async`
* Fixed clearing by id `core/async`

## v3.13.0 (2020-04-27)

#### :rocket: New Feature

* [Added `core/data/middlewares/wait`](https://github.com/V4Fire/Core/pull/87)

## v3.12.0 (2020-04-27)

#### :boom: Breaking Change

* Renamed interfaces from `core/kv-storage`:
  * `Namespace` -> `SyncStorageNamespace`
  * `AsyncNamespace` -> `AsyncStorageNamespace`
  * `FactoryResult` -> `SyncStorage`
  * `AsyncFactoryResult` -> `AsyncStorage`

#### :rocket: New Feature

* Added `has`, `clear` methods `core/kv-storage`

#### :bug: Bug Fix

* Fixed clearing within a namespace `core/kv-storage`

#### :house: Internal

* Improved documentation `core/kv-storage`

## v3.11.3 (2020-04-23)

#### :bug: Bug Fix

* Fixed `Object.set` invalid overload

## v3.11.2 (2020-04-23)

#### :bug: Bug Fix

* Fixed request caching `core/data`

#### :house: Internal

* Improved TS types

## v3.11.1 (2020-04-22)

#### :bug: Bug Fix

* Fixed TS errors

## v3.11.0 (2020-04-22)

#### :rocket: New Feature

* Added functional overloads to Prelude API:

```js
Object.get('foo')({foo: 1});
String.camelize({upper: true})('foo-bar');
/// etc.
```

* Added `Function.compose` to right-to-left composing of functions:

```js
Function.compose(String.camelize, Object.get('foo'))({foo: 'foo-bar'});
Function.compose(String.camelize, Object.get('foo'), () => Promise.resolve({foo: 'foo-bar'}))().then((res) => {
  console.log(res);
});
```

* Added `Function.prototype.compose` to left-to-right composing of functions:

```js
Object.get('foo').compose(String.camelize)({foo: 'foo-bar'});
```

* Added `Function.curry` and `Function.prototype.curry` to create curried functions:

```js
function calc(a, b, c, d) {
  return a * (b + c + d);
}

calc.curry()(10)(1, 2)(0); // 30
calc.curry()(Function.__, 1)(10, 2)(0); // 30
```

* Added `Object.Option` wrapper, that can contain some value beside null or undefined:

```js
Object.Option(1).then((v) => v === 1);
Object.Option(null).catch((v) => v === null);
Object.Option((s) => s.camelize())(null).catch((v) => v === null);
```

* Added `Function.prototype.option` helper, that can wrap a function to `Option` structure

```js
((s) => s.camelize()).option()(null).catch((v) => v === null);
```

* Added `Object.Result` wrapper, that can contain some value or error:

```js
Object.Result(1).then((v) => v === 1);
Object.Result(new Error('Boom!')).catch((err) => err.message === 'Boom!');
Object.Result(Promise.reject('Boom!')).catch((err) => err === 'Boom!');
Object.Result((s) => s.camelize())(null).catch((err) => err.message === 's is null');
```

* Added `Function.prototype.result` helper, that can wrap a function to `Result` structure

```js
((s) => s.camelize()).result()(null).catch((err) => err.message === 's is null');
```

* Added `Array.concat`

```js
Array.concat([], 1, null, [2, 3, 4]) // [1, 2, 3, 4];
```

* Added support of iterables `Array.union`

```js
Array.union([], 1, null, [1, 2].values()) // [1, 2];
```

* Added new prelude types: `AnyFunction`, `AnyOneArgFunction`, `Maybe`, `Either`
* Added `ts-toolbelt`
* [Added `debounce/throttle` to `core/async`](https://github.com/V4Fire/Core/pull/82)
* Added an overload for the zero delay `core/prelude/function/lazy/debounce`
* [Added `core/queue/order`](https://github.com/V4Fire/Core/pull/83)
* [Improved `core/queue/worker` API](https://github.com/V4Fire/Core/pull/83)

#### :house: Internal

* Refactoring

## v3.10.4 (2020-04-13)

#### :house: Internal

* Fixed types `core/object/watch`

## v3.10.3 (2020-04-10)

#### :bug: Bug Fix

* Fixed `deprecated/notImplemented` with accessors

## v3.10.2 (2020-04-08)

#### :bug: Bug Fix

* Added normalizing of input data `core/mime-type/getDataType`
* Fixed URL encoding `core/url/toQueryString`

## v3.10.1 (2020-04-07)

#### :bug: Bug Fix

* Fixed `lastDate` synchronization `core/net`

## v3.10.0 (2020-04-07)

#### :boom: Breaking Change

* [Switched the priority of a response type `core/request/response`](https://github.com/V4Fire/Core/pull/63)
* [`core/url/fromQueryString` doesn't parse nested properties by default](https://github.com/V4Fire/Core/pull/72)

#### :rocket: New Feature

* [Added `core/mime-type`](https://github.com/V4Fire/Core/pull/62)
* [Added support for custom cache strategies](https://github.com/V4Fire/Core/pull/65)
* [Added a new reviver parameter to `Object.parse`](https://github.com/V4Fire/Core/pull/72)
* [Added new overloads with options for `toQueryString/fromQueryString` `core/url`](https://github.com/V4Fire/Core/pull/72)
* [Added `core/data/middlewares/attach-status`](https://github.com/V4Fire/Core/pull/73)
* Added `Symbol.iterator` to `core/range`
* [Added `core/functools/not-implemented`](https://github.com/V4Fire/Core/pull/75)

#### :house: Internal

* Improved type inference `core/json/convertIfDate`
* Extracted constants to separated files `core/prelude`
* [Review `core/request`](https://github.com/V4Fire/Core/pull/68)
* [Review `core/data`](https://github.com/V4Fire/Core/pull/69)
* [Review `core/queue`](https://github.com/V4Fire/Core/pull/71)
* [Extracted `core/net` logic to an engine](https://github.com/V4Fire/Core/pull/74)

## v3.9.0 (2020-03-31)

#### :rocket: New Feature

* Added `Object.isPrimitive`
* Added `mute`/`unmute` to `core/object/watch`
* Added `pathModifier` to `core/object/watch`
* Added `eventFilter` to `core/object/watch`
* Added `root` to `core/object/watch/interface/WatchHandlerParentParams`

#### :bug: Bug Fix

* Fixed network connection status' checking algorithm

## v3.8.0 (2020-03-25)

#### :rocket: New Feature

* Added set/unset methods `core/object/watch`

## v3.7.5 (2020-03-24)

#### :bug: Bug Fix

* Fixed watching for Map/Set by using the engine `core/object/watch/engines/accessors`

## v3.7.4 (2020-03-23)

#### :bug: Bug Fix

* Fixed getting a property by a symbol from a proxy `core/object/watch`

## v3.7.3 (2020-03-23)

#### :house: Internal

* Exported some helpful helpers from `core/object/watch`

## v3.7.2 (2020-03-22)

#### :bug: Bug Fix

* Fixed `core/object/watch` with Map/Set structures

#### :house: Internal

* Updated dependencies: eventemitter2@6.2.1

## v3.7.1 (2020-03-20)

#### :bug: Bug Fix

* Fixed `core/object/watch` collapsing of events

## v3.7.0 (2020-03-17)

#### :rocket: New Feature

* Added `parent` to `core/object/watch/interface/WatchHandlerParams`

#### :bug: Bug Fix

* Fixed `core/object/watch` collapsing of events

## v3.6.1 (2020-03-16)

#### :bug: Bug Fix

* Fixed `core/object/watch` with another watchers

## v3.6.0 (2020-03-15)

#### :rocket: New Feature

* Added `withProto` parameter for `core/object/watch`

#### :bug: Bug Fix

* Fixed `core/object/watch` with nested objects

## v3.5.3 (2020-03-12)

#### :bug: Bug Fix

* Fixed `Object.create`

## v3.5.2 (2020-03-10)

#### :bug: Bug Fix

* Fixed `Object.forEach` overloads
* Fixed `core/object/watch` for getters

## v3.5.1 (2020-03-05)

#### :bug: Bug Fix

* Fixed `core/object/watch` with native structures

## v3.5.0 (2020-03-05)

#### :rocket: New Feature

* Added `core/object/select`
* Added `core/object/watch`
* Added `core/data`
* Added `core/socket`

#### :house: Internal

* Moved `core/session` to `@v4fire/client`
* Moved `core/event/resolveAfterDOMLoaded` to `@v4fire/client`

## v3.4.2 (2020-03-04)

#### :bug: Bug Fix

* Fixed error details `core/request`

## v3.4.1 (2020-03-04)

#### :bug: Bug Fix

* Fixed `Object.has` with primitive values
* Fixed `toQueryString/fromQueryString` from `core/url`
* Added URL to a request error `core/request/error`

## v3.4.0 (2020-03-03)

#### :rocket: New Feature

* Added request information to a request error `core/request/error`

## v3.3.10 (2020-03-02)

#### :bug: Bug Fix

* Fixed `String.prototype.camelize` default behaviour

## v3.3.9 (2020-02-28)

#### :bug: Bug Fix

* Fixed invalid object converting `core/kv-storage`

#### :house: Internal

* Updated dependencies: tslib@1.11.1

## v3.3.8 (2020-02-25)

#### :bug: Bug Fix

* Fixed prelude initializing

## v3.3.7 (2020-02-25)

#### :bug: Bug Fix

* Fixed `Object.isCustomObject` with functions

## v3.3.6 (2020-02-21)

#### :bug: Bug Fix

* Fixed default import `core/queue/worker`

## v3.3.5

#### :bug: Bug Fix

* Fixed default import `core/queue/interface`

#### :house: Internal

* Updated dependencies: typescript@3.8.2

## v3.3.4

#### :bug: Bug Fix

* Fixed default import `core/queue/merge`

#### :house: Internal

* Updated dependencies: typescript@3.8.1

## v3.3.3

#### :bug: Bug Fix

* Fixed `core/request/engines/browser` with specified contentType value

## v3.3.2

#### :bug: Bug Fix

* Fixed invalid imports

## v3.3.1

#### :bug: Bug Fix

* Fixed invalid imports

## v3.3.0

#### :rocket: New Feature

* Added support for a custom engine with `core/request`
* Added support for a custom engine with `core/analytics`

#### :house: Internal

* Improved TS types `core/kv-storage`

## v3.2.0

#### :boom: Breaking Change

* Renamed `core/meta` to `core/functools`
* Review `core/queue` API

#### :rocket: New Feature

* Added `core/queu/simple`
* Added `Object.hasOwnProperty` to `prelude/object`
* Added a new overload to `Object.has` from `prelude/object`

#### :bug: Bug Fix

* Fixed `core/request` with absolute URL-s

#### :house: Internal

* Improved TS types `core/request`

## v3.1.4

#### :house: Internal

* Improved TS types `core/request`

## v3.1.3

#### :house: Internal

* Improved TS types `core/request`

## v3.1.2

#### :bug: Bug Fix

* Fixed JSON parsing `core/kv-storage`

## v3.1.1

#### :bug: Bug Fix

* [Fixed JSON parsing `core/kv-storage`](https://github.com/V4Fire/Core/pull/43)

## v3.1.0

#### :rocket: New Feature

* Added `Object.isIterable`
* Unmarked deprecation flag from `Object.isPlainObject`
* Unmarked deprecation flag from `Object.isSimpleObject`

#### :bug: Bug Fix

* Added native check for `Object.isCustomObject`

#### :house: Internal

* TS type refactoring
* Some optimizations and refactoring

## v3.0.6

#### :house: Internal

* Improved `Then` and `SyncPromise` interfaces

## v3.0.5

#### :house: Internal

* Improved TS types

## v3.0.4

#### :bug: Bug Fix

* Fixed `Async` initializing

## v3.0.3

#### :house: Internal

* Improved interfaces for promises

## v3.0.2

#### :rocket: New Feature

* Added `Object.isDictionary`, `Object.isPlainObject` marked as deprecated

## v3.0.1

#### :bug: Bug Fix

* Fixed `String.prototype.underscore`

## v3.0.0

#### :boom: Breaking Change

* Removed `core/thread`
* Promise versions of the `Async` methods now returns a SyncPromise instance
* Removed hardcode for `document.addEventListener` options within `Async` methods
* Removed the legacy CSRF header from the session API
* Added a new header to the session API: it can take a dictionary with additional parameters
* Removed `json/setJSONToUTC`
* Changed signature of `Number.prototype.pad`
* Removed `Object.getPrototypeChain`
* Marked `Date.getWeekDays` as deprecated

#### :rocket: New Feature

* Added deprecation API `core/meta/deprecation`
* Added `Object.isPromiseLike`
* Added `Then.prototype.finally`
* Added `core/promise/sync` API (`core/event/createSyncPromise` was marked as deprecated)
* Reviewed `core/event` API
* Improved `Number.prototype.format`
* Added a bunch of new functions to `Number` from `Number.prototype`
* Added `Object.createEnumLike` (`Object.createMap` was marked as deprecated)
* Added `Object.isPlainObject` (`Object.isObject` was marked as deprecated)
* Added `Object.isCustomObject` (`Object.isSimpleObject` was marked as deprecated)
* Improved `Object.fromArray` API
* Added new parameters for `core/request/interface/RequestAPI`
* Improved date/number formatting API
* Improved API of `prelude/string`
* Added `Range.prototype.values`

#### :house: Internal

* Updated dependencies: eventemitter2@6.0.0

## v3.0.0-beta.94 (2019-12-18)

#### :boom: Breaking Change

* Removed `core/thread`

#### :rocket: New Feature

* Added `Object.fastHash`

#### :bug: Bug Fix

* Fixed `Object.fastClone` with Set objects

## v3.0.0-beta.93 (2019-12-10)

#### :rocket: New Feature

* Added `preventDefault` parameter to `core/async/ClearOptions`

#### :house: Internal

* Updated dependencies: typescript@3.7.3, got@10.0.3, node-localstorage@2.1.5, eslint@6.7.2

## v3.0.0-beta.92 (2019-12-06)

#### :boom: Breaking Change

* Renamed interfaces `Opts` -> `Options`

## v3.0.0-beta.91 (2019-11-27)

#### :house: Internal

* Fixed `index.d.ts`

## v3.0.0-beta.90 (2019-11-12)

#### :house: Internal

* [Removed ES flag validation](https://github.com/V4Fire/Core/pull/42)

## v3.0.0-beta.89 (2019-11-12)

#### :rocket: New Feature

* Added functional form for `RequestAPI` parameters

#### :bug: Bug Fix

* Fixed `core/request/context/wrapAsResponse`

## v3.0.0-beta.88 (2019-11-12)

#### :bug: Bug Fix

* Fixed `content-type` header resolving `core/request/response`

## v3.0.0-beta.87 (2019-11-06)

#### :bug: Bug Fix

* Fixed querystring interpolation (`core/request`)

## v3.0.0-beta.86 (2019-11-06)

#### :house: Internal

* Improved `core/session` type declarations

## v3.0.0-beta.85 (2019-11-06)

#### :rocket: New Feature

* [Added querystring interpolation within url (core/request)](https://github.com/V4Fire/Core/pull/41)

#### :house: Internal

* Updated dependencies: typescript@3.7.2, dotenv@8.2.0, eslint@6.6.0
* Improved `core/session` type declarations
* Fixed `core/event` type declarations

## v3.0.0-beta.84 (2019-10-22)

#### :bug: Bug Fix

* [Fixed `Async.links` override](https://github.com/V4Fire/Core/pull/36)

## v3.0.0-beta.83 (2019-10-17)

#### :rocket: New Feature

* [Improved API for `Object.fromArray`](https://github.com/V4Fire/Core/pull/35)

## v3.0.0-beta.82 (2019-10-17)

#### :bug: Bug Fix

* Fixed `globalThis` shim

## v3.0.0-beta.81 (2019-10-14)

#### :boom: Breaking Change

* Renamed `whenDomLoaded` -> `afterDOMLoaded` `core/event`
* New API `core/request/create` for `resolver` parameter
* Removed `core/helpers/string/pluralize`

#### :rocket: New Feature

* Improved API `core/event/afterEvents`
* Added `HAS_WINDOW` for `core/env`
* Added `globalThis` shim

## v3.0.0-beta.80 (2019-10-10)

#### :boom: Breaking Change

* New API for `String.capitalize`

## v3.0.0-beta.79 (2019-10-10)

#### :bug: Bug Fix

* Fixed stable `String.dasherize` & `String.underscore` with numbers

## v3.0.0-beta.78 (2019-10-10)

#### :bug: Bug Fix

* Fixed `String.dasherize` & `String.underscore` with numbers

## v3.0.0-beta.77 (2019-10-09)

#### :bug: Bug Fix

* Fixed `clear` within `core/queue`

## v3.0.0-beta.76 (2019-10-09)

#### :house: Internal

* Improved interface `core/queue`

## v3.0.0-beta.75 (2019-10-09)

#### :house: Internal

* Improved interface `core/queue`

## v3.0.0-beta.74 (2019-10-09)

#### :boom: Breaking Change

* New API for `core/queue/interface` and `core/queue/merge`

## v3.0.0-beta.73 (2019-10-09)

#### :rocket: New Feature

* Added `clear` to `core/queue`
* Marked `interval`, `concurrency`, `activeWorkers` as public `core/queue`

## v3.0.0-beta.72 (2019-10-09)

#### :boom: Breaking Change

* New API for `core/queue/interface` and `core/queue/merge`

## v3.0.0-beta.71 (2019-10-08)

#### :bug: Bug Fix

* Fixed `Object.clone` with functions

## v3.0.0-beta.70 (2019-10-04)

#### :boom: Breaking Change

* Added new interface for `core/prelude/i18n/locale`

## v3.0.0-beta.69 (2019-09-23)

#### :house: Internal

* Improved error handling `core/event/onEverythingReady`

## v3.0.0-beta.68 (2019-09-20)

#### :bug: Bug Fix

* Fixed `Function.throttle`

## v3.0.0-beta.67 (2019-09-07)

#### :rocket: New Feature

* Improved number prelude API:
  * Added `Number.prototype.isFloat`
  * Added `Number.prototype.isEven`
  * Added `Number.prototype.isOdd`
  * Added `Number.prototype.isPositive`
  * Added `Number.prototype.isNegative`
  * Added `Number.prototype.isNonNegative`
  * Added `Number.prototype.isNatural`
  * Added `Number.prototype.isBetweenZeroAndOne`
  * Added `Number.prototype.isPositiveBetweenZeroAndOne`

#### :house: Internal

* Updated dependencies: typescript@3.6.2

## v3.0.0-beta.66 (2019-08-27)

#### :bug: Bug Fix

* Fixed the case when `.api` is not proved for a request

#### :house: Internal

* Extracted `RequestAPI` to an interface
* Added `CHANGELOG.md`
* Marked `LogOptions.patterns` property as required
