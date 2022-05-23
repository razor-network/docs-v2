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
docker exec -it razor-go razor setConfig --exposeMetrics 2112
```
