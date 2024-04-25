import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const API_KEY =
  globalThis.GOOGLE_MAPS_API_KEY ?? (import.meta.env.VITE_GOOGLE_MAPS_API_KEY)

const GoogleMaps = () => (
  <APIProvider apiKey={API_KEY}>
    <div style={{ height: "50vh", width: "80%", marginTop: "30px" }}>
    <Map
      defaultZoom={15}
        defaultCenter={{ lat: 55.832039, lng: 13.327660 }}
      gestureHandling={'greedy'}
      disableDefaultUI={true}
    />
      <Marker
        position={{ lat: 55.832039, lng: 13.327660 }}
      />
    </div>
  </APIProvider>
);
export default GoogleMaps;

