const todo = [
];

function template(judul, status, index) {
    const elementHTML = `
        <li>
            ${judul} | ${status} | @{NOW.format("YYYY-MM-DD HH:mm:ss")} | 
            <button onclick="ubah(${index})">Ubah</button> 
            <button onclick="hapus(${index})">Hapus</button>
        </li>
        `;
    
    return elementHTML;
}

function tambah() {
    const judul = prompt("Masukkan nama todo");
    const status = prompt("Masukkan status todo");
    console.log(judul, status);
    const databaru = {judul: judul, status: status};
    console.log(databaru);

    // menambahkan data ke variable todo
    todo.push(databaru);

    // update html
    document.getElementById("data").innerHTML = ''; // refresh
    todo.map((value, index) => {
        console.log(value, "Ini index ", index);
        document.getElementById("data").innerHTML += template(value.judul, value.status, value.tanggal)
    })
}

function ubah(index) {
    alert(`fungsi ubah | ini adalah data dengan index ke ${index}`);
}

function hapus(index) {
    alert(`fungsi hapus | ini adalah data dengan index ke ${index}`);
}