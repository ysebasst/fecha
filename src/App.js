import React, { useState, useEffect, useRef } from "react";

function App() {
  const [diaSemana, setDiaSemana] = useState("Lunes");
  const [fecha, setFecha] = useState("1 Enero 2000");
  const [hora, setHora] = useState("00:00:00");

  const element = useRef();

  const nombresDia = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];

  const nombresMes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  function cambiarHora() {
    let date = new Date();
    let diaSem = nombresDia[date.getDay()];
    let diaMes = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let mes = nombresMes[date.getMonth()];
    let year = date.getFullYear();

    let hora = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    hora = hora < 10 ? `0${hora}` : hora;
    let min =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    let seg =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    setDiaSemana(`${diaSem}`);
    setFecha(`${diaMes} ${mes} ${year}`);
    setHora(`${hora}:${min}:${seg}`);

    if (date.getMinutes() === 0 && date.getSeconds() % 2 === 0) {
      element.current.classList.add("en-punto");
    } else {
      element.current.classList.remove("en-punto");
    }
  }

  useEffect(() => {
    setInterval(cambiarHora, 500);
  });

  return (
    <div className="content fecha-hora" ref={element}>
      <div className="hora">{hora}</div>
      <div className="fecha">{fecha}</div>
      <div className="dia-semana">{diaSemana}</div>
    </div>
  );
}

export default App;
