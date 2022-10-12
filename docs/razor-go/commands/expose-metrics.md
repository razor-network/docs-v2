---
title: Expose Metrics
---

To place monitoring and alerting to a staker we are exposing Prometheus-based metrics. Which will provide metric at `/mertics` GET endpoint for Prometheus to scrap.


### Prerequisites

- You must have Docker and Docker Compose installed.

razor cli

#### Without TLS/SSL (Transport Layer Security / Secure Sockets layer )

```
$ ./razor setConfig --exposeMetrics 2112
```

#### With TLS/SSL (Transport Layer Security / Secure Sockets layer )

```
$ ./razor setConfig --exposeMetrics 2112 --certFile /cert/file/path/certfile.crt --certKey key/file/path/keyfile.key
```


> **_NOTE:_**  If you configured the domain name to access your staker metric endpoint ex: www.my-domain.com/metrics, It's highly recommended to use an SSL Certificate to avoid any `Man-in-the-Middle` attack. You can get a free SSL Certificate from [Certbot](https://certbot.eff.org/).  
>
>Configure Certbot (linux):
> 1. Install certbot  
> ```
> sudo add-apt-repository ppa:certbot/certbot  
> sudo apt-get update  
> sudo apt-get install certbot
>```
> 2. Get an SSL Certificate from certbot
> ```
> sudo certbot certonly --standalone --preferred-challenges http -d example.com
>```
>3. Can find installed certs at `/etc/letsencrypt/live/your-domain`
>4. Your private key will be: `privkey.pem` and certificate will be: `fullchain.pem`



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

- For alerting you can add a webhook in `./configs/alertmanager.yml`, and replace `http://127.0.0.1:5001/` with your webhook URL. This will send you an alert every 5min if metrics stop.

- If you are running multiple stakers and want to monitor via a single Grafana dashboard
    
    1. You need to update `./config/prometheus.yml`, and add new target block where `job_name: "razor-go"`
        ```
        - targets: ["<second-host-address>:2112"]
          labels:
            staker: "<staker-name>"
        ```
    2. Restart Vmagent service `docker-compose restart vmagent`
### Start monitoring stack
-  You can spin all agents at once via 
        
    ```
    docker-compose up -d
    ``` 
    Can check the status of each service via
    ```
    docker-compose ps
    ```

- You can open Grafana at `<private/public address of host>:3000`, and get 
    1. Can check out the `Razor` dashboard to monitor your staker.
    2. Insight of host metrics at the `Node Exporter Full` dashboard.
    3. Containers Insight at the `Docker and OS metrics ( Cadvisor, node_exporter )` dashboard.
    4. Can monitor alerts at the `Alertmanager` dashboard.
    
>**_NOTE:_** Configure firewall for port `3000` on your host to access Grafana.

### Troubleshoot Alerting

1. In `docker-compose.yml` uncomment ports for `alertmanager` and `vmalert`.
2. Configure the firewall to allow access to ports `8880` and `9093`.

3. Check you get alerts on Vmalert via `http://<host_address>:8880/vmalert/alerts`. vmalert is configured to scrap in every 2min. 

4. If you see an alert in vmalert then look into alertmanager `http://<host_address>:9093/#/alerts?`, if you see alerts in there but you didn't get one then probably you need to check your webhook.