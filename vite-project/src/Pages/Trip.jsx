import React from "react";
import TripData from "./TripData";
import picOne from "../Components/images/pic1.jpg";
import picTwo from "../Components/images/pic2.jpg";
import picThree from "../Components/images/pic3.jpg";

function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destination</p>
        <div className="tripCard">
          <TripData
            image={picOne}
            heading="Trip in Philippines"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta
          non pariatur quia dolor expedita facere ullam incidunt eveniet
          explicabo animi corrupti velit modi laborum nesciunt porro alias illo,
          quibusdam omnis! Dolore quisquam a perspiciatis in aut eaque ipsa
          dolor vel, fuga quam culpa, id modi maxime architecto temporibus
          ipsam. Sequi voluptatum optio reprehenderit culpa praesentium suscipit
          est officia quasi placeat possimus alias vero, corrupti dignissimos
          error fugit minima corporis laboriosam quaerat cum cumque temporibus
          vitae eveniet. Explicabo, earum natus voluptate reiciendis quibusdam
          aut corporis temporibus, tempora molestias mollitia iste? Harum
          tempora quisquam provident laudantium commodi facere perferendis ab
          quibusdam."
          />

          <TripData
            image={picOne}
            heading="Trip in Philippines"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta
          non pariatur quia dolor expedita facere ullam incidunt eveniet
          explicabo animi corrupti velit modi laborum nesciunt porro alias illo,
          quibusdam omnis! Dolore quisquam a perspiciatis in aut eaque ipsa
          dolor vel, fuga quam culpa, id modi maxime architecto temporibus
          ipsam. Sequi voluptatum optio reprehenderit culpa praesentium suscipit
          est officia quasi placeat possimus alias vero, corrupti dignissimos
          error fugit minima corporis laboriosam quaerat cum cumque temporibus
          vitae eveniet. Explicabo, earum natus voluptate reiciendis quibusdam
          aut corporis temporibus, tempora molestias mollitia iste? Harum
          tempora quisquam provident laudantium commodi facere perferendis ab
          quibusdam."
          />

          <TripData
            image={picOne}
            heading="Trip in Philippines"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, dicta
          non pariatur quia dolor expedita facere ullam incidunt eveniet
          explicabo animi corrupti velit modi laborum nesciunt porro alias illo,
          quibusdam omnis! Dolore quisquam a perspiciatis in aut eaque ipsa
          dolor vel, fuga quam culpa, id modi maxime architecto temporibus
          ipsam. Sequi voluptatum optio reprehenderit culpa praesentium suscipit
          est officia quasi placeat possimus alias vero, corrupti dignissimos
          error fugit minima corporis laboriosam quaerat cum cumque temporibus
          vitae eveniet. Explicabo, earum natus voluptate reiciendis quibusdam
          aut corporis temporibus, tempora molestias mollitia iste? Harum
          tempora quisquam provident laudantium commodi facere perferendis ab
          quibusdam."
          />
        </div>
      </div>
    </>
  );
}

export default Trip;
