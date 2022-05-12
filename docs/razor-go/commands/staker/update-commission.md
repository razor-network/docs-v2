---
title: Update Commission
---

If you are a staker and have accepted delegation, you can define your commission rate using this command.

razor cli

```
$ ./razor updateCommission --address <address> --commission <commission_percent>

```

docker

```
docker run -it --rm \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest \
    updateCommission --address <address> --commission <commission_percent>
```

Example:

```
$ ./razor updateCommission --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --commission 10
```
