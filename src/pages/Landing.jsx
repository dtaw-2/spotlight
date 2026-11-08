import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
    <section aria-labelledby="welcome-section" className="welcome text-center">
        <h1>Spotlight</h1>
    </section>

    <section aria-labelledby="info-section" className="hero bg-white text-start">
      <div className="flex-row hero-row">
        <div className="flex-column hero-media">
          <img
            src="https://www.therapyhairstudio.com/wp-content/uploads/2022/09/choosing-best-professional-hair-stylist-scaled.jpg"
            className="img-responsive rounded-lg border"
            alt="A hairstylist doing a client's hair in a salon"
          />
          </div>
          <div className="flex-column hero-text">
            <h1 className="text-black">Start your business</h1>
            <p className="text-black">Get started with spotlight to run scheduling, marketing, booking, and payments.</p>
          </div>
      </div>
    </section>

      <section aria-labelledby="more-info-section" className="bg-black text-end">
        <div className="flex-row hero-row">
          <div className="flex-column hero-text">
            <h1 className="text-white">Booking</h1>
            <p className="text-white">Find & book an appointment with our various vendors with a simple search of a name.</p>
            <button className="btn btn-white rounded-md"><Link className="text-black" to="/register">Get started</Link></button>
          </div>
          <div className="flex-column hero-media">
            <img src="https://cdn.shopify.com/s/files/1/0013/3536/1603/files/Barber_Cutting_Man_s_Hair-min.jpg?v=1661358566"
                 className="img-responsive rounded-lg"
                 alt="A barber cutting a man's hair" />
            </div>
        </div>
        <div>

        </div>
    </section>
    </>
  );
}
