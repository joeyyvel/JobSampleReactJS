import React from "react";
import DestinationData from "./DestinationData";
import pic1 from "../Components/images/image1.jpg";
import pic2 from "../Components/images/image2.png";
import pic3 from "../Components/images/image3.jpg";
import pic4 from "../Components/images/image4.jpg";
function Destination() {
  return (
    <div className="destination" id="myJoey">
      <h1 className="popDestination">Popular Destination</h1>
      <p className="paraDestination">Tours give you the opportunity</p>
      <DestinationData
        className="first-des"
        heading="lorem"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas
        vitae placeat debitis voluptates quia vero nulla adipisci doloribus
        praesentium asperiores quaerat, recusandae tempora dolor rerum labore
        perferendis earum? Ratione facilis quae atque, corporis asperiores nobis
        eos labore possimus modi aliquid placeat natus voluptas voluptates
        pariatur aspernatur, porro perspiciatis, quos voluptatum animi. Eum
        consequuntur, ad quibusdam eligendi placeat blanditiis molestias
        suscipit? Error ipsa itaque laudantium architecto ipsum cum pariatur
        commodi debitis dicta aut cumque optio, deleniti vero perferendis
        repellat voluptatem aspernatur. Voluptatum, iste. Quidem quasi unde
        facilis neque tenetur quibusdam nesciunt suscipit debitis molestias illo
        cumque placeat, necessitatibus, tempora nam."
        heading2="Check this places"
        text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas
        vitae placeat debitis voluptates quia vero nulla adipisci doloribus
        praesentium asperiores quaerat, recusandae tempora dolor rerum labore
        perferendis earum? Ratione facilis quae atque, corporis asperiores nobis
        eos labore possimus modi aliquid placeat natus voluptas voluptates
        pariatur aspernatur, porro perspiciatis, quos voluptatum animi. Eum
        consequuntur, ad quibusdam eligendi placeat blanditiis molestias
        suscipit? Error ipsa itaque laudantium architecto ipsum cum pariatur
        commodi debitis dicta aut cumque optio, deleniti vero perferendis
        repellat voluptatem aspernatur. Voluptatum, iste. Quidem quasi unde
        "
        img1={pic1}
        img2={pic2}
      />

      <DestinationData
        className="first-des-reverse"
        heading="Heading of Lorem Ipsum"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas
        vitae placeat debitis voluptates quia vero nulla adipisci doloribus
        praesentium asperiores quaerat, recusandae tempora dolor rerum labore
        perferendis earum? Ratione facilis quae atque, corporis asperiores nobis
        eos labore possimus modi aliquid placeat natus voluptas voluptates
        pariatur aspernatur, porro perspiciatis, quos voluptatum animi. Eum
        consequuntur, ad quibusdam eligendi placeat blanditiis molestias
        suscipit? Error ipsa itaque laudantium architecto ipsum cum pariatur
        commodi debitis dicta aut cumque optio, deleniti vero perferendis
        repellat voluptatem aspernatur. Voluptatum, iste. Quidem quasi unde
        facilis neque tenetur quibusdam nesciunt suscipit debitis molestias illo
        cumque placeat, necessitatibus, tempora nam."
        heading2="Check this places"
        text2="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptas
        vitae placeat debitis voluptates quia vero nulla adipisci doloribus
        praesentium asperiores quaerat, recusandae tempora dolor rerum labore
        perferendis earum? Ratione facilis quae atque, corporis asperiores nobis
        eos labore possimus modi aliquid placeat natus voluptas voluptates
        pariatur aspernatur, porro perspiciatis, quos voluptatum animi. Eum
        consequuntur, ad quibusdam eligendi placeat blanditiis molestias
        suscipit? Error ipsa itaque laudantium architecto ipsum cum pariatur
        commodi debitis dicta aut cumque optio, deleniti vero perferendis
        repellat voluptatem aspernatur. Voluptatum, iste. Quidem quasi unde
        "
        img1={pic3}
        img2={pic4}
      />
    </div>
  );
}

export default Destination;
