/* eslint-disable camelcase */
import { getSortCodesResponse } from '../../.mesh';
import { sortCodesDataFile } from './data-files';

module.exports = (next) => async (root, args, context, info) => {
  args.input = {
    parameters: [],
    datafile: sortCodesDataFile,
  };
  return next(root, args, context, info).then((data: getSortCodesResponse) => {
    // if (data.status?.repdata?.length && !data.status.repdata?.[0].id) {
    //   return null;
    // }
    return data;
  });
};
