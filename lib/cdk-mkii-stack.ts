import * as cdk from '@aws-cdk/core';
import * as ddb from '@aws-cdk/aws-dynamodb';
import { AttributeType } from '@aws-cdk/aws-dynamodb';

export class CdkMkiiStack extends cdk.Stack {
  readonly table: ddb.Table;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    this.table = new ddb.Table(this, 'SomeTable', {
      partitionKey: {
        name: 'someKey',
        type: AttributeType.STRING
      },
      tableName: cdk.PhysicalName.GENERATE_IF_NEEDED // even without cross-env reference, this line still throws the error
    });
  }
}
