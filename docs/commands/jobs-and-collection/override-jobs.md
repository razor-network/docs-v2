---
title: Override Job and Adding Your Custom Jobs
---

Jobs URLs are a placeholder from where to fetch values from. There is a chance that these URLs might either fail, or get razor nodes blacklisted, etc.
You can override the existing job and also add your custom jobs by adding `assets.json` file in `.razor` directory so that razor-nodes can fetch data directly from the provided jobs.

Shown below is an example of how your `assets.json` file should be -

```
{
  "assets": {
    "collection": {
      "ethCollectionMean": {
        "power": 2,
        "official jobs": {
          "1": {
            "URL": "https://data.messari.io/api/v1/assets/eth/metrics",
            "selector": "[`data`][`market_data`][`price_usd`]",
            "power": 2,
            "weight": 2
          },
        },
        "custom jobs": [
          {
            "URL": "https://api.lunarcrush.com/v2?data=assets&symbol=ETH",
            "selector": "[`data`][`0`][`price`]",
            "power": 3,
            "weight": 2
          },
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

In the above example for the collection `ethCollectionMean`, new custom job having URL `https://api.lunarcrush.com/v2?data=assets&symbol=ETH` is added.

```
 "custom jobs": [
          {
            "URL": "https://api.lunarcrush.com/v2?data=assets&symbol=ETH",
            "selector": "[`data`][`0`][`price`]",
            "power": 3,
            "weight": 2
          },
        ]
```
