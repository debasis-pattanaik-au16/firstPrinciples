import {
  CLIENT_LOGO_1,
  CLIENT_LOGO_2,
  CLIENT_LOGO_3,
  CLIENT_LOGO_4,
} from "../../../images";

const Section5 = () => {
  return (
    <section class="client-logo-area">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-6">
            <div class="single-client mt-30 text-center">
              <img src={CLIENT_LOGO_1} alt="Logo" />
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="single-client mt-30 text-center">
              <img src={CLIENT_LOGO_2} alt="Logo" />
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="single-client mt-30 text-center">
              <img src={CLIENT_LOGO_3} alt="Logo" />
            </div>
          </div>
          <div class="col-md-3 col-6">
            <div class="single-client mt-30 text-center">
              <img src={CLIENT_LOGO_4} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
