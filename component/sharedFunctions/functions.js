export const shorten = (title) => {
  const allTitle = title.split(" ");
  const newTitle = `${allTitle[0]} ${
    allTitle[1] === "-" ? allTitle[2] : allTitle[1]
  }`;
  return newTitle;
};
