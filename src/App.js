import React, { useState } from "react";
import "./App.css";

const khodams = [
  { name: "Raja Jomok", img: "/images/rajajomok.jpg" },
  { name: "Ijad Fotografer", img: "/images/langsungskrinsotiijad.png" },
  { name: "Hunaini Antapani", img: "/images/hunainew.png" },
  { name: "Japran Squad", img: "/images/kepala japran.png" },
  { name: "Hasnan Sukuna", img: "/images/hasnansukuna.jpg" },
  { name: "Maling Smarthos", img: "/images/maling smarthos.jpg" },
  { name: "Raja Jomok", img: "/images/rajajomok.jpg" },
  { name: "Ijad Jadul", img: "/images/ijadul.jpg" },
  { name: "Steven Sussy", img: "/images/sussy.png" },
  { name: "Raja Jomok", img: "/images/rajajomok.jpg" },
  { name: "Hasnan 19 Detik", img: "/images/hasnan19detik.png" },
  { name: "Raja Jomok", img: "/images/rajajomok.jpg" },
  { name: "Mas Rusdi", img: "/images/diamaja.jpg" },
  { name: "Raja Jomok", img: "/images/rajajomok.jpg" },
  { name: "Aril Valorant", img: "/images/prxariela.jpg" },
  { name: "Anomali", img: "/images/stv.png" },
  { name: "Duo Maut", img: "/images/party.jpg" },
  { name: "Mbah Apek", img: "/images/mbah.jpg" },
];

function App() {
  const [name, setName] = useState("");
  const [resultName, setResultName] = useState("");
  const [khodam, setKhodam] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      return;
    }
    setKhodam("");
    setLoading(true);
    setResultName(name);
    setTimeout(() => {
      const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
      setKhodam(randomKhodam);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900  text-white p-4">
      <h1 className="text-5xl font-bold mb-6 text-red-600">Cek Khodam Anda</h1>
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama Anda"
          className="px-4 py-2 border border-gray-500 rounded-md bg-gray-800 text-white"
        />
        <button
          type="submit"
          className="ml-4 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800"
        >
          Cek
        </button>
      </form>
      {loading ? (
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold mb-4">
            Kami sedang menganalisa sosok aseli dari diri mu...
          </h2>
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
        </div>
      ) : (
        khodam && (
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl font-semibold ">
              {resultName}, khodam Anda adalah:
            </h2>
            <h1 className="mb-6 mt-4">
              <span className="text-red-500 font-bold text-4xl ">
                {khodam.name}
              </span>{" "}
            </h1>
            <img
              src={khodam.img}
              alt={khodam.name}
              className="w-64 h-64 object-cover rounded-md border-4 border-red-700"
            />
          </div>
        )
      )}
      {khodam && khodam.name === "Hasnan 19 Detik" && (
        <div className="mt-4">Infokan Link</div>
      )}
      {khodam && khodam.name === "Raja Jomok" && (
        <a
          href="https://www.instagram.com/nzakipermana/"
          className="mt-4 text-blue-400"
        >
          {" "}
          Hubungi Khodam anda
        </a>
      )}
    </div>
  );
}

export default App;
