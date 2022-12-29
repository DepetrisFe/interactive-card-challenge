function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}

export const formatCardNumber = (value: string) => {
  if (!value) {
    return value;
  }

  const clearValue = clearNumber(value);
  let nextValue;

  nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
    4,
    8
  )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;

  return nextValue.trim();
};
