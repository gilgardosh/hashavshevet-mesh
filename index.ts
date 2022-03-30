import { getBuiltMesh, getMeshSDK, Sdk } from './.mesh';
import https from 'https';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

const init = async (
  hashavshevetPersonalToken: string,
  hashavshevetCompanyKey: string,
  hashavshevetUrl: string,
): Promise<{ sdk: Sdk; execute: Awaited<ReturnType<typeof getBuiltMesh>>['execute'] }> => {
  console.log('initiating sdk...');

  process.env.HASHAVSHEVET_MESH_URL = hashavshevetUrl;
  process.env.HASHAVSHEVET_MESH_AUTH_TOKEN = (await login(
    hashavshevetPersonalToken,
    hashavshevetCompanyKey,
    hashavshevetUrl,
  )) as string;

  console.log('logged in to Hashavshevet');

  const { execute } = await getBuiltMesh();
  const sdk = await getMeshSDK();

  return { sdk, execute };
};

const login = (hashavshevetKey: string, company: string, hashavshevetUrl: string) => {
  const p = new Promise((resolve, reject) => {
    if (!hashavshevetKey || !company) {
      reject(new Error('Missing Hashavshevet user key or company ID'));
      return;
    }
    const path = `/createSession/${hashavshevetKey}/${company}`;

    const req = https.request(
      {
        host: hashavshevetUrl,
        path,
        method: 'GET',
      },
      (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          if (data === 'iligal token') {
            reject(new Error('Illegal token'));
          }
          resolve(data);
        });
      },
    );

    req.on('error', (error) => {
      console.error(error);
      reject(error);
    });

    req.end();
  });
  return p;
};

export * from './.mesh';
export { init };
