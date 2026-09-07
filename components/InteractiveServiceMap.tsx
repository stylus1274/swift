"use client";

import type { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";

const serviceLocations = [
  { name: "Spring Hill", coordinates: [28.4789, -82.5476] as [number, number] },
  { name: "Brooksville", coordinates: [28.5553, -82.3879] as [number, number] },
  { name: "Weeki Wachee", coordinates: [28.5156, -82.5732] as [number, number] },
  { name: "Hernando Beach", coordinates: [28.4694, -82.6593] as [number, number] },
  { name: "Ridge Manor", coordinates: [28.5036, -82.1701] as [number, number] },
  { name: "Citrus County", coordinates: [28.8849, -82.5186] as [number, number] },
  { name: "Pasco County", coordinates: [28.3, -82.45] as [number, number] },
];

export default function InteractiveServiceMap() {
  const mapElement = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<LeafletMap | null>(null);

  useEffect(() => {
    let disposed = false;

    void import("leaflet").then((L) => {
      if (!mapElement.current || mapInstance.current || disposed) return;

      const map = L.map(mapElement.current, {
        center: [28.6, -82.49],
        zoom: 9,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      mapInstance.current = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      const serviceArea = L.circle([28.6, -82.49], {
        color: "#287fc3",
        fillColor: "#287fc3",
        fillOpacity: 0.07,
        radius: 65000,
        weight: 2,
      }).addTo(map);

      serviceLocations.forEach((location) => {
        L.circleMarker(location.coordinates, {
          color: "#ffffff",
          fillColor: "#287fc3",
          fillOpacity: 1,
          radius: 6,
          weight: 2,
        })
          .addTo(map)
          .bindTooltip(location.name, {
            direction: "top",
            offset: [0, -7],
          });
      });

      map.fitBounds(serviceArea.getBounds(), { padding: [25, 25] });
      window.setTimeout(() => map.invalidateSize(), 100);
    });

    return () => {
      disposed = true;
      mapInstance.current?.remove();
      mapInstance.current = null;
    };
  }, []);

  return (
    <div className="interactive-map">
      <div
        aria-label="Interactive map showing Swift Construction and Painting's Hernando, Citrus and Pasco Counties service area"
        className="map-canvas"
        ref={mapElement}
      />
      <a
        className="larger-map-link"
        href="https://www.openstreetmap.org/?mlat=28.6&amp;mlon=-82.49#map=9/28.6/-82.49"
        rel="noreferrer"
        target="_blank"
      >
        View larger map
      </a>
    </div>
  );
}
