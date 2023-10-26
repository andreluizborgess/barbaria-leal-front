import React, {
    Component, useState,
    ChangeEvent, FormEvent, useEffect
} from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from '../App.module.css'
import axios from 'axios';

const Cadastro = () => {
    const [nome, setNome] = useState<string>("");
    const [descricao, setdescricao] = useState<string>("");
    const [duracao, setduracao] = useState<string>("");
    const [preco, setpreco] = useState<string>("");

    const cadastrarUsuario = (e: FormEvent) => {
        e.preventDefault();
        const dados = {
            nome: nome,
            descricao: descricao,
            duracao: duracao,
            preco: preco
        }
        axios.post('http://127.0.0.1:8000/api/servico', dados,
         { 
            headers: { "Accept": "application/json", "Content-Type": "application/json" } }).then(function(response){
window.location.href = "/listagem/servico"
            }).catch(function(error){
                console.log(error);
            });
    }
    const handleState = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === "nome") {
            setNome(e.target.value);
        }

        if (e.target.name === "descricao") {
            setdescricao(e.target.value);
        }
        if (e.target.name === "descricao") {
            setduracao(e.target.value);
        }
        if (e.target.name === "preco") {
            setpreco(e.target.value);
        }

    }

    return (
        <div>
            <Header />
            <main className={styles.main}>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='card-title'>Cadastro Cliente</h5>
                        <form onSubmit={cadastrarUsuario} className='row g-3'>
                            <div className='col-6'>
                                <label htmlFor="nome" className='form-label'>nome</label>
                                <input type="text" name='nome' className='form-control' required onChange={handleState} />

                            </div>
                            <div className='col-6'>
                                <label htmlFor="descrição" className='form-label'>descrição</label>
                                <input type="text" name='descrição' className='form-control' required onChange={handleState} />

                            </div>
                            <div className='col-6'>
                                <label htmlFor="duração" className='form-label'>duração</label>
                                <input type="text" name='duração' className='form-control' required onChange={handleState} />

                            </div>
                            <div className='col-6'>
                                <label htmlFor="preço" className='form-label'>preço</label>
                                <input type="text" name='preço' className='form-control' required onChange={handleState} />

                            </div>
                            <div className='col-12'>
                                <button type='submit' className='btn btn-success btn-sm'>cadastrar</button>
                            </div>




                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Cadastro;