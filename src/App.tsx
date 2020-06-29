import React from 'react';
import Debug from 'debug';
import { MessageEditor, MessageViewer } from './components';
import { MessageProvider } from './contexts';

const debug = Debug('App');

export const App: React.FC = () => {
    debug('Rendering...');

    return (
        <div>
            <MessageProvider>
                <h1>React Context Performance</h1>
                <p>
                    Open Chrome DevTools to see which components are rendering
                </p>
                <div className="content">
                    <div className="lhs-panel">
                        <MessageEditor />
                    </div>
                    <div className="rhs-panel">
                        <MessageViewer />
                    </div>
                </div>
            </MessageProvider>
        </div>
    );
};
