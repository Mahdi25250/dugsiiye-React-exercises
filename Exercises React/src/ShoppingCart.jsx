import { useState } from "react";

const ShoppingCart = () => {
  // product
  const [products, setProducts] = useState([]);

  // productName
  const [productName, setProductName] = useState("");

  // productPrice
  const [productPrice, setProductPrice] = useState("");

  // handleAddProduct

  const handleAddProduct = () => {
    if (productName.trim() !== "" && productPrice.trim() !== "") {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(productPrice) ,
        quantity: 1,
      };

      setProducts([...products, newProduct]);
      setProductName('')
      setProductPrice('')
    }
  };

  const removeProduct = (id) =>{
    const updateProducts = products.filter(product => product.id !== id)

    setProducts(updateProducts)

  }

  const increaseQuantity = (id) =>{
     
    // list
    const updateProducts =  products.map(product =>(
        product.id === id ? {...product, quantity : product.quantity + 1} : product
    ))
    // map

    setProducts(updateProducts )
   

  }

  const decreaseQuantity = (id) =>{
    const updateProducts = products.map(product =>(
        product.id === id && product.quantity > 1 ? { ...product, quantity:product.quantity -1}:product
    ))

    setProducts(updateProducts)

  }

  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity,0)

  return (
    <div>
      <h2>Simple Shopping Cart</h2>

      <div>
        <h3>Add a Product</h3>

        <input type="text" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)} value={productName}/>

        <input type="number" min={0} placeholder="price" onChange={(e) => setProductPrice(e.target.value)} value={productPrice} />

        <button onClick={handleAddProduct}>Add to cart</button>
      </div>

      {products.length > 0 ? (
        <div>
          <h3>Products in Cart</h3>
          {/* // List of products */}
          <ul>
            {
                products.map(product =>(
                    <li key={product.id}>
                        <strong>{product.name} </strong> - ${product.price.toFixed(2)}

                        <div>
                            Quantity:
                            <button onClick={()=> decreaseQuantity(product.id)}>-</button>
                            {product.quantity}
                            <button onClick={()=> increaseQuantity(product.id)}>+</button>
                        </div>
                        <button onClick={()=> removeProduct(product.id)}>Remove</button>

                        
                    </li>
                ))
            }
            
          </ul>

          <h4>Total Price:{totalPrice} </h4>
        </div>
      ) : (
        <p>This cart is empty</p>
      )}
    </div>
  );
};

export default ShoppingCart;
