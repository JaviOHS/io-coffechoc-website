import React from 'react';
import About from '../pages/About';
import Objectives from '../pages/Objectives';
import Benefits from '../pages/Benefits';
import Ingredients from '../pages/Ingredients';
import ProductionProcess from '../pages/ProductionProcess';
import Nutritional from '../pages/NutritionalInfo';
import Contact from '../pages/Contact';
import Creators from '../pages/Creators';

const MainComponent = ({ data }) => {
  return (
    <main>
      <About about={data.about} />
      <Objectives objectives={data.objectives} />
      <Benefits benefits={data.benefits} />
      <Ingredients ingredients={data.ingredients} />
      <ProductionProcess productionProcess={data.productionProcess} />
      <Nutritional nutritionalInfo={data.nutritionalInfo} />
      <Creators creators={data.creators} />
      <Contact contact={data.contact} />
    </main>
  );
};

export default MainComponent;
