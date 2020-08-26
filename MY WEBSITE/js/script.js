function bukutamu() {
    console.log("berhasil");
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var komentar = document.getElementById("komentar").value;



    if (nama == "") {
        alert("Nama harus diisi");

    }
    else if (email == " ") {
        alert("email harus diisi");

    }
    else if (komentar == " ") {
        alert("komentar harus diisi");

    } else ("")
    console.log(nama);
    document.getElementById("list").innerHTML = `<table>
    
    <hr>
    <tr>
    <td> nama </td>
    <td> : </td>
    <td> `+ nama + `</td>
    </tr>

    <tr>
    <td> email</td>
    <td> : </td>
    <td> `+ email + `</td>
    </tr>

    <tr>
    <td> komentar </td>
    <td> : </td>
    <td> `+ komentar + `</td>
    </tr>
   
    
    </table>`
}
