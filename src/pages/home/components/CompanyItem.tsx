import React, { FunctionComponent } from "react";

//project imports
import Company from "../../../types/Company";

type CompanyItemProps = {
    company: Company;
}

const CompanyItem: FunctionComponent<CompanyItemProps> = ({ company }) => (
  <div>
    <h3>{company.companyName}</h3>
    {(company.people || company.companies) && (
      <p>This company has the following relationships</p>
    )}

    {company.people && (
      <>
        <h4>People</h4>
        <ul>
          {company.people.map((person, index) => (
            <li key={index}>
              {person.name}:
              <ul>
                <li>Relationship: {person.relationship}</li>
                <li>Shareholding: {person.shareholding}</li>
              </ul>
            </li>
          ))}
        </ul>
      </>
    )}
    {company.companies && (
      <>
        <h4>Companies</h4>
        <ul>
          {company.companies.map((company, index) => (
            <li key={index}>
              {company.companyName}:
              <ul>
                <li>Shareholding: {company.shareholding}</li>
              </ul>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default CompanyItem;
