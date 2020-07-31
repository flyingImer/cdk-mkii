#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkMkiiStack } from '../lib/cdk-mkii-stack';

const app = new cdk.App();
new CdkMkiiStack(app, 'CdkMkiiStack');
