import "./App.css";
import SideBarItem from "./SideBarItem";
import { useState } from "react";

function SideBar({ classes, showQueryStructure }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index, query) => {
    setActiveIndex(index);
    showQueryStructure(query);
  };

  const items = [
    { IconLink: null, Label: "Data Service", query: "" },
    { IconLink: "importer.png", Label: "Import Graphe", query: "" },
    { IconLink: "importer.png", Label: "Import 2", query: "" },
    { IconLink: null, Label: "Query Tools", query: "" },
    { IconLink: "openqueyIcon.png", Label: "Open Query", query: "" },
    {
      IconLink: "readQueryIcon.png",
      Label: "SELECT Query",
      query:
        "SELECT ?subject ?predicate ?object WHERE { ?subject ?predicate ?object } LIMIT 10",
    },
    {
      IconLink: "askIcon.png",
      Label: "ASK Query",
      query: "ASK WHERE { ?s ?p ?o }",
    },
    {
      IconLink: "constructIcon.png",
      Label: "CONSTRUCT Query",
      query: "CONSTRUCT { ?s ?p ?o } WHERE { ?s ?p ?o }",
    },
    {
      IconLink: "describeIcon.png",
      Label: "DESCRIBE Query",
      query: "DESCRIBE <http://example.com/resource>",
    },
    {
      IconLink: "insertIcon.png",
      Label: "INSERT Query",
      query:
        "INSERT DATA { <http://example.com/person1> <http://xmlns.com/foaf/0.1/name> 'Alice' }",
    },
    {
      IconLink: "deleteIcon.png",
      Label: "DELETE Query",
      query: "DELETE WHERE { ?s ?p ?o }",
    },
    {
      IconLink: "deleteIcon.png",
      Label: "DELETE WHERE Query",
      query: "DELETE WHERE { ?s ?p 'OldValue' }",
    },
    {
      IconLink: "insertIcon.png",
      Label: "INSERT WHERE Query",
      query:
        "INSERT { ?s <http://example.com/age> 30 } WHERE { ?s a <http://example.com/Person> }",
    },
    {
      IconLink: "insertIcon.png",
      Label: "DELETE + INSERT Query",
      query:
        "DELETE { ?s <http://example.com/age> 25 } INSERT { ?s <http://example.com/age> 26 } WHERE { ?s <http://example.com/age> 25 }",
    },
    {
      IconLink: "insertIcon.png",
      Label: "INSERT INTO GRAPH Query",
      query:
        "INSERT DATA { GRAPH <http://example.com/graph> { <http://example.com/person1> <http://xmlns.com/foaf/0.1/name> 'Alice' } }",
    },
    {
      IconLink: "deleteIcon.png",
      Label: "DELETE FROM GRAPH Query",
      query: "DELETE WHERE { GRAPH <http://example.com/graph> { ?s ?p ?o } }",
    },
    {
      IconLink: "deleteIcon.png",
      Label: "DROP GRAPH Query",
      query: "DROP GRAPH <http://example.com/graph>",
    },
    {
      IconLink: "filterIcon.png",
      Label: "FILTER Query",
      query:
        "SELECT ?s WHERE { ?s <http://example.com/age> ?age FILTER(?age > 25) }",
    },
    {
      IconLink: "optionaIcon.png",
      Label: "OPTIONAL Query",
      query:
        "SELECT ?s ?name ?email WHERE { ?s <http://xmlns.com/foaf/0.1/name> ?name OPTIONAL { ?s <http://xmlns.com/foaf/0.1/mbox> ?email } }",
    },
    {
      IconLink: "unionIcon.png",
      Label: "UNION Query",
      query:
        "SELECT ?s WHERE { { ?s <http://example.com/type> <http://example.com/Person> } UNION { ?s <http://example.com/type> <http://example.com/Organization> } }",
    },
    {
      IconLink: "bindIcon.png",
      Label: "BIND Query",
      query:
        "SELECT ?s ?ageInDays WHERE { ?s 'URI' ?age BIND(?age * 365 AS ?ageInDays) }",
    },
    {
      IconLink: "grouping.png",
      Label: "GROUP BY & COUNT Query",
      query:
        "SELECT ?type (COUNT(?s) AS ?count) WHERE { ?s a ?type } GROUP BY ?type",
    },
  ];

  return (
    <div className={classes}>
      {items.map((item, index) => (
        <SideBarItem
          key={index}
          IconLink={item.IconLink}
          Label={item.Label}
          isActive={activeIndex === index}
          onClick={() => handleItemClick(index, item.query)}
        />
      ))}
    </div>
  );
}

export default SideBar;
