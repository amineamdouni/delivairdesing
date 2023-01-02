import React from 'react'

const users = () => {

  const Ban=()=>{
    //ban function
  }
  const Verify=()=>{
    //verify function

  }
  const Search =()=>{
    //search function

  }
  const FilterUser=(state:any)=>{
    //Filter function

  }
  return (<center>
    <div className="col-lg-8 col-md-6 mt-5">
    <div className="card shadow-xs border">
      <div className="card-header border-bottom pb-0">
        <div className="d-sm-flex align-items-center mb-3">
          <div>
            <h6 className="font-weight-semibold text-lg mb-0">
              Users
            </h6>
            <p className="text-sm mb-sm-0 mb-2">
              These are details about the users
            </p>
          </div>
          <div className="ms-auto d-flex">
           
          
          </div>
        </div>
        <div className="pb-3 d-sm-flex align-items-center">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradiotable"
              id="btnradiotable1"
              autoComplete="off"
              defaultChecked=""
            />
            <label
              className="btn btn-white px-3 mb-0"
              htmlFor="btnradiotable1"
            >
              All
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradiotable"
              id="btnradiotable2"
              autoComplete="off"
            />
            <label
              className="btn btn-white px-3 mb-0"
              htmlFor="btnradiotable2"
            >
              Verified
            </label>
            <input
              type="radio"
              className="btn-check"
              name="btnradiotable"
              id="btnradiotable3"
              autoComplete="off"
            />
            <label
              className="btn btn-white px-3 mb-0"
              htmlFor="btnradiotable3"
            >
              Not Verified
            </label>
          </div>
          <div className="input-group w-sm-25 ms-auto">
            <span className="input-group-text text-body">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
      <div className="card-body px-0 py-0">
        <div className="table-responsive p-0">
          <table className="table align-items-center justify-content-center mb-0">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-secondary text-xs font-weight-semibold opacity-7">
                  User
                </th>
                <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">
                  Verified
                </th>
                <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">
                  Location
                </th>
                <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">
                  Phone Number
                </th>
                <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">
                  Email
                </th>
                 <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">
                  Rating
                </th> <th className="text-secondary text-xs font-weight-semibold opacity-7 ps-2">
                  Options
                </th>
                
              </tr>
            </thead>
            <tbody>
             {['','','',''].map(e=>(<><tr>
                <td>
                  <div className="d-flex px-2">
                    <div >
                      <img  className="avatar avatar-sm rounded-circle bg-gray-100 me-2 my-2"
                        src="https://res.cloudinary.com/duqxezt6m/image/upload/v1671620369/IMG_0168_uuvouj_nhmx3p.jpg"
                        alt="spotify" style={{width:"60px",height:"60px"}}
                      />
                    </div>
                    <div className="my-auto">
                      <h6 className="mb-0 text-sm">Med Aziz Selini</h6>
                    </div>
                  </div>
                </td>
                <td className="align-middle">
                  <p className="text-sm font-weight-normal mb-0">
                    yes
                  </p>
                </td>
                <td className="align-middle">
                  <span className="text-sm font-weight-normal">
                    Boumhal Bassatine
                  </span>
                </td>
                <td className="align-middle">
                  <div className="d-flex">
                   
                    <div className="ms-2">
                      <p className="text-dark text-sm mb-0">52 224 782</p>
                    
                    </div>
                  </div>
                </td>
                <td className="align-middle">
                <div className="d-flex">
                   
                   <div className="ms-2">
                  <p className="text-sm font-weight-normal mb-0">
                    azizselini@gmail.com
                  </p>
                  </div>
                  </div>
                </td>
                <td className="align-middle">
                  <p className="text-sm font-weight-normal mb-0">
                   *****
                  </p>
                </td>
                <td className="align-middle " >
                
                <button className="btn btn-outline-dark btn-sm">verify</button>
                <button className="btn btn-outline-danger btn-sm">ban</button>
                </td>
                
              </tr></>))}
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</center>
  )
}

export default users