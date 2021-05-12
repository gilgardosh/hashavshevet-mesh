import * as dataFile from "../utils/hashavshevetDataFiles";

const handleParameters = (args) => {
  console.log(args);

  let parametersArray = [
    {
      p_name: "__MUSTACH_P0__",
      id: "0", // if you change this, parameter will be ignored
      type: "long",
      name: "betweenIDs",
      defVal: args.minID || -999999999,
      opName: "מ..עד",
      opOrigin: "from",
    },
    {
      p_name: "__MUSTACH_P1__",
      id: "500", // if you change this, parameter will be ignored
      type: "long",
      name: "betweenIDs1",
      defVal: args.maxID || 999999999,
      opName: "מ..עד",
      opOrigin: "to",
    },
  ];
  return parametersArray;
};

const resolver = (next) => (root, args, context, info) => {
  const parameters = handleParameters(args);
  const updatedArgs = {
    ...args,
    parameters,
    dataFile: dataFile.bankPageRecords,
  };
  return next(root, updatedArgs, context, info);
};

export default resolver;
