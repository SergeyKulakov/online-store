const createSizeArray = (sizes: { key: string[]; value: string[] }) => {
  return sizes.value.map((value, index) => {
    return { value, key: sizes.key[index] };
  });
};

export default createSizeArray;
