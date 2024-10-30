import React from 'react';
import About from './About';
import Objectives from './Objectives';
import Benefits from './Benefits';
import Ingredients from './Ingredients';
import ProductionProcess from './ProductionProcess';
import Nutritional from './NutritionalInfo';
import Contact from './Contact';

const MainComponent = ({ data }) => {
  return (
    <main>
      <About about={data.about} />
      <Objectives objectives={data.objectives} />
      <Benefits benefits={data.benefits} />
      <Ingredients ingredients={data.ingredients} />
      <ProductionProcess productionProcess={data.productionProcess} />
      <Nutritional nutritionalInfo={data.nutritionalInfo} />
      <Contact contact={data.contact} />
    </main>
  );
};

export default MainComponent;
