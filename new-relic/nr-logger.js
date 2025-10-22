/**
 * Copyright (c) 2022-present New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0 
 */

class Log {
  constructor() {
    this.verbose = false;
    this.nameSpace = '[NRMA]';
  }

  info(text) {
    // eslint-disable-next-line no-console
    console._nrLog(`${this.nameSpace} ${text}`);
  }

  // only shows up in verbose mode
  debug(text) {
    if (this.verbose) {
      // eslint-disable-next-line no-console
      console._nrLog(`${this.nameSpace}:DEBUG ${text}`);
    }
  }

  error(text) {
    // eslint-disable-next-line no-console
    console._nrLog(`${this.nameSpace} ${text}`);
  }

  warn(text) {
    // eslint-disable-next-line no-console
    console._nrLog(`${this.nameSpace} ${text}`);
  }
}

export const LOG = new Log();
export default Log;
