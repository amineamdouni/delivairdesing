import React from 'react'

const posts = () => {
  return (
    <div><div className="card mb-3" style={{ maxWidth: 540 }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img  src="https://cdn.discordapp.com/attachments/1030292601489854626/1059141791535874099/FC88AABF-AEB3-4CBC-BEE4-5477C6CF3CE7.jpg" className="img-fluid  rounded-circle" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">Amin Amdouni</h5>
          <p className="card-text">
            Flight name : TU514
            <br />
           Weight: 5 Kg
           <br />
           Payment method : Cash
           
          </p>
          
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default posts