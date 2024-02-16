import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button"
import { useState } from "react"

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
    const[cart, setCart] = useState([
        {
            id: 1,
            qty: 1
        }
    ])

    const handleLogout = () => {
        window.location.href = "/login"
    }

    const handleAddToCart = (id) => {
        if(cart.find((item) => item.id === id)) {
            setCart(cart.map((item) => item.id === id ? {...item, qty: item.qty + 1} : item))
        } else {
            setCart([...cart, {id: id, qty: 1}])
        }
    }

    return (
      <>
        <div className="flex justify-end h-16 bg-blue-600 text-white items-center px-10 w-screen">
          {email}
          <Button
            className="ml-5 bg-white px-5 py-2 rounded-lg font-bold text-blue-500 hover:text-white hover:bg-blue-700"
            text="Logout"
            onClick={handleLogout}
          />
        </div>
        <div className="flex justify-center py-5">
          <div className="w-4/6 flex flex-wrap">
            {products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.name}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                price={product.price} 
                id={product.id}
                handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
          </div>
          <div className="w-2/6">
            <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
            <table className="text-left table-auto border-separate border-spacing-x-5 text-lg font-semibold">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item) => {
                        const product = products.find((product) => product.id === item.id)
                        return (
                          <tr key={item.id}>
                            <td>{product.name}</td>
                            <td>{item.qty}</td>
                            <td>
                              {product.price.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD",
                              })}
                            </td>
                            <td>
                              {(item.qty *
                                product.price).toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                })}
                            </td>
                          </tr>
                        );
                    })}
                </tbody>
            </table>
          </div>
        </div>
      </>
    );
}

export default ProductsPage