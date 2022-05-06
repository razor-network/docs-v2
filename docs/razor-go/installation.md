---
title: Razor Go installation
---

### Docker quick start

One of the quickest ways to get `razor-go` up and running on your machine is by using Docker:

```
  docker run -d \
  -it \
  --name razor-go \
  -v "$(echo $HOME)"/.razor:/root/.razor \
  razornetwork/razor-go
```

Note that we are leveraging docker bind-mounts to mount `.razor` directory so that we have a shared mount of `.razor` directory between the host and the container. The `.razor` directory holds keys to the addresses that we use in `razor-go`, along with logs and config. We do this to persist data in the host machine, otherwise you would lose your keys once you delete the container.

You need to set a provider before you can operate razor-go cli on docker:

```
docker exec -it razor-go razor setConfig -p <provider_url>
```

You can now execute razor-go cli commands by running:

```
docker exec -it razor-go razor <command>
```

### Setting up dev environment with docker-compose

You can build razor-go docker image by running:

```
docker-compose build
```

> **_NOTE:_** Add platform: linux/x86_64 for Silicon based MAC in docker-compose.yml.

Run razor-go locally with:

```
docker-compose up -d
```

You can interact with razor:

```
docker exec -it razor-go razor ...
```

### Prerequisites

- Golang 1.15 or later must be installed.
- Latest stable version of node is required.
- Silicon chip based Mac users must go for node 15.3.0+
- `geth` and `abigen` should be installed. (Skip this step if you don't want to fetch the bindings and build from scratch)
- `solc` and `jq` must be installed.

### Building the source

1. Run `npm install` to install the node dependencies.
2. If you want to build from scratch i.e., by fetching the smart contract bindings as well, run `npm run build-all`.

   _Note: To build from scratch, `geth` and `abigen` must be installed in your system._

3. If you already have the `pkg/bindings` you can run `npm run build` instead of `npm run build-all` to directly build the binary.
4. If you want to build the binary without wanting to set the configurations use `npm run build-noargs`
5. While building the binary, supply the provider RPC url and the gas multiplier.
6. To bypass the interactive mode of providing password, create file in `.razor` directory with providing password in it.
7. The binary will be generated at `build/bin`.
