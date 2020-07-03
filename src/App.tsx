import React, { Fragment } from 'react';
import { Movie, Singer } from './components';
import { AppStateProvider } from './contexts';

export const App: React.FC = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="navbar-brand">React Context Performance</div>
            </nav>
            <AppStateProvider>
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <Movie />
                        </div>
                        <div className="col-sm">
                            <Singer />
                        </div>
                    </div>
                </div>
            </AppStateProvider>
        </Fragment>
    );
};
