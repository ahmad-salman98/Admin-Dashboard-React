import React, { useContext } from "react";
import FilterByDate from "../FilterBy/FilterByDate";
import FilterByText from "../FilterBy/FilterByText";
import FilterBySelect from "../FilterBy/FilterBySelect";
import Context from "../context";
import { useRouter } from "next/router";

const Filters = () => {
  const router = useRouter();

  const {
    setName,
    setAction,
    setAppType,
    setToDate,
    dataArr,
    setFromDate,
    setAppId,
    appId,
    action,
    appType,
    fromDate,
    toDate,
  } = useContext(Context);
  const actionTypeOptions = [];
  const applicationTypeOptions = [];
  dataArr.forEach((item) => {
    let isApplicationExist = false;
    let isActionExist = false;

    applicationTypeOptions.forEach((type) => {
      if (item.applicationType && type == item.applicationType) {
        isApplicationExist = true;
      }
    });
    actionTypeOptions.forEach((type) => {
      if (item.actionType && type == item.actionType) {
        isActionExist = true;
      }
    });

    if (item.actionType && !isActionExist) {
      actionTypeOptions.push(item.actionType);
    }
    if (item.applicationType && !isApplicationExist) {
      applicationTypeOptions.push(item.applicationType);
    }
  });

  return (
    <div className="custom-filter-container">
      <FilterByText
        setValue={setName}
        label="Employee Name"
        placeholder="e.g.Admin.User"
      />
      <FilterBySelect
        value={router.query.urlAction}
        setValue={setAction}
        options={actionTypeOptions}
        label="Action type"
      />
      <FilterBySelect
        value={router.query.urlAppType}
        setValue={setAppType}
        options={applicationTypeOptions}
        label="Application type"
      />
      <FilterByDate value={fromDate} setValue={setFromDate} label="From Date" />

      <FilterByDate value={toDate} setValue={setToDate} label="To Date" />

      <FilterByText
        value={appId}
        setValue={setAppId}
        label="Application ID"
        placeholder="e.g. 219841/2021"
        type="text"
      />

      <button
        className="custom-search"
        onClick={() => {
          router.push({
            pathname: "/",
            query: {
              urlAppId: appId,
              urlAction: action,
              urlAppType: appType,
              urlFromDate: fromDate,
              urlToDate: toDate,
            },
          });
        }}
      >
        <p>Search Logger</p>
      </button>
    </div>
  );
};

export default Filters;
