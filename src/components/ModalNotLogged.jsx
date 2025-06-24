import style from '../styles/ModalNotLogged.css';

const ModalNotLogged = () => {
    return(
        <div className={style.backgroundBlur}>
            <div className='atentionCard'>
                <span>Parece que você não está logado! Faça o login para continuar essa ação</span>
                <button className='btnClass'>Close</button>
            </div>
        </div>
    );
}

export default ModalNotLogged;