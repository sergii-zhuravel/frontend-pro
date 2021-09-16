import { swapTwoNumbers } from "./lib.js";
import * as logger from "./logger.js";

logger.log();
logger.superLogger("Hello from supper logger");

logger.superLogger(swapTwoNumbers(1, 2));
console.log(logger.a)