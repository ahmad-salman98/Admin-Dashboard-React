import React, { useContext } from "react";
import FilterByDate from "../FilterBy/FilterByDate";
import FilterByText from "../FilterBy/FilterByText";
import FilterBySelect from "../FilterBy/FilterBySelect";
import Context from "../context";

const Filters = () => {
    const { setName, setAction, setAppType, setToDate, setFromDate, setAppId } =
        useContext(Context);

    return (
        <div className="custom-filter-container">
            <FilterByText
                setValue={setName}
                label="Employee Name"
                placeholder="e.g.Admin.User"
            />
            <FilterBySelect
                setValue={setAction}
                options={["DARI_REFRESH_TOKEN", "two", "three"]}
                label="Action type"
            />
            <FilterBySelect
                setValue={setAppType}
                options={["one", "two", "three"]}
                label="Application type"
            />
            <FilterByDate setValue={setFromDate} label="From Date" />

            <FilterByDate setValue={setToDate} label="To Date" />

            <FilterByText
                setValue={setAppId}
                label="Application ID"
                placeholder="e.g. 219841/2021"
                type="text"
            />

            <button className="custom-search">
                <p>Search Logger</p>
            </button>
        </div>
    );
};

export default Filters;
