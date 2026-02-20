import React from 'react';
import FragmentLayout from './lab-02-react/FragmentLayout';
import CombinedList from './lab-02-react/CombinedList';
import Section from './lab-02-react/Section';
import ProductList from './lab-02-react/ProductList';

function App() {
  return (
    <div className="App">
      {/* --- Lab 2.1 --- */}
      <FragmentLayout />
      <hr />
      <CombinedList />
      <hr />

      {/* --- Lab 2.2 --- */}
      {/* Композиция компонентов: передаем ProductList внутрь Section (Task 3) */}
      <Section title="Our Products">
        <ProductList />
      </Section>
    </div>
  );
}

export default App;