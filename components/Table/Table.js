import React, { useContext, useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Context from "../context";
import Arrow from "../assets/Arrow";
import { useRouter } from "next/router";

export default function Table() {
  // context states
  const { dataArrCopy, handleSearch } = useContext(Context);

  // component states
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const itemsPerPage = 10;

  const router = useRouter();
  useEffect(() => {
    handleSearch();
  }, [router]);
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(dataArrCopy?.slice(startIndex, endIndex));
    setPageCount(Math.ceil(dataArrCopy?.length / itemsPerPage));
  }, [currentPage, itemsPerPage, dataArrCopy]);

  // funtions to create tabe elements
  const createTableCell = (text, className = null) => {
    return (
      <td className={`custom-table-cell ${className}`}>
        {text ? (
          text.toString().replace(/_/g, " ")
        ) : (
          <p className="text-[#cdbebe]"> -/- </p>
        )}
      </td>
    );
  };

  const createTableRow = currentItems.map((item, i) => {
    return (
      <tr className="custom-table-row" key={i}>
        {createTableCell(item.logId, "pl-4")}
        {createTableCell(item.applicationType)}
        {createTableCell(item.applicationId)}
        {createTableCell(item.actionType)}
        {createTableCell(null)}
        {createTableCell(item.creationTimestamp.replace(" ", " / "))}
      </tr>
    );
  });

  const createTableHead = (text, className = null) => {
    return (
      <td
        className={`text-start cursor-pointer pb-4 ${className}`}
        onClick={() => setSortBy(sortBy == text ? "" : text)}
      >
        {text}
        <Arrow
          className={`${
            sortBy == text ? "rotate-180" : ""
          } mx-2 absolute mt-[2px]`}
        />
      </td>
    );
  };

  // function to sort current items
  switch (sortBy) {
    case "Log ID":
      currentItems.sort((a, b) => a.logId - b.logId);
      break;
    case "Application Type":
      currentItems.sort((a, b) =>
        a.applicationType > b.applicationType ? 1 : -1
      );
      break;
    case "Application ID":
      currentItems.sort((a, b) => a.applicationId - b.applicationId);
      break;
    case "Action":
      currentItems.sort((a, b) => (a.actionType > b.actionType ? 1 : -1));
      break;
    case "Date:Time":
      currentItems.sort((a, b) =>
        a.creationTimestamp > b.creationTimestamp ? 1 : -1
      );
      break;
  }

  return (
    <div className="custom-table-container">
      <table className="table-fixed w-full ">
        <thead>
          <tr className="custom-table-head">
            {createTableHead("Log ID", "pl-4")}
            {createTableHead("Application Type")}
            {createTableHead("Application ID")}
            {createTableHead("Action")}
            {createTableHead("Action Details")}
            {createTableHead("Date:Time")}
          </tr>
        </thead>

        <tbody>{createTableRow}</tbody>
      </table>

      <Stack spacing={2} className="mt-4 mx-auto w-fit">
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={(event, page) => setCurrentPage(page)}
          shape="rounded"
        />
      </Stack>
    </div>
  );
}
