
import React from "react";


function BoasVindas({ usuario }) {
  return <h1> Bem vindo de volta, {usuario}!</h1>;
}


export default function MyApp() {
  return <BoasVindas usuario="Júlia" />;
}
