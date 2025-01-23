import React, { createContext, useState, ReactNode, useContext } from 'react';


interface Captain {
    id: string
    fullname: {
        firstname: string
        lastname: string
    },
    email: string
    password: string
    source: string;
    vehicle: {
        color: string
        plate: string
        capacity: number
        vehicleType: 'car' | 'motorcycle' | 'auto'
    }
    location: {
        ltd: number
        lng: number
    };
    socketId: string
    status: string
}

interface Context {
    captain: Captain | null;
    updateCaptain: (data: Captain) => void;
    setCaptain : React.Dispatch<React.SetStateAction<Captain | null>>
    isLoading : boolean
    setIsLoading : React.Dispatch<React.SetStateAction<boolean>>
    error : any ,
    setError : React.Dispatch<React.SetStateAction<null>>

}
const CaptainDataContext = createContext<Context | undefined>(undefined);

export const CaptainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [captain, setCaptain] = useState<Captain | null>(null);
    const updateCaptain = (data: Captain) => {
        setCaptain(data);
    };
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const value = {
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
}
export const useCaptainData = () => {
    const context = useContext(CaptainDataContext);
    if (!context) {
        throw new Error('useCaptainData must be used within a CaptainProvider');
    }
    return context;
};

export default CaptainDataContext; 
