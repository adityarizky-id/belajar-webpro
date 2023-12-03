//enkapsulasi
class Bentuk {
    constructor(nama, panjang, lebar) {
        this.nama = nama;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    luas() {
        return this.panjang * this.lebar;
    }

    keliling() {
        return 2 * (this.panjang + this.lebar);
    }
}