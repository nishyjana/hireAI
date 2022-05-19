import React from 'react';

export default function Help() {
    return (
        <div className="flex flex-col w-full items-center ">
            <h2 className=" font-semibold text-2xl font-sans flex mx-auto mb-14  mt-32">
                HOW IT WORKS
            </h2>
            <div className="w-full flex h-auto py-2 justify-evenly ml-10">
                <div className="flex flex-col">
                    <img src="images\Details.svg" className="w-full  h-48" alt="" />
                    <div className='text-center font-bold my-1'>ENTER YOUR DETAILS</div>
                    <div className="mt-3 p-1 w-56 flex mx-auto">
                        Fill the application form displayed on the screen by providing truthful
                        information about you.
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="images\UploadCSV.svg" className="w-full h-48" alt="" />
                    <div className='text-center font-bold my-1'>UPLOAD CV</div>
                    <div className="mt-3 p-1 w-56 flex mx-auto">
                        Upload the latest version of your curriculum vitae
                    </div>
                </div>
                <div className="flex flex-col">
                    <img src="images\RecordInterview.svg" className="w-full  h-48" alt="" />
                    <div className='text-center font-bold my-1'>RECORD INTERVIEW</div>
                    <div className="mt-3 p-1 w-56 flex mx-auto">
                        Start recording yourself answering the questions appearing on the screen and
                        end the recording once you are done.
                    </div>
                </div>
            </div>
        </div>
    );
}
