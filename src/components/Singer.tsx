import React, { useRef } from 'react';
import { useAppState, useAppStateSetter } from '../contexts';
import { ContentEditor } from './ContentEditor';
import { ContentViewer } from './ContentViewer';
import { RenderCount } from './RenderCount';

export const Singer = () => {
    let renderCount = useRef(0);
    const appState = useAppState();
    const setAppState = useAppStateSetter();

    const { favoriteSinger, ...rest } = appState;

    const handleChange = (value: string) => {
        setAppState({
            favoriteSinger: value,
            ...rest,
        });
    };

    return (
        <div className="border px-4">
            <RenderCount count={renderCount.current++} />
            <h2>Favorite Singer</h2>
            <ContentEditor value={favoriteSinger} onChange={handleChange} />
            <ContentViewer
                value={favoriteSinger.length > 0 ? favoriteSinger : 'None'}
            />
        </div>
    );
};
