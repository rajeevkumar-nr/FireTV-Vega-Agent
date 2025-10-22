/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import { AppRegistry, LogBox } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';
import NewRelicAgent from 'newrelic-kepler-agent';

// Temporary workaround for problem with nested text
// not working currently.
let config = {
  // Capture Javascript errors
  recordJsErrors: true,

  // Capture Promise rejections
  recordPromiseRejections: true,

  // Capture HTTP requests
  recordFetchResults: true,

  // Capture console logs
  recordConsoleLogs: true,
};

// NewRelicAgent.startAgent("AAb34f196e3ff23888d1296e8953e08f0d31b0231b-NRMA", "US",config);
NewRelicAgent.startAgent("1", "8ebdddc3d726e9e948ae88720740d4faFFFFNRAL", "US",config);
LogBox.ignoreAllLogs();

AppRegistry.registerComponent(appName, () => App);
