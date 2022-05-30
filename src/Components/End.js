import React, { useEffect, useState } from 'react';

import { formatTime } from '../utils';

const End = ({ results, data, onReset, onAnswersCheck, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if(result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    
  }, []);

  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h3 className='result'>Your Results</h3>
          <p>{correctAnswers} of {data.length}</p>
          <p><strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong></p>
          <p><strong>Your time:</strong> {formatTime(time)}</p>
          <button className="button_mr-2" onClick={onAnswersCheck}>Check your answers</button>
          <button className="button_is-success" onClick={onReset}>Try again</button>
        </div>
      </div>
    </div>
  );
}

export default End;