import React from 'react';

interface ImageProps {
    placeHolder?: string;
    name?: string;
    type?: any;
    onChange?: any;
    value?: any;
    id?: string;
    margin?: any;
    readonly?: boolean;
    labelWidth?: string;
    opacity?: string;
    isNoLabelWidth?: boolean;
    bgColourGray?: boolean;
    defaultValue?: any;
    min?: any;
}

export const InputField: React.FunctionComponent<ImageProps> = (props) => {
    return (
        <div className={`flex flex-wrap z-30  w-full ${props?.margin}`}>
            <div
                className={`text-gray-500 ${
                    props?.isNoLabelWidth ? null : 'px-2'
                }  text-center font-poppins text-sm lg:text-sm h-max ${
                    props?.bgColourGray ? 'bg-gray-100' : 'bg-white'
                } z-0 -mb-3 ml-4 border-opacity-20`}
            >
                {props?.name}
            </div>

            <input
                className={`p-3 my-3 w-full z-50 ${
                    props?.readonly
                        ? 'text-gray-400 cursor-default hover:border-gray-400'
                        : 'text-black hover:border-hireAI'
                } rounded-xl outline-none border-2 font-poppins  ${
                    props?.bgColourGray ? 'bg-gray-100 hover:border-hireAI' : 'bg-white'
                } border-gray-400  ${props?.opacity}`}
                placeholder={props?.placeHolder}
                value={props?.value}
                id={props?.id}
                onChange={props?.onChange}
                defaultValue={props?.defaultValue}
                type={props?.type}
                readOnly={props.readonly}
                min={props?.min}
            />
        </div>
    );
};
