import React, { FunctionComponent } from "react";
import { useForm, useFieldArray } from "react-hook-form";

// project imports
import Company from "../../../types/Company";
import Person from "../../../types/Person";

type AddEntityFormProps = {
  save: (n: Company) => any;
  cancel: Function;
};

const relationshipFields = {
  people: "people",
  companies: "companies"
};

const AddCompanyForm: FunctionComponent<AddEntityFormProps> = ({
  save,
  cancel
}) => {
  const { register, control, handleSubmit, errors } = useForm<Company>();
  const {
    fields: people,
    append: appendPerson,
    remove: removePerson
  } = useFieldArray<Person>({
    control,
    name: relationshipFields.people
  });
  const {
    fields: companies,
    append: appendCompany,
    remove: removeCompany
  } = useFieldArray({
    control,
    name: relationshipFields.companies
  });
  return (
    <div className="AddEntityForm">
      <h3>Add New Company</h3>
      <form>
        <div className="form-group">
          <label>Company Name</label>
          <input
            name="companyName"
            type="text"
            className="form-control"
            placeholder="Enter company name"
            ref={register({ required: true })}
          />
          {errors.companyName && "Company Name is required."}
          <hr />
          <h4>Add people</h4>
          {people.map((item, index) => (
            <div className="form-group" key={item.id}>
              <label>Name</label>
              <input
                name={`${relationshipFields.people}[${index}].name`}
                className="form-control"
                type="text"
                ref={register({ required: true })}
              />
              <br />
              <label>Relationship</label>
              <select
                name={`${relationshipFields.people}[${index}].relationship`}
                className="form-control"
                ref={register({ required: true })}
              >
                <option>Shareholder</option>
                <option>Director</option>
              </select>
              <br />
              <label>Shareholding</label>
              <input
                name={`${relationshipFields.people}[${index}].shareholding`}
                className="form-control"
                type="number"
                ref={register({ required: true })}
              />
              <br />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removePerson(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <hr />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => appendPerson({ name: relationshipFields.people })}
          >
            Add person
          </button>
          <hr />
          <h4>Add Companies</h4>
          {companies.map((item, index) => (
            <div className="form-group" key={item.id}>
              <label>Name</label>
              <input
                name={`${relationshipFields.companies}[${index}].companyName`}
                className="form-control"
                type="text"
                ref={register({ required: true })}
              />
              <br />
              <label>Shareholding</label>
              <input
                name={`${relationshipFields.companies}[${index}].shareholding`}
                className="form-control"
                type="number"
                ref={register({ required: true })}
              />
              <br />
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeCompany(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <hr />
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => appendCompany({ name: relationshipFields.companies })}
          >
            Add company
          </button>
        </div>
      </form>
      <hr />
      <button
        type="button"
        className="btn btn-success"
        onClick={handleSubmit(save)}
      >
        Save
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => cancel(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export default AddCompanyForm;
