# Jobs and Collections

In Oracle's data feeds, a "job" represents a specific connection to a data source tasked with retrieving price feed information. A "collection", on the other hand, aggregates multiple jobs to provide a comprehensive representation of an asset's price. Together, jobs and collections are instrumental in delivering accurate and consistent data feeds within the network.

## What is a Job?

A "job" is a critical element in establishing a connection to a data source for price feed information. The job's structure includes these parameters:

- **ID:** A unique identifier for the job.
- **Selector Type:** Defines the method for parsing the response from the URL, which can vary between JSON or XHTML, depending on the data source's output format.
- **Weight:** Indicates the relative importance of the job's output, with a higher weight signifying greater significance.
- **Power:** Adjusts the decimal precision in the job's results, ensuring both accuracy and consistency.
- **Name:** Descriptive label providing context about the data source or its purpose.
- **Selector:** Specifies the pattern for extracting relevant data from the URL source.
- **URL:** The web address used to access the required data, linking the Oracle to the external data source.

## What is a Collection?

A collection is a group of jobs that collectively determine the price of an asset. It includes these parameters:

- **ID:** A unique identifier for the collection.
- **Power:** Dictates the degree of decimal shifts applied to the collection's results, ensuring precision and consistency.
- **Tolerance:** Specifies the permissible percentage variance from the network's reported value, allowing for minor fluctuations while maintaining reasonable accuracy.
- **Aggregation Method:** Indicates the data consolidation technique used by stakers, which can be either "mean" or "median".
- **JobIDs:** An array listing the specific jobs that contribute to the collection.
- **Name:** Identifies the name of the asset represented by the collection.

**Explore Further:** To view all available collections and jobs, visit [RazorScan Datafeeds](https://razorscan.io/governance/datafeeds).
