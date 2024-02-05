---
title: Supported Return Types For Jobs
---

As an oracle's data feeds, a "job" is a specific connection to a data source designed to retrieve price feed information. The job data source can return values in the form of different data types. 
Current version of oracle node supports job returning values in decimal, hex and hex array[uniswap v2]. 

The URL for a job can be a plain URL string or if it needs a body, header or returnType, the URL should be written in the string format of struct shown below, 

```
URL : `{
      type: "GET/POST",
      url: "",
      body: {},
      header: "",
      returnType: "",
    }`
```

## Decimal Value
If the URL is provided as plain URL string than oracle node considers the result in decimal format by default.
If the URL is provided in string format of a data source struct and return type is not provided than oracle node considers the result in decimal format by default.

Most of the API's with appropriate selector return result in the form of decimal.
In this case oracle node directly considers the API result as the value for data feed and records it in the commit state. 

e.g.
URL: `https://api.gemini.com/v1/pubticker/ethusd`
Selector: `last`

Result: `2422.98` (This value varies with time but data type returns the same) 

## Hex Value
If the URL is provided in string format of a data source struct and return type is provided as `hex` than oracle node considers the result in HEX format.

Most of the POST requests with appropriate selector return result in the form of hex value.
The job returning hex value should have `returnType: hex` in its URL string struct.

In this case oracle node converts the hex result to corresponding decimal value and records it in commit state.

e.g. Uniswap v3 data feed
URL: `{"type": "POST","url": "https://rpc.ankr.com/eth","body": {"jsonrpc":"2.0","method":"eth_call","params":[{"to":"0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6","data":"0xf7729d43000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000000000bb80000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000000"},"latest"],"id":5},"header": {"content-type": "application/json"}, "returnType": "hex"}`
Selector: `result`

Parsed Result: `0x000000000000000000000000000000000000000000000000000000009025ebba` (This value varies with time but data type returns the same) 
Converted Final Result: `241840428200`

## Hex Array Value
If the URL is provided in string format of a data source struct and return type is provided as `hexArray[i]` where `i` is an int index for the required data feed than oracle node considers the result in Hex Array format.

The job returning hex value should have `returnType: hexArray[i]` e.g `returnType: hexArray[1]` in its URL string struct.

In this case oracle node convertes the hex result into decimal array and fetches the value at ith index of the array result and records it in commit state.

e.g. Uniswap v2 data feed
URL: `{"type": "POST","url": "https://rpc.ankr.com/eth","body": {"jsonrpc":"2.0","id":7269270904970082,"method":"eth_call","params":[{"from":"0x0000000000000000000000000000000000000000","data":"0xd06ca61f0000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000200000000000000000000000050de6856358cc35f3a9a57eaaa34bd4cb707d2cd0000000000000000000000008e870d67f660d95d5be530380d0ec0bd388289e1","to":"0x7a250d5630b4cf539739df2c5dacb4c659f2488d"},"latest"]},"header": {"content-type": "application/json"}, "returnType": "hexArray[1]"}`
Selector: `result`

Parsed Result: `0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000000127a0ca8b357ec` (This value varies with time but data type returns the same) 

Decoded Result Array: `[1000000000000000000 5200744369313772]`
Final Result: `5200744369313772`
