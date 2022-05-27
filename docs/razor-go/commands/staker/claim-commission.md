---
title: Claim Commission
---

Staker can claim the rewards earned from delegator's pool share as commission using `claimCommission`

razor cli

```
$ ./razor claimCommission --address <address> --logFile <filename>
```

docker

```
docker exec -it razor-go razor claimCommission --address <address> --logFile <filename>
```

Example:

```
$ ./razor claimCommission --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --logFile logs
```
