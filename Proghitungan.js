// membuat fungsi perhitungan
function hitung()
{
//mendapatkan nilai dari variabel 1
var variabel1 = document.getElementById("variabel1").value; 
//mendapatkan nilai dari variabel 2
var variabel2 = document.getElementById("variabel2").value; 
//mendapatkan nilai dari pilihan operator
var operator = document.getElementById("operator").value; 
	// membuat variabel untuk menampung hasil perhitungan
      var hasilhitung = 0;
	// memilih operator
	switch (operator)
	{
		
		case "1": // jika pilihan operator nomor 1
			hasilhitung = parseInt(variabel1) + parseInt(variabel2);
		break;
		case "2": // jika pilihan operator nomor 2
			hasilhitung = parseInt(variabel1) - parseInt(variabel2);
		break;
		case "3": // jika pilihan operator nomor 3
			hasilhitung = parseInt(variabel1) * parseInt(variabel2);
		break;
		case "4": // jika pilihan operator nomor 4
			hasilhitung = parseInt(variabel1) / parseInt(variabel2);
		break;
	}
	
// menampilkan hasil
document.getElementById("hasil").innerHTML = hasilhitung;
}
