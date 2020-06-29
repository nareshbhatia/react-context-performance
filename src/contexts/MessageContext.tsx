import React, { useContext, useState } from 'react';

// ---------- MessageContext ----------
type MessageSetter = (message: string) => void;

const MessageContext = React.createContext<string | undefined>(undefined);
const MessageSetterContext = React.createContext<MessageSetter | undefined>(
    undefined
);

// ---------- Hooks ----------
function useMessage(): string {
    const message = useContext(MessageContext);
    if (message === undefined) {
        /* istanbul ignore next */
        throw new Error('useMessage must be used within a MessageProvider');
    }
    return message;
}

function useMessageSetter(): MessageSetter {
    const setMessage = useContext(MessageSetterContext);
    if (setMessage === undefined) {
        /* istanbul ignore next */
        throw new Error(
            'useMessageSetter must be used within a MessageProvider'
        );
    }
    return setMessage;
}

// ---------- MessageProvider ----------
const MessageProvider: React.FC = ({ children }) => {
    const [message, setMessage] = useState<string>('Enter a message...');

    return (
        <MessageContext.Provider value={message}>
            <MessageSetterContext.Provider value={setMessage}>
                {children}
            </MessageSetterContext.Provider>
        </MessageContext.Provider>
    );
};

export { MessageProvider, useMessage, useMessageSetter };
