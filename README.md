# turkish-id-verification

An npm package to check if Turkish ID is real or not

# Installation

` npm install turkish-id-verification --save `

```

const tid = require('turkish-id-verification');

```

## Usage

```
Functions

tid.isCorrect(Object)
//Checks person's Turkish ID. (Info must be real)
tid.isCorrect({
  Ad: String,
  Soyad: String,
  TCKimlikNo: number,
  DogumYili: number
}).then(res => console.log(res));

returns: {result: boolean, data: info}

tid.isRuleOK(String)
//Checks the ID for rule. (Should be 11 digits and (last digit % 2) = 0)
const id = '11111111112'
tid.isRuleOK(id);

returns: {result: boolean, id: givenValue}
```


Version: 1.0.5