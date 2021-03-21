import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';

import { mapStyles } from "./mapStyles"

const Map = (props) => {

  const containerStyle = {
    width: '800px',
    height: '800px',
    border: '10px solid #66033c',
  };

  const options = {
    styles : mapStyles //from snazzymaps.com
  }

    return (
      <LoadScript
        googleMapsApiKey='{api-key}'
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={props.center}
          zoom={props.zoom}
          options={options}
        >
        <Marker position={{ // your position marker
         lat: props.yourPing.latitude,
         lng: props.yourPing.longitude
       }}
       onClick={() => console.log("You clicked me!")}
       icon={"https://ik.imagekit.io/7ol7k87qcca/Project/male-2_cR2wI4r8Jh2Qj.png"}
      />
      {props.pings.map( (ping, index) =>
        <Marker key={index} position={{ // stores markers
          lat: ping.latitude,
          lng: ping.longitude
        }}
        icon={"https://ik.imagekit.io/7ol7k87qcca/Monuments_of_Rome/Daco_5628727_rkncYNjBGD.png?tr=h-30,w-35"}
        onClick={() => props.setInfo(ping)}
        />
      )}

      {props.info ? (<InfoWindow position={{ lat: props.info.latitude, lng: props.info.longitude }} onCloseClick={() => props.setInfo(null)}>
        <div>
         <p className="infowindow">{props.info.address}</p>
        </div>
      </InfoWindow>) : null}
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }


export default Map
