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

* Updated TypeScript@3.6.2

## v3.0.0-beta.66 (2019-08-27)

#### :bug: Bug Fix

* Fixed the case when `.api` is not proved for a request

#### :house: Internal

* Extracted `RequestAPI` to an interface
* Added `CHANGELOG.md`
* Marked `LogOptions.patterns` property as required