import React, { useState} from 'react';
import Calendar from 'react-calendar';
import moment from "moment";
import 'react-calendar/dist/Calendar.css'; // css import
import './Calendar.css';

const CalEx2 = () => {
    const [value, setValue] = useState(new Date());
    const planMark = [["2022-11-11"],["2022-11-11"]];
   
    return(
        <Calendar 
            returnValue="range"
            calendarType="US"
            onChange={setValue} 
            value={value} 
            formatShortWeekday={(locale,value) => ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][value.getDay()]}
            formatDay={(locale, date) => date.toLocaleString('en', { day: 'numeric' })}
            minDetail="month"
            tileContent={({ date, view }) => { // 날짜 타일에 컨텐츠 추가하기 (html 태그)
                let html = [];
                // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
                if (planMark[0].find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                    html.push(<div className="dotDo"></div>);
                }
                if (planMark[1].find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                    html.push(<div className="dotEnd"></div>);
                }
                return (
                    <>
                        <div className="dotBox">
                            {html}
                        </div>
                    </>
                );
            }}
        />
    );
}

export default CalEx2;
