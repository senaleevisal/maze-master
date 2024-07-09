"use client";
import React, { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { TextBox } from './TextBox';
import { Selector } from './Selector';
import RadioSelector from './RadioSelector';
import TeamMember from './TeamMember';

const districts = [
    'Ampara',
    'Anuradapura',
    'Badulla',
    'Baticaloa',
    'Galle',
    'Gampaha',
    'Hambanthota',
    'Jaffna',
    'Kaluthara',
    'Kandy',
    'Kegalle',
    'Kilinochchi',
    'Kurunegala',
    'Mannar',
    'Matale',
    'Matara',
    'Monaragala',
    'Mullaitivu',
    'Nuwara Eliya',
    'Polonnaruwa',
    'Puttalam',
    'Ratnapura',
    'Trincomalee',
    'Vavuniya',
    'Colombo',
]

export default function Example() {
    const [teamName, setTeamName] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [district, setDistrict] = useState('');
    const [teamSize, setTeamSize] = useState(1);
    const [memberOneName, setMemberOneName] = useState('');
    const [memberOneDob, setMemberOneDob] = useState('');
    const [memberOneContact, setMemberOneContact] = useState('');
    const [memberOneEmail, setMemberOneEmail] = useState('');

    const step_1Next = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        document.getElementById('step_1')?.classList.add('hidden');
        document.getElementById('step_2')?.classList.remove('hidden');
    };
    const step_2Next = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        document.getElementById('step_1')?.classList.add('hidden');
        document.getElementById('step_2')?.classList.remove('hidden');
    };
    const step_2Prev = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        document.getElementById('step_1')?.classList.add('hidden');
        document.getElementById('step_2')?.classList.remove('hidden');
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {


    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 mt-32">
            <div id='step_1' className="flex  items-center justify-center">
                <div className="items-center justify-center">
                    <div className='text-gray-200 text-center text-3xl mb-12'>Register Form</div>
                    <TextBox
                        label="Name of the Team"
                        name="team_name"
                        type="text"
                        placeholder="Enter your team name"
                        value={teamName}
                        onChange={setTeamName}
                    />
                    <TextBox
                        label="Name of the School"
                        name="school_name"
                        type="text"
                        placeholder="Enter your school name"
                        value={schoolName}
                        onChange={setSchoolName}
                        class='mt-5'
                    />
                    <Selector
                        name="District"
                        options={districts}
                        value={district}
                        onChange={setDistrict}
                        class='mt-5'
                    />
                    <label htmlFor="team_size" className="block text-sm font-medium leading-6 text-gray-300 mt-5">
                        Member Count
                    </label>
                    <RadioSelector
                        options={[1, 2, 3, 4, 5]}
                        selectedOption={teamSize}
                        onOptionChange={setTeamSize}
                        className='mt-2'
                    />
                    <div className="flex items-end justify-end ">
                        <button
                            type="button"
                            onClick={step_1Next}
                            className="inline-flex items-center mt-8 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <div id='step_2' className="flex hidden  items-center justify-center">
                <TeamMember 
                    memberIndex={'Member One'} 
                    memberName={memberOneName} 
                    setMemberName={setMemberOneName}
                    memberDob={memberOneDob}
                    setMemberDob={setMemberOneDob}
                    memberContact={memberOneContact}
                    setMemberContact={setMemberOneContact}
                    memberEmail={memberOneEmail}
                    setMemberEmail={setMemberOneEmail}
                    step_Next={step_2Next}
                    step_Prev={step_2Prev}    
                />
            </div>
            {/* <div className="mt-1 flex items-center justify-center">
                    <TextBox
                            label="Username"
                            name="username"
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={handleUsernameChange}
                    />
            </div> */}

            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Sign in
                </button>
            </div>
        </form>
    );
}
