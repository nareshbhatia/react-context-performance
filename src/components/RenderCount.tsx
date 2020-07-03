import React from 'react';

interface RenderCountProps {
    count: number;
}

export const RenderCount = ({ count }: RenderCountProps) => (
    <div className="mt-3 mb-3 text-center">
        <p className="h5">Render Count = {count}</p>
    </div>
);
