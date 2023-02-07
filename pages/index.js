import BasicBreadcrumbs from "../components/Breadcrumbs";
import Context from "../components/context";
import Filters from "../components/Filters/Filters";
import Table from "../components/Table/Table";
import React, { useContext, useEffect } from "react";

export default function Home({ data }) {
  const { setDataArr, dataArr, dataArrCopy, setDataArrCopy } =
    useContext(Context);

  useEffect(() => {
    setDataArr(data?.result?.auditLog);
    setDataArrCopy(data?.result?.auditLog);
  }, []);

  if (!dataArr) return "loading";
  return (
    <main className="py-5 px-12 max-w-[90rem] mx-auto overflow-hidden">
      <BasicBreadcrumbs className="text-sm" />
      <Filters />
      <Table />
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(
      "https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f",
      {
        headers: {
          method: "GET",
        },
      }
    );
    const data = await res.json();

    return { props: { data } };
  } catch (error) {
    return {
      redirect: {
        permenant: false,
        destination: "/404",
      },
    };
  }
}
