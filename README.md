# Universal Infinite Loop Alert

Supports multiple platforms with common code.

## Install

```sh
$ npm i
```

## Build

```sh
$ npm run build
$ tree dist
dist
├── browser
│   ├── browser.bundle.js
│   └── index.html
└── node
    ├── alert-node.bundle.js
    └── node.bundle.js

2 directories, 4 files
```

## Usage

**👷‍Please be careful about the execution of Node.js !!**

```sh
# Browser
$ open dist/browser/index.html

# Node.js
$ node dist/node/node.bundle.js
```
