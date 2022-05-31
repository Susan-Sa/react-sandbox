import styled from 'styled-components';
import {
  animation,
  colors,
  decorations,
  focusStyle,
  mediaQueries,
  spacing,
} from '../design-tokens';
import { Image } from '../Image';

export const BannerWrapper = styled.div`
  width: 100%;
  max-width: 1032px;
`;

export const StyledBanner = styled.a`
  width: 100%;
  max-width: 1032px;
  display: block;
  position: relative;
  transition: box-shadow ${animation.durations.faster}ms ease-in-out;
  ${decorations.boxShadow.smStyle}
  ${decorations.borderRadiusStyle}
  aspect-ratio: 2.35 / 1;

  @media ${mediaQueries.smMax} {
    aspect-ratio: 16 / 9;
  }

  &:focus, &:active {
    ${focusStyle}
  }

  &:hover {
    ${decorations.boxShadow.mdStyle}
  }
`;

interface BannerImageStyledProps {
  isCurrentSlide: boolean;
}
export const BannerImageStyled = styled(Image).withConfig({
  shouldForwardProp: (prop) => !['isCurrentSlide'].includes(prop),
})<BannerImageStyledProps>`
  transition: opacity ${animation.durations.slow}ms ease-in-out;
  opacity: ${({ isCurrentSlide }) => (isCurrentSlide ? 1 : 0)};
  overflow: hidden;
  ${decorations.borderRadiusStyle}
`;

export const BannerSlideStyled = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 1032px;
  overflow: hidden;
`;

export const BannerControlsStyled = styled.div`
  width: 100%;
  padding: ${spacing.x4} 0 ${spacing.x2};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

interface StyledBannerControlProps {
  ariaLabel?: string;
  isActive?: boolean;
  isDarkMode?: boolean;
}

export const StyledBannerControl = styled.button<StyledBannerControlProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isActive }) =>
    isActive ? colors.grayLight : colors.grayLightest};
  border-radius: 50%;
  overflow: hidden;
  width: 20px;
  height: 20px;
  margin-left: ${spacing.x2};
  font-weight: bold;
  font-size: 11.5px;
  text-align: center;
  line-height: 20px;

  ${({ isActive }) =>
    !isActive &&
    `
    box-shadow: inset 0 0 4px 1.5px ${colors.grayLighter};
    transition: filter ${animation.durations.faster}ms ease-in-out;
    &:hover {
      ${decorations.buttons.hoverFilterStyle}
    }
  `}

  &:focus, &:active {
    ${focusStyle}
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    ${({ isActive }) => `
      background-color: ${isActive ? colors.grayLightest : colors.grayLight};
      box-shadow: inset 0 0 4px 1.5px ${
        isActive ? colors.grayLightest : colors.grayLight
      };
    `}

    &:hover {
      filter: brightness(110%);
    }
  `}
`;

interface NextPreviousControlProps {
  isDarkMode?: boolean;
}
const NextPreviousControl = styled(
  StyledBannerControl
)<NextPreviousControlProps>`
  height: 24px;
  width: 24px;
  transition: transform ${animation.durations.faster}ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  ${({ isDarkMode }) =>
    isDarkMode &&
    `
    background-color: ${colors.grayLightest};
  `}
`;

export const NextControl = styled(NextPreviousControl)`
  padding-left: 1px;
`;

export const PreviousControl = styled(NextPreviousControl)`
  padding-right: 1px;
`;
