import React from "react";

const EventComponent: React.FC = () => {
    // defined ahead of time
    // remove type definition to see the difference
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(event);
    };

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event);
    }

    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart}>Drag Me</div>
        </div>
    );
};

export default EventComponent;
