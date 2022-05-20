---
title: Claim Bounty
---

If you want to claim your bounty after disputing a rogue staker, you can run `claimBounty` command

razor cli

```
$ ./razor claimBounty --address <address> --bountyId <bounty_id>  --logFile <address>
```

docker

```
docker exec -it razor-go razor claimBounty --address <address> --bountyId <bounty_id> --logFile <address>
```

Example:

```
$ ./razor claimBounty --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --bountyId 5 --logFile 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c
```
