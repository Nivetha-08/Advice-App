// import React from 'react'

// const Main = ({advice,count,fun}) => {
//   return (
//     <div className="container border border-5 border-primary w-50">
//         <div className="card fw-bold">
//             <div className="card-header">Your Advice Is Here :</div>
//             <div className="card-body text-light bg-secondary">{advice}</div>
//             <div className="card-footer d-flex justify-content-between">
//                 <p className="text-primary bg-light">Your Advice Count Is : {count}</p>
//                 <button className="btn btn-success" onClick={fun()}>Submit</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Main

import React from 'react';

const Main = ({ advice, count, fun }) => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <div className="card-header bg-primary text-white text-center fs-4">
          💬 Your Advice
        </div>
        <div className="card-body bg-light text-dark">
          <blockquote className="blockquote text-center">
            <p className="mb-0 fs-5 fst-italic">"{advice}"</p>
          </blockquote>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center bg-white">
          <span className="p-1">Advice count: {count}</span>
          <button className="btn btn-success px-4" onClick={fun}>
            Get New Advice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
