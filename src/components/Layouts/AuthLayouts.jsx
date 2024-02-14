import { Link } from 'react-router-dom'

const AuthLayout = (props) => {
    const {children, title} = props
    return (
        <div className="flex justify-center min-h-screen items-center">
      <div className='w-full max-w-xs'>
        <h1 className='text-3xl font-bold mb-2 text-blue-600'>{title}</h1>
        <p className='font-medium text-slate-500 mb-4'>
          Welcome, please enter your details
        </p>
        {children}
        <p className='text-slate-500 mt-4 text-center'>
          {title === 'Login' ? "Don't have an account? " : "Already have an account? "}
          <Link to={title === 'Login' ? '/register' : '/login'} className='text-blue-600 font-bold'>
            {title === 'Login' ? 'Register' : 'Login'}
          </Link>
        </p>
      </div>
    </div>
    )
}

export default AuthLayout