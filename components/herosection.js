import Image from "next/image"

function HeroSection() {
    return (
        <>
            <div className="heading">Securing India's<br/>Property Rights Together.</div>
            <div className="button-div">
                <button className="button">GET STARTED</button>
            </div>
            <div>
                <Image
                    src="buildings.svg"
                    quality={100}
                    layout = "fill"
                    objectFit="cover"
                    alt=""
                />
            </div>
        </>
    )
}

export default HeroSection;