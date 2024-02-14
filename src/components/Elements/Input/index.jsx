import Input from "./Input.jsx"
import Label from "./Label.jsx"

const InputForm = (props) => {
    const {label,name,type,placeholder} = props
    return(
        <div className='mb-3'>
            <Label htmlFor={name} text={label}/>
            <Input name={name} type={type} placeholder={placeholder}/>
        </div>
    )
}

export default InputForm