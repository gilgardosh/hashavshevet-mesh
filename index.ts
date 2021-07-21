import { getSdk, Sdk } from './src/generated/sdk';
import { findAndParseConfig } from '@graphql-mesh/config';
import { ExecuteMeshFn, getMesh } from '@graphql-mesh/runtime';
import fetch from 'node-fetch';
import * as path from 'path';

const init = async (
  hashavshevetPersonalToken: string,
  hashavshevetCompanyKey: string,
  hashavshevetUrl: string,
): Promise<{ sdk: Sdk; execute: ExecuteMeshFn }> => {
  console.log('initiating sdk...');

  process.env.HASHAVSHEVET_MESH_URL = hashavshevetUrl;
  process.env.HASHAVSHEVET_MESH_AUTH_TOKEN = (await login(
    hashavshevetPersonalToken,
    hashavshevetCompanyKey,
    hashavshevetUrl,
  )) as string;

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

const login = (hashavshevetKey: string, company: string, hashavshevetUrl: string) => {
  const p = new Promise((resolve, reject) => {
    if (!hashavshevetKey || !company) {
      reject(new Error('Missing Hashavshevet user key or company ID'));
      return;
    }
    const url = `https://${hashavshevetUrl}/createSession/${hashavshevetKey}/${company}`;
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

export * from './src/generated/sdk';
export { init };
