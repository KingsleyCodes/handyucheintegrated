'use client';
import { useState, useEffect, useRef } from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';

const MapComponent = ({ location }) => {
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  const mapRef = useRef(null); // Fixed: Using useRef instead of useState for DOM reference

  useEffect(() => {
    if (map && location) {
      // Remove existing marker if any
      if (marker) {
        marker.setMap(null);
      }

      // Create new marker
      const newMarker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Rich Royal Estate, FHA, behind Living Faith Church, Municipal, Lugbe 900107, FCT',
        animation: google.maps.Animation.DROP,
      });

      setMarker(newMarker);

      // Add click listener to marker
      newMarker.addListener('click', () => {
        window.open(
          `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`,
          '_blank'
        );
      });

      // Cleanup function
      return () => {
        if (newMarker) {
          newMarker.setMap(null);
        }
      };
    }
  }, [map, location, marker]); // Fixed: Added 'marker' to dependencies

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new google.maps.Map(mapRef.current, {
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

      // Cleanup function
      return () => {
        // Google Maps cleanup if needed
      };
    }
  }, [map, location]); // Fixed: Added 'map' to dependencies

  return <div ref={mapRef} className="w-full h-full" />;
};

const MapLoading = () => (
  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0D5C3E] mx-auto mb-4"></div>
      <p className="text-gray-600">Loading Map...</p>
    </div>
  </div>
);

const MapError = () => (
  <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
    <div className="text-center">
      <div className="text-4xl mb-4">⚠️</div>
      <p className="text-gray-600">Map failed to load</p>
      <p className="text-gray-500 text-sm">Please check your API key</p>
    </div>
  </div>
);

export default function InteractiveMap() {
  const location = {
    lat: 9.00292,
    lng: 7.34255,
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="aspect-video rounded-lg overflow-hidden">
        <Wrapper
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          render={(status) => {
            if (status === 'LOADING') return <MapLoading />;
            if (status === 'FAILURE') return <MapError />;
            return <MapComponent location={location} />;
          }}
        />
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-600 font-medium">Our Location</p>
        <p className="text-gray-500 text-sm">Rich Royal Estate, FHA, behind Living Faith Church, Municipal, Lugbe 900107, FCT</p>
        <button
          onClick={() => window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`,
            '_blank'
          )}
          className="mt-2 px-4 py-2 bg-gradient-to-r from-[#0D5C3E] to-[#1A3C2E] text-white rounded-lg hover:from-[#0A4A32] hover:to-[#152A21] transition-all duration-300 text-sm"
        >
          Get Directions
        </button>
      </div>
    </div>
  );
}