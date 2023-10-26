import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';

import styles from "../App.module.css";
import { CadastroInterface } from '../interfaces/CadastroInterface';
import axios from 'axios';

const Listagem = () => {

    const [usuarios, setUsuarios] = useState<CadastroInterface[]>([]);
    const [pesquisa, setPesquisa] = useState<string>('')
    const [error, setError] = useState("");

    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.name ==="pesquisa"){
            setPesquisa(e.target.value)
        }
    }
    const buscar = (e:FormEvent) => {
        e.preventDefault();
        async function fetchData(){
            try{
                 const response = await axios.post('http://10.137.9.134:8000/api/findname',
                 {nome:pesquisa},
                 {
                    headers:{
                        "accept":"application/json",
                        "Content-Type":"application/json"
                    }
                 }).then(function(response){
                    setUsuarios(response.data.data);
                 }).catch(function (error){
                    console.log(error);
                    
                 });
             
            }catch(error){
                console.log(error);
                
            }
        }
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/serviço/all');
                setUsuarios(response.data.data);

            } catch (error) {
                setError("Ocorreu um erro");
                console.log(error);
            }
        }

        fetchData();
    }, []);


    return (
        <div>
            <main className={styles.main}>
                <div className='container'>
                    <div className='col-md mb-3'>
                        <div className='card'>
                            <div className='card-body'>
                                <h5 className='card-title'>pesquisar</h5>
                                <form className='row'></form>
                                <div className='col-10'>
                                    <input type="text" name='pesquisa' className='form-control' onChange={handleState}/>
                                </div>
                                <div className='col-1'>
                                    <button type='submit' className='btn btn-sucess'>pesquisar</button>

                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title'>
                                Listagem de usuarios
                            </h5>
                            <table className='table table-hover'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>descricao</th>
                                        <th>duracao</th>
                                        <th>preco</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.map(usuario => (
                                        <tr key={usuario.id}>
                                            <td>{usuario.id}</td>
                                            <td>{usuario.nome}</td>
                                            <td>{usuario.descricao}</td>
                                            <td>{usuario.duracao}</td>
                                            <td>{usuario.preco}</td>
                                            <td>
                                                <a href="#" className='btn btn-primary btn-sm'>Editar</a>
                                                <a href="#" className='btn btn-danger btn-sm'>Excluir</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>

                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Listagem;