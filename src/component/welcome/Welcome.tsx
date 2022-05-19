import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ABOUT, COMPANY_VIEW, SIGNIN } from '../../constants/PathConstants';
import InputSearch from '../../userInterface/InputSearch';

export default function Welcome() {
    const history = useHistory();
    const [url, setUrl] = useState('');
    const [error, setError] = useState(false);
    const [complete, setComplete] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (complete && !url) {
            setError(true);
        } else if (url && complete) {
            setError(false);
        }
    }, [complete, url]);

    useEffect(() => {
        if (!error && complete && url) {
            if (token) {
                history.push({
                    pathname: COMPANY_VIEW,
                    state: { companyUrl: url },
                });
            } else {
                history.push(SIGNIN);
            }
        }
    }, [complete, error, history, token, url]);

    return (
        <div className="flex flex-col w-full items-center py-36 ">
            <h2 className=" font-semibold text-2xl font-sans flex mx-auto mb-14 mt-32">Hire AI</h2>
            <InputSearch
                setComplete={setComplete}
                onclick={() => {
                    setComplete(true);
                }}
                setUrl={setUrl}
            />
            {error ? <div className="text-red-500">Please provide an url</div> : null}
        </div>
    );
}
