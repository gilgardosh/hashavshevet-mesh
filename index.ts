import { getMeshSDK, Sdk } from './.mesh';
import fetch from 'node-fetch';

const init = async (
  hashavshevetPersonalToken: string,
  hashavshevetCompanyKey: string,
  hashavshevetUrl: string,
): Promise<{ sdk: Sdk }> => {
  console.log('initiating sdk...');

  process.env.HASHAVSHEVET_MESH_URL = hashavshevetUrl;
  process.env.HASHAVSHEVET_MESH_AUTH_TOKEN = (await login(
    hashavshevetPersonalToken,
    hashavshevetCompanyKey,
    hashavshevetUrl,
  )) as string;

  console.log('logged in to Hashavshevet');

  const sdk = await getMeshSDK();

  return { sdk };
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

export * from './.mesh';
export { init };
