import React, { useState } from "react";
import "./App.css";

const khodams = [
  { name: "Ijad Fotografer", img: "/images/langsungskrinsotiijad.png" },
  { name: "Hunaini Antapani", img: "/images/hunainew.png" },
  { name: "Japran Kuyang", img: "/images/kepala japran.png" },
  { name: "Hasnan Sukuna", img: "/images/hasnansukuna.jpg" },
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
    setLoading(true);
    setResultName(name);
    setTimeout(() => {
      const randomKhodam = khodams[Math.floor(Math.random() * khodams.length)];
      setKhodam(randomKhodam);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
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
    </div>
  );
}

export default App;
