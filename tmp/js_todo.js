const todo=[];function template(judul,status,tanggal,index){const elementHTML=`
        <li>
            ${judul} | ${status} |  ${tanggal}| 
            <button onclick="ubah(${index})">Ubah</button> 
            <button onclick="hapus(${index})">Hapus</button>
        </li>
        `;return elementHTML}function tambah(){const judul=prompt("Masukkan nama todo");const status=prompt("Masukkan status todo");const tanggal=new Date().toLocaleString();console.log(judul,status,tanggal);const databaru={judul:judul,status:status,tanggal:tanggal};console.log(databaru);todo.push(databaru);document.getElementById("data").innerHTML='';todo.map((value,index)=>{console.log(value,"Ini index ",index);document.getElementById("data").innerHTML+=template(value.judul,value.status,value.tanggal,index)})}function ubah(index){alert(`fungsi ubah | ini adalah data dengan index ke ${index}`)}function hapus(index){alert(`fungsi hapus | ini adalah data dengan index ke ${index}`)}