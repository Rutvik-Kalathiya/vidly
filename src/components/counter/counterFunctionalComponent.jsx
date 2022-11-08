import React from 'react';
import { useState } from 'react';
import './counter.css';

function CounterFunctionalComponent() {

  const [state, setState ] = useState( {count: 0, tags:[ 'tag0'], color:['yellow']});

  function getBadgeClasses () {
    let cal = state.count % 2;
    let classes = 0;
    classes = cal === 0 ? 'warning' : 'primary';
    return classes
  }

  function getCount() {
    if (state.count ===0) return 'Zero';
    return state.count 
  }

  const handleIncrement = () => {
    setState( { count: state.count + 1, tags: [...state.tags, `tag${state.count + 1}`] });
  }
  
  return (
    <React.Fragment>
      <div className='component-header'>
        <h2>Counter using functional component</h2>
        <div className='component-btn'>
          <span className={`badge m-2 badge-${getBadgeClasses()}`}>{getCount()}</span>
          <button onClick={() => handleIncrement()} className='btn btn-secondary btn-sm'>Increment</button>
        </div>
        {state.tags.length === 0 ? <p>There are no tags!</p> :
        <div className='tags'>
          {state.tags.map( tag => <li key={tag}> {tag} </li>)}
        </div>}
        <br />
      </div>
    </React.Fragment>
  )
}


export default CounterFunctionalComponent