export type RGBAColor = {
  R: number;
  G: number;
  B: number;
  A: number;
};

// Gets the R G B A values from rgba(..)
export const getColorsFromRGBA = (input: string): RGBAColor => {
  const [R, G, B, A] = input
    .substring(input.indexOf('(') + 1, input.lastIndexOf(')'))
    .split(/,\s*/)
    .map(x => +x)
    .map(x => (isNaN(x) ? 0 : x));

  return {
    R,
    G,
    B,
    A,
  };
};

export const getRgbaFromHex = (input = '#000000', alpha?: number): string => {
  const value = input.trim();

  const r = parseInt(value.slice(1, 3), 16);
  const g = parseInt(value.slice(3, 5), 16);
  const b = parseInt(value.slice(5, 7), 16);

  if (alpha) return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';

  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
};
