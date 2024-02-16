import InputForm from "../Elements/Input"
import Button from "../Elements/Button"

const FormRegister = () => {
    return (
        <form action=''>
            <InputForm 
            label='Fullname' 
            type='text' 
            name='fullname' 
            placeholder='Enter your name'/>
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
          <InputForm 
          label='Confirm Password' 
          type='password' 
          name='confirmPassword' 
          placeholder='********'/>
          <Button type='submit' text='Register' className='w-full'/>
        </form>
    )
}

export default FormRegister