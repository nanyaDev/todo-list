const newElement = (tag, ...classes) => {
  const element = document.createElement(tag);
  classes.forEach((cl) => {
    element.classList.add(cl);
  });

  return element;
};

export { newElement };
