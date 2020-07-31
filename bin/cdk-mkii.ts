#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkMkiiStack } from '../lib/cdk-mkii-stack';
import { SomeStack } from '../lib/some-stack';

const app = new cdk.App();
const s = new CdkMkiiStack(app, 'CdkMkiiStack', {
    env: {
        account: '123456789',
        region: 'us-east-1'
    }
});
new SomeStack(app, 'SomeStack', {
    env: {
        account: '987654321',
        region: 'us-east-1'
    },
    table: s.table
})
