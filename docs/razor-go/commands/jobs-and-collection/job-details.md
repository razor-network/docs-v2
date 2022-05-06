---
title: Job details
---

Get the list of all jobs with the details like weight, power, Id etc.

Example:

razor cli

```
$ ./razor jobList
```

docker

```
docker run -it  \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest \
    jobList
```
