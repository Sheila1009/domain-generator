/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".es", ".com "];

  function generatorDomainNames(pronoun, adj, noun, ext) {
    for (let i = 0; i < pronoun.length; i++) {
      for (let o = 0; o < adj.length; o++) {
        for (let u = 0; u < noun.length; u++) {
          for (let a = 0; a < ext.length; a++) {
            let domainNames = pronoun[i] + adj[o] + noun[u] + ext[a];
            console.log(domainNames);
          }
        }
      }
    }
  }

  generatorDomainNames(pronoun, adj, noun, ext);
  console.log(generatorDomainNames(pronoun, adj, noun, ext));
};
