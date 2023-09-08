import styled from "styled-components";
import { colors } from "../design-tokens";

export const SlideshowContainer = styled.div`
    width: 100%;
    min-height: 320px;
    background-color: ${colors.grayDarker};
    position: relative;
`;

const BaseButton = styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    top: calc(50% - 25px);

`;

export const LeftButton = styled(BaseButton)`
    left: 0;
`;

export const RightButton = styled(BaseButton)`
    right: 0;

`;