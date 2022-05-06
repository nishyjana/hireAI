import React, { ReactElement } from 'react';
import SpinLoader from './spinLoader';

export default function Loader(): ReactElement {
    return (
        <div className="flex flex-1 flex-col align-middle items-center justify-center px-8 lg:mt-32 md:mt-28 sm:mt-16">
            <div className="h-full align-middle my-2">
                <SpinLoader />
            </div>
            <div className="h-full align-middle my-4 text-center font-poppins text-base text-purple-500">
                Please wait this may take a moment
            </div>
        </div>
    );
}
