import React from 'react';
import Debug from 'debug';
import { useMessage, useMessageSetter } from '../contexts';

const debug = Debug('MessageEditor');

export const MessageEditor = () => {
    debug('Rendering...');
    const message = useMessage();
    const setMessage = useMessageSetter();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setMessage(e.currentTarget.value);
    };

    return <input value={message} onChange={handleChange} />;
};
