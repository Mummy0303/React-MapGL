import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "./styles.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { FaPaw } from "react-icons/fa";
import PopupBox from "./PopupBox";

const vetsData = [
  {
    id: 1,
    title: "Wellesley Animal Hospital",
    latitude: 43.666648549951425,
    longitude: -79.383759685106,
    review: "4.6",
    address: "535 Yonge St, ON M4Y 1Y5",
    hours: "8AM–8PM",
    web: "www.wellesleyanimalhospital.ca",
    phone: "+14169661830"
  },
  {
    id: 2,
    title: "Parliament Animal Hospital",
    latitude: 43.671242763117235,
    longitude: -79.36975778995932,
    review: "4.5",
    address: "584 Parliament St, ON M4X 1P8",
    hours: "10AM–5PM",
    web: "www.parliamentanimalhospital.ca",
    phone: "+16473473300"
  },
  {
    id: 3,
    title: "Toronto Central Animal Clinic",
    latitude: 43.65714576610394,
    longitude: -79.36355076427576,
    review: "4.5",
    address: "167 Parliament St, ON M5A 2Z2",
    hours: "10AM–6PM",
    web: "www.torontocentralvet.com",
    phone: "+14163607400"
  },
  {
    id: 4,
    title: "Sherbourne Animal Hospital",
    latitude: 43.65693689681953,
    longitude: -79.37062388656635,
    review: "4.5",
    address: "320 Richmond St E #108, ON M5A 2R3",
    hours: "8AM–7PM",
    web: "www.sherbourneanimalhospital.com",
    phone: "+14167750101"
  },
  {
    id: 5,
    title: "Front Street Animal Hospital",
    latitude: 43.6426276214102,
    longitude: -79.39949377346669,
    review: "4.6",
    address: "548 Front St W, ON M5V 3N5",
    hours: "9AM–5PM",
    web: "www.frontstreetvet.com",
    phone: "+14163511212"
  },
  {
    id: 6,
    title: "Annex Animal Hospital",
    latitude: 43.66539552162488,
    longitude: -79.41017563231318,
    review: "4.3",
    address: "716 Bathurst St, ON M5S 2R4",
    hours: "8AM–7PM",
    web: "www.annexvet.com",
    phone: "+14165373128"
  },
  {
    id: 7,
    title: "Queen West Animal Hospital",
    latitude: 43.64805928056952,
    longitude: -79.41248522326522,
    review: "4.5",
    address: "931 Queen St W, ON M6J 1G5",
    hours: "8:30AM–7PM",
    web: "www.queenwestvets.com/",
    phone: "+14168158387"
  },
  {
    id: 8,
    title: "Bickford Park Animal Hospital",
    latitude: 43.66539552162488,
    longitude: -79.42201228594234,
    review: "4.7",
    address: "807 Bloor St W, ON M6G 1L8",
    hours: "8AM–7PM",
    web: "www.bickfordvet.com",
    phone: "+16473478387"
  },
  {
    id: 9,
    title: "Village Gate Animal Hospital",
    latitude: 43.68210041444718,
    longitude: -79.41667135686576,
    review: "4.7",
    address: "1357 Bathurst St, ON M5R 3H8",
    hours: "8AM–6PM",
    web: "www.villagegateanimalhospital.ca",
    phone: "+14165889889"
  },
  {
    id: 10,
    title: "Yonge-Davenport Pet Hospital",
    latitude: 43.67719383452707,
    longitude: -79.38707972279292,
    review: "4.7",
    address: "885 Yonge St, ON M4W 2H2",
    hours: "8AM–7PM",
    web: "www.yongedavenportvet.com/",
    phone: "+14169622883"
  },
  {
    id: 11,
    title: "Veterinary Emergency Clinic",
    latitude: 43.67656743374134,
    longitude: -79.38881191600694,
    review: "4.2",
    address: "920 Yonge St Suite 117, ON M4W 3C7",
    hours: "Open 24 hours",
    web: "www.vectoronto.com/",
    phone: "+14169202002"
  },
  {
    id: 12,
    title: "Bloorcourt Veterinary Clinic",
    latitude: 43.66247168730688,
    longitude: -79.43384893957148,
    review: "4.7",
    address: "1074 Bloor St W, ON M6H 1M6",
    hours: "8AM–8PM",
    web: "www.bloorcourtvetclinic.com",
    phone: "+14165379677"
  },
  {
    id: 13,
    title: "Woodbine Animal Clinic",
    latitude: 43.68763288491879,
    longitude: -79.31620415045259,
    review: "4.8",
    address: "1905 Danforth Ave, ON M4C 1J5",
    hours: "8AM–5PM",
    web: "www.easttorontovetclinic.ca",
    phone: "+14166991175"
  },
  {
    id: 14,
    title: "Liberty Village Animal Hospital",
    latitude: 43.642219455533926,
    longitude: -79.41842086156569,
    review: "4.7",
    address: "171 E Liberty St Unit 120, ON M6K 3P6",
    hours: "8AM–8PM",
    web: "www.libertyvillageanimalhospital.com",
    phone: "+16479253878"
  },
  {
    id: 15,
    title: "Beaches Animal Hospital",
    latitude: 43.67637163730599,
    longitude: -79.28418166666283,
    review: "4.8",
    address: "2304 Queen St E, ON M4E 1G8",
    hours: "8AM–8PM",
    web: "www.beachesanimalhospital.com//",
    phone: "+14166904040"
  }
];

function App() {
  const [showPopup, setShowPopUp] = useState(null);

  return (
    <div className="container">
      <h1>React MapGL</h1>
      <div className="map-container">
        <div className="map-box">
          <Map
            style={{ borderRadius: "10px" }}
            initialViewState={{
              longitude: -79.37909808820403,
              latitude: 43.654486032687466,
              zoom: 11
            }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken="YOUR_API_KEY"
          >
            {vetsData.map((vet) => (
              <Marker
                key={vet.id}
                longitude={vet.longitude}
                latitude={vet.latitude}
              >
                <button
                  onMouseEnter={() => setShowPopUp(vet)}
                  style={{
                    cursor: "pointer"
                  }}
                  className="marker-btn"
                >
                  <FaPaw size={17} />
                </button>
                {showPopup ? (
                  <Popup
                    key={showPopup.id}
                    anchor="top-left"
                    longitude={showPopup.longitude}
                    latitude={showPopup.latitude}
                    onClose={() => setShowPopUp(null)}
                    closeButton={false}
                  >
                    <PopupBox
                      title={showPopup.title}
                      review={showPopup.review}
                      address={showPopup.address}
                      hours={showPopup.hours}
                      web={showPopup.web}
                      phone={showPopup.phone}
                    />
                  </Popup>
                ) : null}
              </Marker>
            ))}
          </Map>
        </div>
      </div>
    </div>
  );
}

export default App;
