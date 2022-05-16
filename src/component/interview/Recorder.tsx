import React, { useEffect, useState } from 'react';
import VideoRecorder from 'react-video-recorder';
import jwt from 'jwt-decode';
import axios from 'axios';
import { THANKYOU, WELCOME } from '../../constants/PathConstants';
import { useHistory } from 'react-router-dom';
import NormalLoader from '../../ui/NormalLoader';

export default function Recorder() {
    const [video, setVideo] = useState(null);
    const [videoBlobFile, setVideoBlobFile] = useState(null);
    const [confirm, setShowConfirm] = useState(false);
    const [upload, setUpload] = useState(false);
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    function convertBlobToFile(blob, fileName) {
        blob.lastModifiedDate = new Date();
        blob.name = fileName;
        return blob;
    }

    useEffect(() => {
        const blob = new Blob([video], { type: 'video/mp4' });

        //we are giving a url for an image as second parameter below
        const fileTypeBLob = convertBlobToFile(blob, `${user?.username}`);
        setVideoBlobFile(fileTypeBLob);
    }, [user, video]);

    const fileUpload = async (file) => {
        const interviewId = localStorage.getItem('interviewId');
        const formData = new FormData();
        const date = new Date();

        const myFile = new File([file], `${user?.username}.mp4`, {
            type: 'video/mp4',
        });
        if (myFile) {
            formData.append('video', myFile);
        }
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        if (user && interviewId) {
            const response = await axios.post(
                `http://127.0.0.1:8000/interview/apply/${interviewId}/${user?.id}`,
                formData,
                config,
            );
            if (response) {
                setLoader(false);
                setTimeout(() => {
                    history.push(THANKYOU);
                }, 1000);
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenDetails: any = jwt(token);
            setUser(tokenDetails);
        }
    }, []);

    useEffect(() => {
        if (upload && video) {
            console.log(upload, video);
            fileUpload(video);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [upload, video]);

    useEffect(() => {
        if (confirm) {
            window.scrollTo(0, document.body.scrollHeight);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirm]);

    return (
        <div className="w-full h-screen mt-6">
            <VideoRecorder
                className="mt-1"
                countdownTime={3000}
                mimeType="video/webm;codecs=vp8,opus"
                onRecordingComplete={(videoBlob) => {
                    setVideo(videoBlob);
                    setShowConfirm(true);
                }}
            />
            {confirm ? (
                <div className="w-full text-center p-2 m-auto -mt-2  z-50 ">
                    {window.scrollTo(0, document.body.scrollHeight)}
                    <button
                        className="bg-hireAI rounded-3xl w-1/12 my-2 text-center px-9 flex m-auto p-2 text-sm text-white"
                        onClick={() => {
                            setUpload(true);
                            setLoader(true);
                        }}
                    >
                        {loader ? <NormalLoader /> : 'Upload'}
                    </button>
                </div>
            ) : null}
        </div>
    );
}
