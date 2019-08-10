import styled from 'styled-components/macro';

export const ModalWrapper = styled.div`
  height: auto;
  overflow: visible;
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.colors.primary[100]};
  background: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 3px;
`;

export const modalStyles = ({ maxWidth = 500 } = {}) => {
  return {
    overlay: {
      background: 'rgba(99, 101, 114, 0.6)',
      display: 'flex',
      width: '100%',
      height: '100%',
      alignItems: 'flex-start',
      justifyContent: 'center',
      position: 'fixed',
      overflowY: 'visible',
      overflowX: 'scroll',
      zIndex: 4999,
      padding: '3rem',
    },
    content: {
      position: 'absolute',
      backgroundClip: 'padding-box',
      borderRadius: '5px',
      border: 0,
      padding: 0,
      marginBottom: '1.2rem',
      overflow: null,
      zIndex: 5000,
      width: '100%',
      height: 'auto',
      maxWidth: `${maxWidth}px`,
      backgroundColor: 'none',
      boxShadow: '0 4px 24px rgba(0,0,0,0.40)',
      top: 'auto',
      bottom: 'auto',
      left: 'auto',
      right: 'auto',
    },
  };
};
