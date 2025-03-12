---
title: Oracle Node installation
---

**Important**: _If you're upgrading your node to version v2.1.0 on the same machine where a v1.x node was running, **take a backup of the Keystore files in `.razor/keystore_files` and then delete the files inside the `.razor/data_files` directory**. This is necessary because v2.x introduces a hard fork, which includes a new epoch length that requires fresh data syncing._

### Linux quick start

Install `razor-go` pre build binary directly from github and configure into host.

#### Prerequisites

You must have `wget` and `tar` installed

For linux-amd64

```
curl -sSL https://raw.githubusercontent.com/razor-network/razor-go/main/install.sh | bash
```

For linux-arm64

```
export PLATFORM=arm64

curl -sSL https://raw.githubusercontent.com/razor-network/razor-go/main/install.sh | bash
```

Check installation

```
razor -v
```

> **_NOTE:_** To install the version you want, you can set VERSION:<git-tag\> environment variable before running above command.

### Docker quick start

One of the quickest ways to get `razor-go` up and running on your machine is by using Docker:

1. Create docker network

```
docker network create razor_network
```

2. Start razor-go container

```
docker run -d -it --entrypoint /bin/sh --network=razor_network --name razor-go -v "$(echo $HOME)"/.razor:/root/.razor razornetwork/razor-go:v2.1.0
```

> **_NOTE:_** we are leveraging docker bind-mounts to mount `.razor` directory so that we have a shared mount of `.razor` directory between the host and the container. The `.razor` directory holds keys to the addresses that we use in `razor-go`, along with logs and config. We do this to persist data in the host machine, otherwise you would lose your keys once you delete the container.

You need to set a provider before you can operate razor-go cli on docker:

```
docker exec -it razor-go razor setConfig -p <provider_url>
```

You can now execute razor-go cli commands by running:

```
docker exec -it razor-go razor <command>
```

### Setting up razor-go with docker-compose

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
