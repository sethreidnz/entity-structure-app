import React, { FunctionComponent } from "react";

//project imports
import Company from "../../../types/Company";

// project components
import CompanyItem from "./CompanyItem";

type CompanyListProps = {
  companies: Company[];
};

const CompanyList: FunctionComponent<CompanyListProps> = ({ companies }) => (
  <div className="CompaniesList">
    <h2>Companies</h2>
    {companies.length === 0 ? (
      <div className="row">
        <div className="col-sm">
          <p>
            You have no companies yet. Use the "Add Company" button below to add
            one.
          </p>
          <hr />
        </div>
      </div>
    ) : (
      <>
        <hr />
        {companies.map((company, index) => (
          <CompanyItem company={company} />
        ))}
        <hr />
      </>
    )}
  </div>
);

export default CompanyList;
