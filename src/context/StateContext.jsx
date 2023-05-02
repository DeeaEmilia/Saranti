import { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';

// Create a new context object
const Context = createContext();

// Create a new component that will wrap its children with the context provider
export const StateContext = ({ children }) => {
    // Set up state variables for the shopping cart
    const [showCart, setShowCart] = useState(false); // Show/hide cart
    const [cartItems, setCartItems] = useState([]); // Items in cart
    const [totalPrice, setTotalPrice] = useState(0); // Total price of items in cart
    const [totalQuantities, setTotalQuantities] = useState(0); // Total number of items in cart
    const [qty, setQty] = useState(1); // Quantity of the current item being added

    // Define some variables for later use
    let foundProduct; // Variable to hold a product if it's found in the cart
    let index; // Variable to hold the index of a product if it's found in the cart

    // Function to add a product to the cart
    const onAdd = (product, quantity) => {
        // Check if the product is already in the cart
        const checkProductInCart = cartItems.find(
            (item) => item._id === product._id
        );

        // Calculate the new total price based on the price of the new item being added and the existing total price
        setTotalPrice(
            (prevTotalPrice) => prevTotalPrice + product.price * quantity
        );

        // Increase the total number of items in the cart by the quantity being added
        setTotalQuantities(
            (prevTotalQuantities) => prevTotalQuantities + quantity
        );

        // If the product is already in the cart, update the quantity of the existing item
        if (checkProductInCart) {
            const updatedCartItems = cartItems.map((cartProduct) => {
                if (cartProduct._id === product._id)
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity,
                    };
                return cartProduct;
            });

            setCartItems(updatedCartItems);
        } else {
            // If the product is not in the cart, add it as a new item
            product.quantity = quantity;
            setCartItems([...cartItems, { ...product }]);
        }

        // Display a toast message to confirm the item has been added to the cart
        toast.success(`${qty} ${product.name} added to the cart`);
    };

    // This function is used to remove a product from the cart by filtering out the product with a matching ID from the cartItems array.
    const onRemove = (product) => {
        // Search for the product in the cartItems array.
        foundProduct = cartItems.find((item) => item._id === product._id);
        // Filter out the product with a matching ID from the cartItems array.
        const newCartItems = cartItems.filter(
            (item) => item._id !== product._id
        );
        // Update the total price and total quantities of all items in the cart.
        setTotalPrice(
            (prevTotalPrice) =>
                prevTotalPrice - foundProduct.price * foundProduct.quantity
        );

        setTotalQuantities(
            (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
        );
        // Set the cartItems state to the new array of cart items that excludes the removed product.
        setCartItems(newCartItems);
    };

    // This function is used to increase or decrease the quantity of a specific item in the cart by one.
    const toggleCartItemQuantity = (id, value) => {
        // Find the product in the cartItems array with a matching ID.
        foundProduct = cartItems.find((item) => item._id === id);
        // Get the index of the product in the cartItems array.
        index = cartItems.findIndex((product) => product._id === id);
        // Create a new array of cart items that excludes the product to be modified.
        const newCartItems = cartItems.filter((item) => item._id !== id);

        // If the "value" argument is "increment", increase the quantity of the product by 1.
        if (value === 'increment') {
            // Add the updated product back into the newCartItems array.
            setCartItems([
                ...newCartItems,
                { ...foundProduct, quantity: foundProduct.quantity + 1 },
            ]);

            // Update the total price and total quantities of all items in the cart.
            setTotalPrice(
                (prevTotalPrice) => prevTotalPrice + foundProduct.price
            );
            setTotalQuantities(
                (prevTotalQuantities) => prevTotalQuantities + 1
            );
            // If the "value" argument is "decrement", decrease the quantity of the product by 1.
        } else if (value === 'decrement') {
            // If the quantity of the product is greater than 1, decrease the quantity by 1.
            if (foundProduct.quantity > 1) {
                // Add the updated product back into the newCartItems array.
                setCartItems([
                    ...newCartItems,
                    { ...foundProduct, quantity: foundProduct.quantity - 1 },
                ]);
                // Update the total price and total quantities of all items in the cart.
                setTotalPrice(
                    (prevTotalPrice) => prevTotalPrice - foundProduct.price
                );
                setTotalQuantities(
                    (prevTotalQuantities) => prevTotalQuantities - 1
                );
            }
        }
    };

    // This function is used to increase the quantity of a product by 1.
    const incrementQty = () => {
        setQty((prevQty) => prevQty + 1);
    };

    // This function is used to decrease the quantity of a product by 1, with a minimum of 1.
    const decrementQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;

            return prevQty - 1;
        });
    };
    return (
        <Context.Provider
            value={{
                showCart,
                setShowCart,
                cartItems,
                totalPrice,
                totalQuantities,
                qty,
                incrementQty,
                decrementQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove,
                setCartItems,
                setTotalPrice,
                setTotalQuantities,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
