import { useHistory } from "react-router-dom";
import { SIGNIN } from "../../constants/PathConstants";
import * as BsIcons from "react-icons/bs";

interface Props {
  open: boolean;
}

export default function ProfileModal({ open }: Props) {
  const history = useHistory();

  return open ? (
    <>
      <div className="w-52 fixed right-4 mt-12 z-50 flex flex-col justify-end border-2 border-gray-700 rounded-lg bg-white">
        <div className="px-1 py-2">
          <div className="w-full hover:bg-gray-100 flex m-auto  mb-2">
            <BsIcons.BsPersonCircle className="h-7 w-7 m-auto ml-5" />
            <div
              className="mb-3 mt-3 w-full"
              role="button"
              tabIndex={0}
              onClick={() => {
                history.push(SIGNIN);
              }}
              onKeyDown={() => history.push(SIGNIN)}
            >
              <div className="flex flex-row  h-10 mx-6 pt-2">
                <div className="mx-3 font-poppins text-sm">Sign in</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-75  inset-9 z-40 bg-black"></div>
    </>
  ) : null;
}
function useOuterClick(handleOuterClick: () => void) {
  throw new Error("Function not implemented.");
}
