import "./tracer";

import { logger } from "./logger";

import { serverHttp } from "./app";

const port = process.env.PORT || 3000;

serverHttp.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  logger.info(`Server running on port ${port}`);
});
