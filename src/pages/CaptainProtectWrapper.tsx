import React from "react";

interface Wrapper {
    children: React.ReactNode;
}
const CaptainProtectWrapper :React.FC<Wrapper> = ({ children }) => {
    return (
        <div>{children}</div>
    )
}

export default CaptainProtectWrapper