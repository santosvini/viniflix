import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresIniciais = {
  nome: '',
  descricao: '',
  cor: '',
}
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);
  

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    const { getAttribute, value } = infosDoEvento;
    setValue(
      getAttribute('name'), 
      value
      );
  }

   return (
    <PageDefault>
      <h1>Cadastro de Categoria:
        {values.nome}</h1>

       <form onSubmit={function handleSubmit(infosDoEvento) {
         infosDoEvento.preventDefault();
         setCategorias([
           ...categorias, 
           values 
         ]);

         setValues(valoresIniciais)
       }}>

         <FormField
           label="Nome da Categoria"
           type="text"
           name="nome"
           value={values.nome}
           onChanged={handleChange}   
         />

          <FormField
            label="Descricao"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChanged={handleChange}   
         />

        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.descricao}
              name="descricao"
              onChanged={handleChange}
            />
          </label>
        </div> */}

         <FormField
           label="Cor"
           type="color"
           name="cor"
           value={values.cor}
           onChanged={handleChange}   
         />

         {/* <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={handleChange}
            />
          </label>
         </div> */}

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
           Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;