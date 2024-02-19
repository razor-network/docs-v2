---
title: Authenticated Jobs
---

The jobs which needs API authentication or has secured endpoints ensures that request is coming from a valid, authorized source. There are two common ways to include authentication information in web requests: in the URL or in the headers.

Authentication in the URL: 
The format usually looks like `http://example.com/api/resource?api-key=yourApiKey`. 

Authentication in Header:
Method where an API key is included in the header. The header format usually looks like: `x-api-key: yourApiKey`.

To secure the authentications details, oracle node fetches the API key from environment variables.

## How can a staker use authenticated job?

Staker needs to export the API key to the environment variables.
The keyword to be used to export should be fetched from the job details, staker can find the keyword inscribed inside `${...}`

Let's see how can it be done with the help of example.

Job: COINMARKETCAP API data feed

```
{"type": "GET", "url": "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?symbol=ETH&convert=USD", "body": {}, "header": {"X-CMC_PRO_API_KEY": "${COINMARKETCAP_API_KEY}", "Accept": "application/json"}}
```

As you can see in `"header": {"X-CMC_PRO_API_KEY": "${COINMARKETCAP_API_KEY}"`the datafeed needs header authentication by the staker.

If the staker has COINMARKETCAP API key as `73034021746739393292922`, the keyword to be used to export is `COINMARKETCAP_API_KEY` which is inscribed inside `${...}`.

Follow the steps shown below to export the API key as an environment variable:

### If a staker is running via binary build from source

Now staker needs to use the same keyword defined inside `${...}` as a environment variable using export command and assigning it a value as user's API key as shown below.

```
export COINMARKETCAP_API_KEY="73034021746739393292922"
```

Then the staker can restart the vote command.

### If a staker is running via docker

Now staker needs to use the same keyword defined inside `${...}` as a environment variable using export command and assigning it a value as user's API key as shown below.

Staker needs to pass every environment variable as a value to `-e` flag in the docker command. 

So the vote command would look like:

```
docker exec -it -e COINMARKETCAP_API_KEY=73034021746739393292922 razor-go razor vote --address 0xf652896274e765FAc2075142aA5A56E9d7151A25 
```
