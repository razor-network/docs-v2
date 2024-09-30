---
title: Set Delegation
---

If you are a staker you can accept delegation from delegators and charge a commission from them.
Setting up delegation involves two primary commands:

1. **Update Commission**: First, the staker must specify their desired commission rate. This is done using the `updateCommission` command with the `--commission` flag.
2. **Set Delegation**: Next, the staker must enable or disable delegation using the `setDelegation` command with the `--status` flag. To enable delegation, pass `--status true`.

### Using razor CLI

To update the commission:
```
$ ./razor updateCommission --address <address> --commission <commission_percent> --logFile <filename>
```

To set delegation status:
```
$ ./razor setDelegation --address <address> --status <true_or_false> --logFile <filename>
```

### Using Docker

To update the commission:
```
docker exec -it razor-go razor updateCommission --address <address> --commission <commission_percent> --logFile <filename>
```

To set delegation status:
```
docker exec -it razor-go razor setDelegation --address <address> --status <true_or_false> --logFile <filename>
```

#### Example:
Update the commission:
```
$ docker exec -it razor-go razor updateCommission --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --commission 10 --logFile logs
```

Enable delegation:
```
$ docker exec -it razor-go razor --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --status true --logFile logs
```
