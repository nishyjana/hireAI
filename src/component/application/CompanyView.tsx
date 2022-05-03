import React from "react";
import { useLocation } from "react-router-dom";

export default function CompanyView() {
  const location = useLocation<any>();
  const url = location?.state?.companyUrl;
  return <div className="p-32">CompanyView {url ? url : null}</div>;
}
