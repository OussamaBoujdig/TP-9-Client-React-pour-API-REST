import React, { useState } from 'react';
import CompteList from './components/CompteList';
import CompteForm from './components/CompteForm';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAdded = () => setRefreshKey((k) => k + 1);

  return (
    <div>
      <CompteForm onAdded={handleAdded} />
      <CompteList key={refreshKey} />
    </div>
  );
}

export default App;