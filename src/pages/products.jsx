import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button"

const products = [
    {
        id:1,
        image: "/img/shoes-1.jpg",
        name: "Nike Red Demon",
        price: 229,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel nisi eaque voluptatum optio sint tempora sed impedit neque animi!"
    },
    {
        id:2,
        image: "/img/shoes-2.jpg",
        name: "Adidas Samba Black",
        price: 129,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel nisi eaque voluptatum optio sint tempora sed impedit neque animi!"
    },
    {
        id:3,
        image: "/img/shoes-3.webp",
        name: "Adidas Samba Brown",
        price: 125,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel nisi eaque voluptatum optio sint tempora sed impedit neque animi!"
    },
    {
        id:4,
        image: "/img/shoes-4.webp",
        name: "Adidas Samba Cute Pink",
        price: 139,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid vel nisi eaque voluptatum optio sint tempora sed impedit neque animi!"
    }
]

const email = localStorage.getItem('email')

const ProductsPage = () => {

    const handleLogout = () => {
        window.location.href = "/login"
    }

    return (
        <>
        <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10">
            {email}
            <Button className="ml-5 bg-black text-white px-5 py-2 rounded-lg font-bold" text="Logout" 
                onClick={handleLogout}
            />
        </div>
        <div className="flex justify-center py-5"> 
            {products.map(product => (
                <CardProduct key={product.id}>
                <CardProduct.Header image={product.image}/>
                <CardProduct.Body name={product.name}>
                {product.description}
                </CardProduct.Body >
                <CardProduct.Footer price={product.price}/>
            </CardProduct>
            ))}
        </div>
        </>
    )
}

export default ProductsPage