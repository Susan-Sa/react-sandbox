import styled from 'styled-components';
import { a11y, animation, decorations, focusStyle, mediaQueries, spacing } from '../design-tokens';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { getOppositedirection } from '../helpers';
import { SideNames } from '../types';
import { Transition } from '../Transition';

interface FloatingCloseButtonWrapperProps {
  direction: SideNames;
  isShown: boolean;
  offset: number;
}
export const FloatingCloseButtonWrapper = styled.div<FloatingCloseButtonWrapperProps>`
  display: flex;
  text-align: center;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: opacity ${animation.durations.faster}ms ease-in-out;
  opacity: ${({ isShown }) => isShown ? '1' : '0'};
  ${({ direction, offset }) =>
    `${getOppositedirection(direction)}: -${offset}px;`}
`;

interface ModalDrawerContainerProps {
  direction: SideNames;
  isHorizontal: boolean;
  isOpen: boolean;
  size: number;
  modalType: 'fullscreen' | 'float';
}
export const ModalDrawerContainer = styled.div<ModalDrawerContainerProps>`
  position: fixed;

  ${({ direction, modalType, isHorizontal, size }) => `
    ${isHorizontal ? 'width' : 'height'}: ${size}px;
    ${isHorizontal ? 'height' : 'width'}: 100%;
    ${modalType === 'fullscreen' ? `
      height: 100%;
      width: 100%;
    ` : ''}
    ${modalType === 'float' ? `
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;

      ${ModalDrawerInnerTransition} {
        width: 40%;
        height: auto;
        max-height: 90%;
        overflow: auto;
        ${decorations.borderRadiusStyle}
        
        @media ${mediaQueries.lgMax} {
          width: 60%;
        }
        @media ${mediaQueries.mdMax} {
          width: 80%;
        }
        @media ${mediaQueries.smMax} {
          width: 90%;
        }
      }
    ` : ''}
    
    ${direction}: 0;
    ${direction === 'bottom' ? 'bottom' : 'top'}: 0;
    ${a11y.reduceMotionOverrideStyle}
  `}

  ${FloatingCloseButtonWrapper} {
    ${({ isHorizontal }) => `
      ${isHorizontal ? 'height' : 'width'}: 100%;
      ${a11y.reduceMotionOverrideStyle}
    `}
  }
`;

interface ModalDrawerInnerTransitionProps {
  background?: string;
}
export const ModalDrawerInnerTransition = styled(Transition)<ModalDrawerInnerTransitionProps>`
  position: absolute;
  padding: 0 ${spacing.x5};
  width: 100%;
  height: 100%;
  background: ${({ background }) => background};
  overflow: hidden;
  z-index: 100;
`;

export const ModalHeading = styled(Heading)`
  padding: ${spacing.x3} ${spacing.x3} 0 0;
`;

interface FullscreenOverlayProps {
  isOpen: boolean;
  isDarkMode?: boolean;
}
export const FullscreenOverlay = styled.div<FullscreenOverlayProps>`
  position: fixed;
  background: rgba(51, 51, 51, 0.8);
  width: 100%;
  height: 100%;
  z-index: 99;
  inset: 0;
  opacity: 0;
  transition: opacity ${animation.durations.fast}ms ease-in-out;
  ${({ isOpen }) => (isOpen ? 'opacity: 1;' : '')};
  ${a11y.reduceMotionOverrideStyle}

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background: rgba(30, 30, 30, 0.95);
  `}
  animation: ${animation.keyframes.fadeIn} ${animation.durations
    .fast}ms ease-in-out;
`;

interface StandardCloseButtonProps {
  direction: SideNames;
  isHorizontal: boolean;
}
export const StandardCloseButton = styled.button<StandardCloseButtonProps>`
  margin-top: 14px;
  margin-right: -6px;
  z-index: 100;

  &:focus,
  &:active {
    ${focusStyle}
  }
`;

export const CloseIcon = styled(Icon)`
  display: block;
`;
