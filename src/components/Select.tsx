import type React from "react"

type Options = {
    label: string,
    value: string
}

type SelectProps = React.ComponentProps<'select'> & {
    label: string
    optionLabel: string
    options: Options[]
}

export function Select({ id, label, optionLabel, options, ...props }: SelectProps) {
    return (
        <div className='flex flex-col gap-0.5'>
            <label
                className='text-sm font-bold text-gray-700'
                htmlFor=""
            >{label}</label>
            <select
                className="p-2 border-2 border-transparent border-b-blue-900 focus:border-blue-900 focus:outline-none focus:rounded ease-in duration-200 text-lg text-gray-800 hover:bg-gray-200 transition-colors"
                name={id}
                id={id}
                {...props}
            >
                <option value="">{optionLabel}</option>
                {
                    options.map(({ label, value }) => (
                        <option key={value} value={value}>{label}</option>

                    ))
                }
            </select>
        </div>
    )
}