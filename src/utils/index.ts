export function areArraysEqual(a1: unknown[], a2: unknown[]): boolean {
  return (
    a1.length === a2.length && a1.every((value, index) => value === a2[index])
  );
}
