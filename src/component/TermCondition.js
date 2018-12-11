import React, { Component } from 'react';
import Footer from '../layout/Footer';
import SubFooter from '../layout/SubFooter';

class Home extends Component {
	render() {
		return (
			<div>
                <header className="header h-fullscreen pb-0">
                    <section className="text-white py-7" style={{backgroundColor:"#50a1ff"}}>
                        <div className="container">
                            <div className="text-center">
                                <h2 className="mb-2">Terms & Condition</h2>
                            </div>
                        </div>
                    </section>
                </header>

				<section className="section pt-8">
					<div className="container">
                        <div className="pb-2">
                            <p>
                                Diharapkan untuk membaca syarat dan ketentuan yang tertera dibawah ini dengan baik sebelum memesan atau menggunakan layanan dari situs dan atau mobile apps kami.
                            </p>
                            <p>
                                PT. Layanan Simpan Mandiri ("Box-in" / kami) adalah sebuah perseroan terbatas yang didirikan berdasarkan hukum Indonesia, yang berdomisili di komplek pergudangan central cakung blok F no 28 Jalan Cakung Cilincing, Jakarta Timur yang merupakan pemilik dan operator dari www.box-in.com dan mobile apps (“Box-in”). Box-in  sebagai penyedia Platform sarana penyewaan tempat berupa kotak/box atau tempat dengan luasan tertentu melalui situs www.box-in.com dan sebuah domain internet yang didaftarkan atas nama Box-in dan/atau Aplikasi iOS dan Android.
                            </p>
                            <p>
                                Untuk menggunakan layanan kami, anda harus terlebih dahulu terdaftar sebagai Pengguna kami. Dengan tetap mengakses Situs ini melalui telepon atau aplikasi telepon genggam kami, Anda setuju untuk terikat dengan Syarat dan Ketentuan ini. 
                            </p>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Hal-Hal Umum</p>
                            <ul>
                                <li>PT. Layanan Simpan Mandiri adalah suatu perseroan yang didirikan berdasarkan hukum Negara Republik Indonesia.</li>
                                <li>Layanan yang tersedia dalam Situs dan / atau Aplikasi ini merupakan aplikasi perangkat lunak yang berfungsi sebagai sarana untuk menghubungkan layanan penyelenggaraan penyewaan tempat berupa kotak atau tempat dengan luasan tertentu pada tempat yang dimiliki atau dikelola oleh Box-in.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Ketentuan Penggunaan Layanan</p>
                            <ul>
                                <li>Anda menyatakan dan menjamin bahwa Anda adalah individu yang secara hukum berhak untuk mengadakan perjanjian yang mengikat berdasarkan hukum Negara Republik Indonesia, khususnya Ketentuan Penggunaan, untuk menggunakan Situs dan / atau aplikasi dan bahwa Anda telah berusia minimal 21 tahun atau sudah menikah dan tidak berada di bawah perwalian. Jika tidak, kami berhak berdasarkan hukum untuk membatalkan perjanjian yang dibuat dengan Anda. Anda selanjutnya menyatakan dan menjamin bahwa Anda memiliki hak, wewenang dan kapasitas untuk menggunakan Layanan dan mematuhi Ketentuan Penggunaan. Jika Anda mendaftarkan atas nama suatu badan hukum, Anda juga menyatakan dan menjamin bahwa Anda berwenang untuk mengadakan, dan mengikatkan diri entitas tersebut pada Ketentuan Penggunaan ini dan mendaftarkan untuk Layanan dan Aplikasi.</li>
                                <li>Kami mengumpulkan dan memproses informasi pribadi Anda, seperti nama, alamat surat elektronik (surel / e-mail), dan nomor telepon seluler Anda ketika Anda mendaftar. Anda harus memberikan informasi yang akurat dan lengkap, memperbaharui informasi dan setuju untuk memberikan kepada kami bukti identitas apapun yang secara wajar dapat kami mintakan. Jika informasi pribadi yang Anda berikan kepada kami ada yang berubah, misalnya, jika Anda mengubah alamat surel, nomor telepon, atau jika Anda ingin membatalkan akun Anda, mohon perbaharui rincian informasi Anda dengan mengirimkan permintaan Anda kepada kami. Kami akan, sepanjang yang dapat kami lakukan, memberlakukan perubahan yang diminta tersebut dalam waktu lima belas (15) hari kerja sejak diterimanya pemberitahuan perubahan.</li>
                                <li>Anda hanya dapat menggunakan Layanan ketika Anda telah terdaftar pada Situs dan / atau aplikasi tersebut. Setelah Anda berhasil mendaftarkan diri, Aplikasi akan memberikan Anda suatu akun pribadi yang dapat diakses dengan kata sandi yang Anda pilih.</li>
                                <li>Hanya Anda yang dapat menggunakan akun Anda sendiri dan Anda berjanji untuk tidak memberikan wewenang kepada orang lain untuk menggunakan identitas Anda atau menggunakan akun Anda. Anda tidak dapat menyerahkan atau mengalihkan akun Anda kepada pihak lain. Anda harus menjaga keamanan dan kerahasiaan kata sandi akun Anda dan setiap identifikasi yang kami berikan kepada Anda. Dalam hal terjadi pengungkapan atas kata sandi Anda, dengan cara apapun, yang mengakibatkan setiap penggunaan yang tidak sah atau tanpa kewenangan atas akun atau identitas Anda, pesanan yang diterima dari penggunaan yang tidak sah atau tanpa kewenangan tersebut masih akan dianggap sebagai pesanan yang sah.</li>
                                <li>Anda berjanji bahwa Anda akan menggunakan Situs dan / atau aplikasi hanya untuk tujuan yang dimaksud untuk mendapatkan Layanan. Anda tidak diperbolehkan untuk menyalahgunakan atau menggunakan Layanan melalui Situs, Aplikasi maupun telefon dan moda lainnya untuk tujuan penipuan atau menyebabkan ketidaknyamanan kepada orang lain atau melakukan pemesanan palsu.</li>
                                <li>Anda tidak diperkenankan untuk membahayakan, mengubah atau memodifikasi Aplikasi dan/atau Situs web atau mencoba untuk membahayakan, mengubah atau memodifikasi Situs / Aplikasi dengan cara apapun. Kami tidak bertanggung jawab jika Anda tidak memiliki perangkat yang sesuai atau jika Anda telah mengunduh versi Aplikasi yang salah untuk perangkat Anda. Kami berhak untuk melarang Anda untuk menggunakan Aplikasi lebih lanjut jika Anda menggunakan Aplikasi dengan perangkat yang tidak kompatibel/cocok atau tidak sah atau untuk tujuan lain selain daripada tujuan yang dimaksud untuk penggunaan Aplikasi ini. Anda berjanji bahwa Anda hanya akan menggunakan suatu jalur akses yang diperbolehkan untuk Anda gunakan.</li>
                                <li>Anda akan menjaga kerahasiaan dan tidak akan menyalahgunakan informasi yang Anda terima dari penggunaan Aplikasi tersebut. </li>
                                <li>Anda memahami dan setuju bahwa penggunaan Aplikasi oleh Anda akan tunduk pula pada Kebijakan Privasi kami sebagaimana dapat diubah dari waktu ke waktu. Dengan menggunakan Aplikasi, Anda juga memberikan persetujuan sebagaimana dipersyaratkan berdasarkan Kebijakan Privasi kami.</li>
                                <li>Dengan memberikan informasi kepada kami, Anda menyatakan bahwa Anda berhak untuk memberikan kepada kami informasi yang akan kami gunakan.</li>
                                <li>Aplikasi tidak boleh dipergunakan untuk memesan Layanan penyewaan tempat untuk:</li>
                                <ul>
                                    <li>Barang yang dilarang oleh pejabat yang berwenang atau barang yang memerlukan lisensi atau izin tertentu dari pejabat yang berwenang.</li>
                                    <li>Binatang peliharaan atau binatang lain</li>
                                    <li>Barang-barang ilegal atau berbahaya atau barang-barang curian, termasuk namun tidak terbatas pada barang-barang yang mengandung bahan berbahaya atau beracun, obat-obatan atau material terlarang/ilegal</li>
                                </ul>
                                <li>Anda harus mengemas dengan benar barang-barang yang rapuh, seperti gelas, keramik, kue atau makanan, untuk pengiriman. Kami tidak akan bertanggung jawab atas segala kerusakan, perubahan bentuk, pembengkokan, kadaluwarsa, pembusukan, bau, tumpahan atau ketidaklengkapan lain dari produk selama pengiriman yang disebabkan oleh kemasan atau pembungkusan yang kurang baik/sesuai.</li>
                                <li>Box-in dapat meminta Anda untuk membuka dan menunjukkan bagian dalam suatu paket untuk memastikan bahwa isinya adalah seperti yang Anda nyatakan.</li>
                                <li>Anda menyatakan bahwa Anda telah, adalah, atau akan menjadi pemilik yang sah atas barang yang ditempatkan. Barang yang ditempatkan bukan barang curian atau diperoleh secara tidak sah dan Anda setuju untuk menjaga, mengganti kerugian dan membebaskan kami dan kami tidak bertanggung jawab atas barang mungkin melanggar peraturan perundang-undangan yang berlaku.</li>
                                <li>Kami berhak menolak untuk menerima barang Anda jika kami memiliki alasan yang wajar untuk mencurigai bahwa Anda telah, atau dengan menerima barang dari Anda, Anda akan melanggar Ketentuan Penggunaan ini atau hukum dan peraturan perundang-undangan yang berlaku.</li>
                                <li>Kami dapat, berdasarkan kebijakan kami, memberikan promosi-promosi yang dapat ditukar untuk manfaat terkait dengan penggunaan Aplikasi. Anda setuju bahwa Anda hanya akan menggunakan promosi tersebut sebagaimana promosi tersebut dimaksudkan dan tidak akan menyalahgunakan, menggandakan, menjual atau mengalihkan promosi tersebut dengan cara apapun. Anda juga memahami bahwa promosi tidak dapat ditukarkan dengan uang tunai dan dapat berakhir pada tanggal tertentu, bahkan sebelum Anda menggunakannya.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Pembayaran</p>
                            <ul>
                                <li>Tarif/biaya yang berlaku untuk Layanan dan produk Box-in dapat ditemukan pada Situs dan melalui Aplikasi. Kami dapat mengubah atau memperbaharui tarif dari waktu ke waktu. </li>
                                <li>Anda setuju bahwa anda akan membayar Layanan yang diberikan kepada anda oleh Box-in secara penuh.</li>
                                <li>Pembayaran dapat dilakukan secara tunai, transfer atau dengan menggunakan Credit Billing setelah anda terdaftar sebagai pengguna tetap. Kami tidak menerima pembayaran dengan cara tunai</li>
                                <li>Biaya untuk Layanan mencakup pajak yang berlaku.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Jaminan</p>
                            <p>Kami tidak memberikan pernyataan, jaminan atau garansi untuk dapat diandalkannya, ketepatan waktu, kualitas, kesesuaian, ketersediaan, akurasi atau kelengkapan dari Layanan, Situs web dan/atau perangkat lunak Aplikasi, termasuk namun tidak terbatas pada Layanan yang diperoleh atau berasal dari Mitra melalui penggunaan Aplikasi tersebut. Kami tidak menyatakan atau menjamin bahwa:</p>
                            <ul>
                                <li>Layanan akan memenuhi kebutuhan atau harapan anda.</li>
                                <li>Setiap data yang tersimpan akan akurat atau dapat diandalkan.</li>
                                <li>Kualitas produk, layanan, informasi, atau bahan-bahan lain yang dibeli atau diperoleh oleh anda melalui Aplikasi akan memenuhi kebutuhan atau harapan anda.</li>
                                <li>Kesalahan atau kecacatan dalam Aplikasi akan diperbaiki.</li>
                                <li>Aplikasi atau server yang menyediakan Aplikasi terbebas dari virus atau komponen berbahaya lainnya.</li>
                                <li>Layanan disediakan untuk anda terbatas hanya pada dasar "sebagaimana adanya". Semua kondisi, pernyataan dan jaminan, baik tersurat, tersirat, yang diwajibkan oleh undang-undang atau sebaliknya, termasuk, namun tidak terbatas pada, jaminan yang tersirat mengenai jual beli, kesesuaian untuk tujuan tertentu, atau tidak adanya pelanggaran hak pihak ketiga, dengan ini dikecualikan dan dikesampingkan dengan batas tertinggi dan maksimum. Anda mengakui dan menyetujui bahwa seluruh risiko yang timbul dari penggunaan Layanan oleh anda tetap semata-mata dan sepenuhnya ada pada anda dan anda tidak akan memiliki hak untuk meminta ganti rugi apapun dari perusahaan.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Kebatasan Tanggung Jawab</p>
                            <ul>
                                <li>Setiap tuntutan terhadap kami dalam hal apapun oleh anda, akan dibatasi dengan jumlah total yang sebenarnya dibayar oleh dan/atau terhutang pada Anda ketika menggunakan Layanan selama peristiwa yang menimbulkan klaim tersebut. Dalam hal apapun kami dan/atau pemberi lisensi kami tidak akan bertanggung jawab kepada anda atau siapa pun atas biaya, bunga, kerusakan atau kerugian dalam segala jenis atau bentuk (termasuk cidera pribadi, gangguan emosi dan hilangnya data, barang, pendapatan, keuntungan, penggunaan atau keuntungan ekonomi lainnya). Perusahaan dan/atau pemberi lisensinya tidak akan bertanggung jawab atas kerugian, kerusakan atau kehilangan barang yang mungkin ditimbulkan oleh atau disebabkan oleh anda atau pada setiap orang untuk siapa anda telah memesan Layanan, termasuk namun tidak terbatas pada kerugian, kerusakan atau cidera yang timbul dari, atau dengan cara apapun sehubungan dengan Layanan dan/atau Aplikasi, termasuk namun tidak terbatas pada penggunaan atau ketidakmampuan untuk menggunakan Layanan dan/atau Aplikasi.</li>
                                <li>Jika terjadi tidak terpenuhinya kewajiban Anda dalam membayar uang/tarif sewa, maka:</li>
                                <ul>
                                    <li>Box-in tidak bertanggung jawab terhadap keamanan barang dalam kotak maupun tempat yang disewa.</li>
                                    <li>Box-in tidak memiliki kewajiban dalam menjaga barang Anda dan Anda membebaskan Box-in dalam permasalahan yang timbul atas barang tersebut dan tidak akan menuntut Box-in atas segala yang terjadi dalam barang tersebut. </li>
                                    <li>Box-in memiliki hak dalam melakukan pemusnahan dalam bentuk dan cara apapun jika barang masih dalam lokasi Box-in dan tidak dilakukan pembayaran sewa dalam masa 3 bulan berturut-turut. </li>                                    
                                </ul>
                                <li>Anda secara tegas mengesampingkan dan melepaskan kami dari setiap dan semua kewajiban, tuntutan atau kerusakan yang timbul dari atau dengan cara apapun sehubungan dengan Mitra jika digunakan oleh Box-in. Perusahaan tidak akan menjadi pihak dalam sengketa, negosiasi sengketa antara anda dan Mitra. Tanggung jawab untuk keputusan yang anda buat atas Layanan yang ditemukan melalui Aplikasi merupakan tanggung jawab dan melekat seutuhnya dengan dan pada anda. Anda secara tegas mengesampingkan dan melepaskan kami dari setiap dan semua kewajiban, tuntutan, penyebab tindakan, atau kerusakan yang timbul dari penggunaan Layanan, perangkat lunak dan/atau Aplikasi, atau dengan cara apapun terkait dengan Mitra yang diperkenalkan kepada anda melalui Aplikasi.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Ketentuan Ganti Rugi</p>
                            <p>Dengan menggunakan Layanan pada Situs Web, Telefon Chatting (Whatsapp) dan / atau Aplikasi ini, anda setuju bahwa anda akan membela, memberikan ganti rugi dan membebaskan kami, pemberi lisensi, afiliasi, dan masing-masing dari petugas, direktur, komisaris, karyawan, pengacara dan agen kami dari dan terhadap setiap dan semua klaim, biaya, kerusakan, kerugian, kewajiban dan biaya (termasuk biaya dan ongkos pengacara) yang timbul dari atau sehubungan dengan:</p>
                            <ul>
                                <li>Penggunaan Layanan dan/atau Aplikasi oleh anda, hubungan anda dengan Mitra, penyedia pihak ketiga, mitra, pemasang iklan dan/atau sponsor.</li>
                                <li>Pelanggaran atas atau tidak dipatuhinya salah satu Ketentuan Penggunaan atau peraturan perundang-undangan yang berlaku, baik yang disebutkan di sini atau tidak.</li>
                                <li>Pelanggaran anda terhadap hak-hak pihak ketiga, termasuk Mitra pihak ketiga yang diatur melalui Aplikasi.</li>
                                <li>Penggunaan atau penyalahgunaan Aplikasi. Kewajiban pembelaan dan pemberian ganti rugi ini akan tetap berlaku walaupun Ketentuan Penggunaan dan penggunaan Situs oleh anda telah berakhir.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Perijinan</p>
                            <p>Dengan tergantung pada kepatuhan anda pada Ketentuan Penggunaan, kami memberikan anda ijin yang terbatas, non-eksklusif, tidak dapat dipindahtangankan, tidak dapat dialihkan, tidak dapat disublisensikan, ijin yang dapat ditarik untuk mengunduh dan memasang salinan Aplikasi pada suatu perangkat bergerak tunggal yang anda miliki atau kontrol dan menjalankan salinan Aplikasi semata-mata untuk kebutuhan pribadi, non-komersial anda sendiri.</p>
                            <ul>
                                <li>Anda tidak diperkenankan (i) menyalin, memodifikasi, mengadaptasi, menerjemahkan, membuat karya turunan dari, mendistribusikan, memberikan lisensi, menjual, mengalihkan, menampilkan di muka umum, membuat ulang, mentransmisikan, memindahkan, menyiarkan, menguraikan, atau membongkar bagian manapun dari atau dengan cara lain yang mungkin mengeksploitasi Aplikasi, kecuali sebagaimana diperbolehkan dalam Ketentuan Penggunaan ini, (ii) memberikan lisensi, mensublisensikan, menjual, menjual kembali, memindahkan, mengalihkan, mendistribusikan atau mengeksploitasi secara komersial atau membuat tersedia kepada pihak ketiga Aplikasi dan / atau perangkat lunak dengan cara; (iii) menciptakan "link" internet ke Aplikasi atau "frame" atau "mirror" setiap perangkat lunak pada server lain atau perangkat nirkabel atau yang berbasis internet; (iv) merekayasa ulang atau mengakses perangkat lunak kami untuk (a) membangun produk atau layanan tandingan, (b) membangun produk dengan menggunakan ide, fitur, fungsi atau grafis sejenis Aplikasi, atau (c) menyalin ide, fitur , fungsi atau grafis Aplikasi, (v) meluncurkan program otomatis atau script, termasuk, namun tidak terbatas pada, web spiders, web crawlers, web robots, web ants, web indexers, bots, virus atau worm, atau segala program apapun yang mungkin membuat beberapa permintaan server per detik, atau menciptakan beban berat atau menghambat operasi dan/atau kinerja Aplikasi, (vi) menggunakan robot, spider, pencarian situs/aplikasi pengambilan kembali, atau perangkat manual atau otomatis lainnya atau proses untuk mengambil, indeks, "tambang data" (data mine), atau dengan cara apapun memperbanyak atau menghindari struktur navigasi atau presentasi dari aplikasi atau isinya; (vii) menerbitkan, mendistribusikan atau memperbanyak dengan cara apapun materi yang dilindungi hak cipta, merek dagang, atau informasi yang dimiliki lainnya tanpa memperoleh persetujuan terlebih dahulu dari pemilik hak milik, (viii) menghapus setiap hak cipta, merek dagang atau pemberitahuan hak milik lainnya yang terkandung dalam aplikasi. Tidak ada lisensi atau hak yang diberikan kepada anda dengan implikasi berdasarkan hak kekayaan intelektual dimiliki atau dikendalikan oleh kami atau pemberi lisensi kami, kecuali untuk lisensi dan hak tersebut secara tegas diberikan dalam Ketentuan Penggunaan ini.</li>
                                <li>Anda (i) tidak akan mengirim spam atau pesan yang bersifat duplikasi atau tidak diminta yang melanggar hukum berlaku; (ii) tidak akan mengirim atau menyimpan materi yang melanggar, cabul, mengancam, memfitnah, atau melanggar hukum atau bersifat sadis, termasuk namun tidak terbatas pada bahan berbahaya bagi anak-anak atau yang melanggar hak privasi pihak ketiga; (iii) tidak akan mengirim bahan yang mengandung virus piranti lunak, worm, trojan horses atau kode komputer berbahaya lainnya, dokumen/file, script, agen atau program; (iv) tidak mengganggu atau mengacaukan integritas atau kinerja Aplikasi atau data di dalamnya; (v) tidak mencoba untuk mendapatkan akses yang tidak sah ke Aplikasi atau sistem atau jaringan terkait; (vi) tidak berkedok sebagai orang atau badan lain atau menggambarkan diri anda sebagai afiliasi seseorang atau suatu badan; dan (vii) menahan diri untuk terlibat dalam tindakan yang mungkin bisa merusak reputasi kami atau dianggap dapat merusak reputasi kami.</li>
                                <li>Kami akan memiliki hak untuk menyelidiki dan menuntut setiap pelanggaran di atas sepanjang yang dimungkinkan oleh hukum. Kami dapat melibatkan dan bekerja sama dengan pihak penegak hukum dalam menuntut pengguna yang melanggar Ketentuan Penggunaan ini. Anda mengakui bahwa kami tidak memiliki kewajiban untuk memonitor akses anda ke atau penggunaan Situs web atau Aplikasi, tapi kami memiliki hak untuk melakukannya untuk tujuan pengoperasian Situs web dan Aplikasi, untuk memastikan kepatuhan dengan Ketentuan Penggunaan ini, atau untuk mematuhi peraturan yang berlaku atau perintah atau persyaratan dari pengadilan, lembaga administratif atau badan pemerintahan lainnya.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Hal-hal Terkait Kekayaan Intelektual</p>
                            <ul>
                                <li>Box-in, termasuk nama dan logo, Aplikasi dan Layanan, dilindungi oleh hak cipta, merek dagang dan hak-hak lain yang disediakan berdasarkan hukum Negara Republik Indonesia. Kami (dan pemberi lisensi kami, sebagaimana berlaku) secara eksklusif memiliki semua hak, kepemilikan dan kepentingan dalam dan terhadap Aplikasi, termasuk semua hak kekayaan intelektual terkait.</li>
                                <li>Tanpa menyimpang dari hak kami berdasarkan hukum yang berlaku atau Ketentuan Penggunaan, anda diberitahukan bahwa setiap berusaha atau pelanggaran nyata atas ketentuan ini akan mengakibatkan penghentian semua hak anda di bawah Ketentuan Penggunaan. Jika anda menghindari salah satu cara yang kami ambil untuk melindungi layanan dari penggunaan secara tidak sah, anda harus segera menghentikan setiap dan semua penggunaan Layanan, dan anda setuju untuk melakukannya.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Pengakhiran</p>
                            <ul>
                                <li>Anda tidak berkewajiban untuk menggunakan Aplikasi dan dapat memilih untuk berhenti menggunakannya setiap saat dengan membatalkan akun anda dan secara permanen menghapus aplikasi dari perangkat anda, sehingga menonaktifkan penggunaan Aplikasi tersebut. Ketentuan Penggunaan secara otomatis berakhir ketika anda secara permanen menghapus aplikasi dari perangkat.</li>
                                <li>Anda dapat mengakhiri akun anda dengan memberitahu kami maksud anda untuk membatalkan akun anda. Kami akan mencoba untuk melakukan yang terbaik untuk menyelesaikan penghentian, termasuk mengembalikan dalam waktu 15 (lima belas) hari kerja.</li>
                                <li>Kami berhak untuk segera menangguhkan, membatasi atau menghentikan Ketentuan Penggunaan dan penggunaan Aplikasi jika kami memiliki alasan untuk mencurigai bahwa anda telah melanggar ketentuan dari Ketentuan Penggunaan ini atau peraturan perundang-undangan yang berlaku.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Lain-Lain</p>
                            <ul>
                                <li>Pengesampingan atau toleransi atau kegagalan kami untuk mengklaim suatu pelanggaran ketentuan dari Ketentuan Penggunaan ini atau untuk melaksanakan hak yang dinyatakan oleh Ketentuan Penggunaan ini atau hukum yang berlaku, tidak akan dianggap sebagai pengesampingan sehubungan dengan pelanggaran berikutnya dari setiap ketentuan dari Ketentuan Penggunaan ini.</li>
                                <li>Anda tidak dapat memindahkan atau mengalihkan hak anda berdasarkan Ketentuan Penggunaan, tanpa persetujuan tertulis sebelumnya dari kami. Kami dapat mengalihkan hak kami berdasarkan Ketentuan Penggunaan kepada pihak semata-mata dan mutlak menurut kebijakan kami.</li>
                                <li>Jika ada istilah berdasarkan Ketentuan Penggunaan yang dianggap tidak sah, tidak berlaku atau tidak dapat dilaksanakan, baik secara keseluruhan atau sebagian, berdasarkan pengundangan atau ketentuan perundang-undangan, istilah atau bagian dari istilah tersebut akan, sepanjang, dianggap bukan bagian dari Ketentuan Penggunaan ini, namun legalitas, keabsahan atau keberlakuan dari Ketentuan Penggunaan selebihnya tidak akan terpengaruhi.</li>
                                <li>Ketentuan Penggunaan ini diatur oleh dan ditafsirkan berdasarkan hukum Negara Republik Indonesia. Setiap dan semua sengketa yang timbul dari penggunaan layanan kami akan diatur oleh yurisdiksi eksklusif dari Pengadilan Negeri Jakarta Barat.</li>
                                <li>Ketentuan Penggunaan ini dapat dimodifikasi dan diubah dari waktu ke waktu. Kami akan memberitahu anda melalui Aplikasi dan/atau email atas modifikasi, dan/atau perubahan atas Ketentuan Penggunaan. Penggunaan Aplikasi secara terus menerus setelah diterimanya pemberitahuan ini merupakan persetujuan dan penerimaan anda atas modifikasi, dan/atau perubahan.</li>
                            </ul>
                        </div>
                        <div className="pb-4">
                            <p style={{ fontWeight: 'bold' }}>Syarat dan Ketentuan Pengangkutan</p>
                            <ul>
                                <li>Pelanggan wajib memberikan informasi yang benar dan lengkap mengenai alamat pengirim, penerima, jenis dan spesifikasi barang yang akan dikirimkan.</li>
                                <li>Box-in tidak bertanggung jawab untuk kerusakan atau perubahan bentuk yang terjadi atas pengiriman barang-barang tersebut.</li>
                                <li>Box-in tidak menyediakan layanan pengiriman untuk barang-barang yang termasuk dibawah ini:</li>
                                <li>Ketentuan Penggunaan ini diatur oleh dan ditafsirkan berdasarkan hukum Negara Republik Indonesia. Setiap dan semua sengketa yang timbul dari penggunaan layanan kami akan diatur oleh yurisdiksi eksklusif dari Pengadilan Negeri Jakarta Barat.</li>
                                <ul>
                                    <li>Barang yang dilarang oleh pihak berwajib untuk dimiliki atau diedarkan.</li>
                                    <li>Binatang peliharaan.</li>
                                </ul>
                                <li>Para Mitra Box-in adalah pengemudi yang sudah mendapatkan pengarahan untuk mengendarai kendaraannya dengan cara yang aman. Box-in tidak bertanggung jawab secara langsung untuk kecelakaan yang melibatkan Mitra Porter baik kerusakan terhadap kendaraan maupun luka badan yang disebabkan oleh kecelakaan tersebut. Tanggung jawab atas seluruh biaya serta tuntutan yang mungkin timbul atas kejadian tersebut akan menjadi tanggung jawab pribadi Mitra Box-in. Jika ada informasi yang dapat membantu untuk proses investigasi seperti nomor plat motor, maka Porter hanya dapat membantu sebagai mediator dalam mempertemukan kedua pihak untuk mencari penyelesaian masalah tersebut.</li>
                            </ul>
                        </div>
					</div>
				</section>
                <SubFooter />
				<Footer />
			</div>
		);
	}
}

export default Home;