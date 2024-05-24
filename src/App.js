import './App.css';
import TodoForm from './components/TodoForm';
import TodoWrapper from './components/TodoWrapper';

function App() {

  return (
    <>
      <header className='tdList-header'>
        <h1>To-Do List</h1>
      </header>

      <div className='tdList-container'>
        <section className='tdList-todo'>

          <h2>
            To-Do Tasks
          </h2>

          <TodoWrapper>
            <TodoForm />
          </TodoWrapper>
        </section>

        <section className='tdList-completed'>
          <h2>
            Completed Tasks
          </h2>
          <div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
