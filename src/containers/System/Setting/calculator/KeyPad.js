import React from 'react';

const KeyPad = (props) => {
    return (
      <div className="button">
        <button className='btn btn-light border' name="(" onClick={e => props.onClick(e.target.name)}>(</button>
        <button className='btn btn-light border' name=")" onClick={e => props.onClick(e.target.name)}>)</button>
        <button className='btn btn-light border' name="CE" onClick={e => props.onClick(e.target.name)}>CE</button>
        <button className='btn btn-light border' name="C" onClick={e => props.onClick(e.target.name)}>C</button><br/>


        <button className='btn btn-light border' name="1" onClick={e => props.onClick(e.target.name)}>1</button>
        <button className='btn btn-light border' name="2" onClick={e => props.onClick(e.target.name)}>2</button>
        <button className='btn btn-light border' name="3" onClick={e => props.onClick(e.target.name)}>3</button>
        <button className='btn btn-light border' name="+" onClick={e => props.onClick(e.target.name)}>+</button><br/>


        <button className='btn btn-light border' name="4" onClick={e => props.onClick(e.target.name)}>4</button>
        <button className='btn btn-light border' name="5" onClick={e => props.onClick(e.target.name)}>5</button>
        <button className='btn btn-light border' name="6" onClick={e => props.onClick(e.target.name)}>6</button>
        <button className='btn btn-light border' name="-" onClick={e => props.onClick(e.target.name)}>-</button><br/>

        <button className='btn btn-light border' name="7" onClick={e => props.onClick(e.target.name)}>7</button>
        <button className='btn btn-light border' name="8" onClick={e => props.onClick(e.target.name)}>8</button>
        <button className='btn btn-light border' name="9" onClick={e => props.onClick(e.target.name)}>9</button>
        <button className='btn btn-light border' name="*" onClick={e => props.onClick(e.target.name)}>x</button><br/>


        <button className='btn btn-light border' name="." onClick={e => props.onClick(e.target.name)}>.</button>
        <button className='btn btn-light border' name="0" onClick={e => props.onClick(e.target.name)}>0</button>
        <button className='btn btn-light border' name="=" onClick={e => props.onClick(e.target.name)}>=</button>
        <button className='btn btn-light border' name="/" onClick={e => props.onClick(e.target.name)}>÷</button><br/>
      </div>
    )
}
export default KeyPad;