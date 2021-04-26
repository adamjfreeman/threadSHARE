import React, { useEffect } from "react";
import { useMutation } from '@apollo/react-hooks';

import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

function SuccessfulPurchase() {
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
            const cart = await idbPromise('cart', 'get');
            const products = cart.map(item => item._id);

            if (products.length) {
                const { data } = await addOrder({ variables: { products}});
                const productData = data.addOrder.products;

                productData.forEach((item) => {
                    idbPromise('cart', 'delete', item);
                });
            }

            // TO DO: DO WE WANT A TIMER?
        }

        saveOrder();
    }, [addOrder]);

    return (
        <div>
            {/* Make sure to have styling/nav bar on top */}
            <h2>Thank you for support threadShare!</h2>

        </div>
    )
};

export default SuccessfulPurchase;