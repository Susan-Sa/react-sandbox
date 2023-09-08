import { useCallback, useState } from "react";
import { LeftButton, RightButton, SlideshowContainer } from "./styles";

interface SlideshowProps {
    slides: any[]
}

export const Slideshow = ({slides}: SlideshowProps) => {
    //Previous & Next
    //Last slide, go to first?
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const handlePrevClick = useCallback(() => {

        const value = currentSlideIndex === 0 ? slides.length - 1  : currentSlideIndex - 1
        setCurrentSlideIndex(value)
    }, [currentSlideIndex])

    const handleNextClick = useCallback(() => {
        const value = currentSlideIndex === slides.length - 1 ? 0  : currentSlideIndex + 1
        setCurrentSlideIndex(value)
    }, [currentSlideIndex])


    return (
        <SlideshowContainer>
            <LeftButton onClick={handlePrevClick}>&#x2190;</LeftButton>
            <RightButton onClick={handleNextClick}>&#x2192;</RightButton>
        </SlideshowContainer>
    )
}