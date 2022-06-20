/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
const DrawerInitiator = {
  init({ button, drawer }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('active');
  },
};

export default DrawerInitiator;
