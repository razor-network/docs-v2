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
docker run -it  \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    razornetwork/razor-go:latest razor create
```

Docker providing password file

```
docker run -it  \
    -v "$(echo $HOME)"/.razor:/root/.razor \
    -v /path/of/password-file:/root/.razor/password-file \
    razornetwork/razor-go:latest \
   razor create --password /root/.razor/password-file
```

Example:

```
$ ./razor create
Password:
```
