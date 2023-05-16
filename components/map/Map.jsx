import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/images/marker.png",
  iconUrl: "/images/marker.png",
  shadowUrl: "/images/marker-shadow.png",
});

export default function Map() {
  const position = [22.115, 95.1419];

  return (
    <MapContainer
      className="w-full h-full"
      center={position}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Marker</Popup>
      </Marker>
    </MapContainer>
  );
}
