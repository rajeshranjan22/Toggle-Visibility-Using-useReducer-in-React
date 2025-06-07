import { useReducer } from 'react';
import { initialState, MessageReducer } from './MessageReducer';

function App() {
  const [state, dispatch] = useReducer(MessageReducer, initialState);

  return (
    <div style={styles.container}>
      <h1>Toggle Message App</h1>
      <button
        onClick={() => dispatch({ type: 'TOGGLE_VISIBILITY' })}
        style={styles.button}
      >
        Toggle Message
      </button>

      {state.isVisible && <p style={styles.message}>Hello, World!</p>}
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial',
    backgroundColor: '#f9f9f9',
  },
  button: {
    margin: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#007bff',
    color: 'white',
  },
  message: {
    fontSize: '20px',
    color: '#333',
    marginTop: '10px',
  },
};

export default App;
