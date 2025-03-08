import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";

const GraphVis = ({ data }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Configuration du graphe
    const options = {
      nodes: {
        shape: "dot",
        size: 20,
        font: { size: 14, color: "#ffffff" },
        color: "#007bff",
      },
      edges: {
        color: "#aaaaaa",
        arrows: "to",
      },
      physics: {
        enabled: true,
      },
    };

    // Création du graphe avec Vis.js
    const network = new Network(containerRef.current, data, options);

    return () => network.destroy(); // Nettoyage à la suppression du composant
  }, [data]);

  return <div ref={containerRef} style={{ width:"1100px", height: "500px", border: "1px solid black",  borderRadius:"15px"}} />;
};

export default GraphVis;
