import React, { ReactElement } from 'react';
import SpinLoader from './spinLoader';

export default function Loader(): ReactElement {
    return (
        <div className="flex flex-1">
            <div className="h-full align-middle my-2">
                <SpinLoader />
            </div>
            <div className="h-full align-middle my-4 text-center font-poppins text-base text-hireAI">
                Please wait this may take a moment
            </div>
        </div>
    );
}
