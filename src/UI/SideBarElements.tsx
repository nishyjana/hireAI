import { useHistory } from 'react-router-dom';
import { ALL_VACANCY, CREATE_VACANCY, DASHBOARD, MANAGE_RECRUIT } from '../constants/PathConstants';

export default function SideBarElements() {
    const history = useHistory();

    const onclickFunction = (props: any) => {
        return history.push(`${props}`);
    };

    const pathSelected = window?.location?.pathname;

    return (
        <div className="pt-20">
            <img src="images\logo.svg" className="w-auto m-16 -mt-10 mb-20" alt="" />
            <div
                className={`mb-3 py-2 mt-7 hover:bg-gray-400 w-full ${
                    pathSelected === DASHBOARD ? null : null
                }`}
                role="button"
                tabIndex={0}
                onClick={() => onclickFunction(DASHBOARD)}
                onKeyDown={() => onclickFunction(DASHBOARD)}
            >
                <div className="flex flex-row  h-10 mx-6 pt-2">
                    <img src="images\OverView.svg" className="w-10" alt="" />

                    <div className="mx-5 mt-1 font-poppins text-sm">OVERVIEW </div>
                </div>
            </div>

            <div className={`mb-3 py-2 mt-7  w-full ${pathSelected === DASHBOARD ? null : null}`}>
                <div className="flex flex-row  h-10 mx-6 pt-2">
                    <img src="images\vacancy.svg" className="w-10" alt="" />

                    <div className="mx-5 mt-1 font-poppins text-sm">VACANCIES </div>
                </div>
            </div>

            <div
                role="button"
                tabIndex={0}
                className={`flex flex-row h-10 hover:bg-gray-400 pt-2 hover:bg-transparent`}
                onClick={() => {
                    onclickFunction(CREATE_VACANCY);
                }}
                onKeyDown={() => onclickFunction(CREATE_VACANCY)}
            >
                <div className="justify-center font-poppins text-sm ml-20">CREATE VACANCIES</div>
            </div>

            <div
                role="button"
                tabIndex={0}
                className={`flex flex-row mt-4 h-10 hover:bg-gray-400 pt-2 hover:bg-transparent`}
                onClick={() => {
                    onclickFunction(ALL_VACANCY);
                }}
                onKeyDown={() => onclickFunction(ALL_VACANCY)}
            >
                <div className="justify-center font-poppins text-sm ml-20">ALL VACANCIES</div>
            </div>

            <div
                className={`mb-3 py-2 mt-3 hover:bg-gray-400 w-full ${
                    pathSelected === MANAGE_RECRUIT ? null : null
                }`}
                role="button"
                tabIndex={0}
                onClick={() => onclickFunction(MANAGE_RECRUIT)}
                onKeyDown={() => onclickFunction(MANAGE_RECRUIT)}
            >
                <div className="flex flex-row  h-10 mx-6 pt-2">
                    <img src="images\recrut.svg" className="w-10" alt="" />

                    <div className="mx-5 mt-1 font-poppins text-sm">MANAGE RECRUITERS </div>
                </div>
            </div>
        </div>
    );
}
