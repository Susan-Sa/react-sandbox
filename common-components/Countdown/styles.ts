import styled from "styled-components";

//No Body needed in styling because the styles will go to the div.
export const CountdownContainer = styled.div`

    background-color: #088F8F;
    background-image: linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(/image-assets/pexels-dominykas-4411214.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 5px;
    width: 500px;
    height: 250px;
    overflow: none;
    padding: 10px;
`

// export const CountdownContainerOverlay = styled.div`
// background-size: cover;
// `
//Width & height could change in the future