![License](https://img.shields.io/github/license/jobsonita/rocketseat-yt-cd-110-datadog?color=blue)
![Node version](https://img.shields.io/badge/node-v14.18.0-brightgreen)
![Yarn version](https://img.shields.io/badge/yarn-v1.22.15-brightgreen)
![Express version](https://img.shields.io/github/package-json/dependency-version/jobsonita/rocketseat-yt-cd-110-datadog/express)
![Typescript version](https://img.shields.io/badge/typescript-^4.5.2-lightgrey)
![Datadog version](https://img.shields.io/badge/dd--trace-^1.5.1-blue)
![Winston version](https://img.shields.io/badge/winston-^3.3.3-blue)

# :rocket::seat: Code/drops #110 - Datadog - Application Monitoring :camera:

A simple Node/Express backend with Datadog integration for testing remote monitoring of an app. Project based on [Monitoração no Node.js - CodeDrops #110](https://www.youtube.com/watch?v=2_HFuNNOgto).

## :hammer: Status

> :white_check_mark: Finished :lock:

## :bookmark: Content Table
<!--ts-->
  * [Results](#newspaper-results)
  * [Technologies](#books-technologies)
  * [Install and Run](#calling-installing-and-running-this-project)
  * [Author and License](#memo-author-and-license)
<!--te-->

## :newspaper: Results

<details>
  <summary>Requests</summary>
  <p align="center"><img alt="Requests" title="Requests" src="./.github/1 - requests.png" width="800px"/></p>
</details>
<details>
  <summary>Requests - Metrics</summary>
  <p align="center"><img alt="Requests - Metrics" title="Requests - Metrics" src="./.github/2 - requests - metrics.png" width="800px"/></p>
</details>
<details>
  <summary>Requests - Details</summary>
  <p align="center"><img alt="Requests - Details" title="Requests - Details" src="./.github/3 - requests - details.png" width="800px"/></p>
</details>
<details>
  <summary>Application Metrics</summary>
  <p align="center"><img alt="Application Metrics" title="Application Metrics" src="./.github/4 - application metrics.png" width="800px"/></p>
</details>
<details>
  <summary>Logs</summary>
  <p align="center"><img alt="Logs" title="Logs" src="./.github/5 - logs.png" width="800px"/></p>
</details>
<details>
  <summary>Logs - Request Data</summary>
  <p align="center"><img alt="Logs - Request Data" title="Logs - Request Data" src="./.github/6 - logs - request data.png" width="800px"/></p>
</details>

## :books: Technologies

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Datadog](https://www.datadoghq.com/)
- [Winston](https://github.com/winstonjs/winston)
- [Insomnia.REST](https://insomnia.rest/)

## :calling: Installing and running this project

### :wrench: Prerequisites

Before starting, make sure you have [Git](https://git-scm.com/), [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed. It's also recommended to have [Insomnia](https://insomnia.rest/) installed in order to perform manual tests in the final step of these instructions.

This project is intended for use alongside [Datadog's website](https://www.datadoghq.com/). You'll need to follow the steps there to set up your account, install the Datadog Agent on the machine where this backend will run, and configure the log files (and give the appropriate permissions for the dd-agent user to access them).

### :inbox_tray: Installation

Clone the project using Git and install its dependencies through Yarn:

```bash
git clone https://github.com/jobsonita/rocketseat-yt-cd-110-datadog.git

# wait for git to finish clonning the project, then navigate to the folder and install the dependencies:

cd rocketseat-yt-cd-110-datadog

yarn
```

After this is done, create a copy of the file `.env.example` (or just rename it) as `.env` and fill it properly.

### :traffic_light: Execution

With the project installed and configured, run:

```bash
yarn dev
```

### :mag: Testing

Open Insomnia, import the [Insomnia requests file](tools/Insomnia_Requests.json) and execute the available request. Delete the name or the instagram fields or disable the token header to make the request fail with other status (500 or 401). If your Datadog Agent is configured correctly, you should see the requests and logs in their website.

## :memo: Author and License

[![Author: jobsonita](https://avatars.githubusercontent.com/u/1463583?s=48&v=4)](https://github.com/jobsonita/jobsonita) | [Jobson Gilberto](https://github.com/jobsonita/jobsonita)
-|-

[![License](https://img.shields.io/github/license/jobsonita/rocketseat-yt-cd-110-datadog)](LICENSE)
