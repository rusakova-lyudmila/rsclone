const state = {
  activePageName: 'main',
};

export function setActivePageName(name) {
  state.activePageName = name;
}

export function getActivePageName() {
  return state.activePageName;
}
