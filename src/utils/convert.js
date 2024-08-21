export const ConvertType = {
  UPPER: 'UPPER',
  LOWER: 'LOWER',
};

export function convertTitle(type, title) {
  switch (type) {
    case ConvertType.UPPER:
      return title.toUpperCase();
    case ConvertType.LOWER:
      return title.toLowerCase();
    default:
      return title;
  }
}
