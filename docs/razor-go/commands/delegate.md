---
title: Delegate
---

If you want to become a delegator use the `delegate` command. The staker whose `staker_id` is provided, their stake is increased.

razor cli

```
$ ./razor delegate --address <address> --value <value> --pow <power> --stakerId <staker_id> --logFile <filename>
```

docker

```
docker exec -it razor-go razor delegate --address <address> --value <value> --pow <power> --stakerId <staker_id> --logFile <filename>
```

Example:

```
$ ./razor delegate --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --value 1000 --pow 10 --stakerId 1 --logFile logs
```
