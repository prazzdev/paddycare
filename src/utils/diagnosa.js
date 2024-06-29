//   RULES
const determinePenyakit = (penyakit, cfUser) => {
  let gejalaPenyakit = [];

  switch (penyakit) {
    case "P01":
      gejalaPenyakit = cfUser.filter(
        (gejala) =>
          gejala.hasOwnProperty("G01") ||
          gejala.hasOwnProperty("G02") ||
          gejala.hasOwnProperty("G03") ||
          gejala.hasOwnProperty("G04") ||
          gejala.hasOwnProperty("G05")
      );
      console.log(gejalaPenyakit);
      break;
    case "P02":
      gejalaPenyakit = cfUser.filter(
        (gejala) =>
          gejala.hasOwnProperty("G06") ||
          gejala.hasOwnProperty("G07") ||
          gejala.hasOwnProperty("G08") ||
          gejala.hasOwnProperty("G09") ||
          gejala.hasOwnProperty("G10")
      );
      break;
    case "P03":
      gejalaPenyakit = cfUser.filter(
        (gejala) =>
          gejala.hasOwnProperty("G11") ||
          gejala.hasOwnProperty("G12") ||
          gejala.hasOwnProperty("G13") ||
          gejala.hasOwnProperty("G14")
      );
      break;
    case "P04":
      gejalaPenyakit = cfUser.filter(
        (gejala) =>
          gejala.hasOwnProperty("G15") ||
          gejala.hasOwnProperty("G16") ||
          gejala.hasOwnProperty("G17") ||
          gejala.hasOwnProperty("G18") ||
          gejala.hasOwnProperty("G19")
      );
      break;
    case "P05":
      gejalaPenyakit = cfUser.filter(
        (gejala) =>
          gejala.hasOwnProperty("G20") ||
          gejala.hasOwnProperty("G21") ||
          gejala.hasOwnProperty("G22") ||
          gejala.hasOwnProperty("G23")
      );
      break;
    case "P06":
      gejalaPenyakit = cfUser.filter(
        (gejala) =>
          gejala.hasOwnProperty("G24") ||
          gejala.hasOwnProperty("G25") ||
          gejala.hasOwnProperty("G26")
      );
      break;
    case "P07":
      gejalaPenyakit = cfUser.filter(
        (gejala) =>
          gejala.hasOwnProperty("G27") ||
          gejala.hasOwnProperty("G28") ||
          gejala.hasOwnProperty("G29") ||
          gejala.hasOwnProperty("G30") ||
          gejala.hasOwnProperty("G31") ||
          gejala.hasOwnProperty("G32")
      );
      break;
    default:
      console.log("Tidak ada penyakit yang sesuai dengan gejala tersebut.");
  }
  console.log("Gejala penyakit", penyakit, ":", gejalaPenyakit);
  return gejalaPenyakit;
};

// Fungsi untuk membuat peta gejala dari data penyakit
function buatPetaGejala(penyakit) {
  return penyakit.reduce((acc, gejala) => {
    const kode_gejala = Object.keys(gejala)[0];
    acc[kode_gejala] = parseFloat(gejala[kode_gejala]);
    console.log(acc);
    return acc;
  }, {});
}

// Fungsi untuk menghitung premis tunggal
function hitungPremisTunggal(dataGejala, penyakitMap) {
  return dataGejala
    .filter((gejala) => penyakitMap.hasOwnProperty(gejala.kode_gejala))
    .map((gejala) => ({
      ...gejala,
      nilai_cf: gejala.nilai_cf * penyakitMap[gejala.kode_gejala],
    }));
}

function hitungPremisKombinasi(premisTunggal) {
  const hasilPremisKombinasi = [];
  let cfKombinasi = 0;

  for (let i = 0; i < premisTunggal.length; i++) {
    const cfTunggal = premisTunggal[i].nilai_cf;
    const cfKombinasiBaru = cfTunggal + cfKombinasi * (1 - cfTunggal);
    cfKombinasi = cfKombinasiBaru;

    hasilPremisKombinasi.push({
      nilai_cf: cfKombinasi.toFixed(3),
    });
  }

  const cfAkhir = cfKombinasi * 100;

  return {
    premisKombinasi: hasilPremisKombinasi,
    nilai_cf_akhir: cfAkhir.toFixed(2),
  };
}

export {
  determinePenyakit,
  buatPetaGejala,
  hitungPremisTunggal,
  hitungPremisKombinasi,
};
