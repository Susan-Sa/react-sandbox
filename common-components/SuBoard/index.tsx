import { SuBoardContainer } from "./styles"
import { Card } from "../Card"
import { useCallback, useRef, useState } from "react"
// import { Countdown } from "../Countdown"

export const SusanBoard = () => {
    const [clientCoordinates, setClientCoordinates] = useState({x: 0, y: 0})

    const handleDragEnd = useCallback((event) => {
        //set new state here & define state at SuBoard level

        setClientCoordinates({x: event.nativeEvent.target.offsetLeft, y: event.nativeEvent.target.offsetTop})
        console.log({event})
    }, [])

    const cardRef = useRef(null)
    const { left = 0, top = 0 } = cardRef.current?.getBoundingClientRect(); //Don't do ?? { }

    return (
    <SuBoardContainer >
        <Card style={{top, left, position: 'absolute'}} ref={cardRef} onDragEnd={handleDragEnd} draggable/>
        {/* <Countdown /> */}
    </SuBoardContainer>
    )}

    //Find out how to get coordinates of mouse pointer relative to SuBoard Top-Left & update card css with CSS Variables