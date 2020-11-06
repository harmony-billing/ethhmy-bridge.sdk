const { BridgeSDK } = require('..');
const { ethClient, hmyClient, apiConfig } = require('./configs');

const operationCall = async () => {
  const bridgeSDK = new BridgeSDK();

  await bridgeSDK.init({
    api: apiConfig,
    ethClient,
    hmyClient,
  });

  // get operations
  const operations = await bridgeSDK.api.getOperations({ size: 50, page: 0 });

  console.log('Operations totalElements: ', operations.totalElements);

  // get operation by id
  const operationId = operations.content[0].id;
  const operation = await bridgeSDK.api.getOperation(operationId);

  console.log('Operation details: ', operation);
};

operationCall();