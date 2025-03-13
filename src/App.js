import Calculator from './components/Calculadora';

function App() {
  return (
    
    <div className="App" style={{height: '100</div></div>vh'}}>
      <div style={{ backgroundColor: '#2e3b4e', padding: '5px', borderRadius: '10px', textAlign: 'center', color: '#fff' }}>
        <h1>Calculadora Básica React</h1>
      </div>
      <Calculator />
      <footer style={{ backgroundColor: '#2e3b4e', padding: '10px', borderRadius: '10px', textAlign: 'center', color: '#fff', marginTop: 'auto' }}>
        <p>&copy; 2024 Calculadora. by Rômulo Moraes</p>
      </footer>
    </div>
  );
}

export default App;
