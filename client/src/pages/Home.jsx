import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import "./Home.css";
import { GiTrophyCup } from "react-icons/gi";
import { IoMdClock, IoMdLogIn } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { RiCouponLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa6";

const Home = () => {
  return (
    <Layout>
      {/* carousel */}
      <div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner e-carousel">
            <div
              className="carousel-item active"
             
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/cfa3/e1ad/a5e319491c6768de72403f852ec058f6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-HYKQKn1LfxnKCi-z925zNscqYhL3DOyQMGHITFTnKRlkNk8yQs0QVst1oB0gVuXp0vF8yW3MF~dOtqrZeJb-7BNmG~AdnFNEttRdgEbIwDDRRISeZssR6sG0nu8ykwICEB2CG5nrlG5TYHTzs3jNbLECDx1a1R4uE3oPqqqrKHBVxpm4saGH4Fp80jCRhh4pXmdm5gEs7~Dos5AYHnlo5sGt852B5t2Zw48N6GMfYroCysKFveLQcllRHeU-jKWh24ZGR2re4gHn1USr~7Ss2kXGtM0r-BkFCIGZ5K5OKuzS-Dujya7ZFx5ylM4pjJEUSRnnD-lqwBY~S0zQRgdA__"
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", margin: "auto" }}
              />
            </div>
            <div
              className="carousel-item"
        
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/cfa3/e1ad/a5e319491c6768de72403f852ec058f6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-HYKQKn1LfxnKCi-z925zNscqYhL3DOyQMGHITFTnKRlkNk8yQs0QVst1oB0gVuXp0vF8yW3MF~dOtqrZeJb-7BNmG~AdnFNEttRdgEbIwDDRRISeZssR6sG0nu8ykwICEB2CG5nrlG5TYHTzs3jNbLECDx1a1R4uE3oPqqqrKHBVxpm4saGH4Fp80jCRhh4pXmdm5gEs7~Dos5AYHnlo5sGt852B5t2Zw48N6GMfYroCysKFveLQcllRHeU-jKWh24ZGR2re4gHn1USr~7Ss2kXGtM0r-BkFCIGZ5K5OKuzS-Dujya7ZFx5ylM4pjJEUSRnnD-lqwBY~S0zQRgdA__"
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", margin: "auto" }}
              />
            </div>
            <div
              className="carousel-item"
             
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/cfa3/e1ad/a5e319491c6768de72403f852ec058f6?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T-HYKQKn1LfxnKCi-z925zNscqYhL3DOyQMGHITFTnKRlkNk8yQs0QVst1oB0gVuXp0vF8yW3MF~dOtqrZeJb-7BNmG~AdnFNEttRdgEbIwDDRRISeZssR6sG0nu8ykwICEB2CG5nrlG5TYHTzs3jNbLECDx1a1R4uE3oPqqqrKHBVxpm4saGH4Fp80jCRhh4pXmdm5gEs7~Dos5AYHnlo5sGt852B5t2Zw48N6GMfYroCysKFveLQcllRHeU-jKWh24ZGR2re4gHn1USr~7Ss2kXGtM0r-BkFCIGZ5K5OKuzS-Dujya7ZFx5ylM4pjJEUSRnnD-lqwBY~S0zQRgdA__"
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", margin: "auto" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon visually-hidden"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon visually-hidden"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* end carousel */}

      {/* icons */}
      <div className="home-icons mt-2">
        <div>
          <span>
            <GiTrophyCup />
          </span>
          <span>Popular Coupans</span>
        </div>
        <div>
          <span>
            <IoMdClock />
          </span>
          <span>Ending Soon</span>
        </div>
        <div>
          <span>
            <FaFire />
          </span>
          <span>Latest Coupans</span>
        </div>
      </div>

      <div className="main-home">
        <div className="mt-3">
          {/* cards */}
          <div className="cards">
            <div className="e-card">
              <p>
                Upto 60% off on <br />
                Appliances
              </p>

              <img
                className="card-img"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <span className="text-muted second-para">
                Upto 60% off on summer
                <br /> Appliances
              </span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="e-card">
              <p>
                Upto 60% off on <br />
                Appliances
              </p>

              <img
                className="card-img"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <span className="text-muted second-para">
                Upto 60% off on summer
                <br /> Appliances
              </span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="e-card">
              <p>
                Upto 60% off on <br />
                Appliances
              </p>

              <img
                className="card-img"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <span className="text-muted second-para">
                Upto 60% off on summer
                <br /> Appliances
              </span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="e-card">
              <p>
                Upto 60% off on <br />
                Appliances
              </p>

              <img
                className="card-img"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <span className="text-muted second-para">
                Upto 60% off on summer
                <br /> Appliances
              </span>
              <button className="e-button">Grab Now</button>
            </div>
          </div>

          <div className="cards">
            <div className="e-card">
              <p>
                Upto 60% off on <br />
                Appliances
              </p>

              <img
                className="card-img"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <span className="text-muted second-para">
                Upto 60% off on summer
                <br /> Appliances
              </span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="e-card">
              <p>
                Upto 60% off on <br />
                Appliances
              </p>

              <img
                className="card-img"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <span className="text-muted second-para">
                Upto 60% off on summer
                <br /> Appliances
              </span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="e-card">
              <p>
                Upto 60% off on <br />
                Appliances
              </p>

              <img
                className="card-img"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <span className="text-muted second-para">
                Upto 60% off on summer
                <br /> Appliances
              </span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="e-card">
              <p>
                Upto 60% off on <br />
                Appliances
              </p>

              <img
                className="card-img"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <span className="text-muted second-para">
                Upto 60% off on summer
                <br /> Appliances
              </span>
              <button className="e-button">Grab Now</button>
            </div>
          </div>

          {/* end cards */}
        </div>
        {/* delay of days */}
        <div className="mt-5">
          <h3 className="text-center m-5">Deal of the days</h3>
          <div className="cards">
            <div className="delay-e-card">
              <img
                className=" delay-card-img mt-3"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <p style={{ margin: "0px" }}>Amazon</p>

              <span className=" delay-para">Flat 30% off</span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="delay-e-card">
              <img
                className=" delay-card-img mt-3"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <p style={{ margin: "0px" }}>Amazon</p>

              <span className=" delay-para">Flat 30% off</span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="delay-e-card">
              <img
                className=" delay-card-img mt-3"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <p style={{ margin: "0px" }}>Amazon</p>

              <span className=" delay-para">Flat 30% off</span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="delay-e-card">
              <img
                className=" delay-card-img mt-3"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <p style={{ margin: "0px" }}>Amazon</p>

              <span className=" delay-para">Flat 30% off</span>
              <button className="e-button">Grab Now</button>
            </div>
          </div>
        </div>

        {/* categories */}

        <div className="mt-5">
          <h3 className="text-center m-5">Coupon By Categories</h3>

          <div className="home-categories">
            <div className="home-categories-card">
              <img src="https://s3-alpha-sig.figma.com/img/b3a1/15ac/a60f050f2d3158b292f332d055a01a07?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YlbNhB0jN2ONJHilXKYKnRx66yqc5rXo3h~Jt~xdOiNTGH6VShvf8btBEXfpwPwIRNSb7keUgq6ibQqgZUaB0d5IW9aAc1wC~r-UN1jT1thSNfTI0mgQW5-FobWHBxD1tCnkyt2zQn7EXzB~uJMXTVN1LEO0iVVtqrmVYv84vomQFXHyjJB0I8isdWM~XBNXA~vuNXBrnF50EWHMWkjWZrGP9zGM0sprY~YfjAfeGFMvnFlsc8HgB9CKAFuVFB7LsFZCb0ZBEcAaqwcxiO93omWK3q8n7UlrQgeOyCjwqQf-fCRVcr1vZfGksgA94v6TCPACDmWzl7fxMmmr~bCLdA__" />
              <p>Fashion</p>
            </div>

            <div className="home-categories-card ">
              <img src=" https://s3-alpha-sig.figma.com/img/0243/a3f2/c67bf792ce8fa5d2d1989ef9d54fa48a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R0qeIXTNn8FRaOCrnBn3eiPTIol1DZd1n8bSG2QWuBqM~Gs7xdOEb-LRLkn0RoqCCnnf1D2oycILu2dXovrmD74d0Di3n3NWJfcC7~UY9W0sNDY2A-H-F-qXegswrhjn3p8zhXwN3UMK5n1i1XAp0sBCvThKYPWrUimNjQl5qmgiahY6LW4qqYjECwGbty1L-FwPFJ4PyneLeSq9jdIxNOQWQn5XD~bKuZitWn~x4Cf-3j-pacWjSG9~twXQo~ClJ9BZTNfoTCGGu2crodIvJJLWz-TBk7pr29TWEimW6NZefApPRlJR-x875U7GDoygJ45aH87yOdSO5MxSZ33txQ__" />
              <p>Fashion</p>
            </div>
            <div className="home-categories-card">
              <img src="https://s3-alpha-sig.figma.com/img/ed77/8639/672474cbb1b2a1975ddc6607980b12f7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnTgK5T7NffnTm2rTVBofMn5EeEN2SFBBNf7HTgXyFrvNmtSHHa06F-RM~PaoTmLxztvEKo4ayBrFr6LZtV-aX1hMP~D2trlOUzo4j~VvOlvwtjSIIp4Mi2gJprRXnxVHKDS9KAMNv9AdvEyqvQGfCRN0mHtFx7XWc8ZqgpNxAhHSFwVb7ycUkvGks7JjmH7EiLsIS7d3HfDyTy2bhfrh-Vk69Ybjq~~MczKtINTyy7Fu~Fwl5Im0cXEZhhqAq3DmSWoHj1Wk5CuQJ7zjCxXjpILsIz9sCnj~WCCB8sMuv9rMWJQGpOlYsZTWg2jWs29eITXUz~aG84Hq~jQzYHLnQ__ " />
              <p>Fashion</p>
            </div>
            <div className="home-categories-card">
              <img src="https://s3-alpha-sig.figma.com/img/4ff6/ca5d/87189bf8ac0ac7c9724047b1e7c16c8c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCheAMIo4zBVZrIieg1B-xJbMTQeKRQfH-BT9bWtYRcuxz06i6hm59GWfg7HwExpDg-mbZdipwOPItreqWkDCbYLrhPNMLsIyQM1f1PsXaQjxrI0nesHongv5giWkfz4dCbtfx2E2yeP-idyBkq5FjKSQ-T88oc0MZQiW-BNWBbdguqPBZWm~IeggRW57WHkgzX3EDDOe7-k6MSH8hLi-cIXVy8MyEuu83b6VEqoG4Cx-BApf1vkVY6sYDlH22OnoRm1LgiFUkx8UhJLlz1Vn5pMnrXeI3KPangbRq2FdFIYKwkkdvuanaj~ir1n1Nx6jef~MCa3FanDyhGKTUD9IQ__ " />
              <p>Fashion</p>
            </div>
            <div className="home-categories-card">
              <img src=" https://s3-alpha-sig.figma.com/img/303d/d8be/2f7318b4b44e2672671dab203118d963?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XJaMD3JOTblfi3BzqJgAx7Bh3DRKeYNEJMfHRiCO7jdvwkqas~yQULbQldNyMVmJkNt4zJS5is5bKDdYlNsKZwbkaFhMoWo8Y9o~fcst6jPc10MW801VwsZY9SaQF3gkggDKVlPHSmiPEBNsHgSSKK34bamj1stfPn3-sKbHtZvRfzPRlGc5bKXT4yvwBXcudBD~pd~WOPLbpTlmrXrJdhlJwlTY-LfjcrkFsRA59wRdRWkZecpZLuMSf-SOqHXcD8AdjUyjl1deQfvEQN7kPwKsDEGER2weFy8e3Fy6swdZE1M3mjuHwfDQ7mSM1GIlzBDJl3W14vA1UA5lyvf1Sw__" />
              <p>Fashion</p>
            </div>
            <div className="home-categories-card">
              <img
                src=" https://s3-alpha-sig.figma.com/img/e2d7/ac9a/a9a633c1d4706a3e3a257dbd9842e351?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gx~N1~zvDMwSdgUJzLCpHBd8MAShqa6tGAFQLtvRXYqkEgvxcKd0kWklyY-m3oWEH-HVwgG-jKb7NtPC-douFtHxsnM50iUOIyxxiOR0hYTQNz73LjTz1wMRf69RHALRPSCPzNOHSklhyxSbmhPjtS21AXsfX8royU9jwWlxgyPEc5aYk6uxbMEJGYaaqPhKQUSAZF3YGbGhUbT7nDbVU6JAADJNK9HCqFaRCfPajti4BLqeZ0r-Nc6eoMSA07cuk98uiwViAfUCAWWYcFBqiHOsg2gFgM8bz~KWHnS8tzfOwlRrS2~OJLWZh8~PntBlIK1B-OcesNhaEoHDa2~eNw__"
                alt=""
              />
              <p>Fashion</p>
            </div>
            <div className="home-categories-card">
              <img src="https://s3-alpha-sig.figma.com/img/e808/0836/e664b0296a4c001963d5bbf00d8587ab?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WDDG8KuG7wFO5kdLAOZ7Z1ays7ht4hDxAFRm2qu-C9MnzyeZko3uUYrafvQ2BvVGtwxQyg8X9GTCIbJwEZnPwy7BvXFei8EaN0STVCrD16pX7tM32wFuKISrcbNCGMiF6aJeWGLH1m9YQ6~ON~WabhMzsgtzv0uYvqlCJxYQP7AsDqqCp~hVHzLqo20mIQ~FihgkegKEeLyiLQXrzju1pgxfHnLjzldTi1JeNFL1xB~oDVTl2CGffR6cdSz9XUh~1idamtZrEBOLfmiec289KVCyYr97Dkf3X5wuk6NDt6OO3f7coupeLY9hhFXduXjvRR0ssrg42~LwPoAvjkkn1Q__" />
              <p>Fashion</p>
            </div>
            <div className="home-categories-card">
              <img src="https://s3-alpha-sig.figma.com/img/4c1e/bfea/81913905ec2e4b4eb3ddf80e9d1fc443?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmGUBt2tWwZv5Qvm4~W5G~OqmTqKInsCTbboXxuFNHqiQhc3MBYsVhTIl31lbdIfxmdU-UkDrLbLlJtC1LK9iHe-y8IltMZAwi1oLxyztOtPZVdZjC6-LNeL354rGuU8mxvI~BnDyS6fKIWNBeFurtIsTFMPqypIFlQg7owsCf5AYJy0u8ouhGbzmvqBJK~66yWvL9h81-VQdFo7CK0Plr55M1LSO2Z15OHtmr1jZ0Q6AZSjzsZBi-7bKajP7sP8Bz5bJ8Dwj5f2-MK~O~w1U8oVCkdH3eO52O1sbxGkX72FRem3cNp3Z6Z7UGwsIjnjXVD9djHxRybWhGziKz3vDQ__" />

              <p>Fashion</p>
            </div>
            <div className="home-categories-card">
              <img src="https://s3-alpha-sig.figma.com/img/0bb5/c425/68c81f12175118b52cd779cfd6312159?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WAuUNP7FJGDf-VvKtDjQlR~Vpq1WIDfmqmokGWzszAiZl81e827nvGURcWxT1KKeaMUHlTyxyPUzUgJeNXOrq9MZMvKJPbtFfSizilV~rvwUEe9-w4cbJjpyc8gvl663L5RYx-sN5mDCOxzj~CYmyRyCa59C0GfnL1XA2zVwruwh3QxYeOp6v0IRnK~EaikZurqOS8foOhdCwZIT780aQD9Wrb7fGMl4aSOg9577oL0I~zUb8AFPs6qeIjnReF0wiskWCmXguiERiAuu8Go70YQyGKPQLPMuK9UOzSgg9AHWTTbtWfRtNsyZFv43zP8jB7N655drQZKd~0wyguwq2Q__" />
              <p>Fashion</p>
            </div>
          </div>

          <div className="cards">
            <div className="delay-e-card">
              <img
                className=" delay-card-img mt-3"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <p style={{ margin: "0px" }}>Amazon</p>

              <span className=" delay-para">Flat 30% off</span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="delay-e-card">
              <img
                className=" delay-card-img mt-3"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <p style={{ margin: "0px" }}>Amazon</p>

              <span className=" delay-para">Flat 30% off</span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="delay-e-card">
              <img
                className=" delay-card-img mt-3"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <p style={{ margin: "0px" }}>Amazon</p>

              <span className=" delay-para">Flat 30% off</span>
              <button className="e-button">Grab Now</button>
            </div>
            <div className="delay-e-card">
              <img
                className=" delay-card-img mt-3"
                src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
              />
              <p style={{ margin: "0px" }}>Amazon</p>

              <span className=" delay-para">Flat 30% off</span>
              <button className="e-button">Grab Now</button>
            </div>
          </div>
        </div>

        <div></div>

        {/* membership */}
        <div className="home-membership mt-3">
          <div>
            <img src="https://s3-alpha-sig.figma.com/img/02af/a8fc/d914ec41551c711ae0cccfbb1d3c6d31?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IfPjD54a74xrBVvOo2pxrejuhy0QPfu1V7hmQ7OPtRPKKxPvXIvS1NqE8CadtQNrrPELBIv5Cb~s~YjyCuIro8BPXgs2KHWXHjoYHqjiLNa~YWnFMbKBoTeO72DzJ4-KGkw77AsNm2zO0Gb3XLNn2RmoBeBumPV2qxNww16xwdfq74AIw8~U0A-GNA5nNsZkmkLOc9eGYT7o8F8-0efhJgDyz1PDxCbjj0DWHruCx-O~OQCWjvoRnkuR1OjBthawbvHTmBTxCri4CIZiTC9aEPVAslPHgP2DsxwZ1O8DfLU4c0K7bWLciVebvGbvpFxFCa030wBvz7ErZqeJqTzBrQ__" />
          </div>

          <div>
            <div className="cards">
              <div className="delay-e-card">
                <img
                  className=" delay-card-img mt-3"
                  src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
                />
                <p style={{ margin: "0px" }}>Amazon</p>

                <span className=" delay-para">Flat 30% off</span>
                <button className="e-button">Grab Now</button>
              </div>
              <div className="delay-e-card">
                <img
                  className=" delay-card-img mt-3"
                  src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
                />
                <p style={{ margin: "0px" }}>Amazon</p>

                <span className=" delay-para">Flat 30% off</span>
                <button className="e-button">Grab Now</button>
              </div>
            </div>
            <br />
            <div className="cards">
              <div className="delay-e-card">
                <img
                  className=" delay-card-img mt-3"
                  src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
                />
                <p style={{ margin: "0px" }}>Amazon</p>

                <span className=" delay-para">Flat 30% off</span>
                <button className="e-button">Grab Now</button>
              </div>
              <div className="delay-e-card">
                <img
                  className=" delay-card-img mt-3"
                  src="https://s3-alpha-sig.figma.com/img/3d9f/c6d0/93a8cd8d4354cf604534b27c3592cc8e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fMn5d2IoITnA-QNbejmOdZV5VKA9cFen8Did51eXy0N8ZcSOBXbhHZBNzTUvEh2MICqD7l3KUOzTEI3WIvUphORkBP59kK3fu1o6VcIxAeCW3oxzzhGtT9Mq1zRSCuZkB5h35MG5bpIVwzeLlcJdJWntgKmrgtPbILfbGV~2e-dhgzEw3GVS0SHu3vbit0BlpJekgUsLQzfq~gR1Aulde87bEn~tRca1~mh6sTQqoLcbDfuMj2~YMg4VrWdrsnA8dyMnVsYwEqrGebA4cGSf7TzSdnGZSx8s~29w8eetVPeVlJvO2YTM29CDAKddCZw-I1eqDACISlpSUaNBBaZhcw__"
                />
                <p style={{ margin: "0px" }}>Amazon</p>

                <span className=" delay-para">Flat 30% off</span>
                <button className="e-button">Grab Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className=" home-membership-second mt-2">
          <div>
            <img src="https://s3-alpha-sig.figma.com/img/6ced/8cb3/ffa1b9d5bd367a765f5c1cfb0f548337?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EOQLv9kZzm-mbA0xZJuAZa6u-VEaGFPjIYLSzoZ6X3BDZfhxqyNDPkoa9qDRGk-Kihsx0UI~IcfQMD0wxeC6lPq9tVupmP41t4rY7nPj-iQUCzHrKHWD-qfLI5i8eOD10sqAX0CF0SutK~1A6t624p4U1Zi0OgD2hI2q2HQn4aoh0T6ke~Q7ahzeC60492GDEWQmodB4DaNsHOK1uw0159VZT7PFIH9bExS9C2drApKCZ8yA54ABsbPnKll08JGn9SEvtGU4xeFpAnZwbW80MC1hVdjKcAX2EcITleW0gdRUU534XOZdixuryJwSnP7B0Asq6LKBfr-frZeAEmAOiQ__" />
          </div>
          <div>
            <img src="https://s3-alpha-sig.figma.com/img/76dc/e1f7/4b6cfad255644e5953465e823458049a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kj5qaTzgCZA4o52GW9jaqeyMpc5UROSBxpUdlJxT8rPgOLC6UPYs-Tv79ckIqHxqYtbOzwLyk2L~duAQwuWmePVmBbgP5IfgRgKdHnqcpOkFnN~ztdj3GnRrj8ziuz~r6OE5OnjlE6L~OKlext5bFJIPPbEAbt~2ef4rSpZz5wsIefWbGx3r8VsCHDq-nILP0xqwRpAo7n~-KsQRRy1gOkGoZEFTkUt0trsAzduw7mif37jUULl638u4pe2Y~042oo7W1uZHLe1OznZKe4ugY6dyQFkgam-Yn-SEescaN3IGz3uOr8lmoQYAE1BMbPAiOZPYaNnS1iZZr7SibYsrVg__" />
          </div>
        </div>
        {/* news letter */}
        <div className=" home-new-letter mt-2">
          <div>
            <img src="https://s3-alpha-sig.figma.com/img/5888/96a7/a5221c9da191a09eb28aa8c0986eb619?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mjlcUfj3q7hPamIy4UBeFN98kYnNq~gHpbDoZfAhQ7mG2d1ZLjF0QF6Up5j~JqbQmZYuGjH1UA4HUs0tlADX1A2ZoqNMPBmnAwIlyR4Dxbw5BATFfYsnit2jT91TiKboGOQLPZllqqtIIQu7IjqXAj7PoNaQaXyw8F~N72ep2Xaosvwm6yDMTOeLH2TbbAAslszGf-VI-eMg21ZgD7mj1W8cAYNEtbawVt91eLBCD78l9wB5aVmvpPhEw0z9lV4v1T-gGj-RjKX1nvEGnLuxUbqxI~kuJPs5CyjG~8ZKIEeGWojxrs2vXyupMN9K6eEGa8dLu3kpAKNH-AjFetKrnA__" />
          </div>
          <div className="home-subscribe">
            <h3>
              Subscribe to our
              <br /> NewLetter
            </h3>
            <p>
              Be the first to get exclusive offers
              <br /> and the latest projects
            </p>
            <input placeholder="enter your email address" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* how it works */}
        <h2 className="text-center"> How it works</h2>
        <div className="cards">
          <div className="delay-e-card ">
            <div className="mt-3">
              <IoMdLogIn />
            </div>

            <p className="work-para">SignUp</p>

            <span className=" work-para-2 mb-3">
              If your are going to use p passage of
              <br /> lorem ipsume . you need to be sure <br /> there
            </span>
          </div>
          <div className="delay-e-card">
            <div className="mt-3">
              <RiCouponLine />
            </div>

            <p className="work-para">Choose Coupon</p>

            <span className="work-para-2 mb-3">
              If your are going to use p passage of
              <br /> lorem ipsume . you need to be sure <br /> there
            </span>
          </div>
          <div className="delay-e-card">
            <div className="mt-3">
              <FaRegCreditCard />
            </div>

            <p className="work-para ">Grab Coupon</p>
            <span className=" work-para-2 mb-3 ">
              If your are going to use p passage of
              <br /> lorem ipsume . you need to be sure <br /> there
            </span>
          </div>
        </div>

        {/* download app */}
        <div className="home-app mt-5">
          <div className="app-content">
            <h1>
              Want to be a <br />
              part of our team
            </h1>
            <p>
              Be a part of best site of discount
              <br />
              coupons
            </p>
            <div className="home-app-button">
              <div className="home-apple-image">
                <div>
                  <img src="https://s3-alpha-sig.figma.com/img/bb3d/b068/96379acc362b9f57c3759a92a40bc545?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lA-7SpvTdhPH8vSA3HcvsmN3oxZtUf2oGk11OZY0HPez7hA72NUiSDib7aWiJArHqAbefNPKtCeAtOOdbfbQq6OnE6NXCP~A3tPkrB4HCDyD5EQ6UHf1kKnqFa21xcHkAPyiKADTHslMjFj5y9c8p2hepgliwPICxzHbR9IveO9Ix0in2N-skZ0FQKR2k6Zc8X5Q87R79MxDqSvfORQjDuQKsKqWwNoEajnIHiJlLFe61N1bpI-CDc7Jp8ABu-alIAfKZwPbER1uro4m4t2oJgW1Hbs7n0nNwhGJyjs2hmawDYF5y~dNauiR6UaxeO3I7BKGlaPtuxVeJPO7VWDNUA__" />
                </div>
                <div>
                  <p>
                    Download From
                    <br />
                    <strong
                      className="font-bold "
                      style={{ color: "black", fontSize: "14px" }}
                    >
                      App Store
                    </strong>
                  </p>
                </div>
              </div>
              <div className="home-apple-image ">
                <div>
                  <img src="https://s3-alpha-sig.figma.com/img/abcf/3f86/390660e5e1346a50c7b797d3d57f072f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dMQw51Bxh1yLiX39IQ1yNAtbKEjelRepZM0n9bqXs-nccVF8y9mnCno~uhyFBX8C6TQm8ykg6upBDOQ5Z-gtBNcJwyLMzNfAgnP7PvYs1d1Pf-UnU3iImwuj-fK5etZCNrKdNSyJebe2W6RYOsfYtOXVETRfvUMQjbo3N9Ya~nUhzxXj5LVk6B86KGPRodH2uYRK4fq6gAbPPauzR1uBIxiQdIJBW6KqMW4zk2Jkl-tzgA1yK24i1m8wKRs7VDi9~trxAO2dG~175mKEoBck~WClMQg45oP2SWGO1rD~TxoOpYmHw-y1e~Tj-VsSJ8-pHU1z7KMcwD5W5Fpssp5VzA__" />
                </div>
                <div>
                  <p>
                    Download From
                    <br />
                    <strong
                      className="font-bold "
                      style={{ color: "black", fontSize: "14px" }}
                    >
                      Play Store
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="home-phone ">
            <div>
              <img src=" https://s3-alpha-sig.figma.com/img/d703/1fcd/6be2bdee13dac5e0b9897755285fd117?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cr8qkRNK0e-1slRUdKIBoSBaZ~O~8dtAnzv~dzULmV~pW~JyGsULYNiUdnatxxx7OwJ8oj7u16n7UlJ6zl6UTYxK7ILy1mUb~rRLjsKMvPP556NmXbebaGmYlxvXZCvF~rgRbKHgaf5Y~7k6~q0ZRATI08WpkFOSLjqoBq-z2~q1KTXHTxB9hbxhbKIUQsAgtZuxqyfVFeccak3bfXWn1QlzDQhQ0VPORdMnJGWBnXTeoHVzmnF-MlwAXe-jUTFpJjJik0kAMz0eJAba1QIbQk4cRG1~XVjEUNHLYLjNtbXdqY9OqGxnhrdwEe1~8qp4LSk48ByQqZArYKYsE5Fy8A__" />
            </div>
            <div>
              <img src="https://s3-alpha-sig.figma.com/img/d703/1fcd/6be2bdee13dac5e0b9897755285fd117?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cr8qkRNK0e-1slRUdKIBoSBaZ~O~8dtAnzv~dzULmV~pW~JyGsULYNiUdnatxxx7OwJ8oj7u16n7UlJ6zl6UTYxK7ILy1mUb~rRLjsKMvPP556NmXbebaGmYlxvXZCvF~rgRbKHgaf5Y~7k6~q0ZRATI08WpkFOSLjqoBq-z2~q1KTXHTxB9hbxhbKIUQsAgtZuxqyfVFeccak3bfXWn1QlzDQhQ0VPORdMnJGWBnXTeoHVzmnF-MlwAXe-jUTFpJjJik0kAMz0eJAba1QIbQk4cRG1~XVjEUNHLYLjNtbXdqY9OqGxnhrdwEe1~8qp4LSk48ByQqZArYKYsE5Fy8A__" />
            </div>
          </div>
        </div>

        {/* home-girl-start */}
        <div className="home-girl">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/6df2/e3ab/05504b2a8e85ca253cf61f7d2002183a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EpcGtLAi2z3z8KDk4tV2QW3JhF0BYQAB1NOc8oyv0lBiFTNio71lVm70sFkNLZ2UFTUrR5dzDvILU7jifleyIZcRr97uQ-82S7seK5Q1D1guzAz3kS5lcI~0JhKUhjQRqxKR5GMFVSCDuKejtirwlgcOKGNhJtq3QL6rRsuTu3s6gDBp~81vbT85LRl2ktn1qZEY49iTVP1gBy1WDz8XGIM2SKDvpAR930mi1-tBAPhojZ5szgbrUyPPHjK3nJzVGx1rqSLHQZjGDuIIomjcpy~KMVPRxRB7y9wvE3Ljc1WE3A6ha6eU18GJ6fxHLFKuJFtc63m6E0yYIqYuMU8zaw__"
              alt=""
            />
          </div>
          <div>
            <h2 className="">Popular Categories</h2>
            <div className=" home-girl-categories">
              <div>
                <p>Flight</p>
                <p>Medicines</p>
                <p>Flight</p>
                <p>Medicines</p>
                <p>Flight</p>
                <p>Medicines</p>
                <p>Flight</p>
              </div>
              <div>
                <p>Bus</p>
                <p>Entertainment</p>
                <p>Flight</p>
                <p>Medicines</p>
                <p>Flight</p>
                <p>Medicines</p>
                <p>Flight</p>
              </div>
              <div>
                <p>Flower</p>
                <p>Kids</p>
                <p>Flight</p>
                <p>Medicines</p>
                <p>Flight</p>
                <p>Medicines</p>
                <p>Flight</p>
              </div>
              <div>
                <p>jwellery</p>
                <p>Beauty</p>
                <p>Travel</p>
                <p>ketchen</p>
                <p>Flight</p>
                <p>Footwear</p>
                <p>More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
