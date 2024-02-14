const Button = (props) => {
    const {className='bg-blue-600 text-white rounded p-2 w-full', type="button", text, onClick = () => {}} = props
    return(
        <button type={type} className={className} onClick={onClick}>{text}</button>
    )
}

export default Button