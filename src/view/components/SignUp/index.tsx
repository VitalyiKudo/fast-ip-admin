// Core
import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useUser } from '../../../bus/user';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const SignUp: FC<PropTypes> = () => {
    const { createUser } = useUser();
    const { setTogglerAction } = useTogglersRedux();
    const navigate = useNavigate();
    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');

    const key = '4h4ui513h4u23o';

    const submit = (name: string) => {
        createUser({
            userName: name,
            password: password,
            key:      key,
        });
        setTogglerAction({ type: 'isLoggedIn', value: true });
        navigate('/info');
    };

    return (
        <S.Container>
            <main>
                <h1>Create an account</h1>
                <div className = 'input-section'>
                    <input
                        className = 'name'
                        placeholder = 'name'
                        type = 'text'
                        value = { userName }
                        onChange = { (event) => setUserName(event.target.value) }
                    />
                    <input
                        className = 'password'
                        placeholder = 'password'
                        type = 'password'
                        onChange = { (event) => setPassword(event.target.value) }
                    />
                    <button
                        className = 'submit'
                        onClick = { () => submit(userName) }>Sumbit
                    </button>
                </div>
            </main>
        </S.Container>
    );
};
