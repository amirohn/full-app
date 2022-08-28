export const shorten = (title) => {
  const allTitle = title.split(" ");
  const newTitle = `${allTitle[0]} ${
    allTitle[1] === "-" ? allTitle[2] : allTitle[1]
  }`;
  return newTitle;
};

export const isInCart = (state, id) => {
  const exists = !!state.selectedItems.find((item) => item.id === id);
  return exists;
};

export const quantityCount = (state, id) => {
  const indexI = state.selectedItems.findIndex((item) => item.id === id);
  if (indexI === -1) {
    return false;
  }
  return state.selectedItems[indexI].quantity;
};
