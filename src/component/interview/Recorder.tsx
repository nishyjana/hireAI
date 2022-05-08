import React, { useEffect, useState } from 'react';
import VideoRecorder from 'react-video-recorder';
import jwt from 'jwt-decode';
import axios from 'axios';
import { THANKYOU, WELCOME } from '../../constants/PathConstants';
import { useHistory } from 'react-router-dom';

export default function Recorder() {
    const [video, setVideo] = useState(null);
    const [videoBlobFile, setVideoBlobFile] = useState(null);
    const [confirm, setShowConfirm] = useState(false);
    const [upload, setUpload] = useState(false);
    const [user, setUser] = useState('');
    const history = useHistory();

    function convertBlobToFile(blob, fileName) {
        blob.lastModifiedDate = new Date();
        blob.name = fileName;
        return blob;
    }

    useEffect(() => {
        const blob = new Blob([video], { type: 'video/mp4' });

        //we are giving a url for an image as second parameter below
        const fileTypeBLob = convertBlobToFile(blob, `${user}/interview`);
        setVideoBlobFile(fileTypeBLob);
    }, [user, video]);

    const fileUpload = async (file) => {
        const interviewId = localStorage.getItem('interviewId');
        const formData = new FormData();
        const date = new Date();
        var files = new File([file], `${user}/interview/${date?.valueOf()}`, {
            lastModified: date.valueOf(),
            type: 'video/mp4',
        });

        if (files) {
            formData.append('video', files);
        }
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };
        console.log(formData);
        if (user && interviewId) {
            console.log(user, interviewId);
            const response = await axios.post(
                `http://127.0.0.1:8000/interview/apply/${interviewId}/${user}`,
                formData,
                config,
            );
            if (response) {
                history.push(THANKYOU);
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const tokenDetails: any = jwt(token);
            setUser(tokenDetails?.id);
        }
    }, []);

    useEffect(() => {
        if (upload && video) {
            console.log(upload, video);
            fileUpload(video);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [upload, video]);

    return (
        <div className="w-full h-screen">
            {confirm ? (
                <div className="w-full text-center p-2 m-auto my-20 z-50 ">
                    <button
                        className="bg-hireAI rounded-3xl w-1/12 my-2 text-center px-9 flex m-auto p-2 text-sm text-white"
                        onClick={() => {
                            setUpload(true);
                        }}
                    >
                        Upload
                    </button>
                </div>
            ) : null}
            <VideoRecorder
                onRecordingComplete={(videoBlob) => {
                    // Do something with the video...

                    console.log('videoBlob', videoBlob);
                    setVideo(videoBlob);
                    setShowConfirm(true);
                }}
            />
        </div>
    );
}
