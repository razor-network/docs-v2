---
title: Update Commission
---

If you are a staker and have accepted delegation, you can define your commission rate using this command.

razor cli

```
$ ./razor updateCommission --address <address> --commission <commission_percent> --logFile <filename>

```

docker

```
docker exec -it razor-go razor updateCommission --address <address> --commission <commission_percent> --logFile <filename>
```

Example:

```
$ ./razor updateCommission --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --commission 10 --logFile logs
```
