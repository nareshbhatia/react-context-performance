import React from 'react';
import Debug from 'debug';
import { useMessage } from '../contexts';

const debug = Debug('MessageViewer');

export const MessageViewer = () => {
    debug('Rendering...');
    const message = useMessage();

    return <div>{message}</div>;
};
