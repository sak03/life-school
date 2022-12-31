import React, { useState } from 'react'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './jobs.css'
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { Calendar } from "primereact/calendar";
import { Divider } from 'primereact/divider';
import { useFormik } from "formik";
import { InputTextarea } from 'primereact/inputtextarea';
import { FaUserAlt, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFileInvoice, FaBuilding, FaIdCard, FaCloudUploadAlt, FaBook, FaBriefcase, FaDollarSign } from "react-icons/fa";
import { InputSwitch } from 'primereact/inputswitch';
import { CTooltip } from "@coreui/react";


const Jobs = () => {
  const [viewMode, setViewMode] = useState(0);
  const status = [
    { name: "ACTIVE", code: "ACT" },
    { name: "INACTIVE", code: "IN-ACT" },
  ];

  const jobFormik = useFormik({
    initialValues: {
      title: "",
      customer: "",
      location: "",
      experience: "",
      jobType: "",
      workPlace: "",
      salary: "",
      jobDescription: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.title) {
        errors.title = "Please enter job title.";
      }
      if (!data.customer) {
        errors.customer = "Please select customer.";
      }
      if (!data.location) {
        errors.location = "Please enter job location.";
      }
      if (!data.experience) {
        errors.experience = "Please enter experience.";
      }
      if (!data.workPlace) {
        errors.workPlace = "Please select work place.";
      }
      if (!data.jobType) {
        errors.jobType = "Please select job type.";
      }
      if (!data.salary) {
        errors.salary = "Please enter salary.";
      }
      if (!data.jobDescription) {
        errors.jobDescription = "Please enter job description.";
      }

      return errors;
    },
    onSubmit: (data) => {
      console.log("form submitted !");
    },
  });
  const isJobFormFieldValid = (name) =>
    !!(jobFormik.touched[name] && jobFormik.errors[name]);
  const getJobFormErrorMessage = (name) => {
    return (
      isJobFormFieldValid(name) && (
        <small className="p-error">{jobFormik.errors[name]}</small>
      )
    );
  };

  const jobForm = () => {
    return (
      <form onSubmit={jobFormik.handleSubmit}>
        <div className='mx-3'>
          <div className="row">
            <div className="col-sm-12 col-md-3 col-lg-3 mt-4">
              <span className="p-float-label">
                <Dropdown
                  id="customer"
                  inputId="dropdown"
                  value={jobFormik.values.customer}
                  // options={userType}
                  onChange={jobFormik.handleChange}
                  optionLabel="name"
                  className={
                    (classNames({
                      "p-invalid": isJobFormFieldValid("customer"),
                    }),
                      "p-inputtext-sm w-100 borderClass")
                  }
                />
                <label htmlFor="customer">Customer</label>
              </span>
              {getJobFormErrorMessage("customer")}
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 mt-4">
              <span className="p-float-label">
                <InputText
                  id="title"
                  value={jobFormik.values.title}
                  onChange={jobFormik.handleChange}
                  className={
                    (classNames({
                      "p-invalid": isJobFormFieldValid("title"),
                    }),
                      "p-inputtext-sm w-100 borderClass")
                  }
                />
                <label htmlFor="title">Job Title</label>
              </span>
              {getJobFormErrorMessage("title")}
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 mt-4">
              <span className="p-float-label">
                <InputText
                  id="location"
                  value={jobFormik.values.location}
                  onChange={jobFormik.handleChange}
                  className={
                    (classNames({
                      "p-invalid": isJobFormFieldValid("location"),
                    }),
                      "p-inputtext-sm w-100 borderClass")
                  }
                />
                <label htmlFor="location">Job location</label>
              </span>
              {getJobFormErrorMessage("location")}
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 mt-4">
              <span className="p-float-label">
                <InputText
                  id="experience"
                  value={jobFormik.values.experience}
                  onChange={jobFormik.handleChange}
                  className={
                    (classNames({
                      "p-invalid": isJobFormFieldValid("experience"),
                    }),
                      "p-inputtext-sm w-100 borderClass")
                  }
                  suffix=" Years"
                />
                <label htmlFor="experience">Experience (in years)</label>
              </span>
              {getJobFormErrorMessage("experience")}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
              <span className="p-float-label">
                <Dropdown
                  id="jobType"
                  inputId="dropdown"
                  value={jobFormik.values.jobType}
                  // options={jobType}
                  onChange={jobFormik.handleChange}
                  optionLabel="name"
                  className={
                    (classNames({
                      "p-invalid": isJobFormFieldValid("jobType"),
                    }),
                      "p-inputtext-sm w-100 borderClass")
                  }
                />
                <label htmlFor="jobType">Job Type</label>
              </span>
              {getJobFormErrorMessage("jobType")}
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
              <span className="p-float-label">
                <Dropdown
                  id="workPlace"
                  inputId="dropdown"
                  value={jobFormik.values.workPlace}
                  // options={jobType}
                  onChange={jobFormik.handleChange}
                  optionLabel="name"
                  className={
                    (classNames({
                      "p-invalid": isJobFormFieldValid("workPlace"),
                    }),
                      "p-inputtext-sm w-100 borderClass")
                  }
                />
                <label htmlFor="workPlace">Work Place</label>
              </span>
              {getJobFormErrorMessage("workPlace")}
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 mt-4">
              <span className="p-float-label">
                <InputText
                  id="salary"
                  value={jobFormik.values.salary}
                  onChange={jobFormik.handleChange}
                  optionLabel="name"
                  className={
                    (classNames({
                      "p-invalid": isJobFormFieldValid("salary"),
                    }),
                      "p-inputtext-sm w-100 borderClass")
                  }
                />
                <label htmlFor="salary">Salary</label>
              </span>
              {getJobFormErrorMessage("salary")}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 mt-4">
              <span className="p-float-label">
                <InputTextarea
                  id="jobDescription"
                  value={jobFormik.values.jobDescription}
                  onChange={jobFormik.handleChange}
                  optionLabel="name"
                  className={
                    (classNames({
                      "p-invalid": isJobFormFieldValid("jobDescription"),
                    }),
                      "p-inputtext-sm w-100 borderClass")
                  }
                />
                <label htmlFor="jobDescription">Job Description</label>
              </span>
              {getJobFormErrorMessage("jobDescription")}
            </div>
          </div>
        </div>
        <div className="modal-footer d-flex justify-content-end my-3 mx-3">
          <Button
            label="Add"
            type="submit"
            className="bg-primary border-0  p-button-md  btn-color p-button-raised"
          />
          <Button
            onClick={() => {
              setViewMode(0);
              jobFormik.resetForm();
            }}
            label={"Cancel"}
            style={{ marginLeft: "10px" }}
            className="bg-danger border-0 p-button-md p-button-raised"
          />
        </div>
      </form>
    )
  }

  const jobDetails = () => {
    return (
      <div className='mx-3'>
        <h3 className=' my-3 d-flex'>
          <strong>Node Js Developer</strong>
          {/* <span className=" d-flex  justify-content-end">
            <CTooltip content="Close" placement="left">
              <i className="pi pi-times editBtn" style={{ fontSize: '1.5em', position: "relative", left: "10rem" }} onClick={() => setViewMode(0)}></i>
            </CTooltip>
          </span> */}
        </h3>
        <p className=''>Amazon  India (Remote) <span className='text-secondary'>4 days ago,  Over 200 applicants</span></p>
        <p><FaBriefcase className='text-primary' /> Full-time · Mid-Senior level</p>
        <p><FaFileInvoice className='text-info' /> 10,001+ employees · Technology, Information and Internet</p>
        <Divider />
        <h5 className=''> <strong>About the job</strong> </h5>
        <ul>
          <li>Work closely with our clients to develop, test, and ship software.</li>
          <li> Design, code and maintain standard compliant APIs.</li>
          <li>Debug complex applications</li>
          <li>Follow agile processes.</li>
          <li>Follow agile processes.</li>
          <li>Actively participate in project estimation, planning, code reviews and risk management activities</li>
          <li>Perform peer code reviews.</li>
        </ul>
        <Divider />
        <h5><strong>Ideal Candidate</strong></h5>
        <ul>
          <li>Excellent hands-on experience in backend software development</li>
          <li>Proficient in NodeJS</li>
          <li> Hands on experience with relational [MySQL] and NoSQL databases [Preferably, MongoDB]</li>
          <li>Cloud deployment experience [Preferably, AWS]</li>
          <li> Experience in containerizing with Docker and Kubernetes is an added advantage.</li>
          <li> Experience in leading a team is an added advantage.</li>
        </ul>
        <Divider />
        <h4><strong>About the company</strong></h4>
        <p>Computer Software  <span className='text-secondary'>10,001+ employees  768,405 on LinkedIn</span></p>
        <p>
          Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. We are driven by the excitement of building technologies, inventing products, and providing services that change lives. We embrace new ways of doing things, make decisions quickly, and are not afraid to fail. We have the scope and capabilities of a large company, and the spirit and heart of a small one.
        </p>
        <p>Together, Amazonians research and develop new technologies from Amazon Web Services to Alexa on behalf of our customers: shoppers, sellers, content creators, and developers around the world.
        </p>
        <p>
          Our mission is to be Earth's most customer-centric company. Our actions, goals, projects, programs, and inventions begin and end with the customer top of mind.
        </p>
        <p>
          You'll also hear us say that at Amazon, it's always "Day 1."​ What do we mean? That our approach remains the same as it was on Amazon's very first day - to make smart, fast decisions, stay nimble, invent, and focus on delighting our customers.
        </p>
        <div className="modal-footer d-flex justify-content-end my-3 mx-3">
          {/* <Button
            label="Add"
            type="submit"
            className="bg-primary border-0  p-button-md  btn-color p-button-raised"
          /> */}
          <Button
            onClick={() => {
              setViewMode(0);
            }}
            label={"Close"}
            style={{ marginLeft: "10px" }}
            className="bg-danger border-0 p-button-md p-button-raised"
          />
        </div>
      </div>
    )
  }

  const renderHeader1 = () => {
    return (
      <div className="row d-flex">
        <div className="col-lg-8">
          <form
          // onSubmit={searchFormik.handleSubmit}
          >
            <div className="row gap-lg-0 mt-lg-0">
              <div className="col-sm-12 col-lg-4 mb-1">
                <span className="p-input-icon-left w-100">
                  <i className="pi pi-search" />
                  <InputText
                    // value={globalFilterValue1}
                    // onChange={onGlobalFilterChange1}
                    placeholder="Search name"
                    className="p-inputtext-sm w-100"
                    optionLabel="name"
                    optionValue="name"
                    filter={false}
                  />
                </span>
              </div>
              <div className="col-sm-12 col-lg-4 mb-1">
                <Dropdown
                  id="status"
                  name="status"
                  options={status}
                  // value={searchFormik.values.status}
                  // onChange={searchFormik.handleChange}
                  className="p-inputtext-sm w-100"
                  optionLabel="name"
                  optionValue="name"
                  filter={false}
                  placeholder="Status"
                />
              </div>
              <div className="col-sm-12 col-lg-4 mb-2">
                <Calendar
                  id="dateRange"
                  name="dateRange"
                  // value={searchFormik.values.dateRange}
                  // onChange={searchFormik.handleChange}
                  selectionMode="range"
                  // maxDate={maxDate}
                  readOnlyInput
                  placeholder="Start & End date"
                  className="p-inputtext-sm p-calendar-w-btn w-100"
                />
              </div>
            </div>
          </form>
        </div>
        <div
          className="col-sm-12 col-md-12 col-lg-4 d-flex "
          style={{ justifyContent: "right" }}
        >
          <Button
            label="Post a Job"
            className="p-button-outlined p-button-primary p-button-md"
            onClick={() => {
              setViewMode(1);
            }}
          />
          <Button
            style={{
              marginLeft: "10px",
            }}
            role="button"
            icon="pi pi-filter-slash"
            label="Clear"
            className="p-button-outlined p-button-md"
          // onClick={() => {
          //   searchFormik.resetForm();
          //   initFilters1();
          //   if (pageNumber !== 1) {
          //     setPageNumber(1);
          //   } else {
          //     getAllAccounts({
          //       dateRange: null,
          //       status: "",
          //       page: 1,
          //     });
          //   }
          // }}
          />
        </div>
      </div>
    );
  };
  const header1 = renderHeader1();

  const footer = (
    <span style={{ justifyContent: "space-between" }}>
      <span><Button label="Apply" /></span> &emsp; &emsp;<span><Button label="View" className="p-button-secondary " /></span>
    </span>
  );

  return (
    <div className='card p-2 pt-3'>
      {viewMode === 1 ? (jobForm()) : viewMode === 2 ? (jobDetails()) : (
        <div>
          <div className='row'>{header1}</div>
          <Divider />
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-6 mt-2'>
              <div className='card p-3' onClick={() => setViewMode(2)} style={{ cursor: "pointer" }}>
                <strong className='mx-1 my-2'>Software Developer</strong>
                <p className='text-primary'> ABC Pvt. Ltd</p>
                <p className='mt-2'>
                  <span ><FaBriefcase className='text-primary' /> 2-4 Years</span> &nbsp;
                  <span><FaDollarSign className='text-warning' />4-6 LPA</span> &nbsp; &nbsp;
                  <span><FaMapMarkerAlt className='text-danger' /> Hybrid</span>
                </p>
                <p>
                  <span><FaBook className='text-primary' /> </span>
                  <span>Looking for Smart Software Engineer, having rich exp…..</span>
                </p>
                <p>
                  <span><FaIdCard className='text-primary' /> </span>
                  <span>Java, JavaScript, HTML, MySQL, Python</span>
                </p>

              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 mt-2'>
              <div className='card p-3' onClick={() => setViewMode(2)} style={{ cursor: "pointer" }}>
                <strong className='mx-1 my-2'>Software Developer</strong>
                <p className='text-primary'> XYZ Pvt. Ltd</p>
                <p className='mt-2'>
                  <span ><FaBriefcase className='text-primary' /> 2-4 Years</span> &nbsp;
                  <span><FaDollarSign className='text-warning' />4-6 LPA</span> &nbsp; &nbsp;
                  <span><FaMapMarkerAlt className='text-danger' /> Hybrid</span>
                </p>
                <p>
                  <span><FaBook className='text-primary' /> </span>
                  <span>Looking for Smart Software Engineer, having rich exp…..</span>
                </p>
                <p>
                  <span><FaIdCard className='text-primary' /> </span>
                  <span>Java, JavaScript, HTML, MySQL, Python</span>
                </p>

              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 mt-2'>
              <div className='card p-3' onClick={() => setViewMode(2)} style={{ cursor: "pointer" }}>
                <strong className='mx-1 my-2'>Software Developer</strong>
                <p className='text-primary'> ABC Pvt. Ltd</p>
                <p className='mt-2'>
                  <span ><FaBriefcase className='text-primary' /> 2-4 Years</span> &nbsp;
                  <span><FaDollarSign className='text-warning' />4-6 LPA</span> &nbsp; &nbsp;
                  <span><FaMapMarkerAlt className='text-danger' /> Hybrid</span>
                </p>
                <p>
                  <span><FaBook className='text-primary' /> </span>
                  <span>Looking for Smart Software Engineer, having rich exp…..</span>
                </p>
                <p>
                  <span><FaIdCard className='text-primary' /> </span>
                  <span>Java, JavaScript, HTML, MySQL, Python</span>
                </p>

              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-6 mt-2'>
              <div className='card p-3' onClick={() => setViewMode(2)} style={{ cursor: "pointer" }}>
                <strong className='mx-1 my-2'>Software Developer</strong>
                <p className='text-primary'> XYZ Pvt. Ltd</p>
                <p className='mt-2'>
                  <span ><FaBriefcase className='text-primary' /> 2-4 Years</span> &nbsp;
                  <span><FaDollarSign className='text-warning' />4-6 LPA</span> &nbsp; &nbsp;
                  <span><FaMapMarkerAlt className='text-danger' /> Hybrid</span>
                </p>
                <p>
                  <span><FaBook className='text-primary' /> </span>
                  <span>Looking for Smart Software Engineer, having rich exp…..</span>
                </p>
                <p>
                  <span><FaIdCard className='text-primary' /> </span>
                  <span>Java, JavaScript, HTML, MySQL, Python</span>
                </p>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Jobs