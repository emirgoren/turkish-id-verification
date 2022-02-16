# turkish-id-verification

An npm package to check if Turkish ID is real or not

# Installation

` npm install turkish-id-verification --save `

```

import checkTRId from 'turkish-id-verification';

```

## Usage

Async/Await

```
(async () => {
    const result = await checkTRId({
        Ad: 'string',
        Soyad: 'string',
        TCKimlikNo: number,
        DogumYili: number
    });

    console.log(result); // true or false
})()

```

Then/Catch

```
checkTRId({
    Ad: 'string',
    Soyad: 'string',
    TCKimlikNo: number,
    DogumYili: number
}).then(res => console.log(res)).catch(err => console.log(err));

```
