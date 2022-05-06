---
title: Set Delegation
---

If you are a staker you can accept delegation from delegators and charge a commission from them.

razor cli

```
$ ./razor setDelegation --address <address> --status <true_or_false> --commission <commission_percent>
```

docker

```
docker run -it --rm \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest \
    setDelegation --address <address> --status <true_or_false>
```

Example:

```
$ ./razor setDelegation --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --status true -c 20
```
