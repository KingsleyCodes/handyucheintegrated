'use client';

import { useState, useEffect, useRef } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

const MapComponent = ({ location }) => {
  const [map, setMap] = useState(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  // Initialize Map
  useEffect(() => {
    if (mapRef.current && !map && typeof window !== 'undefined' && window.google) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: location,
        zoom: 15,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }],
          },
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }],
          },
          {
            featureType: 'poi',
            elementType: 'labels',
            stylers: [{ visibility: 'off' }],
          },
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: false,
        fullscreenControl: true,
      });

      setMap(newMap);
    }
  }, [location, map]);

  // Handle Marker Creation & Updates safely using Ref
  useEffect(() => {
    if (map && location && window.google) {
      // Remove old marker if it exists
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }

      // Create new marker
      const newMarker = new window.google.maps.Marker({
        position: location,
        map: map,
        title: 'Rich Royal Estate, FHA, behind Living Faith Church, Municipal, Lugbe 900107, FCT',
        animation: window.google.maps.Animation.DROP,
      });

      newMarker.addListener('click', () => {
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`,
          '_blank'
        );
      });

      markerRef.current = newMarker;

      return () => {
        if (markerRef.current) {
          markerRef.current.setMap(null);
        }
      };
    }
  }, [map, location]);

  return <div ref={mapRef} className="w-full h-full min-h-[300px]" />;
};

const MapLoading = () => (
  <div className="w-full h-full min-h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0D5C3E] mx-auto mb-4"></div>
      <p className="text-gray-600 font-medium">Loading Map...</p>
    </div>
  </div>
);

const MapError = () => (
  <div className="w-full h-full min-h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
    <div className="text-center p-4">
      <div className="text-4xl mb-2">⚠️</div>
      <p className="text-gray-800 font-semibold">Map failed to load</p>
      <p className="text-gray-500 text-xs mt-1">Please verify your NEXT_PUBLIC_GOOGLE_MAPS_API_KEY</p>
    </div>
  </div>
);

export default function InteractiveMap() {
  const location = {
    lat: 9.00292,
    lng: 7.34255,
  };

  const renderStatus = (status) => {
    switch (status) {
      case Status.LOADING:
        return <MapLoading />;
      case Status.FAILURE:
        return <MapError />;
      case Status.SUCCESS:
        return <MapComponent location={location} />;
      default:
        return <MapLoading />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
      <div className="aspect-video rounded-xl overflow-hidden border border-gray-100">
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}
          render={renderStatus}
        />
      </div>
      <div className="text-center mt-6">
        <p className="text-gray-800 font-bold text-base">Our Location</p>
        <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-md mx-auto">
          Rich Royal Estate, FHA, behind Living Faith Church, Municipal, Lugbe 900107, FCT
        </p>
        <button
          type="button"
          onClick={() => window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`,
            '_blank'
          )}
          className="mt-4 px-5 py-2.5 bg-gradient-to-r from-[#0D5C3E] to-[#1A3C2E] text-white font-medium rounded-xl hover:shadow-md transition-all duration-300 text-xs sm:text-sm"
        >
          Get Directions
        </button>
      </div>
    </div>
  );
}