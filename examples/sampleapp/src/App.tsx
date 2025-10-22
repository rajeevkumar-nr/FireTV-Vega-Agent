/*
 * Copyright (c) 2022 Amazon.com, Inc. or its affiliates.  All rights reserved.
 *
 * PROPRIETARY/CONFIDENTIAL.  USE IS SUBJECT TO LICENSE TERMS.
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Link} from './components/Link';
import NewRelicAgent from 'newrelic-kepler-agent'

let lastTime = 0;

export const App = () => {
  const styles = getStyles();
  return(
    <View style={styles.background}>
      <Link
            linkText={'Fetch'}
            onPress={() => {
              fetch("https://api.ipify.org?format=json")
                .then((response) => response.json())
                .then((data) => {
                  console.log("ApiFy response = ", data);
                })
                .catch((error) => {
                  console.log("ApiFy response error = ", error);
                });
            }}
        />
      <Link
            linkText={'Fetch error'}
            onPress={() => {
              fetch("https://api.ipify-x.org?format=json")
                .then((response) => response.json())
                .then((data) => {
                  console.log("ApiFy response = ", data);
                })
                .catch((error) => {
                  console.log("ApiFy response error = ", error);
                });
            }}
        />
      <Link
            linkText={'Throw JS error'}
            onPress={() => {
              let x = {}
              // @ts-ignore
              x.fire()
            }}
        />
      <Link
            linkText={'Harvest Now'}
            onPress={() => {
              NewRelicAgent.harvestNow()
            }}
        />
      <Link
            linkText={'Record custom event'}
            onPress= {() => {
              NewRelicAgent.recordCustomEvent("KeplerMyEvent", {"one": 1, "name": "Joe"});
            }}
        />
      <Link
            linkText={'Record custom log'}
            onPress= {() => {
              NewRelicAgent.recordLog("Kepler log message", {"one": 1, "name": "Joe"});
            }}
        />
      <Link
            linkText={'Record custom metrics'}
            onPress= {() => {
              NewRelicAgent.recordGaugeMetric("kepler.randomNumber", Math.random() * 100)

              let interval = 0
              if (lastTime != 0) {
                let now = Date.now()
                interval = now - lastTime
                lastTime = now
              }
              NewRelicAgent.recordCountMetric("kepler.randomCounter", Math.round(Math.random() * 10), interval)

              NewRelicAgent.recordSummaryMetric("kepler.sampleSummary", 5, 0.001708826, 0.0005093, 0.004382655, interval)
            }}
        />
    </View>
  );
};

const getStyles = () =>
  StyleSheet.create({
    background: {
      color: 'white',
      flex: 1,
      flexDirection: 'column',
    },
    container: {
      flex: 6,
      flexDirection: 'row',
      alignItems: 'center',
    },
    headerContainer: {
      marginLeft: 200,
    },
    headerText: {
      color: 'white',
      fontSize: 80,
      marginBottom: 10,
    },
    subHeaderText: {
      color: 'white',
      fontSize: 40,
    },
    links: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-around',
      height: 600,
    },
    image: {
      flex: 1,
      paddingLeft: 150,
    },
    textContainer: {
      justifyContent: 'center',
      flex: 1,
      marginLeft: 190,
    },
    text: {
      color: 'white',
      fontSize: 40,
    },
  });
