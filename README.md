# Simple Console Logger

A simple logger npm package using `console.log`

## Installation

You can install this package via npm:

```bash
npm i shakir-logger
```

## Usage

```bash
const logger = require('shakir-logger');

// Log messages
logger.info('This is an informational message');
logger.warn('This is a warning message');
logger.error('This is an error message');
logger.success('This is an success message');
```

## API Reference

#### Informational message

```bash
logger.info(message: string)
```

#### Warning message

```bash
logger.warn(message: string)
```

#### Error message

```bash
logger.error(message: string)
```

#### Success message

```bash
logger.success(message: string)
```

## Authors
[@ShakirAliSWE](https://www.github.com/ShakirAliSWE)
