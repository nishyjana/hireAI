import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { SIGNIN } from '../../constants/PathConstants';
import Loader from '../../util/Loader';

export default function UserProfile() {
    const [candidate, setCandidate] = useState(null);
    const [loader, setLoader] = useState(true);
    const location = useLocation<any>();
    const history = useHistory()
    const candidateID = location?.state?.clickedId;
    const GetAllCandidates = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/candidate/${candidateID}`);
            if (response) {
                setLoader(false);
                setCandidate(response?.data);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    const DeleteCandidate = async () => {
        try {
            const response = await axios.delete(`http://127.0.0.1:8000/candidate/${candidateID}`);
            if (response?.status === 204) {
                localStorage.clear();
                setTimeout(() => {
                    localStorage.clear();
                    history?.push(SIGNIN);
                }, 500);
            }
        } catch (error: any) {
            console.log(error);
        }
    };

    useEffect(() => {
        GetAllCandidates();
    }, [candidateID]);
    return (
        <div className="w-2/3 flex m-auto mt-40 border-2 border-b-8 rounded-3xl border-gray-300">
            <div className="w-1/3  flex flex-col">
                <div className="m-auto">
                    <img
                        className="w-44 h-44 object-cover rounded-full"
                        alt=""
                        src="images/thivyan.png"
                    />
                    <div className="flex my-2 mb-10 w-full">
                        <button
                            className="w-full bottom-2 bg-red-500 p-3 rounded-3xl text-white text-center justify-end"
                            onClick={() => {
                                DeleteCandidate()
                            }}
                        >
                            Delete profile
                        </button>
                    </div>
                </div>
            </div>

            {loader ? (
                <div className="m-auto">
                    <Loader />
                </div>
            ) : (
                <div className="w-2/3 flex justify-evenly py-10">
                    <div className="flex flex-col 3xl:-ml-44">
                        <div className="mb-3">
                            <div className="mb-1 text-gray-400">FIRST NAME</div>
                            <div className="mb-3 font-medium">{candidate?.firstname}</div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1 text-gray-400">EMAIL</div>
                            <div className="mb-3 font-medium">{candidate?.email}</div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1 text-gray-400">UNIVERSITY</div>
                            <div className="mb-3 font-medium">{candidate?.university}</div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="mb-3">
                            <div className="mb-1 text-gray-400">LAST NAME</div>
                            <div className="mb-3 font-medium">{candidate?.lastname}</div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1 text-gray-400">CONTACT</div>
                            <div className="mb-3 font-medium">{candidate?.contact_number}</div>
                        </div>

                        <div className="mb-3">
                            <div className="mb-1 text-gray-400">DEGREE PROGRAM</div>
                            <div className="mb-3 font-medium">{candidate?.degree_programme}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
