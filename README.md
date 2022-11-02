# turkish-id-verification

An npm package to check if Turkish ID is real or not

# Installation

` npm install turkish-id-verification --save `

```

const tid = require('turkish-id-verification');

```

## Usage

Async/Await

```
(async () => {
    const tidResult = await tid({
        Ad: 'string',
        Soyad: 'string',
        TCKimlikNo: number,
        DogumYili: number
    });

    console.log(tidResult); // {result: boolean, data: info}
})()

```

Then/Catch

```
tid({
    Ad: 'string',
    Soyad: 'string',
    TCKimlikNo: number,
    DogumYili: number
}).then(res => console.log(res)).catch(err => console.log(err));

```
