# Access Control List
### Access Types {#access-types}

| Type            | Access                                                                                                    |
| :-------------- | :-------------------------------------------------------------------------------------------------------- |
| Node            | Anyone, Not differentiated on msg.sender                                                                  |
| Particular Node | Anyone, Differentiated on msg.sender                                                                      |
| Client          | Anyone                                                                                                    |
| Internal        | Only Parent and Inherited contract                                                                        |
| Role Wise       | Specific Role, grantable/revocable by Admin through ACL.sol                                               |
|                 | <ol><li>JobConfirmer</li><li>BlockConfirmer</li><li>StakeModifier</li><li>StakerActivityUpdater</li></ol> |

<br/>

### Functional Overview {#functional-overview}

#### JobManager.sol {#jobmanagersol}

| Function   | Access       | Comments |
| :--------- | :----------- | :------- |
| createJob  | Client       |          |
| fulfillJob | JobConfirmer |          |


#### BlockManager.sol {#blockmanagersol}

| Function              | Access          | Comments |
| :-------------------- | :-------------- | :------- |
| propose               | Particular Node |          |
| giveSorted            | Particular Node |          |
| resetDispute          | Particular Node |          |
| confirmBlock          | BlockConfirmer  |          |
| \_insertAppropriately | Internal        |          |


#### VoteManager.sol {#votemanagersol}

| Function | Access          | Comments |
| :------- | :-------------- | :------- |
| commit   | Particular Node |          |
| reveal   | Node            |          |


#### StakeManager.sol {#stakemanagersol}


| Function                   | Role                  | Comments |
| :------------------------- | :-------------------- | :------- |
| setStakerEpochLastRevealed | StakerActivityUpdater |          |
| updateCommitmentEpoch      | StakerActivityUpdater |          |
| stake                      | Particular Node       |          |
| unstake                    | Particular Node       |          |
| withdraw                   | Particular Node       |          |
| givePenalties              | StakeModifier         |          |
| giveBlockReward            | StakeModifier         |          |
| giveRewards                | StakeModifier         |          |
| slash                      | StakeModifier         |          |

<br/>

### Roles and their Holders {#roles-and-their-holders}


![ACL](/img/ACL.png)

| ***Role***                | ***Accessible Functions***                              | ***Functions of*** | ***Role Holder*** |
| :------------------------ | :------------------------------------------------------ | :----------------- | :---------------- |
| **JobConfirmer**          | fullfillJob()                                           | JobManager         | BlockManager      |
| **BlockConfirmer**        | confirmBlock()                                          | BlockManager       | VoteManager       |
| **StakeModifier**         | slash()  giveBlockReward()                        | StakeManager       | BlockManager      |
|                           | giveRewards() givePenalties()                        | StakeManager       | VoteManager       |
| **StakerActivityUpdater** | setStakerEpochLastRevealed() updateCommitmentEpoch() | StakeManager       | VoteManager       |