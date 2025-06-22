import illustration from '../images/notLoggedIllust.png';

const UserNotLogged = () => {
    return(
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <img src={illustration} alt="imageNotLogged" />
            <p>Parece que você não está logado. Por favor, faça login ou cadastre-se para continuar.</p>
        </div>
    );
}

export default UserNotLogged;