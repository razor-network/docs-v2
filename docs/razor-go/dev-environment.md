---
title: Setting up development environment
---

1. Must have `docker` and `docker-compose` installed
2. Building the source `docker-compose build`
3. Create razor.yaml at $HOME/.razor/

   ```bash
   vi $HOME/.razor/razor.yaml
   ```

4. Add in razor.yaml and use :wq to exit form editor

   ```bash
   buffer: 20
   gaslimit: 2
   gasmultiplier: 1
   gasprice: 0
   provider: <rpc-url>
   wait: 30
   ```

5. Create account , and note address.

   ```bash
   docker-compose run razor-go /usr
   /local/bin/razor create
   ```

6. Import account

   ```
   docker-compose run razor-go /usr/local/bin/razor import
   ```

7. Get some **RAZOR** and **MATIC** token (or Token of respective RPC) to this address
8. Start **Staking**

   ```bash
   #Provide password through CLI
   docker-compose run razor-go /usr/local/bin/razor addStake --address <address> --value 50000

   #Provide password through File

     #Create file and put password string
       vi ~/.razor/pass
     #Start Staking
       docker-compose run razor-go /usr/local/bin/razor addStake --address <address> --value 50000 --password /root/.razor/pass

   ```

9. To Start **Voting**,

   1. Provide password through **CLI**

   ```bash
   # Run process in foreground and provide password through cli
   docker-compose run razor-go /usr/local/bin/razor vote --address <address>

   # Run process in background and provide password through file
   docker-compose run -d razor-go /usr/local/bin/razor vote --address <address> --password /root/.razor/pass
   ```

   1. Provide password through **File** and run in background with compose up
      1. replace `<address>` in docker-compose.yml with your address and create file pass and add your password in file

   ```bash
   docker-compose up -d
   ```
