"useClient"

interface SelectorProps {
    name: string,
    options: string[],
    value: string,
    onChange: (value:any) => void,
    class?: string
}

export const Selector = (props: Readonly<SelectorProps>) => {
    return (

        <div className={`sm:col-span-3  ${props.class}`}>
              <label htmlFor={props.name} className="block text-sm font-medium leading-6 text-gray-300">
                {props.name}
              </label>
              <div className="">
                <select
                  id={props.name}
                  name={props.name}
                  onChange={(event) => props.onChange(event.target.value)}
                  value={props.value}
                  className="block  rounded-md border-0 py-1.5 text-gray-300 placeholder:text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 bg-transparent md:max-w-md md:w-screen "
                >
                  {props.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
                </select>
              </div>
        </div>
    )
}