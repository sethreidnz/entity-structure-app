import React, { FunctionComponent, useState } from "react";

// project imports
import Company from "../../types/Company";

// project components
import AddCompanyForm from "./components/AddCompanyForm";
import CompanyList from "./components/CompanyList";

const updateCompanies = (company: Company): Promise<Company> => {
  return new Promise(function(resolve) {
    setTimeout(() => {
      resolve(company);
    }, 2000);
  });
};

const Home: FunctionComponent = () => {
  const [showCompanyForm, setShowCompanyForm] = useState(false);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const addCompany = async (company: Company) => {
    console.log(company);
    setIsUpdating(true);
    setShowCompanyForm(false);
    try {
      await updateCompanies(company);
      setCompanies([...companies, company]);
      setIsUpdating(false);
    } catch (error) {
      console.error(error);
    }
  };
  if (isUpdating) return <div>Loading...</div>;
  return (
    <div className="Home">
      <CompanyList companies={companies} />
      <div className="row">
        <div className="col-sm">
          {!showCompanyForm ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => setShowCompanyForm(true)}
            >
              Add company
            </button>
          ) : (
            <AddCompanyForm
              save={addCompany}
              cancel={() => setShowCompanyForm(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
