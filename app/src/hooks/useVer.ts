const version = "20231104002";

const needUpdate = (current?: string): boolean => {
  if (current === null) {
    return true;
  }
  const currentNum = Number.parseInt(current ?? "0");
  const versionNum = Number.parseInt(version);

  return currentNum < versionNum;
};

export {
  version,
  needUpdate
};