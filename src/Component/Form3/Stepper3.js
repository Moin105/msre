import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Stepper3.css";
import {BsChevronDown} from 'react-icons/bs'
import Loader from "../Loader/Loader";
function Stepper3({ nextStep, backStep,setForm,form }) {
  const [loader,setLoader] = useState(false);
  const updatedData = [
    {
      name: "Atlanta",
      options: {
        TV: {
          type: "TV",
          TV: [
            "WSB - TV Channel 2",
            "WAGA - TV FOX 5",
            "FOX NEWS Channel - TV",
            "11 Alive NBC WXIA - TV",
            "CBS Channel 46 - TV WANF",
            "Golf Channel - TV",
            "CNBC - TV",
            "The Weather Channel - TV",
          ],
        },
        Online: {
          type: "Online",
          Online: ["Facebook", "Instagram", "Nextdoor"],
        },
        Radio: {
          type: "Radio",
          Radio: [
            "WSB - 95.5 FM / AM 750 - radio",
            "104.7 The Fish - radio",
            "101.5 New Country / Kicks - radio",
            "92.9 The Game WZGC - radio",
            "97.1 The River - radio",
            "106.1 WNGC Your Georgia Country - radio",
            "99X - radio",
          ],
        },
        Billboards: {
          type: "Billboards",
          Billboards: ["Billboard"],
        },
      },
    },
    {
      name: "Birmingham",
      options: {
        TV: {
          type: "TV",
          TV: ["FOX6 WBRC - TV"],
        },
        Radio: {
          type: "Radio",
          Radio: [
            "106.9 The Eagle WBPT - radio",
            "WAGG 610 AM and 100.1 FM - radio",
          ],
        },
      },
    },
    {
      name: "Charlotte",
      options: {
        TV: {
          type: "TV",
          TV: [
            "WSOC - TV ABC Channel 9",
            "NBC WCNC - TV",
            "FOX NEWS Channel - TV",
            "Spectrum News 1 - TV",
            "CNBC - TV",
            "HGTV",
            "The Weather Channel - TV",
            "MSNBC - TV",
          ],
        },
        Online: {
          type: "Online",
          Online: ["Facebook", "Instagram"],
        },
        Radio: {
          type: "Radio",
          Radio: [
            "Country 103.7 WSOC FM - radio",
            "96.9 The Kat WKKT - radio",
            "99.7 The Fox WRFX - radio",
            "95.7FM The Ride WXRC - radio",
            "Sports Radio WFNZ 92.7 FM / 610 AM - radio",
            "FOX Sports 94.7 FM - radio",
            "V101.9 WBAV FM - radio",
          ],
        },
        Billboards: {
          type: "Billboards",
          Billboards: ["Billboard"],
        },
      },
    },
    {
      name: "Chattanooga",
      options: {
        TV: {
          type: "TV",
          TV: ["FOX Chattanooga - TV"],
        },
        Online: {
          type: "Online",
          Online: ["Facebook", "Instagram"],
        },
        Radio: {
          type: "Radio",
          Radio: [
            "US 101 Big Country WUSY - radio",
            "Rock 105 WRXR - radio",
            "98.1 The Lake WLND - radio",
            "103.7 KISS FM WKXJ - radio",
            "Real 96.1 WUSY - radio",
          ],
        },
        Billboards: {
          type: "Billboards",
          Billboards: ["Billboard"],
        },
      },
    },
    {
      name: "Dallas-Fort Worth",
      options: {
        Radio: {
          type: "Radio",
          Radio: [
            "WBAP News Talk 820 AM / 99.5 FM - Radio",
            "New Country 96.3 KSCS - Radio",
            "99.5 The Wolf Texas Country KPLX - Radio",
            "KLIF 570 News AM - Radio",
          ],
        },
      },
    },
    {
      name: "Greensboro",
      options: {
        TV: {
          type: "TV",
          TV: ["Fox 8 WGHP - TV"],
        },
        Online: {
          type: "Online",
          Online: ["Facebook", "Instagram"],
        },
        Radio: {
          type: "Radio",
          Radio: ["Rock 92 WKRR - Radio"],
        },
        Billboards: {
          type: "Billboards",
          Billboards: ["Billboard"],
        },
      },
    },
    {
      name: "Greenville",
      options: {
        TV: {
          type: "TV",
          TV: ["WYFF News 4 NBC - TV", "FOX Caroline WHNS - TV"],
        },
        Online: {
          type: "Online",
          Online: ["Facebook", "Instagram"],
        },
        Radio: {
          type: "Radio",
          Radio: [
            "Whistle 100.5 New Country WSSL - radio",
            "92.5 WESC Country - radio",
            "102.5 The Lake WMYI - radio",
            "Fox Sports Upstate 104.9 FM WROO - radio",
          ],
        },
        Billboards: {
          type: "Billboards",
          Billboards: ["Billboard"],
        },
      },
    },
    {
      name: "Jacksonville",
      options: {
        TV: {
          type: "TV",
          TV: ["News4JAX - WJXT Channel 4 TV"],
        },
        Online: {
          type: "Online",
          Online: ["Facebook", "Instagram"],
        },
        Radio: {
          type: "Radio",
          Radio: [
            "104.5 WOKV Jacksonville's News Talk - radio",
            "96.9 The Eagle Jacksonville's Classic Hits WJGL - radio",
            "ESPN Jacksonville 690 AM - radio",
            "HOT 99.5 FM Duval's Only R&amp;B - radio",
          ],
        },
      },
    },
    {
      name: "Nashville",
      options: {
        TV: {
          type: "TV",
          TV: ["WKRN - TV News 2 ABC", "WSMV - TV NBC News Channel 4"],
        },
        Online: {
          type: "Online",
          Online: ["Facebook", "Instagram"],
        },
        Radio: {
          type: "Radio",
          Radio: [
            "WTN - Super Talk 99.7 - radio",
            "WGFX - 104.5 The Zone - radio",
            "107.5 The River WRVW - radio",
            "WKDF - 103.3 Today’s Country - radio",
            "The Big 98 WSIX - radio",
            "WSM - 95.5 Nash Icon / 650 AM Country - radio",
            "94 FM The Fish - radio",
            "105.9 The Rock WNRQ - radio",
            "101.1 The Beat WUBT - radio",
          ],
        },
        Billboards: {
          type: "Billboards",
          Billboards: ["Billboard"],
        },
      },
    },
    {
      name: "Orlando",
      options: {
        Online: {
          type: "Online",
          Online: ["Facebook", "Instagram"],
        },
        Radio: {
          type: "Radio",
          Radio: [
            "98.9 WMMO Classic Hits - Radio",
            "WDBO 107.3 FM 580 AM News Talk - Radio",
            "K92.3 Country WWKA - Radio",
          ],
        },
      },
    },
    {
      name: "Raleigh",
      options: {
        TV: {
          type: "TV",
          TV: [
            "WRAL - TV NBC Channel 5",
            "ABC11 WTVD News, Good Morning America - TV",
            "FOX NEWS Channel - TV",
            "Spectrum News 1 - TV",
            "CNBC - TV",
            "HGTV",
            "The Weather Channel - TV",
            "MSNBC - TV",
          ],
        },
        Online: {
          type: "Online",
          Online: ["Facebook", "Instagram", "Nextdoor"],
        },
        Radio: {
          type: "Radio",
          radio: [
            "WTKK - 106.1 News Talk - radio",
            "94.7 Today's Best Country WQDR-FM - radio",
            "B93.9 New Country - radio",
            "100.7 Classic Rock - radio",
            "G105 Top 40 - radio",
            "95.3 The Beat - radio",
            "KIX 102.9 FM Carolina's Greatest Hits - radio",
            "The Triangle's Rock 92.9 WQDR-AM - radio",
          ],
        },
        Billboards: {
          type: "Billboards",
          Billboards: ["Billboard"],
        },
      },
    },
    {
      "name": "Tampa",
      "options": {
          "Online": {
              "type": "Online",
              "Online": [
                  "Facebook",
                  "Instagram"
              ]
          },
          "Radio": {
              "type": "Radio",
              "Radio": [
                  "102.5 The Bone WHPT - radio",
                  "107.3 The EAGLE Classic Hits WXGL - radio",
                  "105.5 The Dove WDUV - radio",
                  "97X New Alternative WSUN - radio",
                  "Magic 94.9 WWRM - radio"
              ]
          }
      }
  }
  
  ];
  // const [form, setForm] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phone: "",
  //   market: "",
  //   source: "",
  //   anotherQuestion: "",
  // });

  const handleChange = (event) => {
    
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleChanges = (event) => {
    if(event.target.name === "market"){
      setForm({
        ...form,
        [event.target.name]: '',
        anotherQuestion:"",
        source:""
      });
      setForm({
        ...form,
        [event.target.name]: event.target.value,
        anotherQuestion:"",
        source:""
      });
    }
    if(event.target.name === "source"){
      setForm({
        ...form,
        [event.target.name]: event.target.value,
        anotherQuestion:""
      });}
  };
  const selectedMarket = updatedData?.find(item => item.name === form.market);

  let sourceOptionsKeys = [];
  if (selectedMarket) {
    sourceOptionsKeys = Object.keys(selectedMarket?.options);
  }
  
  let specificOptionsArray = [];
  if (selectedMarket && form.source) {
    specificOptionsArray = selectedMarket?.options[form?.source][sourceOptionsKeys?.includes(form.source) ? sourceOptionsKeys?.find(key => key === form.source) : ['no data']];
  }
  const optionsToRender = Array.isArray(specificOptionsArray) ? specificOptionsArray : [];

  const handleNext = () => {
    const {
      firstName,
      lastName,
      email,
      phone,
      market,
      source,
      anotherQuestion,
    } = form;

    if (
      firstName &&
      lastName &&
      email &&
      phone &&
      market &&
      source &&
      (source !== "" ? anotherQuestion : true)
    ) {
      setLoader(true);
      let intervalId = setInterval(() => {
        nextStep();
        console.log("qwe");
      }, 2000);
      setTimeout(() => {
        setLoader(false);
        clearInterval(intervalId);
      }, 2000);
    } else {
    }
  };
  const handleBack = ()=>{
    setLoader(true);
    let intervalId = setInterval(() => {
      backStep();
    }, 2000);
    setTimeout(() => {
      setLoader(false);
      clearInterval(intervalId);
    }, 2000);
  }
  return (
    <div className="step3">
      <div className="input-field">
        <label>First Name <span className="importent">*</span></label>
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder=""
          maxLength={40}
          type="text"
        />
        <p className="total">{form.firstName.length} of 40 max characters</p>
      </div>
      <div className="input-field">
        <label>Last Name <span className="importent">*</span></label>
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder=""
          maxLength={40}
          type="text"
        />
        <p className="total">{form.lastName.length} of 40 max characters</p>
      </div>
      <div className="input-field">
        <label>Email <span className="importent">*</span></label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder=""
          type="email"
        />
      </div>
      <div className="input-field">
        <label>Phone <span className="importent">*</span></label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="### ### ####"
          type="tel"
        />
      </div>
    
       <div className="input-field">
      <label>Market <span className="importent">*</span></label>
        <div className="select-arrows">
        <BsChevronDown/>
        </div>
      <select name="market" value={form.market} onChange={handleChange}>
        <option value="">Market</option>
        {updatedData.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>

    {form.market !== "" && (
      <div className="input-field">
        <label>How'd you hear about us? <span className="importent">*</span></label>
        <div className="select-arrows">
        <BsChevronDown/>
        </div>
        <select name="source" value={form.source} onChange={handleChange}>
          <option value="">How'd you hear about us?</option>
          {sourceOptionsKeys.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )}

    {form.source !== "" && (
      <div className="input-field">
        <label>How'd you hear about us? <span className="importent">*</span></label>
       <div className="select-arrows">
        <BsChevronDown/>
        </div>  <select
          name="anotherQuestion"
          value={form.anotherQuestion}
          onChange={handleChange}
        >
            
          <option value="">How'd you hear about us?</option>
          {optionsToRender.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    )}
      <div>
      {loader && <Loader/>}
        <div className="search">
          <button className="back" onClick={handleBack}>
            Back
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
}

Stepper3.propTypes = {
  nextStep: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
};

export default Stepper3;

