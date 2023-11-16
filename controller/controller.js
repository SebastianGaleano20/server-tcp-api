import { readData, writeData } from "../utils/utils.js";

//getters
const getPizzas = () => {
  const pizzas = readData();
  return pizzas;
};

const getPizzaById = (id) => {
  const pizzas = readData();
  const pizza = pizzas.find((pizza) => {
    pizza.id = id;
  });
  return pizza;
};

const addPizza = (newPizza) => {
  const pizzas = readData();
  const pizza = pizzas.find((pizza) => {
    pizza.nombre === newPizza.nombre;
  });
  if (pizza) {
    return "Pizza exists, please add new pizza with other name.";
  }
  pizzas.push(newPizza);
  writeData(JSON.stringify(pizzas));
  return "Pizza added successfully :)";
};

const deletePizzaById = (id) => {
    const pizzas = readData();
    const pizza = pizzas.find((pizza) =>{
        pizza.id === id;
    })
    if(pizza){
        const newPizzas = pizza.filter((pizza)=>pizza.id !== id);
        writeData(JSON.stringify(newPizzas));
        return "Pizza deleted successfully";
    }
    return "Pizza does not exist";
};

console.log(getPizzas());

export { getPizzas, getPizzaById, addPizza, deletePizzaById };
