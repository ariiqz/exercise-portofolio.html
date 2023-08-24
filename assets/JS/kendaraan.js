class Kendaraan {
  constructor(merk, tahunProduksi) {
      this.__merk = merk;
      this.__tahunProduksi = tahunProduksi;
  }

  get merk() {
      return this.__merk;
  }

  set merk(newMerk) {
      this.__merk = newMerk;
  }

  get tahunProduksi() {
      return this.__tahunProduksi;
  }

  set tahunProduksi(newTahunProduksi) {
      this.__tahunProduksi = newTahunProduksi;
  }

  hitungUsia() {
      const tahunSekarang = new Date().getFullYear();
      return tahunSekarang - this.__tahunProduksi;
  }
}

class Mobil extends Kendaraan {
  constructor(merk, tahunProduksi, jumlahPintu) {
      super(merk, tahunProduksi);
      this.__jumlahPintu = jumlahPintu;
  }

  get jumlahPintu() {
      return this.__jumlahPintu;
  }

  set jumlahPintu(newJumlahPintu) {
      this.__jumlahPintu = newJumlahPintu;
  }

  infoUsia() {
      const usia = this.hitungUsia();
      return `Usia mobil ${this.merk} adalah ${usia} tahun.`;
  }
}

class Motor extends Kendaraan {
  constructor(merk, tahunProduksi, tipe) {
      super(merk, tahunProduksi);
      this.__tipe = tipe;
  }

  get tipe() {
      return this.__tipe;
  }

  set tipe(newTipe) {
      this.__tipe = newTipe;
  }

  infoUsia() {
      const usia = this.hitungUsia();
      return `Usia motor ${this.merk} adalah ${usia} tahun.`;
  }
}

// Contoh penggunaan
const mobil = new Mobil("Honda", 2023, "Sport");
const motor = new Motor("Vespa", 1992, "Scooter");

console.log(mobil.infoUsia());
console.log(motor.infoUsia());

