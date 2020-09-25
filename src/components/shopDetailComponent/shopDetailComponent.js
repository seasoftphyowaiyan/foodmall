import React from "react";
import Foods from "../../data/food.json";

class ShopDetailComponent extends React.Component {
  render() {
    const FoodsMenu = Foods.filter((food) => this.props.id == food.shop_id);
    return (
      <div
        className="bg-white rounded mb-4 p-4"
        style={{ border: "1px solid #ededed" }}
      >
        <h3
          className="p-3"
          style={{
            background: "#78cfcf",
            color: "#fff",
            margin: "-1.5rem -1.5rem 25px",
          }}
        >
          Menu
        </h3>
        <h5>STARTERS</h5>
        <p style={{ fontSize: 13 }}>
          Te ferri iisque aliquando pro, posse nonumes efficiantur in cum.
          Sensibus reprimique eu pro. Fuisset mentitum deleniti sit ea.
        </p>
        <table className="table mb-0" style={{ fontSize: 13, fontWeight: 500 }}>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Delivery</th>
              <th>Order</th>
            </tr>
          </thead>
          <tbody>
            {FoodsMenu.map((food) => (
              <tr key={food.id}>
                <td>
                  <button
                    type="button"
                    className="btn"
                    data-toggle="tooltip"
                    data-placement="top"
                    title={food.description}
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      outline: 0,
                      boxShadow: "none",
                      cursor: "auto",
                    }}
                  >
                    <img
                      src={food.image}
                      alt=""
                      className="img-fluid"
                      style={{ width: 80, marginRight: "20px" }}
                    />
                    {food.name}
                  </button>
                </td>
                <td className="align-middle">$ {food.price}</td>
                <td className="align-middle">
                  <i
                    className={`far fa-check-circle align-middle ml-1 delivery ${
                      food.is_available == true ? "active" : null
                    }`}
                  ></i>
                </td>
                <td className="align-middle">
                  <div className="dropdown">
                    <button
                      className="btn border-0"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ outline: "0", boxShadow: "none" }}
                    >
                      <i
                        className="fas fa-plus-circle"
                        style={{ fontSize: 26, color: "#ec008c" }}
                      ></i>
                    </button>
                    <div className="dropdown-menu">
                      <h5>Select an option</h5>
                      <label>
                        <input type="radio" value="option1" name="options_1" />
                        Medium <span>+ $3.30</span>
                      </label>
                      <label>
                        <input type="radio" value="option2" name="options_1" />
                        Large <span>+ $5.30</span>
                      </label>
                      <label>
                        <input type="radio" value="option3" name="options_1" />
                        Extra Large <span>+ $8.30</span>
                      </label>
                      <h5>Add ingredients</h5>
                      <label>
                        <input type="checkbox" value="" />
                        Extra Tomato <span>+ $4.30</span>
                      </label>
                      <label>
                        <input type="checkbox" value="" />
                        Extra Peppers <span>+ $2.50</span>
                      </label>
                      <button
                        className="add_to_basket"
                        onClick={() =>
                          this.props.addToCart(
                            food.id,
                            food.name,
                            food.price,
                            food.is_available
                          )
                        }
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShopDetailComponent;
