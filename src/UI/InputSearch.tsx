import * as BsIcons from "react-icons/bs";

interface Props {
  onclick?: () => void;
}

export default function InputSearch({ onclick }: Props) {
  return (
    <div className="flex py-2 px-2 w-1/3 rounded-xl border-2 border-double hover:border-gray-200 border-gray-100">
      <input
        className="p-1 w-full outline-none"
        placeholder="Insert link here"
      />
      <button
        className="py-2 flex rounded-2xl w-1/3 border-2 border-black bg-black font-sans text-white text-xs px-9 mx-auto"
        onClick={onclick}
      >
        PROCEED <BsIcons.BsChevronRight className="m-auto ml-2" color="white" />
      </button>
    </div>
  );
}
