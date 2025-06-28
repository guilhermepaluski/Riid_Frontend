import style from '../styles/ModalNotLogged.module.css';

const ModalNotLogged = () => {
    return(
        <div className={style.backgroundBlur}>
            <div className= {style.atentionCard}>
                <span>Parece que você não está logado! Faça o login para continuar essa ação</span>
                <button className={style.btnClass}>Close</button>
            </div>
        </div>
    );
}

export default ModalNotLogged;