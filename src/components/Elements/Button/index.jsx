const Button = (props) => {
    const {className, type="button", text='BUTTON', onClick = () => {}} = props
    return (
      <button
        name={text}
        type={type}
        className={`h-10 px-6 font-semibold rounded-md bg-blue-600 text-white ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
}

export default Button