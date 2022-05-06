---
title: Update Collection
---

Update the collection using `updateCollection` command.

_Note: This command is restricted to "Admin Role"_

razor cli

```
$ ./razor updateCollection --collectionId <collection_id> --jobIds <list_of_jobs> --address <address> --aggregation <aggregation_method> --power <power> --tolerance <tolerance>
```

docker

```
docker run -it  \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest \
    updateCollection --collectionId <collection_id> --jobIds <list_of_jobs> --address <address> --aggregation <aggregation_method> --power <power> --tolerance <tolerance>
```

Example:

```
$ ./razor updateCollection -a 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --collectionId 3 --jobIds 1,3 --aggregation 2 --power 4 --tolerance 5
```
