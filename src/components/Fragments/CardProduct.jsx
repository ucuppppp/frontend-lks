const CardProduct = (props) => {
    const {children} = props
    return (
    <div className="w-full max-w-sm bg-gray-800 borde border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between">
    {children}    
    </div>
    )
}

const Body = (props) => {
    const {children, name} = props
        return (
            <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold tracking-tight text-white">
                    {name}
                </h5>
            </a>
            <p className="text-m text-white">
                {children}
            </p>
        </div>
        )
}

const Footer = (props) => {
    const {price} = props
    return (
        <div className="flex items-center justify-between px-5 pb-5">
            <span className="text-xl font-bold text-white">${price}</span>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
        </div>
    )
}

const Header = (props) => {
    const {image} = props
    return (
        <a href="">
            <img src={image} alt="product1" className="p-8 rounded-t-lg"/>
        </a>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct