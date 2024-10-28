document.addEventListener('DOMContentLoaded', () => {
  const jsonUrl = '../../dist/coffechoc.json';
  const objectiveContainer = document.getElementById('objective_container');
  const toggleBtn = document.getElementById('toggle-btn');
  const benefitsContainer = document.getElementById('benefits-container');
  const ingredientsBody = document.getElementById('ingredients_body');
  const ingredientPropertiesContainer = document.getElementById('ingredient_properties');
  const productionContainer = document.getElementById('production_container');
  const nutritionContainer = document.getElementById('nutritional_properties');

  let showGeneral = true;
  let data = {};
  let currentIngredientIndex = 0;

  async function loadData() {
    try {
      const response = await fetch(jsonUrl);
      data = await response.json();

      renderObjetive();
      renderBenefits(data.benefits);
      renderIngredients(data.ingredients);
      renderProductionProcess(data.productionProcess);
      renderNutritionalInfo(data.nutritionalInfo);
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }

  // Objetivos Generales y Específicos
  function renderObjetive() {
    objectiveContainer.innerHTML = '';
    const tipoObjetivos = showGeneral ? 'generales' : 'especificos';
    const titulo = showGeneral ? 'Objetivos Generales' : 'Objetivos Específicos';

    const h3 = document.createElement('h3');
    h3.className = 'text-xl font-semibold text-[#D9C56E]';
    h3.textContent = titulo;

    const ul = document.createElement('ul');
    ul.className = 'space-y-3 list-disc pl-6';

    data[tipoObjetivos].forEach(objetivo => {
      const li = document.createElement('li');
      li.className = 'leading-relaxed';
      li.textContent = objetivo;
      ul.appendChild(li);
    });

    objectiveContainer.appendChild(h3);
    objectiveContainer.appendChild(ul);
    objectiveContainer.classList.add('opacity-0', 'transition-opacity', 'duration-500');

    setTimeout(() => {
      objectiveContainer.classList.remove('opacity-0');
    }, 50);
  }

  toggleBtn.addEventListener('click', () => {
    showGeneral = !showGeneral;
    toggleBtn.textContent = showGeneral ? 'Ver Objetivos Específicos' : 'Ver Objetivos Generales';
    objectiveContainer.classList.add('opacity-0');
    setTimeout(() => {
      renderObjetive();
    }, 300);
  });

  // Beneficios 
  function renderBenefits(benefits) {
    benefitsContainer.innerHTML = '';

    benefits.forEach(benefit => {
      const benefitCard = document.createElement('div');
      benefitCard.className = 'bg-[#3B2A20] p-6 rounded-xl shadow-lg space-y-4 transform transition-transform hover:scale-105';

      const iconContainer = document.createElement('div');
      iconContainer.className = 'bg-[#D9C56E] w-16 h-16 rounded-full flex items-center justify-center mx-auto';
      iconContainer.innerHTML = `<i class="${benefit.icon} text-[#3B2A20] text-2xl"></i>`;

      const title = document.createElement('h3');
      title.className = 'text-xl font-semibold text-[#D9C56E]';
      title.textContent = benefit.title;

      const description = document.createElement('p');
      description.className = 'text-white font-medium';
      description.textContent = benefit.description;

      benefitCard.appendChild(iconContainer);
      benefitCard.appendChild(title);
      benefitCard.appendChild(description);
      benefitsContainer.appendChild(benefitCard);
    });
  }

  // Ingredientes
  function renderIngredients(ingredients) {
    ingredientsBody.innerHTML = '';
    ingredients.forEach(ingredient => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="py-2 px-4">${ingredient.name}</td>
        <td class="py-2 px-4">${ingredient.percentage}</td>
        <td class="py-2 px-4">${ingredient.weight}</td>
      `;
      ingredientsBody.appendChild(tr);
    });
    renderIngredientView(ingredients);
  }

  function renderIngredientView(ingredients) {
    ingredientPropertiesContainer.innerHTML = '';

    const img = document.createElement('img');
    img.id = 'ingredient_image';
    img.className = 'w-52 rounded-md mb-4 justify-self-center';
    ingredientPropertiesContainer.appendChild(img);

    const name = document.createElement('h3');
    name.id = 'ingredient_name';
    name.className = 'text-lg font-semibold text-[#D9C56E]';
    ingredientPropertiesContainer.appendChild(name);

    const property = document.createElement('p');
    property.id = 'ingredient_property';
    property.className = 'mt-2';
    ingredientPropertiesContainer.appendChild(property);

    const navContainer = document.createElement('div');
    navContainer.className = 'flex justify-between mt-6 mx-auto w-1/2';

    const prevButton = document.createElement('button');
    prevButton.id = 'prev_ingredient';
    prevButton.className = 'bg-[#D9C56E] text-[#3B2A20] py-2 px-4 rounded-lg font-semibold';
    prevButton.textContent = 'Anterior';
    navContainer.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.id = 'next_ingredient';
    nextButton.className = 'bg-[#D9C56E] text-[#3B2A20] py-2 px-4 rounded-lg font-semibold';
    nextButton.textContent = 'Siguiente';
    navContainer.appendChild(nextButton);

    ingredientPropertiesContainer.appendChild(navContainer);
    showIngredient(currentIngredientIndex, ingredients);

    prevButton.addEventListener('click', () => {
      if (currentIngredientIndex > 0) {
        currentIngredientIndex--;
        showIngredient(currentIngredientIndex, ingredients);
      }
    });

    nextButton.addEventListener('click', () => {
      if (currentIngredientIndex < ingredients.length - 1) {
        currentIngredientIndex++;
        showIngredient(currentIngredientIndex, ingredients);
      }
    });
  }

  function showIngredient(index, ingredients) {
    const ingredient = ingredients[index];

    const ingredientImage = document.getElementById('ingredient_image');
    const ingredientName = document.getElementById('ingredient_name');
    const ingredientProperty = document.getElementById('ingredient_property');

    ingredientImage.src = ingredient.imgUrl || '../img/ingredients/licor.jpg'; 
    ingredientImage.alt = `Imagen de ${ingredient.name}`;
    ingredientName.textContent = ingredient.name;
    ingredientProperty.textContent = ingredient.properties;
  } 

  // Proceso de Producción
  function renderProductionProcess(productionProcess) {
    productionContainer.innerHTML = '';

    const description = document.createElement('p');
    description.textContent = productionProcess.description;
    productionContainer.appendChild(description);

    const phasesTitle = document.createElement('h3');
    phasesTitle.className = 'text-xl font-semibold text-[#D9C56E] mt-4';
    phasesTitle.textContent = productionProcess.phasesTitle;
    productionContainer.appendChild(phasesTitle);

    const phasesList = document.createElement('ol');
    phasesList.className = 'list-decimal pl-6 space-y-2';
    productionProcess.phases.forEach(phase => {
      const phaseItem = document.createElement('li');
      phaseItem.innerHTML = `<strong>${phase.title}:</strong> ${phase.description}`;
      phasesList.appendChild(phaseItem);
    });
    productionContainer.appendChild(phasesList);

    const conclusion = document.createElement('p');
    conclusion.textContent = productionProcess.conclusion;
    productionContainer.appendChild(conclusion);
  }

  // Información Nutricional
  function renderNutritionalInfo(nutritionalInfo) {
    const nutritionalPropertiesBody = document.getElementById('nutritional_properties_body');
    nutritionalPropertiesBody.innerHTML = '';
    
    nutritionalInfo.table.forEach((nutrient, index) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="py-2 px-4 cursor-pointer" data-index="${index}">${nutrient.nutrient}</td>
        <td class="py-2 px-4">${nutrient.amount}</td>
        <td class="py-2 px-4">${nutrient.dailyValue}</td>
      `;
      nutritionalPropertiesBody.appendChild(tr);
    });
    
    showNutrientDetails(0, nutritionalInfo.table);
  
    nutritionalPropertiesBody.addEventListener('click', (event) => {
      if (event.target.tagName === 'TD' && event.target.dataset.index) {
        const nutrientIndex = parseInt(event.target.dataset.index, 10);
        showNutrientDetails(nutrientIndex, nutritionalInfo.table);
      }
    });
  }
  
  function showNutrientDetails(index, nutrients) {
    const nutrient = nutrients[index];
    
    nutritionContainer.innerHTML = '';
  
    const title = document.createElement('h3');
    title.className = 'text-lg font-semibold text-[#D9C56E]';
    title.textContent = nutrient.nutrient;
    nutritionContainer.appendChild(title);
  
    const detailText = document.createElement('p');
    detailText.className = 'mt-2';
    detailText.textContent = nutrient.details;
    nutritionContainer.appendChild(detailText);
  }

  loadData();
});