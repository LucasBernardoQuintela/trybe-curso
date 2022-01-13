const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const entregador = Object.values(order.order.delivery)[0];
  const cliente = Object.values(order.name).join('');
  const telefone = Object.values(order.phoneNumber).join('');
  const endereco = Object.values(order.address);
  return `Olá ${entregador}, entrega para: ${cliente}, Telefone: ${telefone}, R. ${endereco[0]}, Nº: ${endereco[1]}, AP: ${endereco[2]}`;
}

console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.order.pizza.pepperoni.price = '25';
  order.payment.total = '50';
  const cliente = Object.values(order.name).join('');
  const pizza = Object.values(order.order.pizza);
  const refri = Object.values(order.order.drinks.coke.type).join('');
  const valor = Object.values(order.payment.total).join('');
  return `Olá ${cliente}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${refri} é R$ ${valor},00.`;
}

console.log(orderModifier(order));