import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

import "./CoronaMap.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import uuid from "react-uuid";

const options = {
  method: "GET",
  url: "https://covid-19-statistics.p.rapidapi.com/reports",
  headers: {
    "x-rapidapi-key": "9da9f853dcmsh86bba916aa656c2p18fc8djsne2562db22529",
    "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
  },
};

function Map() {
  const [selected, setSelected] = useState(null);
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios
      .request(options)
      .then((res) => {
        console.log(res.data.data);
        setQueries(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 32.06616, lng: 34.79485 }}>
      {queries.map((query) => (
        <Marker
          key={uuid()}
          position={{
            lat: parseInt(query.region.lat, 10),
            lng: parseInt(query.region.long, 10),
          }}
          onClick={() => {
            setSelected(query);
          }}
          icon={{
            url:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/220px-SARS-CoV-2_without_background.png",
            scaledSize: new window.google.maps.Size(30, 30),
            origion: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(15, 15),
          }}
        />
      ))}

      {selected && (
        <InfoWindow
          position={{
            lat: parseInt(selected.region.lat, 10),
            lng: parseInt(selected.region.long, 10),
          }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <Container className="info-window-con" fluid>
            <Row>
              <Col>
                <span className="info-details">
                  Country: {selected.region.name}{" "}
                </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="info-details">
                  Active: {selected.active} ,{" "}
                </span>
                <span className="info-deaths">Deaths: {selected.deaths} </span>
              </Col>
            </Row>
            <Row>
              <Col>
                <span className="info-recovered">
                  Recovered: {selected.recovered}{" "}
                </span>
              </Col>
            </Row>
          </Container>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function CoronaMap() {
  return (
    <div>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBq-4BnrIPGK5UdiVqF7kH9lOH34oq6BPA`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
