import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [action, setAction] = useState(null);
  const [appType, setAppType] = useState(null);
  const [appId, setAppId] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [dataArr, setDataArr] = useState(null);
  const [dataArrCopy, setDataArrCopy] = useState(null);
  const router = useRouter();

  const handleSearch = () => {
    const urlAppId = router.query.urlAppId;
    const urlAction = router.query.urlAction;
    const urlAppType = router.query.urlAppType;
    const urlFromDate = router.query.urlFromDate;
    const urlToDate = router.query.urlToDate;

    if (urlAppId || urlAction || urlAppType || urlFromDate || urlToDate) {
      setDataArrCopy(
        dataArr.filter((item) => {
          if (urlAppId && urlAppId != item.applicationId) {
            return false;
          }
          if (urlAction && urlAction != item.actionType) {
            return false;
          }
          if (urlAppType && urlAppType !== item.applicationType) {
            return false;
          }

          if (urlToDate) {
            const to = new Date(urlToDate).getTime();
            if (new Date(item.creationTimestamp).getTime() > to) return false;
          }

          if (urlFromDate) {
            const from = new Date(urlFromDate).getTime();
            if (from > new Date(item.creationTimestamp).getTime()) return false;
          }

          return true;
        })
      );
    } else {
      setDataArrCopy(dataArr);
    }
  };

  useEffect(() => {
    setAction(router.query.urlAction);
    setAppId(router.query.urlAppId);
    setAppType(router.query.urlAppType);
    setFromDate(router.query.urlFromDate);
    setToDate(router.query.urlToDate);
  }, [router]);

  return (
    <Context.Provider
      value={{
        name,
        setName,
        action,
        setAction,
        appId,
        setAppId,
        appType,
        setAppType,
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        dataArr,
        setDataArr,
        setDataArrCopy,
        dataArrCopy,
        handleSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
