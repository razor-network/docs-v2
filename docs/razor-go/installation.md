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
