import { diagnosaPenyakit } from "@/services/diagnosa";
import { fetchAllGejala } from "@/services/gejala";
import { fetchAllPenyakit } from "@/services/penyakit";
import { fetchAllTingkatKeyakinan } from "@/services/tingkat-keyakinan";
import { useEffect, useState } from "react";

const DiagnoseView = () => {
  const [allGejala, setAllGejala] = useState([]);
  const [allPenyakit, setAllPenyakit] = useState([]);
  const [allTingkatKeyakinan, setAllTingkatKeyakinan] = useState([]);
  const [answers, setAnswers] = useState({
    G01: "0.2",
    G03: "0.4",
    G02: "0",
    G04: "1",
    G05: "0.4",
    G06: "0.4",
    G07: ".8",
    G08: "1",
    G09: "0",
    G10: "0.2",
    G11: "0.4",
    G12: "0.2",
    G13: "0.4",
    G14: "0.4",
    G15: "0.2",
    G16: "0.4",
    G17: "0.6",
    G18: "0.2",
    G19: "0.4",
    G20: "0.6",
    G21: "0.6",
    G22: "1",
    G23: "1",
    G24: "0.8",
    G25: "0.8",
    G26: "0.2",
    G27: "0.2",
    G28: "1",
    G29: "0.4",
    G30: "0.4",
    G31: "0.4",
    G32: "0.8",
  });
  const [diagnosaAkhir, setDiagnosaAkhir] = useState([]);
  console.log(diagnosaAkhir);
  const [error, setError] = useState("");

  const getData = async (whichData, whichSetAll) => {
    const data = await whichData();
    whichSetAll(data);
    return data;
  };
  useEffect(() => {
    getData(fetchAllGejala, setAllGejala);
    getData(fetchAllPenyakit, setAllPenyakit);
    getData(fetchAllTingkatKeyakinan, setAllTingkatKeyakinan);
  }, []);

  const handleChange = (e, questionId) => {
    setAnswers({
      ...answers,
      [questionId]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const allAnswered = allGejala.every(
    //   (gejala, id) => answers[id] && answers[id] !== ""
    // );
    // if (!allAnswered) {
    //   setError("Semua pertanyaan harus dijawab.");
    //   alert("Isi semua pertanyaan terlebih dahulu sebelum submit!");
    //   return;
    // }
    // setError("");
    try {
      const hasilDiagnosa = await diagnosaPenyakit(answers);
      console.log("Hasil diagnosa: ", hasilDiagnosa);
      const kodePenyakitDiagnosa = Object.keys(hasilDiagnosa);
      console.log("Kode penyakit diagnosa: ", kodePenyakitDiagnosa);
      console.log("All penyakit: ", allPenyakit);
      const hasilDiagnosaAkhir = allPenyakit
        .filter((penyakit) => {
          const result = kodePenyakitDiagnosa.includes(penyakit.kode_penyakit);
          console.log(`Filtering ${penyakit.kode_penyakit}: ${result}`);
          return result;
        })
        .map((penyakit) => {
          const nilai_cf = parseFloat(hasilDiagnosa[penyakit.kode_penyakit]);
          console.log(`Mapping ${penyakit.kode_penyakit}: ${nilai_cf}`);
          return {
            ...penyakit,
            nilai_cf,
          };
        })
        .sort((a, b) => b.nilai_cf - a.nilai_cf);
      console.log(hasilDiagnosaAkhir);
      setDiagnosaAkhir(hasilDiagnosaAkhir);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="w-[100%]">
        <form
          onSubmit={handleSubmit}
          className="p-[1em] lg:p-[3em] lg:pb-[2em] bg-gray-800"
        >
          <div className="w-full flex flex-row justify-between gap-[1em] flex-wrap">
            {allGejala.map((gejala, index) => (
              <fieldset
                key={index}
                className="w-[100%] lg:w-[45vw] flex flex-col lg:flex-row justify-between p-3 bg-gray-300"
              >
                {/* <legend>{gejala.nama_gejala}</legend> */}
                <label htmlFor={gejala.kode_gejala} className="mb-3 lg:mb-0">
                  {gejala.nama_gejala} (CF {gejala.nilai_cf})
                </label>
                <select
                  id={gejala.kode_gejala}
                  name={gejala.kode_gejala}
                  value={answers[gejala.kode_gejala] || ""}
                  onChange={(e) => handleChange(e, gejala.kode_gejala)}
                  required
                  style={{
                    backgroundColor: answers[gejala.kode_gejala]
                      ? "teal"
                      : "salmon",
                    color: answers[gejala.kode_gejala] ? "white" : "white",
                  }}
                >
                  <option value="" disabled>
                    Pilih salah satu
                  </option>
                  {allTingkatKeyakinan.map((tingkatKeyakinan, idx) => (
                    <option key={idx} value={tingkatKeyakinan.nilai_cf}>
                      {tingkatKeyakinan.tingkat}
                    </option>
                  ))}
                </select>
              </fieldset>
            ))}
          </div>
          <button type="submit" className="w-full bg-blue-300 my-6 p-3">
            Diagnosa
          </button>
        </form>
      </div>
      {diagnosaAkhir.length > 0 && (
        <div className="w-[100%] p-[2em] lg:px-[4em] bg-teal-400">
          <h1 className="text-3xl text-center mb-[1em]">Hasil Diagnosa:</h1>
          <p className="text-md text-justify lg:text-xl">
            Berdasarkan diagnosa, diperoleh hasil masing-masing penyakit, antara
            lain:{" "}
            {diagnosaAkhir.map((penyakit, i) => (
              <span key={i}>
                {penyakit.nama_penyakit} ({penyakit.nilai_cf}%){", "}
              </span>
            ))}
            sehingga dapat disimpulkan bahwa tanaman padi terkena penyakit{" "}
            <b>{diagnosaAkhir[0].nama_penyakit}</b>.
          </p>
        </div>
      )}

      <div className="flex flex-col lg:flex-row p-[.5em] lg:p-[1em]">
        <div className="container p-2 sm:p-4 dark:text-gray-800 w-[100vw] lg:w-[30vw]">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Tabel Penyakit
          </h2>
          <div className="flex flex-col overflow-x-auto text-xs">
            <div className="flex text-left dark:bg-gray-300">
              <div className="w-32 px-2 py-3 sm:p-3">Kode Penyakit</div>
              <div className="flex-1 px-2 py-3 sm:p-3">Nama Penyakit</div>
            </div>
            {allPenyakit.map((penyakit, i) => {
              return (
                <div className="flex border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <div className="w-32 px-2 py-3 sm:p-3">
                    <p>{penyakit.kode_penyakit}</p>
                  </div>
                  <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">
                    {penyakit.nama_penyakit}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container p-2 sm:p-4 dark:text-gray-800 w-[100vw] lg:w-[30vw]">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Tabel Gejala
          </h2>
          <div className="flex flex-col overflow-x-auto text-xs">
            <div className="flex text-left dark:bg-gray-300">
              <div className="w-32 px-2 py-3 sm:p-3">Kode Gejala | CF</div>
              <div className="flex-1 px-2 py-3 sm:p-3">Nama Gejala</div>
            </div>
            {allGejala.map((gejala, i) => {
              return (
                <div className="flex border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <div className="w-32 px-2 py-3 sm:p-3">
                    <p>
                      {gejala.kode_gejala} (CF {gejala.nilai_cf})
                    </p>
                  </div>
                  <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">
                    {gejala.nama_gejala}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container p-2 sm:p-4 dark:text-gray-800 w-[100vw] lg:w-[30vw]">
          <h2 className="mb-4 text-2xl font-semibold leading-tight">
            Tabel Tingkat Keyakinan
          </h2>
          <div className="flex flex-col overflow-x-auto text-xs">
            <div className="flex text-left dark:bg-gray-300">
              <div className="w-32 px-2 py-3 sm:p-3">Keyakinan</div>
              <div className="flex-1 px-2 py-3 sm:p-3">Nilai CF</div>
            </div>
            {allTingkatKeyakinan.map((tingkatKeyakinan, i) => {
              return (
                <div className="flex border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <div className="w-32 px-2 py-3 sm:p-3">
                    <p>{tingkatKeyakinan.tingkat}</p>
                  </div>
                  <div className="flex-1 block px-2 py-3 truncate sm:p-3 sm:w-auto">
                    {tingkatKeyakinan.nilai_cf}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default DiagnoseView;
