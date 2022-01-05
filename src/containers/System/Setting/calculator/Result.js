import React from "react";

const Result = ({result}) => {
    const [resultCalc, setResultCalc] = React.useState(result);

    return (
        <div className="result">
            <input type="text" className="form-control" value={result} onChange={(e)=>setResultCalc(e.target.value)}  placeholder="0" />
        </div>
    );
  }
export default Result;
