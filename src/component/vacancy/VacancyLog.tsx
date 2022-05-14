import React, { useState } from 'react';
import ProgressBars from '../../util/ProgressBar';
import Profile from '../profile/Profile';
import FacialScore from './FacialScore';

export default function VacancyLog() {
    const [component, setComponent] = useState('Personal Information');
    return (
        <div className="pt-10 flex w-full  flex-col mt-32">
            <div className="m-auto flex flex-col border-2 border-gray-200  bg-hireAI rounded-t-4xl w-3/4 px-1 py-3 ">
                <div className="flex justify-between py-3">
                    <div
                        className="px-3 text-white"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                            setComponent('Personal Information');
                        }}
                    >
                        Personal Information
                    </div>
                    <div
                        className="px-3 text-white"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                            setComponent('Facial Score');
                        }}
                    >
                        Facial Score
                    </div>
                    <div
                        className="px-3 text-white"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                            setComponent(' Sentiment Score');
                        }}
                    >
                        Sentiment Score
                    </div>
                    <div
                        className="px-3 text-white"
                        role="button"
                        tabIndex={0}
                        onClick={() => {
                            setComponent('Final Score');
                        }}
                    >
                        Final Score
                    </div>
                </div>
            </div>
            <div className="m-auto flex  border-2 border-gray-200 border-b-8 rounded-b-4xl w-3/4 py-3 px-1">
                {component === 'Personal Information' ? (
                    <Profile />
                ) : component === 'Facial Score' ? (
                    <FacialScore />
                ) : null}
            </div>
        </div>
    );
}
