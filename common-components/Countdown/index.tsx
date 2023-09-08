// import { useState } from "react";
import { useCallback, useState, useEffect } from "react";
import { CountdownContainer } from "./styles";

export const Countdown = () => {
    const [newInputValue, setNewInputValue] = useState(0)
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setyear] = useState('')
    const [hourSelected, setHourSelected] = useState(0)
    const [minuteSelected, setMinuteSelected] = useState(0)
    const [countdownDisplayText, setCountdownDisplayText] = useState('')

    const [displaySeconds, setDisplaySeconds] = useState('00')
    const [displayMinutes, setDisplayMinutes] = useState('00')
    const [displayHours, setDisplayHours] = useState('00')


    const handleHourChange = (event) => {
        setCountdownDisplayText('')
        setHourSelected(event.target.value)
    }
    const handleMinuteChange = (event) => {
        setCountdownDisplayText('')
        setMinuteSelected(event.target.value)
    }

    // const date = new Date()
    // const month = date.getMonth() + 1
    // const day = date.getDate()
    // const hours = date.getHours()
    // const minutes = date.getMinutes()
    // const seconds = date.getSeconds()

    const handleTimeSubmit = useCallback(() => {
        updateCountdownTime()
        // setNewInputValue(value)
        //12/12/12 12:12:12 am/pm
        /* Correct Date Format: 05-30-2020 12:12:12 or mm dd yyyy h:m:s */
        // const tryDate = +new Date(value)
        // console.log(tryDate)
        // console.log(toHHMMSS(tryDate - +new Date()))
    }, [hourSelected, minuteSelected])

    const updateCountdownTime = useCallback(() => {
        const timeString = `${new Date().toLocaleDateString()} ${hourSelected}:${minuteSelected}`
        const selectedDate = +new Date(timeString)
        return setCountdownDisplayText(toHHMMSS(selectedDate - +new Date()))
    }, [hourSelected, minuteSelected])

    const getTime = () => {
        const now = new Date()
        const formattedTime = now.toLocaleString('en-US', {hour: "numeric", minute: "numeric", second: "numeric", hour12: true})
        return formattedTime
    }

    const toHHMMSS = useCallback((value) => {
        //fix rounding in toHHMMSS
        //time input fields(dropdown) 
        //submit button
        if(value <= 0){
            return 'Invalid Time Submitted'
        }

        let miliseconds = value/1000
        // var miliseconds = parseInt(value, 10)/1000; // don't forget the second param
        const hours = Math.floor(miliseconds / 3600);
        const minutes = Math.floor((miliseconds - (hours * 3600)) / 60);
        const seconds = Math.floor(miliseconds - (hours * 3600) - (minutes * 60));
        let formattedHours = hours < 10 ? `0${hours}` : `${hours}`
        let formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
        let formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`        

        setDisplayHours(formattedHours)
        setDisplayMinutes(formattedMinutes)
        setDisplaySeconds(formattedSeconds)
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }, [])

    const [timeState, setTimeState] = useState(getTime())


    useEffect(() => {
        if (countdownDisplayText === '') return
        // Set interval then clear to avoid memory leak
        const secondInterval = setInterval(() => {
            updateCountdownTime()
        }, 1000);
        return () => clearInterval(secondInterval);
      }, [countdownDisplayText]);

    const hourOptions = [...Array(24)]
    const hourDisplayOptions = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']
    const minuteOptions = [...Array(60)]
    return (
    <CountdownContainer>
        <div id='box'>
            <div id='button-box' style={{display: 'flex', flexFlow: 'row, nowrap', alignItems: 'flexEnd', justifyContent: 'space-around', marginBottom: '10px'}}>
            <select onChange={handleHourChange} style={{borderRadius: '4px', border: 'solid 1px', borderColor: 'white', backgroundColor: 'rgba(0, 0, 0, .50)', padding: '10px', width: '90px'}}>
                {hourOptions.map((_, index) => <option key={index} value={index}>{hourDisplayOptions[index]}</option>)}
            </select>
            <select onChange={handleMinuteChange} style={{borderRadius: '4px', border: 'solid 1px', borderColor: 'white', padding: '10px', width: '90px'}}>
                {minuteOptions.map((_, index) => <option key={`${index} minute`} value={index}>{index}</option>)}
            </select>
            <br/>
            <button onClick={handleTimeSubmit} style={{borderRadius: '4px', backgroundColor: 'white', padding: '10px', width: '90px'}}>Submit</button>
            </div>

            <div id='countdown-box' style={{border: 'solid 1px', borderColor: 'white', minHeight: '150px', display: 'flex', flexFlow: 'row, nowrap', alignItems: 'center', color: 'white', fontSize: '90px', justifyContent: 'center'}}>
                <div id="Hours">
                    {`${displayHours} : `}
                </div>
                <div id="minutes">
                    {`${displayMinutes} : `}
                </div>
                <div id="seconds">
                    {`${displaySeconds}`}
                </div>
            </div>

        </div>
        {/* <section>
            <h4>Minutes</h4>
            <input onChange={handleInputChange}></input> 
            <br/>
            <p>{newInputValue}</p>
        </section>
        <section>
            <div>
                <h4>Current Time</h4>
                <p>The current time is {timeState}</p>
            </div>
        </section>
        <section>
            <div>
                <h4>Updated Time</h4>
                <div style={{paddingTop: '20px'}}>
                <p>The current time is {}</p>
                </div>
                
            </div>
        </section> */}

    </CountdownContainer>
    )};


    /**
     * Take care of negative values. Probably default to 0s, or disable submit button
     * Don't change countdown value until submit button pushed
     * display time values seperately
     * Reset Countdown to default when time values are changed.
     * display text -> hour, minutes etc
     * ignore using current date until future. mm/dd/yyyy -tell user format
     * toHHMMSS rename
     */

/**
 * Need current time @ start - current time as it counts down(probably in UseEffect)
 * - Subtraction not done w/ display times [Date object ALLOWS date subtraction]
 * - 11:00 -> current time @ start of timer [Very important to know what you're subtracting from] :: Date Object A
 * - 11:06 -> ACTUAL CURRENT TIME [Always changing] :: Date Object B
 * - 20:00 -> User Inseterd Time Duration D
 * - 3pm -> User Inserted Time 
 * 
 * 
 * Option 1: B - A = C(lapsed time) ---> D - C = DisplayTime
 * 
 * Obtion 2: InsertedTime - CurrentTime = DisplayTime
 */


/**
 * Center text so there's no shifting
 * Making carbon copy of example designs
 */

/**
 * push up to personal github account
 */