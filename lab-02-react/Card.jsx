import React from "react";

const cardClass = (className) => `Card ${className || ""}`;

export const Card = ({ className, title, children }) => {
    return (
        <div className={cardClass(className)} style={{ border: '1px solid gray', margin: '10px', padding: '10px'}}>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default Card;