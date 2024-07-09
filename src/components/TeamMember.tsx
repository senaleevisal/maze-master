import React from 'react';
import TextBox from './TextBox'; // Import the TextBox component

interface TeamMemberProps {
    memberIndex: string;
    memberName: string;
    setMemberName: (value: string) => void;
    memberDob: string;
    setMemberDob: (value: string) => void;
    memberContact: string;
    setMemberContact: (value: string) => void;
    memberEmail: string;
    setMemberEmail: (value: string) => void;
    step_Next: () => void;
    step_Prev: () => void;
}

const TeamMember: React.FC<TeamMemberProps> = (
    {
        memberIndex,
        memberName,
        setMemberName,
        memberDob,
        setMemberDob,
        memberContact,
        setMemberContact,
        memberEmail,
        setMemberEmail,
        step_Next,
        step_Prev
    }
) => {
    return (
        <div className="items-center justify-center">
            <div className='text-gray-200 text-center text-xl mb-12'>Team Member Details({memberIndex})</div>
            <TextBox
                label="Member Name"
                name="member_name"
                type="text"
                placeholder="Enter member name"
                value={memberName}
                onChange={setMemberName}
                class='mt-5'
            />
            <TextBox
                label="Member Date of Birth"
                name="member_dob"
                type="date"
                placeholder="Enter member date of birth"
                value={memberDob}
                onChange={setMemberDob}
                class='mt-5'
            />
            <TextBox
                label="Member Contact Number"
                name="member_contact"
                type="tel"
                placeholder="Enter member contact number"
                value={memberContact}
                onChange={setMemberContact}
                class='mt-5'
            />
            <TextBox
                label="Member Email"
                name="member_email"
                type="email"
                placeholder="Enter member email"
                value={memberEmail}
                onChange={setMemberEmail}
                class='mt-5'
            />
            <div className='flex justify-between row-span-1'>
                <div className="flex items-start">
                    <button
                        type="button"
                        onClick={step_Prev}
                        className="inline-flex items-center mt-8 px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Back
                    </button>
                </div>
                <div className="flex items-end">
                    <button
                        type="button"
                        onClick={step_Next}
                        className="inline-flex items-center  px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeamMember;