import React, { useContext, useRef, useState } from 'react';
import { RenderCount } from '../components';

// ---------- AppState ----------
interface AppState {
    favoriteMovie: string;
    favoriteSinger: string;
}

// ---------- AppStateContext ----------
type AppStateSetter = (state: AppState) => void;

const AppStateContext = React.createContext<AppState | undefined>(undefined);
const AppStateSetterContext = React.createContext<AppStateSetter | undefined>(
    undefined
);

// ---------- Hooks ----------
function useAppState(): AppState {
    const appState = useContext(AppStateContext);
    if (appState === undefined) {
        /* istanbul ignore next */
        throw new Error('useAppState must be used within a AppStateProvider');
    }
    return appState;
}

function useAppStateSetter(): AppStateSetter {
    const setAppState = useContext(AppStateSetterContext);
    if (setAppState === undefined) {
        /* istanbul ignore next */
        throw new Error(
            'useAppStateSetter must be used within a AppStateProvider'
        );
    }
    return setAppState;
}

// ---------- AppStateProvider ----------
const AppStateProvider: React.FC = ({ children }) => {
    const [appState, setAppState] = useState<AppState>({
        favoriteMovie: '',
        favoriteSinger: '',
    });
    let renderCount = useRef(0);

    return (
        <AppStateContext.Provider value={appState}>
            <AppStateSetterContext.Provider value={setAppState}>
                <RenderCount count={renderCount.current++} />
                {children}
            </AppStateSetterContext.Provider>
        </AppStateContext.Provider>
    );
};

export { AppStateProvider, useAppState, useAppStateSetter };
