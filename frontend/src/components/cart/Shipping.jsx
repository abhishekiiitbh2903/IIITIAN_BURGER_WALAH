import React from "react";
import { Country, State } from "country-state-city";

const Shipping = () => {
  return (
    <section className="shipping">
      <main>
        <h1>Shipping Details</h1>
        <form 
        action="https://formspree.io/f/mjvqvjgo"
        method="POST"
        >
          <div>
            <label>H.No.</label>
            <input type="text" name="Buyer_HouseNo" placeholder="Enter House No." />
          </div>
          <div>
            <label>City</label>
            <input type="text" name="Buyer_City" placeholder="Enter City" />
          </div>
          <div>
            <label>Country</label>

            <select>
              <option  name ="Buyer_City" value="">Country</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>State</label>

            <select>
              <option name="Buyer_State" value="">State</option>
              {State &&
                State.getStatesOfCountry("IN").map((i) => (
                  <option value={i.isoCode} key={i.isoCode}>
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>Pin Code</label>
            <input type="number" name="Buyer_PinCode" placeholder="Enter Pincode" />
          </div>
          <div>
            <label>Phone No.</label>
            <input type="number" name="Buyer_PhoneNo" placeholder="Enter Phone No." />
          </div>
          <button type="submit">Confirm Order</button>
        </form>
      </main>
    </section>
  );
};

export default Shipping;
