import "./landing.css";
import NavBar from "../layout/navbar";
import landingImage from "../assets/spiritlandingimg.jpg"
import SpiritLogo from "../assets/Spirit.jpg";
import BeerImg from "../assets/beerimg.jpg";

const LandingPage = () => {



    // const backgroundImage = {
    //     backgroundImage: LandingImage
    // }

    return (
        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="col">
        //             <NavBar />
        //         </div>
        //     </div>
        //     <div className="row">
        //         <div className="col-6">
        //             <img src={landingImage} width="100%" style={{paddingLeft: "20px"}}/>
        //         </div>
        //         <div className="col-6">
        //             <div className="row">
        //                 <div className="col d-flex justify-content-center">
        //                     <img src={SpiritLogo}  width="250px" height="250px" />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="container-fluid">
            <div className="row">
                <div className="col-6 left-column">
                    {/* <img src={BeerImg} width="100%" style={{objectFit: "contain"}}/> */}
                </div>

                <div className="col">
                    <div className="row justify-content-center  ">
                        <NavBar />
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <img src={SpiritLogo}  width="250px" />  
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-light text-center">
                            <h1>Bringing You Authentic Spirits</h1>
                        </div>
                    </div>

                    <div className="row" style={{marginTop: "80px"}}>
                        <div className="col text-light text-center  mx-3">
                        <p style={{lineHeight: "2rem", paddingTop:"30px"}} >
                            There's nothing like a morale booster when spirits are low.
                            We offer the finest spirits collection around. Whether your preference
                            is beer, wine, or hard liquor, our products are sure to leave you with a good time. 
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LandingPage;