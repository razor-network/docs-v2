---
title: Collection details
---

Get the list of all collections with the details like power, Id, name etc.

Example:

razor cli

```
$ ./razor collectionList
```

docker

```
docker run -it  \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest \
    collectionList
```

Note : _All the commands have an additional --password flag that you can provide with the file path from which password must be picked._
