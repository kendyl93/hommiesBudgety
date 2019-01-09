export const truncate = (string, breakPoint) =>
  string.length > breakPoint ? string.substring(0, breakPoint) + '...' : string;
