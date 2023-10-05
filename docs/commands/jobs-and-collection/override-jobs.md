---
title: Override Job and Adding Your Custom Jobs
---

Jobs URLs are a placeholder from where to fetch values from. There is a chance that these URLs might either fail, or get razor nodes blacklisted, etc.
You can override the existing job and also add your custom jobs by adding `assets.json` file in `.razor` directory so that razor-nodes can fetch data directly from the provided jobs.

Shown below is an example of how your `assets.json` file should be -

``` json
{
    "assets": {
      "collection": {
        "ETHUSD": {
          "official jobs": {
            "1": {
              "URL": "https://data.messari.io/api/v1/assets/eth/metrics",
              "selector": "[`data`][`market_data`][`price_usd`]",
              "power": 2,
              "weight": 2
            }
          },
          "custom jobs": [
            {
              "URL": "https://api.kucoin.com/api/v1/prices?base=USD&currencies=ETH",
              "name": "eth_kucoin_usd",
              "selector": "data.ETH",
              "power": 3,
              "weight": 1
            },
            {
              "URL": {
                "type": "POST",
                "url": "https://rpc.ankr.com/eth",
                "body": {
                  "jsonrpc": "2.0",
                  "method": "eth_call",
                  "params": [
                    {
                      "to": "0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6",
                      "data": "0xf7729d43000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000000000bb80000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000000"
                    },
                    "latest"
                  ],
                  "id": 5
                },
                "header": {
                  "content-type": "application/json"
                },
                "returnType": "hex"
              },
              "name": "eth_postJob_usd",
              "power": -4,
              "selectorType": 0,
              "selector": "result",
              "weight": 1
            }
          ]
        }
      }
    }
  }
```

Breaking down into components

- The existing jobs that you want to override should be included in `official jobs` and fields like URL, selector should be replaced with your provided inputs respectively.

In the above example for the collection `ethCollectionMean`, job having `jobId:1` is override by provided URL, selector, power and weight.

```
"official jobs": {
          "1": {
            "URL": "https://data.messari.io/api/v1/assets/eth/metrics",
            "selector": "[`data`][`market_data`][`price_usd`]",
            "power": 2,
            "weight": 2
          },
```

- Additional jobs that you want to add to a collection should be added in `custom jobs` field with their respective URLs and selectors.

In the above example for the collection `ethCollectionMean` new custom jobs are as shown below, 
1. Job following GET request having URL `https://api.kucoin.com/api/v1/prices?base=USD&currencies=ETH` is added
```
   {
   "URL": "https://api.kucoin.com/api/v1/prices?base=USD&currencies=ETH",
   "name": "eth_kucoin_usd",
   "selector": "data.ETH",
   "power": 3,
   "weight": 1
   },
```

2. Job following POST request having URL `"url": "https://rpc.ankr.com/eth"` with respective body and header are added
```
{
              "URL": {
                "type": "POST",
                "url": "https://rpc.ankr.com/eth",
                "body": {
                  "jsonrpc": "2.0",
                  "method": "eth_call",
                  "params": [
                    {
                      "to": "0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6",
                      "data": "0xf7729d43000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb480000000000000000000000000000000000000000000000000000000000000bb80000000000000000000000000000000000000000000000000de0b6b3a76400000000000000000000000000000000000000000000000000000000000000000000"
                    },
                    "latest"
                  ],
                  "id": 5
                },
                "header": {
                  "content-type": "application/json"
                },
                "returnType": "hex"
              },
              "name": "eth_postJob_usd",
              "power": -4,
              "selectorType": 0,
              "selector": "result",
              "weight": 1
            }
```

If any of the custom job requires any authentication in the form of API key or authentication headers, staker can follow exporting the key with keyword as shown below,

If the job is:
```
https://api.gemini.com/v1/pubticker/v1/exchangerate/BTC?apikey=73034021746739393292922
```

you can change the above job url to 
```
https://api.gemini.com/v1/pubticker/v1/exchangerate/BTC?apikey=${AUTH_KEY}
```

Now staker needs to use the same keyword defined inside `${...}` as an environment variable using `export` command and assigning it a value as users API key as shown below,

```
export AUTH_KEY="73034021746739393292922"
```