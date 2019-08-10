import React, { Suspense, lazy } from 'react';
import { connect } from 'react-redux';

const MODAL_COMPONENTS = {
  CREATE_BOOKING_MODAL: lazy(() => import('./booking')),
};

const modalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null;
  }
  const SpecificModal = MODAL_COMPONENTS[modalType];
  return (
    <Suspense fallback={null}>
      <SpecificModal {...modalProps} />
    </Suspense>
  );
};

const mapStateToProps = ({ modals }) => ({
  modalProps: modals.modalProps,
  modalType: modals.modalType,
});

export default connect(mapStateToProps)(modalRoot);
