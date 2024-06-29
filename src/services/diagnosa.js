import {
  buatPetaGejala,
  determinePenyakit,
  hitungPremisKombinasi,
  hitungPremisTunggal,
} from "@/utils/diagnosa";
import { fetchAllGejala } from "./gejala";

const diagnosaPenyakit = async (data) => {
  const dataGejala = await fetchAllGejala();
  // Ambil semua kunci dan urutkan berdasarkan nomor setelah 'G'
  const sortedKeys = Object.keys(data).sort((a, b) => {
    const numA = parseInt(a.slice(1));
    const numB = parseInt(b.slice(1));
    return numA - numB;
  });

  // Buat array berisi objek sesuai urutan kunci yang diurutkan
  const cfUser = sortedKeys.map((key) => ({
    [key]: data[key],
  }));

  // INISIALISASI PENYAKIT SESUAI RULES
  const penyakit1 = await determinePenyakit("P01", cfUser);
  const penyakit2 = await determinePenyakit("P02", cfUser);
  const penyakit3 = await determinePenyakit("P03", cfUser);
  const penyakit4 = await determinePenyakit("P04", cfUser);
  const penyakit5 = await determinePenyakit("P05", cfUser);
  const penyakit6 = await determinePenyakit("P06", cfUser);
  const penyakit7 = await determinePenyakit("P07", cfUser);

  // Penggunaan fungsi buatPetaGejala untuk beberapa penyakit
  const penyakit1Map = buatPetaGejala(penyakit1);
  const penyakit2Map = buatPetaGejala(penyakit2);
  const penyakit3Map = buatPetaGejala(penyakit3);
  const penyakit4Map = buatPetaGejala(penyakit4);
  const penyakit5Map = buatPetaGejala(penyakit5);
  const penyakit6Map = buatPetaGejala(penyakit6);
  const penyakit7Map = buatPetaGejala(penyakit7);

  // Penggunaan fungsi hitungPremisTunggal untuk penyakit1
  const premisTunggal1 = hitungPremisTunggal(dataGejala, penyakit1Map);
  const premisTunggal2 = hitungPremisTunggal(dataGejala, penyakit2Map);
  const premisTunggal3 = hitungPremisTunggal(dataGejala, penyakit3Map);
  const premisTunggal4 = hitungPremisTunggal(dataGejala, penyakit4Map);
  const premisTunggal5 = hitungPremisTunggal(dataGejala, penyakit5Map);
  const premisTunggal6 = hitungPremisTunggal(dataGejala, penyakit6Map);
  const premisTunggal7 = hitungPremisTunggal(dataGejala, penyakit7Map);

  const premisKombinasiPenyakit1 = hitungPremisKombinasi(premisTunggal1);
  const premisKombinasiPenyakit2 = hitungPremisKombinasi(premisTunggal2);
  const premisKombinasiPenyakit3 = hitungPremisKombinasi(premisTunggal3);
  const premisKombinasiPenyakit4 = hitungPremisKombinasi(premisTunggal4);
  const premisKombinasiPenyakit5 = hitungPremisKombinasi(premisTunggal5);
  const premisKombinasiPenyakit6 = hitungPremisKombinasi(premisTunggal6);
  const premisKombinasiPenyakit7 = hitungPremisKombinasi(premisTunggal7);
  console.log(premisKombinasiPenyakit1);
  console.log(premisKombinasiPenyakit2);
  console.log(premisKombinasiPenyakit3);
  console.log(premisKombinasiPenyakit4);
  console.log(premisKombinasiPenyakit5);
  console.log(premisKombinasiPenyakit6);
  console.log(premisKombinasiPenyakit7);

  const hasilAkhir = {
    P01: premisKombinasiPenyakit1.nilai_cf_akhir,
    P02: premisKombinasiPenyakit2.nilai_cf_akhir,
    P03: premisKombinasiPenyakit3.nilai_cf_akhir,
    P04: premisKombinasiPenyakit4.nilai_cf_akhir,
    P05: premisKombinasiPenyakit5.nilai_cf_akhir,
    P06: premisKombinasiPenyakit6.nilai_cf_akhir,
    P07: premisKombinasiPenyakit7.nilai_cf_akhir,
  };
  console.log(hasilAkhir);
  return hasilAkhir;
};

export { diagnosaPenyakit };
