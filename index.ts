import fetch from 'node-fetch';
import { getBuiltMesh, getMeshSDK, Sdk } from './.mesh/index.js';

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

const testRun = async () => {
  const app = await init(
    '20e260c0b4150eda0927ca2742d19831f1ff6602c5c9965698247d2a0209ac35c58d0ce7f8344dd8a012cb137972a10e21c44874aa7ce9b1e3f8c889d727f7ab',
    'wizdb1229n3',
    'lb11.wizcloud.co.il',
  );

  // const data = await app.sdk.getRecords_query({
  //   input: {
  //     // idMin: 1027,
  //     // idMax: 1028,
  //   },
  // });

  const data = await app.sdk.getCompanies_query();
  // const data = await app.execute(
  //   `query test {
  //     getBatch(input: {idMax: 14, idMin: 14}) {
  //       repdata {
  //         id
  //         transactions {
  //           id
  //           batchId
  //           creditorId
  //           batch {
  //             id
  //           }
  //           creditor {
  //             id
  //             name
  //           }
  //           records {
  //             id
  //             batchId
  //             transaction {
  //               id
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }`,
  //   {},
  // );
  // const data = await app.sdk.importAccounts_mutation({
  //   input: {
  //     insertnew: false,
  //     rows: [
  //       {
  //         AccountKey: '111111',
  //         FullName: 'TEST2',
  //       },
  //     ],
  //   },
  // });
  // const data = await app.execute(
  //   `mutation importAccounts_mutation {
  //       importAccounts(input: {
  //         insertnew: false,
  //         rows: [
  //           {
  //             AccountKey: "11111",
  //             FullName: "TEST2",
  //           },
  //         ],
  //       }) {
  //         status
  //         errors {
  //           index
  //           err
  //       }
  //   }
  // }`,
  //   {},
  // );
  // const data = await app.sdk.importTransactionsToBatch_mutation({
  //   input: {
  //     insertolastb: true,
  //     check: true,
  //     issue: false,
  //     rows: [
  //       {
  //         CurrencyCode: null,
  //         DatF3: '02/11/2020',
  //         Description: 'Monthly Fee',
  //         Details: '0f6ba61a-0fe6-4ea3-8bfd-32a2a0d8faf3',
  //         DueDate: '15/11/2020',
  //         Referance: 572410,
  //         Ref2: 560647,
  //         SuF: 32.8,
  //         SuFDlr: 0,
  //         TransCredID: '66428',
  //         TransDebID: '25002',
  //         TransType: '2',
  //         ValueDate: '02/11/2020',
  //         moves: [
  //           {
  //             AccountKey: '66428',
  //             DebitCredit: 0,
  //             SufDlr: 0,
  //             Suf: 32.8,
  //           },
  //           {
  //             AccountKey: '25002',
  //             DebitCredit: 1,
  //             SufDlr: 0,
  //             Suf: 28.03,
  //           },
  //           {
  //             AccountKey: '40002',
  //             DebitCredit: 1,
  //             SufDlr: 0,
  //             Suf: 4.77,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: null,
  //         DatF3: '02/11/2020',
  //         Description: 'Monthly Fee',
  //         Details: 'dfc7b3c4-9f4b-48d3-87ac-e7e629145556',
  //         DueDate: '15/11/2020',
  //         Referance: 572410,
  //         Ref2: 560647,
  //         SuF: 32.8,
  //         SuFDlr: 0,
  //         TransCredID: '1074',
  //         TransDebID: '66428',
  //         TransType: null,
  //         ValueDate: '02/11/2020',
  //         moves: [
  //           {
  //             AccountKey: '1074',
  //             DebitCredit: 0,
  //             SufDlr: 0,
  //             Suf: 32.8,
  //           },
  //           {
  //             AccountKey: '66428',
  //             DebitCredit: 1,
  //             SufDlr: 0,
  //             Suf: 32.8,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: '$',
  //         DatF3: '05/11/2020',
  //         Description: 'Conversion for Arda',
  //         Details: '666ef216-c042-44e4-8457-c072d30db88f',
  //         DueDate: '05/11/2020',
  //         Referance: 11517,
  //         SuF: 16900.5,
  //         SuFDlr: 5000,
  //         TransCredID: '466803',
  //         TransDebID: null,
  //         TransType: null,
  //         ValueDate: '05/11/2020',
  //         moves: [
  //           {
  //             AccountKey: '466803',
  //             DebitCredit: 0,
  //             SufDlr: 5000,
  //             Suf: 16900.5,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: '$',
  //         DatF3: '01/02/2021',
  //         Description: 'Conversion for Arda',
  //         Details: '8140a6b1-61ed-4155-9c84-5d20fd3a9345',
  //         DueDate: '01/02/2021',
  //         Referance: 13414,
  //         SuF: 32937,
  //         SuFDlr: 10000,
  //         TransCredID: '466803',
  //         TransDebID: null,
  //         TransType: null,
  //         ValueDate: '01/02/2021',
  //         moves: [
  //           {
  //             AccountKey: '466803',
  //             DebitCredit: 0,
  //             SufDlr: 10000,
  //             Suf: 32937,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: 'אירו',
  //         DatF3: '04/02/2021',
  //         Description: 'January 2021',
  //         Details: 'b9643760-8319-45ed-a39f-64484bf11c6d',
  //         DueDate: '03/02/2021',
  //         Referance: 9978,
  //         Ref2: 22021,
  //         SuF: 27498.24,
  //         SuFDlr: 6930,
  //         TransCredID: '69905',
  //         TransDebID: '23005',
  //         TransType: null,
  //         ValueDate: '03/02/2021',
  //         moves: [
  //           {
  //             AccountKey: '69905',
  //             DebitCredit: 0,
  //             SufDlr: 6930,
  //             Suf: 27498.24,
  //           },
  //           {
  //             AccountKey: '23005',
  //             DebitCredit: 1,
  //             SufDlr: 6930,
  //             Suf: 27498.24,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: null,
  //         DatF3: '04/02/2021',
  //         Description: 'January 2021',
  //         Details: 'cc450301-f49b-4742-a914-5105114debcc',
  //         DueDate: '04/02/2021',
  //         Referance: 9978,
  //         Ref2: 22021,
  //         SuF: 85.24,
  //         SuFDlr: 0,
  //         TransCredID: '27002',
  //         TransDebID: '69905',
  //         TransType: null,
  //         ValueDate: '03/02/2021',
  //         moves: [
  //           {
  //             AccountKey: '27002',
  //             DebitCredit: 0,
  //             SufDlr: 0,
  //             Suf: 85.24,
  //           },
  //           {
  //             AccountKey: '69905',
  //             DebitCredit: 1,
  //             SufDlr: 0,
  //             Suf: 85.24,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: 'אירו',
  //         DatF3: '04/02/2021',
  //         Description: 'January 2021',
  //         Details: '250f6ab2-3ea7-4815-8cc6-82f53c40bfd0',
  //         DueDate: '04/02/2021',
  //         Referance: 9978,
  //         Ref2: 22021,
  //         SuF: 27413,
  //         SuFDlr: 6930,
  //         TransCredID: '4668032',
  //         TransDebID: '69905',
  //         TransType: null,
  //         ValueDate: '04/02/2021',
  //         moves: [
  //           {
  //             AccountKey: '4668032',
  //             DebitCredit: 0,
  //             SufDlr: 6930,
  //             Suf: 27413,
  //           },
  //           {
  //             AccountKey: '69905',
  //             DebitCredit: 1,
  //             SufDlr: 6930,
  //             Suf: 27413,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: 'אירו',
  //         DatF3: '04/02/2021',
  //         Description: 'Conversion for Kamil',
  //         Details: '275a3ccc-a4f7-4499-8d24-667f08d6fa53',
  //         DueDate: '04/02/2021',
  //         Referance: 11497,
  //         SuF: 39637,
  //         SuFDlr: 10000,
  //         TransCredID: '466803',
  //         TransDebID: null,
  //         TransType: null,
  //         ValueDate: '04/02/2021',
  //         moves: [
  //           {
  //             AccountKey: '466803',
  //             DebitCredit: 0,
  //             SufDlr: 10000,
  //             Suf: 39637,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: '$',
  //         DatF3: '01/03/2021',
  //         Description: 'Conversion for Arda',
  //         Details: '2496f1b8-c4ef-4b00-9e27-035cbb855d73',
  //         DueDate: '01/03/2021',
  //         Referance: 14122,
  //         SuF: 16550.5,
  //         SuFDlr: 5000,
  //         TransCredID: '466803',
  //         TransDebID: null,
  //         TransType: null,
  //         ValueDate: '01/03/2021',
  //         moves: [
  //           {
  //             AccountKey: '466803',
  //             DebitCredit: 0,
  //             SufDlr: 5000,
  //             Suf: 16550.5,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: 'אירו',
  //         DatF3: '19/05/2021',
  //         Description: 'Conversion for Kamil transfer',
  //         Details: '2c92ce0d-4894-44a2-87d3-fb8c5c1a9be3',
  //         DueDate: '19/05/2021',
  //         Referance: 10230,
  //         SuF: 79778,
  //         SuFDlr: 20000,
  //         TransCredID: '466803',
  //         TransDebID: null,
  //         TransType: null,
  //         ValueDate: '19/05/2021',
  //         moves: [
  //           {
  //             AccountKey: '466803',
  //             DebitCredit: 0,
  //             SufDlr: 20000,
  //             Suf: 79778,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: '$',
  //         DatF3: '03/08/2021',
  //         Description: 'Vercel Hosting',
  //         Details: 'e2a546ef-870b-4e44-b08e-20dffda707e8',
  //         DueDate: '05/08/2021',
  //         Referance: 150987,
  //         Ref2: 509510004,
  //         SuF: 385.56,
  //         SuFDlr: 120,
  //         TransCredID: '69910',
  //         TransDebID: '23002',
  //         TransType: null,
  //         ValueDate: '03/08/2021',
  //         moves: [
  //           {
  //             AccountKey: '69910',
  //             DebitCredit: 0,
  //             SufDlr: 120,
  //             Suf: 385.56,
  //           },
  //           {
  //             AccountKey: '23002',
  //             DebitCredit: 1,
  //             SufDlr: 120,
  //             Suf: 385.56,
  //           },
  //         ],
  //       },
  //       {
  //         CurrencyCode: '$',
  //         DatF3: '03/08/2021',
  //         Description: 'Vercel Hosting',
  //         Details: 'eb7766d3-b79d-4b7a-9166-65334e3e6024',
  //         DueDate: '05/08/2021',
  //         Referance: 150987,
  //         Ref2: 509510004,
  //         SuF: 385.56,
  //         SuFDlr: 120,
  //         TransCredID: '10821',
  //         TransDebID: '69910',
  //         TransType: null,
  //         ValueDate: '03/08/2021',
  //         moves: [
  //           {
  //             AccountKey: '10821',
  //             DebitCredit: 0,
  //             SufDlr: 120,
  //             Suf: 385.56,
  //           },
  //           {
  //             AccountKey: '69910',
  //             DebitCredit: 1,
  //             SufDlr: 120,
  //             Suf: 385.56,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // });
  console.log(JSON.stringify(data, null, '  '));
  // const data2 = await app.execute(
  //   `query MyQuery {
  //     getRecords(input: {transactionIdMin: 990, transactionIdMax: 990}) {
  //       repdata {
  //         id
  //       }
  //     }
  //   }`,
  //   {},
  // );
  // console.log(JSON.stringify(data2, null, '  '));
};

testRun().catch((e) => {
  console.error(e);
  process.exit(1);
});
