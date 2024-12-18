---
title: Import Endpoints
---


You can import the endpoints to file `$HOME/.razor/endpoints.json` on your local by using the `importEndpoints` command.
This command imports multiple providers along with the user input provider, which are then sorted according to the best performance. The best provider is thus chosen by the RPC manager and will be used to make the RPC calls.
You can find the list of endpoints being imported [here](https://github.com/razor-network/oracle-node/blob/main/core/constants.go)

razor cli

```
$ ./razor importEndpoints
```

docker

```
docker exec -it razor-go razor importEndpoints
```
