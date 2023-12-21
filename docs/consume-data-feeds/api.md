# Datafeed Merkle API

The Datafeed Merkle API is a specialized service designed to facilitate the retrieval of call data essential for updating collection results on a destination blockchain. It offers endpoints to access information about active collections and their related calldata, ensuring seamless integration and data synchronization across blockchain networks. The call data provided should be used to call the `fetchResult(bytes calldata _data)` function described here. 

## Endpoints

### 1. List of Active Collections
- **Endpoint:** `/collections`
- **Method:** GET
- **Description:** This endpoint provides a list of active collections, detailing both their unique identifiers (`ids`) and their corresponding cryptographic name hashes (`nameHash`). It is intended to give an overview of all collections that are curently active in the protocol. The `lastUpdatedEpoch` tells us the last epoch the collections were updated on. For the current epoch check [Razorscan](https://razorscan.io/). 
- **Curl Example:**
  ```bash
  curl -X GET 'http://34.126.135.243/collections'


- **Example Response**
    ```bash
    {"id":"activeCollections","ids":[2,3],"lastUpdatedEpoch":1419225,"nameHash":["0x59102b37de83bdda9f38ac8254e596f0d9ac61d2035c07936675e87342817160","0x7404e3d104ea7841c3d9e6fd20adfe99b4ad586bc08d8f3bd3afef894cf184de"]}


### 2. Fetch Calldata of Collection
- **Endpoint:** `/collection/:nameHash`
- **Method:** GET
- **Description:** This endpoint retrieves the calldata associated with a specific collection, identified by its `nameHash`. The `nameHash` is a unique cryptographic identifier for each collection, ensuring that the data retrieved is specific and relevant to the requested collection. This endpoint is crucial for applications that need to update or verify collection data on a blockchain.
- **Curl Example:**
  ```bash
  curl -X GET 'http://34.126.135.243/collection/{nameHash}'

- **Example Response**
    ```bash
    {"id":2,"calldata":"0x43222d5abbd0b3698c3debf3a90e96171043b84be44498978c2b7c0b0115851a00000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000259102b37de83bdda9f38ac8254e596f0d9ac61d2035c07936675e87342817160000000000000000000000000000000000000000000000000000000000003617f000000000000000000000000000000000000000000000000000000006582e96d00000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000001f093d1fb72f3c58e60387bb2b6a6fd3df502a15ccd340ac5ae2e900f7670ecc600000000000000000000000000000000000000000000000000000000000000415d58884709a53a71019f99523805182185d2a2edf3701c2d00772eb2f00fcad2466453c999879998995c7b0445e47fd6df0118654c2aead134eb1d914f1e364e1c00000000000000000000000000000000000000000000000000000000000000","nameHash":"0x59102b37de83bdda9f38ac8254e596f0d9ac61d2035c07936675e87342817160","timestamp":1703078253}


<!-- ### 3. Calldata by Collection ID
- **Endpoint:** `/col/:id`
- **Method:** GET
- **Description:** This endpoint fetches calldata for a collection based on its unique `id`. This `id` is typically a numerical identifier assigned to each collection within the protocol. This collection calldata should be passed into the `fetchResult(bytes calldata)` function on the destination chains `Transparent Forwarder` contract which verifies and updates the collections latest result. This operation makes the price available for on-chain use.
- **Curl Example:**
  ```bash
  curl -X GET 'http://34.126.135.243/col/{id}'

- **Example Response**
    ```bash
    {"id":3,"calldata":"0x30a5f7bb5e86163313b4265e92beadda8eaf793cf7c60e3b5013c73d49f24cd10000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000037404e3d104ea7841c3d9e6fd20adfe99b4ad586bc08d8f3bd3afef894cf184de0000000000000000000000000000000000000000000000000000000000428dfc000000000000000000000000000000000000000000000000000000006583ca7800000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000001f20ea0c37a3a3d8a5802758eb69cf7da566da49cff8b724fb848ab357a4ec1d00000000000000000000000000000000000000000000000000000000000000041b39b856199358e1f4cb5498e0477705478c3ebb188e10cc94b7c2a70a0134ece4b4304a83d43aceda1537be263eeb8d0fc7e83d31cf8c61d8c1bd55472393dc41c00000000000000000000000000000000000000000000000000000000000000","nameHash":"0x7404e3d104ea7841c3d9e6fd20adfe99b4ad586bc08d8f3bd3afef894cf184de","timestamp":1703135864} -->









