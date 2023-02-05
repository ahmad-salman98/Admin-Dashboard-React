import React, { useState } from 'react';
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [name, setName] = useState(null);
    const [action, setAction] = useState(null);
    const [appType, setAppType] = useState(null);
    const [appId, setAppId] = useState(null);
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);

    const [dataArr, setDataArr] = useState(null);
    const [, setDataArrCopy] = useState(Object);

    return (
        <Context.Provider value={{ name, setName, action, setAction, appId, setAppId, appType, setAppType, fromDate, setFromDate, toDate, setToDate, dataArr, setDataArr }}>
            {children}
        </Context.Provider>
    );
}

export default Context;