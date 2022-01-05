const estados = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)'];
const dropEstado = document.getElementById('estate');

function preparaEstados() {
  for (let i in estados) {
    option = document.createElement('option');
    option.innerText = estados[i];
    option.value = estados[i];
    document.getElementById('estate').appendChild(option);
  }
}
preparaEstados();

function verificaNome() {
  let nome = document.getElementById('name').value;
  nome = nome.split('');
  if (nome.length == 0 || nome.length > 40) {
    document.getElementById('name').style.borderColor = 'red';
    return 0;
  }
  return 1;
}

function verificaEmail() {
  let email = document.getElementById('email').value;
  email = email.split('');
  if (email.length > 0 && email.length <= 50) {
    let arroba = 0;
    for (let i in email) {
      if (email[i] == '@') {
        arroba += 1;
      }
    }
    if (arroba > 1 || arroba == 0) {
      document.getElementById('email').style.borderColor = 'red';
      return 0;
    }
  } else {
    document.getElementById('email').style.borderColor = 'red';
    return 0;
  }
  return 1;
}

function verificaCPF() {
  let cpf = document.getElementById('cpf').value;
  cpf = cpf.split('');
  if (cpf.length != 11) {
    document.getElementById('cpf').style.borderColor = 'red';
    return 0;
  }
  return 1;
}

function verificaEnd() {
  let end = document.getElementById('adress').value;
  end = end.split('');
  if (end.length == 0 || end.length > 200) {
    document.getElementById('adress').style.borderColor = 'red';
    return 0;
  }
  return 1;
}

function verificaCidade() {
  let city = document.getElementById('city').value;
  city = city.split('');
  if (city.length == 0 || city.length > 28) {
    document.getElementById('city').style.borderColor = 'red';
    return 0;
  }
  return 1;
}

function verificaTipo() {
  const tipo = document.querySelector('input[name="moradia"]:checked');
  if (tipo == null) {
    document.getElementsByClassName('city-label')[0].style.color = 'red';
    document.getElementsByClassName('city-label')[1].style.color = 'red';
    return 0;
  }
  return 1;
}

function verificaPI() {
  let soma = verificaNome() + verificaEmail() + verificaCPF();
  soma = soma + verificaEnd() + verificaCidade() + verificaTipo();
  return soma;
}

function verificaResumo() {
  let res = document.getElementById('application').value;
  res = res.split('');;
  if (res.length == 0 || res.length > 1000) {
    document.getElementById('application').style.borderColor = 'red';
    return 0;
  }
  return 1;
}

function verificaCargo() {
  let job = document.getElementById('job').value;
  job = job.split('');
  if (job.length == 0 || job.length > 40) {
    document.getElementById('job').style.backgroundColor = 'red';
    return 0;
  }
  return 1;
}

function verificaDcargo() {
  let job = document.getElementById('job-description').value;
  job = job.split('');
  if (job.length == 0 || job.length > 500) {
    document.getElementById('job-description').style.backgrounColor = 'red';
    return 0;
  }
  return 1;
}

function verificaData() {
  let data = document.getElementById('date').value;
  data = data.split('/');
  if (data[0] <= 31 && data[0] > 0) {
    if (data[1] <= 12 && data[1] > 0) {
      if (data[2] < 0){
        alert('Data errada, o ano não pode ser negativo.');
        return 0;
      }
    } else {
      alert('Data errada, o mês não pode ser menor que zero e nem maior que 12.');
      return 0;
    }
  } else {
    alert('Data errada, o dia não pode ser menor que 0 e nem maior que 31.');
    return 0;
  }
  return 1;
}

function verificaLJ() {
  let soma = verificaResumo() + verificaCargo() + verificaDcargo();
  soma = soma + verificaData();
  console.log(soma);
  return soma;
}

function imprimeDados() {
  const div = document.getElementById('resultados');
  const p = document.createElement('p');
  p.innerText = 'Nome: ' + document.getElementById('name').value;
  div.append(p);
  const p1 = document.createElement('p');
  p1.innerText = 'Email: ' + document.getElementById('email').value;
  div.append(p1);
  const p2 = document.createElement('p');
  p2.innerText = 'Endereço: ' + document.getElementById('adress').value;
  div.append(p2);
  const p3 = document.createElement('p');
  p3.innerText = 'Cidade: ' + document.getElementById('city').value;
  div.append(p3);
  const p4 = document.createElement('p');
  p4.innerText = 'Estado: ' + document.getElementById('estate').value;
  div.append(p4);
  const p5 = document.createElement('p');
  p5.innerText = 'Tipo: ' + document.getElementById('adress').value;
  div.append(p5);
  const p6 = document.createElement('p');
  p6.innerText = 'Endereço: ' + document.querySelector('input[name="moradia"]:checked').value;
  div.append(p6);
  const p7 = document.createElement('p');
  p7.innerText = 'Resumo do currículo: ' + document.getElementById('application').value;
  div.append(p7);
  const p8 = document.createElement('p');
  p8.innerText = 'Cargo: ' + document.getElementById('job').value;
  div.append(p8);
  const p9 = document.createElement('p');
  p9.innerText = 'Descrição do cargo: ' + document.getElementById('job-description').value;
  div.append(p9);
  const p10 = document.createElement('p');
  p10.innerText = 'Data de Início: ' + document.getElementById('date').value;
  div.append(p10);
}

function criaDiv() {
  const div = document.createElement('div');
  div.id = 'resultados';
  document.getElementsByTagName('body')[0].appendChild(div);
  imprimeDados();
}

document.getElementById('concluido').addEventListener('click', function(event) {
  event.preventDefault();
  const soma = verificaPI() + verificaLJ();
  console.log(soma);
  if (soma == 10) {
    criaDiv();
  } else {
    alert('Informações incompletas!')
  }
});