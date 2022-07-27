import React from 'react'
import SecondaryButton from '../Button/SecondaryButton'
import TextInput from '../Input/Input'
import Title from '../Title/Title'
import style from './Form.module.css'

const FormCompartilhe = () => {
    const { compartilheInputContainer, compartilheForm, compartilheSection } = style


    return (
        <section className={compartilheSection} id='compartilhe'>
            <Title text='Compartilhe a novidade' />

            <p style={{ margin: '50px' }}>
                Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
            </p>

            <form className={compartilheForm}>
                <div className={compartilheInputContainer}>
                    <TextInput label='Nome do seu amigo:' id='nomeAmigo' />
                    <TextInput label='E-mail:' id='emailNewsletter' type='email' />
                </div>

                <SecondaryButton type='secondary' text='Enviar agora' />
            </form>
        </section>
    )
}

export default FormCompartilhe