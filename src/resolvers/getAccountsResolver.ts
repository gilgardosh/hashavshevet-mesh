/* eslint-disable camelcase */
import { getAccountsResponse, queryInput_getAccounts_input_Input } from '../../.mesh';
import { accountsDataFile } from './data-files';

const handleAccountsParameters = (args: queryInput_getAccounts_input_Input = {}) => {
  const parametersArray = [
    {
      p_name: '__MUSTACH_P0__',
      id: '0',
      type: 'txt',
      name: 'id',
      defVal: `"${args.idMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P1__',
      id: '500',
      type: 'txt',
      name: 'id1',
      defVal: `"${args.idMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P2__',
      id: '1',
      type: 'txt',
      name: 'name',
      defVal: `"${args.nameMin || ''}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P3__',
      id: '501',
      type: 'txt',
      name: 'name1',
      defVal: `"${args.nameMax || 'תתתתתתתתתתתתתתת'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
    {
      p_name: '__MUSTACH_P4__',
      id: '2',
      type: 'long',
      name: 'sortCode',
      defVal: `"${args.sortCodeMin || '-999999999'}"`,
      opName: 'מ..עד',
      opOrigin: 'from',
    },
    {
      p_name: '__MUSTACH_P5__',
      id: '502',
      type: 'long',
      name: 'sortCode1',
      defVal: `"${args.sortCodeMax || '999999999'}"`,
      opName: 'מ..עד',
      opOrigin: 'to',
    },
  ];

  return parametersArray;
};
module.exports = (next) => async (root, args, context, info) => {
  const parameters = handleAccountsParameters(args.input);
  args.input = {
    parameters,
    datafile: accountsDataFile,
  };
  return next(root, args, context, info).then((data: getAccountsResponse) => {
    if (data.status?.repdata?.length && !data.status.repdata?.[0].id) {
      return null;
    }
    return data;
  });
};
