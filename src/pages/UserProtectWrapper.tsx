import React from "react";

interface Wrapper {
  children: React.ReactNode;
}

const UserProtectWrapper :React.FC<Wrapper> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default UserProtectWrapper