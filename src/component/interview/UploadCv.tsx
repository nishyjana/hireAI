/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import jwt from 'jwt-decode';
import Loader from '../../util/Loader';

export default function StartInterview() {
    const [fileError, setFileError] = useState<string>('');
    const [fileName, setFileName] = useState<any>('');
    const [isUploading, setIsUploading] = useState(false);
    const [completed, setCompleted] = useState(false);
    const [files, setFile] = useState<File>(null);
    const [user, setUser] = useState('');
    const [uploadStatus, setUploadStatus] = useState(null);
    const [showToolTip, setShowToolTip] = useState(false);
    const [uploadProcessObj, setUploadProcessObj] = useState(null);

    const handleFile = (e) => {
        let file, doc;
        if ((file = e)) {
            doc = new FileReader();
            doc.readAsDataURL(file);
            doc.onload = function () {
                if (file.size <= 400 * 1000000) {
                    setFile(file);
                    if (file) {
                        fileUpload(file);
                    }
                } else {
                    setFileError('File size exceeds');
                }
            };

            doc.onerror = function () {
                setFileError('not a valid file: ' + file.type);
            };
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenDetails: any = jwt(token);
            setUser(tokenDetails?.username);
        }
    }, []);

    const fileUpload = async (file) => {
        const formData = new FormData();
        formData.append('cv', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        if (user) {
            const response = await axios.post(
                `http://127.0.0.1:8000/candidate/cv_upload/${user}`,
                formData,
                config,
            );
            if (response) {
                setCompleted(true);
                setIsUploading(false);
                setFileName(response?.data);
            }
        }
    };

    return (
        <div className="p-20 flex flex-col justify-between w-full">
            <div className="mt-20 text-lg font-medium w-full">UPLOAD CV</div>
            <div className="m-auto mt-5 w-full flex">
                <div className="w-1/2 border-2 p-3 m-auto flex  flex-col rounded-2xl border-gray-100 border-b-4">
                    <div className="w-11/12 border-2 m-auto flex rounded-2xl border-gray-300 border-dashed">
                        {fileName && completed ? (
                            <div className="w-full text-center px-10 py-10 m-auto my-20">
                                <div className="font-serif fon text-hireAI text-md pt-4">
                                    {fileName}
                                </div>
                                <button className="bg-hireAI rounded-3xl w-1/3 p-2 my-4 text-white">
                                    Proceed
                                </button>
                            </div>
                        ) : (
                            <div className="w-full text-center px-10 py-10 m-auto my-20">
                                <img src="images\cv.svg" className="m-auto" alt="" />
                                <label
                                    className="cursor-pointer whitespace-nowrap"
                                    htmlFor={'uploadDocument'}
                                >
                                    <div className="font-light text-hireAI text-md pt-4 underline">
                                        {' Upload document'}
                                    </div>
                                </label>
                                <input
                                    className={`invisible focus:outline-none w-full pb-3 focus:border-blue-900`}
                                    id="uploadDocument"
                                    type="file"
                                    accept={
                                        'application/pdf,application/msword,text/plain,application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                                    }
                                    onChange={(e) => {
                                        handleFile(e.target.files[0]);
                                        setIsUploading(true);
                                        e.target.value = null;
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
