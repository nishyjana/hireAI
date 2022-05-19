import * as BsIcons from 'react-icons/bs';

interface Props {
    onclick?: () => void;
    setUrl?: any;
    setComplete?: any;
}

export default function InputSearch({ onclick, setUrl, setComplete }: Props) {
    return (
        <div className="flex py-2 px-2 w-1/3 rounded-3xl border-2 border-double hover:border-gray-200 border-gray-300">
            <input
                className="p-1 w-full outline-none"
                placeholder="Insert link here"
                onChange={(e) => {
                    setUrl(e.target.value);
                    setComplete(false);
                }}
            />
            <button
                className="py-2 flex rounded-3xl w-1/3 border-2 border-hireAI bg-hireAI font-sans text-white text-xs px-9 3xl:px-12 3xl:ml-10 mx-auto"
                onClick={onclick}
            >
                PROCEED <BsIcons.BsChevronRight className="m-auto ml-2" color="white" />
            </button>
        </div>
    );
}
