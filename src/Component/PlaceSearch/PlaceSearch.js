import React, { useEffect, useRef } from 'react';

function PlaceSearch() {
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

  return (
    <div>
      <input
        type="text"
        onChange={(event) => searchPlaces(event.target.value)}
      />
    </div>
  );
}

export default PlaceSearch;
