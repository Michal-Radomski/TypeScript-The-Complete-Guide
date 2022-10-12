// Composition bad understand - this is multiple Inheritance:
// Real composition should have delegation

const rectangular = (state) => {
  return {
    area: () => {
      return state.height * state.width;
    },
  };
};

const openable = (state) => {
  return {
    toggleOpen: () => {
      state.open = !state.open;
    },
  };
};

const buildRectangleWindow = (state) => {
  return Object.assign(state, rectangular(state), openable(state));
};

const rectangleWindow = buildRectangleWindow({
  heigh: 20,
  width: 20,
  open: false,
});

console.log("rectangleWindow.open:", rectangleWindow.open);
rectangleWindow.toggleOpen();
console.log("rectangleWindow.open:", rectangleWindow.open);
