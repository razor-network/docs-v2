---
title: Expose Metrics
---

Expose Prometheus-based metrics for monitoring

Example:

razor cli

```
$ ./razor setConfig --exposeMetrics 2112
```

docker

```
# Create docker network

docker network create razor_network

# Expose Metrics
docker run -it  --network razor_network\
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest \
    setConfig --exposeMetrics 2112
```
