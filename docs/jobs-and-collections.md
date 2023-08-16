---
title: Jobs and Collections
---

In Oracle's data feeds, a "job" is a specific connection to a data source designed to retrieve price feed information. On the other hand, a "collection" groups multiple jobs to represent the price of an asset. Together, jobs and collections ensure providing accurate and consistent data feeds within the network.

## What is a Job?

A "job" serves as a pivotal component that establishes a connection to a data source responsible for providing price feed information. The job comprises of the following parameters:

- **ID:** Unique job identifier.

- **Selector Type:** The selectorType parameter determines how the response from the URL should be parsed. Depending on the format of the data source's response, it can be set to JSON or XHTML.

- **Weight:** The weight parameter designates the significance of each job's output. A higher weight indicates a greater relevance of the data obtained from that particular job.

- **Power:** The power parameter fine-tunes the decimal precision of the job query's results, ensuring both accuracy and consistency in the data procured.

- **Name:** Each job carries a name, which acts as a descriptive label to give clarity about the purpose or type of the data source.

- **Selector:** The selector parameter pinpoints a specific pattern for extracting pertinent data from the URL source.

- **URL:** The url parameter contains the web address necessary for gathering the desired data. It serves as the channel between the Oracle and the external data source.

## What is a Collection?

A collection refers to an assembly of jobs that, when taken together, signify the price of an asset. The collection comprises of the following parameters:

- **ID:** Unique collection identifier.

- **Power:** The power parameter dictates the extent of decimal shifts applied to the collection's result. Such precision adjustment guarantees consistency and accuracy in the reported value.

- **Tolerance:** The tolerance parameter outlines the acceptable percentage variance from the value reported by the network. This permits minor fluctuations while ensuring that the stakers reported value stays within reasonable limits.

- **Aggregation Method:** The aggregationMethod parameter denotes the technique adopted by stakers to consolidate data. It can be either "mean" or "median", providing flexibility in choosing the most suitable method.

- **JobIDs:** Presented as an array, the jobIDs attribute specifies the distinct jobs that stakers should query in order to contribute to the collection.

- **Name:** A collection's name refers to the name of an asset.

**Explore Further:** Browse all the collections and jobs on [RazorScan Datafeeds](https://razorscan.io/governance/datafeeds).
