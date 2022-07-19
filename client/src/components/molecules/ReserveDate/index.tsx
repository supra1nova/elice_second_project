
import React, { useState, useEffect } from 'react';
import * as API from '../../../api/api';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const curr = new Date();
curr.setDate(curr.getDate() + 3);
const date = curr.toISOString().substring(0,10);

const ReserveDate = () => {
    const [startDate, setStartDate] = useState(new Date(date));
    const [lastDate, setLastDate] = useState(new Date("2022/07/25"));

    const isPossibleDay = (date: any) => {
        const currentDate = new Date();
        const selectedDate = new Date(date);
        return currentDate.getDate() <= selectedDate.getDate();
    };

    useEffect(() => {
        const REGNumber = window.location.href.split('/')[5];

        API.userGet(`/api/times/`).then((res) => {
            // console.log(res)
        });
      }, []);
    
    return (
        <div style={{marginLeft: 10}}>
            <DatePicker 
                selected={startDate} 
                onChange={(date:Date) => setStartDate(date)} 
                minDate={startDate}
                maxDate={new Date(lastDate)} 
            />
        </div>
    )
}

export default ReserveDate