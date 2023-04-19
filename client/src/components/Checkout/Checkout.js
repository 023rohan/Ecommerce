import React from "react";
import './Checkout.css'

const Checkout = () => {
    return ( 
        <div className="">
            <form>
<label>Enter First name here</label>
<input
name="firstName"
required
/>
<label>Enter Last name here</label>
<input
name="lastName"
required
/>
<label>Enter Address</label>
<input
name="firstName"
type="text"
required
/>
<label>Enter Phone Number</label>
<input
name="firstName"
required
type="number"
/>

<input type="submit" value='checkout' />
<label> For Futher Process Please Click On Checkout Button</label>
</form>
        </div>
     );
}
 
export default Checkout;