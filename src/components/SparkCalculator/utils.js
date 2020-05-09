export const checkProbaFormat = value => {
  if (isNaN(value) || Number(value) < 0 || Number(value) > 100)
    return false;
  return true;
}

export const checkRollFormat = value => {
    if (isNaN(value) || !Number.isInteger(Number(value)) || Number(value) < 0)
      return false;
    return true;
  }

export const geoDistCDF = (p, k) => {
    return 1 - (1 - p) ** k;
}