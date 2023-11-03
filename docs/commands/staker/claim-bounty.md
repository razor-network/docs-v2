---
title: Claim Bounty
---

If you want to claim your bounty after disputing a rogue staker, you can run `claimBounty` command.

> **Note**: _bountyIds are stored in .razor directory with file name in format YOUR_ADDRESS_disputeData.json file._

Example:

```
0x2EDc3c6F93e4e20590F480272AB490D2620557xY_disputeData.json
```

If you know the bountyId, you can pass the value to bountyId flag.

razor cli

```
$ ./razor claimBounty --address <address> --bountyId <bounty_id>  --logFile <filename>
```

docker

```
docker exec -it razor-go razor claimBounty --address <address> --bountyId <bounty_id> --logFile <filename>
```

Example:

```
$ ./razor claimBounty --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --bountyId 5 --logFile logs
```

You can also run claimBounty command without passing `bountyId` flag as it will pick up bountyIds associated to your address from the file one at a time.

razor cli

```
$ ./razor claimBounty --address <address>
```

docker

```
docker exec -it razor-go razor claimBounty --address <address>
```
