import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../../util/Loader';

interface Props {
    candidateID: number;
}
export default function Profile({ candidateID }: Props) {
    const [candidate, setCandidate] = useState(null);
    const [loader, setLoader] = useState(true);
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

    useEffect(() => {
        GetAllCandidates();
    });
    return (
        <>
            <div className="w-1/3  flex">
                <div className="m-auto">
                    <img
                        className="w-44 h-44 object-cover rounded-full"
                        alt=""
                        src="images/thivyan.png"
                    />
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
        </>
    );
}
