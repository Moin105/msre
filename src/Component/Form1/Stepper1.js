import React, { useState ,useEffect,useRef} from 'react';
import './Stepper1.css';
import Loader from '../Loader/Loader';
import PlaceSearch from '../PlaceSearch/PlaceSearch';
function Stepper1({ nextStep,setForm,form  }) {
  const [address, setAddress] = useState('');
  const [loader , setLoader] = useState(false);
  const handleSearchClick = () => {
    console.log(form.address)
    if (form.address.trim() === '') {
      return;
    }
    setLoader(true);
    let intervalId = setInterval(() => {
      nextStep();
      console.log("qwe");
    }, 2000);
    setTimeout(() => {
      setLoader(false);
      clearInterval(intervalId);
    }, 2000);
  };
  const autocompleteService = useRef(null);
  const placesService = useRef(null);

  useEffect(() => {
    if (!window.google) {
      console.error('Google Places API not available');
      return;
    }

    autocompleteService.current = new window.google.maps.places.AutocompleteService();
    placesService.current = new window.google.maps.places.PlacesService(document.createElement('div'));
  }, []);

  const searchPlaces = (searchTerm) => {
    if (!autocompleteService.current || !placesService.current) {
      console.error('Google Places API not initialized');
      return;
    }

    autocompleteService.current.getPlacePredictions({ input: searchTerm }, (predictions, status) => {
      if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
        console.error(`Error during place predictions: ${status}`);
        return;
      }

      predictions.forEach((prediction) => {
        placesService.current.getDetails({ placeId: prediction.place_id }, (result, status) => {
          if (status !== window.google.maps.places.PlacesServiceStatus.OK) {
            console.error(`Error during place details request: ${status}`);
            return;
          }

          console.log(result);
        });
      });
    });
  };
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    searchPlaces(event.target.value);
  };
  return (
    <div className='step1'>
      <div className='input-field'>
      <div className='input-field'>
    <label>Address</label>
    <input 
      placeholder="Enter your address" 
      type="text" 
      name="address"
       value={form.address}
        onChange={handleChange}
        required
      />
    </div>
      </div>
      {/* <PlaceSearch/> */}
      <div></div>
   {loader &&  <Loader/>}
      <div className='search'>
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  );
}

export default Stepper1;
