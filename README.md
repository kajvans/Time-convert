# Timestringconverter

An easy way to use readable timestrings in your code.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

This library is written because of the problem with jsonwebtokens and cookies. I find it a lot easier to say 5d instead of calculating the amount of ms in 5 days. This library is also very useful for other things like timeouts and intervals.

## Features

- Convert timestrings to milliseconds
- Convert timestrings to seconds
- Convert timestrings to minutes
- Convert timestrings to hours
- Convert timestrings to days
- Works in ESM CJS and typescript

## Installation

To install this library, you can use npm or yarn.

```bash
npm install timestringconverter
```

```bash
yarn add timestringconverter
```

## Usage

important: you need to use d, h, m, s and ms to define the time. You can also use uppercase letters.

```javascript
const timestringconverter = require('timestringconverter');

console.log(timestringconverter.toMilliseconds('5d')); // 432000000
console.log(timestringconverter.toSeconds('5d2h4m')); // 432144
console.log(timestringconverter.toMinutes('5d9h')); // 7209
console.log(timestringconverter.toHours('5d2H')); // 122
console.log(timestringconverter.toDays('2h500m10000ms')); // 4.57
```

## Contributing

Guidelines for contributing to the project. Include information on how to report issues, suggest improvements, or submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [Kajvan](https://github.com/kajvan) (for GitHub)
- Gitea: [Kajvans](https://gitea.quiztimes.nl/kajvans) (for Gitea)