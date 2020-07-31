import * as cdk from '@aws-cdk/core';
import * as ddb from '@aws-cdk/aws-dynamodb';

export interface SomeStackProps extends cdk.StackProps{
    readonly table: ddb.ITable;
} 

export class SomeStack extends cdk.Stack {

  constructor(scope: cdk.Construct, id: string, props: SomeStackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new cdk.CfnOutput(this, 'Table', {
        value: props.table.tableName
    });
  }
}
