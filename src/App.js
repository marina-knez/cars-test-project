import React from 'react';
import CarPageLayout from './Layouts/CarPageLayout'
import store from './Stores/carStore'

function App() {
  return (
    <div className="App">
        <CarPageLayout store={store}/>
    </div>
  );
}

export default App;
