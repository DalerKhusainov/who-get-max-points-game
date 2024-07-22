export function randomNum(): number {
  const num = Math.floor(Math.random() * 7);
  if (num === 0) return 1;
  return num;
}
