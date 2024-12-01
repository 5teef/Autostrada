import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';

const API_KEY =
  globalThis.GOOGLE_MAPS_API_KEY ?? (import.meta.env.VITE_GOOGLE_MAPS_API_KEY)

const MAP_KEY =
  globalThis.GOOGLE_MAPS_API_KEY ?? (import.meta.env.VITE_PUBLIC_MAP_ID)

const GoogleMaps = () => (
  <APIProvider apiKey={API_KEY}>
    <div style={{ height: "50vh", width: "80%", marginTop: "30px" }}>
      <Map
        defaultZoom={15}
        defaultCenter={{ lat: 55.832039, lng: 13.327660 }}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
        mapId={MAP_KEY}
      >

        <AdvancedMarker
          position={{ lat: 55.832039, lng: 13.327660 }} />

        <InfoWindow >
          <h2> test</h2>
        </InfoWindow>

      </Map>
    </div>
  </APIProvider>
);
export default GoogleMaps;
