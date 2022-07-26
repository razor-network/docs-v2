---
title: Expose Metrics
---

Expose Prometheus-based metrics for monitoring

### Prerequisites

- You must have Docker and Docker Compose installed.

razor cli

#### Without TLS

```
$ ./razor setConfig --exposeMetrics 2112
```

#### With TLS

```
$ ./razor setConfig --exposeMetrics 2112 --certFile /cert/file/path/certfile.crt --certKey key/file/path/keyfile.key
```

docker

#### Expose Metrics without TLS

```
docker exec -it razor-go razor setConfig --exposeMetrics 2112
```

#### Expose Metrics with TLS

```
docker exec -it razor-go razor setConfig --exposeMetrics 2112 --certFile /cert/file/path/certfile.crt --certKey key/file/path/keyfile.key
```

### Configuration

Clone repo and setup monitoring and alerting using Prometheus/Grafana

```
git clone https://github.com/razor-network/monitoring.git
cd monitoring
```

- If your staker is running via binary, then

  1. In `./configs/prometheus.yml`, replace `"razor-go:2112"` with `"<private/public address of host>:2112"`

- For alerting you can add webhook in `./configs/alertmanager.yml`, replace `http://127.0.0.1:5001/` with your webhook URL. This will send you an alert in every 5min if metrics stops.

### Start monitoring stack

- You can spin all agents at once via

  ```
  docker-compose up -d
  ```

  Can check the status of each service via

  ```
  docker-compose ps
  ```

- You can open grafana at `<private/public address of host>:3000`, and get
  1. Can checkout `Razor` dashboard to monitor your staker.
  2. Insight of host metrics at `Node Exporter Full` dashboard.
  3. Containers Insight at `Docker and OS metrics ( cadvisor, node_exporter )` dashboard.
  4. Can monitor alerts at `Alertmanager` dashboard.

> **_NOTE:_** Configure firewall for port `3000` on your host to access grafana.
