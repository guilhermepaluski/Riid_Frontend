import { Link, useNavigate } from 'react-router-dom';
import style from '../styles/ModalNotLogged.module.css';

const ModalNotLogged = ({linkPage}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/${linkPage}`)
    }
    
    return(
        <div className={style.backgroundBlur}>
            <div className= {style.atentionCard}>
                <span>Parece que você não está logado! Faça o login para continuar essa ação</span>
                <button className={style.btnClass} onClick={handleNavigate}>Close</button>
            </div>
        </div>
    );
}

export default ModalNotLogged;