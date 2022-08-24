---
title: Import Account
---

If you already have an account created, and have it's private key, that account can be imported into the `razor-go` client.
To do that, you can use the `import` command. You'll be asked the private key first and then the password which you want to encrypt your keystore file with.

cli

```
$ ./razor import
```

docker

```
docker exec -it razor-go razor import
```

Example:

```
$ ./razor import
🔑 Private Key:
Password:
```

You can get the keystore files at `$HOME/.razor/keystore_files/` directory

_Before staking on Razor Network, please ensure your account has enough sFUEL and RAZOR._
