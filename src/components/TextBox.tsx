"use client";
import { FC, ChangeEvent } from "react"

interface TextBoxProps {
    label: string,
    name: string,
    type: string,
    placeholder: string,
    value: string,
    onChange: (value:string) => void,
    class?: string
}

export const TextBox: FC<TextBoxProps> = (props) => {
    return (
        <div className={props.class}>
            <label htmlFor={props.name} className="text-gray-300 ml-1">{props.label}</label>
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md md:max-w-md md:w-screen ">
                <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm"></span>
                <input
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
                    value={props.value}
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-300 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                />
            </div>
        </div>
    )
}
