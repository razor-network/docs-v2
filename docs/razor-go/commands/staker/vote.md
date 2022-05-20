---
title: Vote
---

You can start voting once you've staked some razors

razor cli

```
$ ./razor vote --address <address> --logFile <address>
```

docker

```
docker exec -it razor-go razor vote --address <address> --logFile <address>
```

Example:

```
$ ./razor vote --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --logFile 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c 
```

If you want to claim your bounty automatically after disputing staker, you can just pass `--autoClaimBounty` flag in your vote command.

If you want to report incorrect values, there is a `rogue` mode available. Just pass an extra flag `--rogue` to start voting in rogue mode and the client will report wrong medians.
The rogueMode key can be used to specify in which particular voting state (commit, reveal) or for which values i.e. medians/revealedIds (medians, missingIds, extraIds, unsortedIds)you want to report incorrect values.

Example:

```
$ ./razor vote --address 0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c --rogue --rogueMode commit,reveal,medians,missingIds,extraIds,unsortedIds
```
