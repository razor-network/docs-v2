---
title: Create Account
---

Create an account using the `create` command. You'll be asked to enter a password that'll be used to encrypt the keystore file.

razor cli

```
$ ./razor create

```

Docker

```
docker exec -it razor-go razor create
```

Docker providing password file

```
docker exec -it razor-go razor --password /root/.razor/password-file
```

Example:

```
$ ./razor create
Password:
```
