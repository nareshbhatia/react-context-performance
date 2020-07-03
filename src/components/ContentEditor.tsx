import React, { useRef } from 'react';
import { RenderCount } from './RenderCount';

interface ContentEditorProps {
    value: string;
    onChange: (value: string) => void;
}

export const ContentEditor = React.memo(
    ({ value, onChange }: ContentEditorProps) => {
        let renderCount = useRef(0);

        const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
            onChange(e.currentTarget.value);
        };

        return (
            <div className="border mt-4 px-4">
                <RenderCount count={renderCount.current++} />
                <div className="form-group">
                    <input
                        className="form-control"
                        value={value}
                        onChange={handleChange}
                    />
                </div>
            </div>
        );
    }
);
