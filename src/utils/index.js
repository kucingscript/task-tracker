export const checkIsCompleted = (todo, value) => {
  return todo ? `green.${value}` : `orange.${value}`;
};

export const getCurrentDate = () => {
  const date = new Date();

  return `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
