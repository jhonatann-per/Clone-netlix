import React from 'react';
const Filme = ({filme}) => {
    const mostrarNome = () => {
        alert(filme.nome);
    };
    
    return(
        <tr>
        <td>{filme.nome} Teste</td>
        <td>{filme.categoria}</td>
        <td>{filme.ano}</td>
        <td className="text-ritgh">
            <button className="btn btn-info" onClick={mostrarNome}>Informações</button>{'  '}
            <button className="btn btn-danger">Excluir</button>
        </td>
      </tr>
    );
};
export default Filme;