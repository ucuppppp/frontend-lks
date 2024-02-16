import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormLogin = () => {
    const handleLogin = (e) => {
      e.preventDefault()
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('password', e.target.password.value)
        window.location.href = '/products'
    }

    return (
        <form action='' onSubmit={handleLogin}>
          <InputForm 
          label='Email' 
          type='email' 
          name='email' 
          placeholder='Enter your email'/>
          <InputForm 
          label='Password' 
          type='password' 
          name='password' 
          placeholder='********'/>
          <Button type='submit' text='Login' className='w-full'/>
        </form>
    )
}

export default FormLogin