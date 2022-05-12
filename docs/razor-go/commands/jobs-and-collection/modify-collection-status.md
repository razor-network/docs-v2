---
title: Modify Collection Status
---

Modify the active status of an collection using the `modifyCollectionStatus` command.

_Note: This command is restricted to "Admin Role"_

razor cli

```
$ ./razor modifyCollectionStatus --collectionId <collectionId> --address <address> --status <true_or_false>
```

docker

```
docker run -it  \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest \
    modifyCollectionStatus --collectionId <collectionId> --address <address> --status <true_or_false>
```

Example:

```
$ ./razor modifyCollectionStatus --collectionId 1 --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --status false
```
