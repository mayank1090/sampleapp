import React from "react";
import Header from "./Subcomponents/Header";
import "./Home.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const Dummydata=[{image:"/teammember.png",
        name:"Vivek Tapadia",
        designation:"ADVOCATE"
    },
    {image:"/teammember.png",
        name:"Vivek Tapadia",
        designation:"ADVOCATE"
    },
    {image:"/teammember.png",
        name:"Vivek Tapadia",
        designation:"ADVOCATE"
    },
    {image:"/teammember.png",
        name:"Vivek Tapadia",
        designation:"ADVOCATE"
    },
    {image:"/teammember.png",
        name:"Vivek Tapadia",
        designation:"ADVOCATE"
    },
    {image:"/teammember.png",
        name:"Vivek Tapadia",
        designation:"ADVOCATE"
    },
    {image:"/teammember.png",
        name:"Vivek Tapadia",
        designation:"ADVOCATE"
    }

]

const OfficeData = [
    "Madhapur",
    "Houston, USA",
    "Dubai, UAE",
    "Australia",
    "United Kingdom",
    "Canada",
  ];

  const Services=[
    {
        backgroundimage:"/backgroundservices.png"
    },
    {
        backgroundimage:"/property.png"
    },
    {
        backgroundimage:"/backgroundservices.png"
    },
    {
        backgroundimage:"/property.png"
    },
    {
        backgroundimage:"/backgroundservices.png"
    },
  ]
  return (
    <div className="MainHomepage">
      <div className="upperhero relative">
        <img src="/herosec.png" alt="theheroimg" className="herosecimage w-full" />
        <div className="thedivwithaboslute absolute w-full top-0 bg-transparent">
          <Header />
          <div className="lowertextprnt py-2 sm:py-4  md:py-8 lg:py-16 xl:py-24 container mx-auto p-6 lg:px-8">
            <div className="innertextfprherosec w-full md:w-2/3 lg:w-3/5">
              <p className="innerbold">IGNITE YOUR WEALTH JOURNEY WITH <span className="forotherbold">NRIS360</span>
              </p>

              <p className="lowerslimbold">Specialized Consultation for Fund Advisory, Effortless Fund Repatriation, Legal Clarity, and Accounting Excellence</p>
              <button className='Conatct-usbutton pt-2 sm:pt-8 w-16 sm:w-2/5'>
            <div className='flex gap-2 items-center py-1 sm:py-4 contactbtn justify-center'>
            <p className='thecontactustext text-white'>Contact Us</p>
            </div>
           </button>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us container mx-auto  p-6 lg:px-8">
        <div className="theuuperdiv mb-12">
            <p className="aboutusheading">About <span className="forus">Us</span> | <span className="thegreyheadforaboutus">Our Story and 
            Commitment</span></p>
        </div>

        <p className="theotherlowersmalltext">Our <span className="forus">Team</span></p>

        <div className="theloweronefortheteammemberindialtiles pt-7 flex justify-center flex-wrap">
            {Dummydata.map((item)=>{
                return (
                    <>
                    <div className="theparentfortheteam flex flex-col justify-center items-center px-14 mt-7">
                        <img src={item.image} alt="teamimage" className="teammemberimg pt-8 pb-4"/>
                        <p className="teammembername pb-2">{item.name}</p>
                        <p className="teammemberdesignation pb-8">{item.designation}</p>
                    </div>
                    </>
                )
            })}
        </div>
      </div>
      <div className="ourofficesec container mx-auto  p-6 lg:px-8">
      <p className="theotherlowersmalltext">Our <span className="forus">Office</span></p>

      <div className="theloweroffieslist gap-7 pt-7 flex flex-wrap">
      {OfficeData.map((item, index) => (
          <div key={index} className="locationBox p-3 sm:p-5 flex items-center">
            <div className="imageLocation">
              <img src="/location.png" alt="location " />
            </div>
            <p className="forthebelowtextoflocation">{item}</p>
          </div>
        ))}
      </div>
      </div>
      <div className="ourservices">
        <div className="thebelowservices container mx-auto  p-6 lg:px-8">
        <p className="theotherlowersmalltext">Our <span className="forus">Services</span></p>
        <div className="forthebeloweservices flex flex-wrap gap-6 justify-center pt-12">
        {Services.map((item, index) => (
            <div className="backgroundservicesprnt">
              <img src={item.backgroundimage} alt="services" className="servicesbg" />
            </div>
        ))}
        </div>
        </div>
      </div>
      <div className="whatuneedtoknow container mx-auto  p-6 lg:px-8">
      <p className="theotherlowersmalltext pt-12 pb-12">What you <span className="forus">Need to Know</span></p>

      <div className="thebelowgridimage">
        <div className="theupperrowfortheview block lg:flex items-center gap-7">
            <div className="harkuch relative">
                <img src="first.png" alt="firstimg" className="thefirst "/>
                <div className="theaboslutedivprnt p-8 absolute h-full flex flex-col justify-between top-0">
                    <p className="theupperabsolutetext">
                    Taxability of Returning NRIs, OCIs, PIOs And Foreign Citizens Coming To India
                    </p>
                    <div className="lowerdivofarrow text-end text-white text-2xl">
                        <FontAwesomeIcon icon={faArrowRight} className="canbeanyarrow"/>
                    </div>
                </div>
                </div>
            <div className="cbelowjedd relative">
                <img src="second.png" alt="firstimg" className="thesecond"/>
                <div className="theaboslutedivprnt p-8 absolute h-full flex flex-col justify-between top-0">
                    <p className="theupperabsolutetext">
                    Sale of Properties in India by NRI
                    </p>
                    <div className="lowerdivofarrow text-end text-white text-2xl">
                        <FontAwesomeIcon icon={faArrowRight} className="canbeanyarrow"/>
                    </div>
                </div>
                </div>
        </div>

        <div className="thelowerrowoftheservices block lg:flex gap-7 pt-0 lg:pt-12 ">
            <div className="theleftsideoftherow block lg:flex lg:flex-col gap-7">
                <div className="theuppertop relative">
                <img src="third.png" alt="firstimg" className="thethird"/>
                <div className="theaboslutedivprnt p-8 absolute h-full flex flex-col justify-between top-0">
                    <p className="theupperabsolutetext">
                    Repatriation and remittance
                    </p>
                    <div className="lowerdivofarrow text-end text-white text-2xl">
                        <FontAwesomeIcon icon={faArrowRight} className="canbeanyarrow"/>
                    </div>
                </div>
                </div>
                <div className="theupperbottom relative">
                <img src="forth.png" alt="firstimg" className="theforth"/>
                <div className="theaboslutedivprnt p-8 absolute h-full flex flex-col justify-between top-0">
                    <p className="theupperabsolutetext">
                    NRI, Non-Resident Income Tax Return Services In India
                    </p>
                    <div className="lowerdivofarrow text-end text-white text-2xl">
                        <FontAwesomeIcon icon={faArrowRight} className="canbeanyarrow"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="therightsideoftherow relative">
            <img src="fifth.png" alt="firstimg" className="thefifth"/>
            <div className="theaboslutedivprnt p-8 absolute h-full flex flex-col justify-between top-0">
                    <p className="theupperabsolutetext">
                    Obtaining NRI OCI Property Sale Lower TDS Certificate Form 13
                    </p>
                    <div className="lowerdivofarrow text-end text-white text-2xl">
                        <FontAwesomeIcon icon={faArrowRight} className="canbeanyarrow"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}
