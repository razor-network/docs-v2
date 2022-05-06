---
title: Claim Bounty
---

If you want to claim your bounty after disputing a rogue staker, you can run `claimBounty` command

razor cli

```
$ ./razor claimBounty --address <address> --bountyId <bounty_id>
```

docker

```
docker run -it  \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest \
    claimBounty --address <address> --bountyId <bounty_id>
```

Example:

```
$ ./razor claimBounty --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --bountyId 5
```
