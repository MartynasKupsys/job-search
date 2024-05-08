const nextElementInList = (list, value) => {
  const currentActionIndex = list.indexOf(value); // 3
  const nextValueIndex = (currentActionIndex + 1) % list.length; // 4 % 4 0
  const nextValue = list[nextValueIndex];

  return nextValue;
};

export default nextElementInList;
