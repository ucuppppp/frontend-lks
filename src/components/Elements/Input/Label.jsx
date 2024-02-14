const Label = (props) => {
    const {htmlfor, text} = props
    return(
        <label htmlFor={htmlfor} className='block mb-2 font-bold'>
            {text}
        </label>
        )
}

export default Label