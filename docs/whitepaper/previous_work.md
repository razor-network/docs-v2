# Previous work

Previous attempts to solve this problem include application-specific oracles such as
Augur, gnosis, MakerDao, centralized oracles such as Provable and general-purpose
decentralized oracle platforms such as Truthcoin, SchellingCoin, Chainlink, Band, Kleros
and Witnet. The current work is inspired by SchellingCoin protocols such as Kleros and
Augur.
Developing a decentralized oracle is deemed a challenging problem. This is due to
the possibility of multiple kinds of attacks such as collusion, takeover, griefing, bribing, etc.,
the requirement of subjective and objective decision making, determining the "truth", and
also due to the technological limitations of the underlying blockchain protocol. Current
general-purpose oracle platforms face the following issues:
1. Lack of a high degree of decentralization and economic security
2. Trustless here means that no trusted third party or intermediaries are needed
3. Lack of long term viability
4. Cognitive load on application developers
5. Targeted misinformation attacks
6. Bribing and P+ε attacks

## 1.2.1 Lack of high degree of decentralization and economic security
Some of the current solutions involve a trusted centralized mediatory, which acts as a
single point of failure, while others combine results from a few stakeholders of the network.
Often, if a high degree of decentralization is desired, the client has to pay a high amount of
fees proportional to the degree of decentralization desired. This means that the accuracy
and economic security of the oracle platform is not the same for all jobs, and the oracle
cannot be trusted as the “Universal source of truth”.
Let’s explore this problem with an example. Assume there is a CDP
3 backed
stablecoin project called “Acme". Acme platform issues US Dollar-pegged stablecoins
backed by ether on the Ethereum blockchain, and hence, requires a data-feed of ether/USD.
Acme depends on a decentralized oracle platform called "Truthbox". Truthbox assigns
stakers to the query and reports the ether/USD price, every time Acme requests the data
with a fee. The number of stakers assigned by Truthbox depends on the amount of fees
being paid by Acme.
This shows the weakness of the system. If someone requests to report the price to
Acme with a very low fee, Truthbox will likely assign the task to a single staker (or very few
stakers). Hence the system reduces to a centralized or semi-centralized oracle. The
protocol, in such cases, becomes vulnerable to various attacks such as griefing, bribing and
collusion.
If the oracle reports a price which is too far from the actual price, it can cause a large
amount of liquidations and instability of the entire Acme platform. Hence it is required for
Acme to pay a large amount of fees every time it requests a price from Truthbox, to make
sure there is sufficient decentralization and economic security. But it still leaves it open to
attacks where the attacker pays an insignificant amount of fees to report an inaccurate
datapoint to Acme.

## 1.2.2 Lack of long term viability
Many of the current general-purpose oracle platforms are not suitable for long term
applications. They are based on the assumption that the data source is trustworthy and will
not be compromised. In case the data source is compromised or becomes defunct, the
oracle service becomes dysfunctional.
Some oracle platforms such as Chainlink are marketplace based, where a decision
needs to be made to select oracle providers with higher reputation every time a data point
needs to be fetched because the set of oracle providers and their reputation is constantly
changing.
Choosing the data feed and the oracle providers requires constant verification and
decision making. This decision making cannot be made by a smart contract autonomously
and requires decisions to be made by the stakeholders of the application. And hence, due to
the constantly changing nature of the world outside blockchain, the current oracle solutions
are not viable for long term applications.

## 1.2.3 Cognitive load on developers
As we discussed in the above section, the burden of balancing between fees and
economic security falls on the shoulders of the clients or the application developers. In some
platforms, developers are given the flexibility of choosing incentivization and punishment
mechanism, aggregation method, etc. While this is desirable in some applications, incorrect
decision making by the application developers can cause serious issues.
1.2.4 Targeted misinformation and invalid source attacks
Oracle platforms are vulnerable to targeted misinformation attacks. In this attack, the
attacker asks the oracle to report value from a URL she directly controls. She can then
program the website to report different data on each request. The attacker may even choose
to report different values to 5% or 10% of the requests.
Since most decentralized oracle providers use Truth-by-Consensus algorithms, this
can cause reputational or financial loss to the stakers even though they were acting
honestly.
1.2.5 Bribing and P+ε attacks
Stakers may be bribed by the attacker to report incorrect values. P+ε is an even
stronger form of bribing attack where the attacker only signals the bribe and does not end up
paying any bribe. This kind of attack can be especially devastating to oracles since it bears
no cost to the attacker

