Changelog
=========

> **Tags:**
> - :boom:       [Breaking Change]
> - :rocket:     [New Feature]
> - :bug:        [Bug Fix]
> - :memo:       [Documentation]
> - :house:      [Internal]
> - :nail_care:  [Polish]

## v3.27.7 (2020-11-04)

#### :bug: Bug Fix

* Fixed resolving a promise after the catch

```js
SyncPromise.resolve(1).catch(() => undefined).then((r) => console.log(r));
```

## v3.20.0 (2020-07-05)

#### :rocket: New Feature

* Added tests
