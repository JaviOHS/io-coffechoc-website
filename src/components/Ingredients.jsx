import { Scale, Percent, Package2, NotepadText, Coffee } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ContainerCard from './ContainerCard';
import NavigationControls from './NavigationControls';
import usePagination from '../hooks/usePagination';
import DecorativeBackground from './DecorativeBackground';

const IngredientCard = ({ ingredient, isActive }) => (
  <ContainerCard isActive={isActive}>
    <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#D9C56E]">
      <img src={ingredient.imgUrl} alt={ingredient.name} className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110" />
    </div>
    <div className="space-y-4 text-center">
      <h3 className="text-2xl font-bold text-[#D9C56E] font-serif">{ingredient.name}</h3>
      <p className="text-gray-200 leading-relaxed">{ingredient.properties}</p>
    </div>
  </ContainerCard>
);

const IngredientStats = ({ ingredient }) => (
  <ContainerCard isActive>
    <div className="flex items-center justify-between">
      <h4 className="text-xl font-bold text-[#D9C56E] font-serif">Detalles Técnicos</h4>
      <Package2 className="text-[#D9C56E] w-6 h-6" />
    </div>
    <div className="space-y-4 mt-4">
      <div className="relative overflow-hidden rounded-lg bg-[#2A1F17] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Percent className="text-[#D9C56E] w-5 h-5" />
            <span className="text-gray-200">Porcentaje</span>
          </div>
          <span className="text-[#D9C56E] font-bold">{ingredient.percentage}</span>
        </div>
        <div className="absolute bottom-0 left-0 h-1 bg-[#D9C56E]" style={{ width: `${ingredient.percentage}%`, opacity: 0.5 }} />
      </div>
      <div className="relative overflow-hidden rounded-lg bg-[#2A1F17] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Scale className="text-[#D9C56E] w-5 h-5" />
            <span className="text-gray-200">Peso por Bach</span>
          </div>
          <span className="text-[#D9C56E] font-bold">{ingredient.weight}</span>
        </div>
      </div>
    </div>
  </ContainerCard>
);

const Ingredients = ({ ingredients }) => {
  const { currentIndex, next, prev, setPage } = usePagination(ingredients.content.length, 1);
  const currentIngredient = ingredients.content.length > 0 ? ingredients.content[currentIndex] : null;

  return (
    <section id="ingredients" className="relative py-16 bg-gradient-to-br from-[#2C1810] to-[#4A2C1D] overflow-hidden">
      <DecorativeBackground pattern="icons" theme="dark" />
      <div className="container mx-auto px-4">
        <SectionTitle iconLeft={NotepadText} iconRight={Coffee} color="#e5dbaf" title={ingredients.title} />
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12 leading-relaxed">
          {ingredients.description}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {currentIngredient && (
            <>
              <IngredientCard ingredient={currentIngredient} isActive />
              <IngredientStats ingredient={currentIngredient} />
            </>
          )}
        </div>
        <NavigationControls
          currentIndex={currentIndex}
          totalItems={ingredients.content.length}
          onPrevious={prev}
          onNext={next}
          onDotClick={setPage}
          buttonColor="#D9C56E"
          dotColor="#D9C56E"
        />
      </div>
    </section>
  );
};

export default Ingredients;
