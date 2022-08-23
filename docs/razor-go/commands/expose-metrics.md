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

- If you are running multiple stakers and want to monitor via single grafana dashboard
    
    1. You need to update `./config/prometheus.yml`, add new target block where `job_name: "razor-go"`
        ```
        - targets: ["<second-host-address>:2112"]
          labels:
            staker: "<staker-name>"
        ```
    2. Restart vmagent service `docker-compose restart vmagent`
### Start monitoring stack
-  You can spin all agents at once via 
        
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
    
>**_NOTE:_** Configure firewall for port `3000` on your host to access grafana.

### Troubleshoot Alerting

1. In `docker-compose.yml` uncomment ports for `alertmanager` and `vmalert`.
2. Configure firewall to allow access to ports `8880` and `9093`.

3. Check you get alerts on vmalert via `http://<host_address>:8880/vmalert/alerts`. vmalert is configured to scrap in every 2min. 

4. If you see alert in vmalert then look into alertmanager `http://<host_address>:9093/#/alerts?`, if you see alerts in there but you didn't get one then probably you need to check your weebhook.