
import "./rulespage.css";
import { useNavigate } from 'react-router';

const Rules = () => {
  const navigate = useNavigate();
  const startQuizHandler = () => {
    navigate("/")
  }

  return (
    <main className="rule_page">
      <section className="rule_section">
        <h2 className="page-heading">Rules</h2>
        <ul className="rules_list">
          <p className="each_rule">
            There will be 7 questions in quiz.
          </p>
          <p className="each_rule">
            You will have timer for each question.
          </p>
          <p className="each_rule">1 Points for each question.</p>
          <p className="each_rule">
            There will be MCQs so there will be only 1 correct answer.
          </p>
          <p className="each_rule">No Negative marking for wrong answer.</p>
        </ul>
        <button className="btn large_btn"  onClick={startQuizHandler}>
          Start
        </button>
      </section>
    </main>
  )
}

export { Rules }