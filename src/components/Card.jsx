import Data from "../Data";

export default function Card() {
  return (
    <div className="card--container">
      <div className="card--inner">
        <img
          className="card--image"
          src="https://images.unsplash.com/photo-1570459027562-4a916cc6113f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1888&q=80"
          alt=""
        />

        <div className="card--lower">
          <div className="card--top">
            <img
              className="card--placeholder"
              src="./src/images/placeholder.png"
              alt="placeholder"
            />
            <p className="card--country">Japan</p>
            <a href="">View on google map</a>
          </div>

          <div className="card--bottom">
            <h1 className="card--place">Mount Fuji</h1>

            <h5 className="card--date">
              20 September, 2022 - 20 January, 2023
            </h5>

            <p className="card--text">
              Mount Fuji is the tallest mountain in Japan, standing at 3,776
              meters (12,380 feet). Mount Fuji is the single most popular
              tourist site in Japan, for both Japanese and foreign tourists.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
