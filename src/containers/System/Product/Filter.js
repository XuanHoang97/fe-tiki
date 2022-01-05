import React from 'react';

export default function Filter({ handleSort, handleTagChange, selectedTag, sortBy }) {
  let tagNames = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-9">
          <p className=" mr-2">Filter: 
            {tagNames.map((item, index) => (
              <button key={index} type="button" 
                className={`btn mr-2 px-2 ${ selectedTag === item ? "btn-secondary" : "btn-outline-secondary" }`}
                onClick={(e) => handleTagChange(e.target.value)}
                value={item}
              >
                {item}
              </button>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
