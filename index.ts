import { getSdk } from './src/generated/sdk';
import { findAndParseConfig } from '@graphql-mesh/config';
import { getMesh } from '@graphql-mesh/runtime';
import fetch from 'node-fetch';
import * as path from 'path';

const hashMesh = async (wizPersonalToken: string, wizCompanyKey: string, wizUrl: string) => {
  console.log('initiating sdk...');

  process.env.WIZ_URL = wizUrl;
  process.env.WIZ_AUTH_TOKEN = (await login(wizPersonalToken, wizCompanyKey, wizUrl)) as string;

  console.log('logged in to Hashavshevet');

  const localPath = path.join(__dirname);

  const meshConfig = await findAndParseConfig({
    dir: localPath,
  });

  const { sdkRequester, execute } = await getMesh(meshConfig);
  const sdk = await getSdk(sdkRequester);

  console.log('Mesh ready');

  return { sdk, execute };
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

export default hashMesh;
