---
title: Transfer
---

Transfers razor to other accounts.

razor cli

```
$ ./razor transfer --value <value> --to <transfer_to_address> --from <transfer_from_address> --logFile <filename>
```

docker

```
docker exec -it razor-go razor transfer --value <value> --to <transfer_to_address> --from <transfer_from_address> --logFile <filename>
```

Example:

```
$ ./razor transfer --value 100 --to 0x91b1E6488307450f4c0442a1c35Bc314A505293e --from 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c
```
