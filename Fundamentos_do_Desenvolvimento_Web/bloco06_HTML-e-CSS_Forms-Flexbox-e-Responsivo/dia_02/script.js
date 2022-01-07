const estados = ['Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)'];

function preparaEstados() {
  for (let i in estados) {
    option = document.createElement('option');
    option.innerText = estados[i];
    option.value = estados[i];
    document.getElementById('estate').appendChild(option);
  }
}
preparaEstados();

const validate = new window.JustValidate('#form', {
  errorFieldStyle: {border: '1px solid red',},
});
validate
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])
  .addField('#email', [
    {
      rule: 'maxLength',
      value: 50,
    },
    {
      rule: 'email',
      errorMessage: 'Email inválido'
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])
  .addField('#cpf', [
    {
      rule: 'maxLength',
      value: 11,
    },
    {
      rule: 'minLength',
      value: 11,
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])
  .addField('#adress', [
    {
      rule: 'minLength',
      value: 1,
    },
    {
      rule: 'maxLength',
      value: 200,
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])
  .addField('#city', [
    {
      rule: 'minLength',
      value: 1,
    },
    {
      rule: 'maxLength',
      value: 28,
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])
  .addField('#application', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 1000,
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])
  .addField('#job', [
    {
      rule: 'minLength',
      value: 5,
    },
    {
      rule: 'maxLength',
      value: 40,
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])
  .addField('#job-description', [
    {
      rule: 'minLength',
      value: 10,
    },
    {
      rule: 'maxLength',
      value: 500,
    },
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'Campo obrigatório',
    }
  ])