/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */
const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
+ * Metro configuration
+ * https://facebook.github.io/metro/docs/configuration
  *
+ * @type {import('metro-config').MetroConfig}
  */
const config = {
  resolver: {
    extraNodeModules: {
      'newrelic-kepler-agent': path.resolve(__dirname, '../../'),
    },
  },
  watchFolders: [path.resolve(__dirname, '../../')],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
