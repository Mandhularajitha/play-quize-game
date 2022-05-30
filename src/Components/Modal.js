import React from 'react';

const Modal = ({ onClose, results, data }) => {
  return(
    <div className="modal is-active">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Your answers</p>
          <p className="delete" onClick={onClose}></p>
        </header>
        <section className="modal-card-bodycontent">
          <ul>
            {results.map((result, i) => (
              <p key={i} className="mb-6">
                <p><strong>{result.q}</strong></p>
                <p className={result.a === data[i].answer ? 'has-background-success1' : 'has-background-danger'}>Your answer: {result.a}</p>
                {result.a !== data[i].answer && <p className="has-background-link">Correct answer: {data[i].answer}</p>}
              </p>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Modal;