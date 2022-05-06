---
title: Staker Info
---

If you want to know the details of a staker, you can use stakerInfo command.

razor cli

```
$ ./razor stakerInfo --stakerId <staker_id_of_the_staker>
```

docker

```
docker run -it --rm \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest \
    stakerInfo --stakerId <staker_id_of_the_staker>
```

Example:

```
$ ./razor stakerInfo --stakerId 2
```
