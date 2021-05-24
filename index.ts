import { getSdk } from './src/generated/sdk';
import { findAndParseConfig } from '@graphql-mesh/config';
import { getMesh } from '@graphql-mesh/runtime';
import fetch from 'node-fetch';

const app = async (wizPersonalToken: string, wizCompanyKey: string, wizUrl: string) => {
  console.log('initiating sdk...');

  process.env.WIZ_URL = wizUrl;
  process.env.WIZ_AUTH_TOKEN = (await login(wizPersonalToken, wizCompanyKey, wizUrl)) as string;

  console.log('logged in to Hashavshevet');

  const meshConfig = await findAndParseConfig();
  const { sdkRequester } = await getMesh(meshConfig);
  const sdk = getSdk(sdkRequester);

  console.log('Mesh ready');

  return sdk;
};

const login = (wizKey: string, company: string, wizUrl: string) => {
  const p = new Promise((resolve, reject) => {
    if (!wizKey || !company) {
      reject(new Error('Missing Hashavshevet user key or company ID'));
      return;
    }
    const url = `https://${wizUrl}/createSession/${wizKey}/${company}`;
    fetch(url)
      .then((res) => res.text())
      .then((authToken) => {
        if (authToken === 'iligal token') {
          reject(new Error('Ilegal token'));
        }
        resolve(authToken);
      })
      .catch((error) => reject(new Error(`Login fail: ${error}`)));
  });
  return p;
};

export default app;

const testRun = async () => {
  const sdk = await app(
    '20e260c0b4150eda0927ca2742d19831f1ff6602c5c9965698247d2a0209ac35c58d0ce7f8344dd8a012cb137972a10e21c44874aa7ce9b1e3f8c889d727f7ab',
    'wizdb1229n4',
    'lb11.wizcloud.co.il',
  );

  const records = await sdk.getBankPageRecordsQuery();

  console.log(records);
};

testRun();
