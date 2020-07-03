import React, { useRef } from 'react';
import { RenderCount } from './RenderCount';

interface ContentViewerProps {
    value: string;
}

export const ContentViewer = React.memo(({ value }: ContentViewerProps) => {
    let renderCount = useRef(0);
    console.log('---> Render');

    return (
        <div className="border my-4 px-4 pb-4">
            <RenderCount count={renderCount.current++} />
            {value}
        </div>
    );
});
