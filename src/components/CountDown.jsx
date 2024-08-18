'use client';
import React, { useState, useEffect } from 'react';

const CountDown = () => {
    const [count, setCount] = useState(0);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const targetDate = new Date('2024-09-03T23:59:59'); // Replace with your target date and time
        const now = new Date();

        const timeDifference = targetDate.getTime() - now.getTime();
        const secondsRemaining = Math.floor(timeDifference / 1000);

        if (secondsRemaining > 0) {
            setCount(secondsRemaining);

            const timer = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);

            return () => {
                clearInterval(timer);
            };
        }
    }, []);

    useEffect(() => {
        getTime(count);
    }, [count]);

    const getTime = (time) => {
        const days_ = Math.floor(time / (3600 * 24));
        const hours_ = Math.floor((time % (3600 * 24)) / 3600);
        const minutes_ = Math.floor((time % 3600) / 60);
        const seconds_ = time % 60;

        setDays(days_);
        setHours(hours_);
        setMinutes(minutes_);
        setSeconds(seconds_);
    }

    return (
        <div className='sm:scale-100 scale-75'>
            <div className="flex rounded-xl items-center justify-center w-max mx-auto p-3 gap-1.5 count-down-main bg-indigo-50">
                <div className="timer">
                    <div className="rounded-xl py-2 flex items-center justify-center flex-col aspect-square px-1 w-20">
                        <h3 className="countdown-element days font-manrope font-semibold text-xl text-indigo-600 text-center">
                            {days}
                        </h3>
                        <p className="text-lg font-Cormorant font-normal text-indigo-600 text-center w-full">Days</p>
                    </div>
                </div>
                <h3 className="font-manrope font-semibold text-2xl text-indigo-600">:</h3>
                <div className="timer">
                    <div className="rounded-xl py-2 flex items-center justify-center flex-col aspect-square px-1 w-20">
                        <h3 className="countdown-element hours font-manrope font-semibold text-xl text-indigo-600 text-center">
                            {hours}
                        </h3>
                        <p className="text-lg font-Cormorant font-normal text-indigo-600 text-center w-full">Hour</p>
                    </div>
                </div>
                <h3 className="font-manrope font-semibold text-2xl text-indigo-600">:</h3>
                <div className="timer">
                    <div className="rounded-xl py-2 flex items-center justify-center flex-col aspect-square px-1 w-20">
                        <h3 className="countdown-element minutes font-manrope font-semibold text-xl text-indigo-600 text-center">
                            {minutes}
                        </h3>
                        <p className="text-lg font-Cormorant font-normal text-indigo-600 text-center w-full">Minutes</p>
                    </div>
                </div>
                <h3 className="font-manrope font-semibold text-2xl text-indigo-600">:</h3>
                <div className="timer">
                    <div className="rounded-xl py-2 flex items-center justify-center flex-col aspect-square px-1 w-20">
                        <h3 className="countdown-element minutes font-manrope font-semibold text-xl text-indigo-600 text-center">
                            {seconds}
                        </h3>
                        <p className="text-lg font-Cormorant font-normal text-indigo-600 text-center w-full">Seconds</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountDown;
