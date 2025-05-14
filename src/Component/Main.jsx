import React from 'react';

const Main = ({ advice, count, fun, countHandler }) => {
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
        <div className="card-footer d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 bg-white">
          <span className="p-1 text-center text-sm-start w-100 w-sm-auto bg-light text-dark">
            Advice count: {count}
          </span>
          <div className="d-flex flex-column flex-sm-row gap-2 w-100 w-sm-auto justify-content-center justify-content-sm-end bg-light">
            <button className="btn btn-warning" onClick={countHandler}>Clear</button>
            <button className="btn btn-success px-4" onClick={fun}>
              Get New Advice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
