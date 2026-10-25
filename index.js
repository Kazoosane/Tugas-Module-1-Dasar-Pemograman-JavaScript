//tugas 1
const namaSiswa = "Hadi Sumanjaya"
//tugas 2
const nilaiUjian = 87;
//tugas 3
const cekKelulusan = (angka) => {
    if(angka >= 80) return 'Lulus'
    if(angka >= 75) return 'Nilai pas KKM'
    if(angka < 75) return 'Remedial'
} 
//tugas 4
const statusSiswa = cekKelulusan(nilaiUjian);
console.log(`Siswa bernama ${namaSiswa} mendapatkan nilai ${nilaiUjian}. Status: ${statusSiswa}`)