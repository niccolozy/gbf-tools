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

export const geoDistCDFReversed= (p, target) => {
    return Math.log(1-target) / Math.log(1-p);
}

export const geoDistCDF = (p, k) => {
    return 1 - (1 - p) ** k;
}

const factorial = n => {
  if (n < 2) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}

export const poissonDist = (k, p, n) => {
  let L = n * p;
  return (L ** k / factorial(k)) * Math.e ** (-L);
}

export const binomialDist = (k, p, n) => {
  let coeff = 1;
  for (let x = n-k+1; x <= n; x++) coeff *= x;
  for (let x = 1; x <= k; x++) coeff /= x;
  return coeff * (p ** k) * ((1 - p) ** (n - k))
}