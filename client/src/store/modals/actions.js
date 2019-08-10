export const SHOW_MODAL = '@@modals/SHOW';
export const HIDE_MODAL = '@@modals/HIDE';

export const openModal = (name, props = {}) => {
  return {
    type: SHOW_MODAL,
    modalType: name,
    modalProps: props,
  };
};

export const closeModal = () => ({
  type: HIDE_MODAL,
});
