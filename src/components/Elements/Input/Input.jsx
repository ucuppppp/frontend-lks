const Input = (props) => {
    const { type, name, placeholder } = props
    return (
        <input
        type={type}
        id={name}
        name={name}
        className='w-full border border-slate-200 rounded p-2'
        placeholder={placeholder}
        >
        </input>
    )
}

export default Input