const todo = [
    { judul: 'Buat website', status: 'design', tanggal: '2024-09-29'}
];

function tambah() {
    const judul = prompt("Masukkan nama todo");
    const status = prompt("Masukkan status todo");
    console.log(nama, status);
    const dataBaru = {judul: nama, status: status};
    console.log(dataBaru);
    todo.push();
}

function ubah(index) {
    alert(`fungsi ubah | ini adalah data dengan index ke ${index}`);
}

function hapus(index) {
    alert(`fungsi hapus | ini adalah data dengan index ke ${index}`);
}