import React, { useRef } from 'react';
import { useAppState, useAppStateSetter } from '../contexts';
import { ContentEditor } from './ContentEditor';
import { ContentViewer } from './ContentViewer';
import { RenderCount } from './RenderCount';

export const Movie = () => {
    let renderCount = useRef(0);
    const appState = useAppState();
    const setAppState = useAppStateSetter();

    const { favoriteMovie, ...rest } = appState;

    const handleChange = (value: string) => {
        setAppState({
            favoriteMovie: value,
            ...rest,
        });
    };

    return (
        <div className="border px-4">
            <RenderCount count={renderCount.current++} />
            <h2>Favorite Movie</h2>
            <ContentEditor value={favoriteMovie} onChange={handleChange} />
            <ContentViewer
                value={favoriteMovie.length > 0 ? favoriteMovie : 'None'}
            />
        </div>
    );
};
