const bumbu = [
    {
        id: 1,
        name: "Jahe",
        description: "Jahe atau dikenal juga dengan nama latin Zingiber officinale Rosc. sering digunakan sebagai rempah untuk penyedap makanan. Jahe diketahui berasal dari Asia Pasifik yang tersebar dari India sampai Cina. Di Indonesia sendiri, tanaman jahe relatif mudah ditemukan dan penggunaannya sudah meluas bukan hanya untuk keperluan memasak, tetapi juga untuk kesehatan, dan kecantikan. Manfaat jahe untuk wajah juga sudah mulai dikenal oleh masyarakat luas tidak hanya di Indonesia tapi juga mancanegara.  ",
        benefit: [
            "Jahe mengandung anti-inflamasi dan anti-oksidatif yang dapat mengendalikan proses penuaan.",
            "Air jahe dapat membantu mengurangi nyeri menstruasi.",
            "Bisa menurunkan glukosa darah secara signifikan",
            "Banyak mengandung vitamin C dan magnesium dimana kandungan ini dapat membantu tubuh untuk memperkuat sistem imun. "
        ],
        cooking: [
            "Wedang jahe",
            "Sup jahe ayam",
            "Bolu kukus gula merah jahe",
            "Tahwa malang kuah"
        ], 
        photo_url: "https://cdn.discordapp.com/attachments/979692188382412880/983219220391297094/jahe.jpeg"
        
    },
    {
        id: 2,
        name: "Kunyit",
        description: "Kunyit atau kunir, (Curcuma longa Linn. syn. Curcuma domestica Val.), adalah termasuk salah satu tanaman rempah-rempah dan obat asli dari wilayah Asia Tenggara. Tinggi batang mencapai 40 cm-100 cm. Daun kunyit terdiri dari pelepah daun, gagang daun dan helaian daun. Panjang helaian daun antara 30-60 cm, lebar antara 10-18 cm.",
        benefit: [
            "Kunyit mengandung antioksidan dan komponen antiinflamasi yang dapat mencerahkan kulit",
            "Dapat menjaga kesehatan pencernaan tetap terjaga dengan baik",
            "Dapat mengatasi perut kembung",
            "Kunyit dapat membantu mengurangi frekuensi kambuhnya gejala maag."
        ],
        cooking: [
            "Pepes ikan",
            "Opor ayam kuning",
            "Ayam ungkep",
            "Gurame pindang kunyit"
        ],
        photo_url: "https://media.discordapp.net/attachments/979692188382412880/983219221251125298/kunyit.jpeg" 
    },
    {
        id: 3,
        name: "Lengkuas",
        description: "Lengkuas (Alpinia galanga) dikenal juga dengan nama laos. Rempah ini digunakan dalam bahan makanan sebagai penambah cita rasa. Lengkuas dapat digunakan dalam kondisi segar maupun kering. Lengkuas adalah tanaman yang dapat tumbuh hingga 3,5 cm, dengan rimpang bawah tanah dan akar adventif kecil. Tumbuhan rimpang terdiri dari batang, daun, bunga, buah, dan biji.",
        benefit: [
            "Kandungan gingerol di dalamnya dapat mengurangi peradangan",
            "Lengkuas memiliki manfaat untuk meningkatkan imunitas karena kandungan flavonoid",
            "Lengkuas memiliki potensi sebagai agen hipoglikemik dan menunjukkan perbaikan yang signifikan dalam kadar glukosa darah",
            "Serat yang terkandung dalam lengkuas dapat mengatasi sembelit."
        ],
        cooking: [
            "Ayam laos",
            "Sayur asam",
            "Lodeh tempe kembang laja",
            "Ayam rica-rica",
            "Pindang ikan gabus"
        ],
        photo_url: "https://cdn.discordapp.com/attachments/979692188382412880/983219221603442778/lengkuas.jpeg" 
    },
    {
        id: 4,
        name: "Kemiri",
        description: "Kemiri (Aleurites moluccana (L.) Wild.), adalah tumbuhan yang bijinya dimanfaatkan sebagai sumber minyak dan rempah-rempah. Di Indonesia, beberapa penelusuran menyatakan bahwa kemiri sebenarnya berasal dari Pulau Maluku, akan tetapi saat ini pertumbuhannya telah menyebar ke seluruh wilayah nusantara dan dijadikan rempah-rempah sebagai manfaat utamanya.",
        benefit: [
            "Kandungan kalium dalam rempah memberikan efek relaksasi dinding pembuluh darah sehingga dapat memelihara kesehatan jantung",
            "Kemiri mengandung antioksida yang dapat melindungi tubuh dari berbagai macam penyakit",
            "Kemiri dapat mencegah gatal, melembapkan kulit, dan mengatasi peradangan",
            "Korteks dari rempah ini mengandung tanin yang dapat mencegah kanker."
        ],
        cooking: [
            "Soto ayam kemiri",
            "Opor putih",
            "Terik",
            "Lodeh",
            "Sambal terong kemiri bakar"
        ],
        photo_url: "https://cdn.discordapp.com/attachments/979692188382412880/983219220701642752/kemiri.jpg"  
    },
    {
        id: 5,
        name: "Pala",
        description: "Buah Pala (Myristica fragrans) merupakan tumbuhan yang berasal dari kepulauan Banda, Maluku. Tanaman ini merupakan tanaman keras yang dapat berumur panjang hingga lebih dari 100 tahun. Tanaman pala tumbuh dengan baik di daerah tropis, selain di Indonesia terdapat pula di Amerika, Asia dan Afrika. Pala termasuk famili Myristicaceae yang terdiri atas 15 genus (marga) dan 250 species (jenis).",
        benefit: [
            "Kandungan serat dalam pala dapat mengatasi masalah pencernaan",
            "Pala mengandung antibakteri yang dapat membersihkan bakteri penyebab bau mulut",
            "Dapat mengatasi insomnia",
            "Kandungan antiemetik yang terdapat dalam pala bermanfaat untuk menghilangkan mual dan muntah."
        ],
        cooking: [
            "Sop buntut",
            "Soto betawi",
            "Manisan pala",
            "Oseng kentang",
            "Manisan pala"
        ],
        photo_url: "https://cdn.discordapp.com/attachments/979692188382412880/983219221976715294/pala.jpeg"   
    },
    {
        id: 6,
        name: "Kencur",
        description: "Kencur (Kaempferia galanga) adalah tanaman herbal yang tumbuh subur di wilayah Asia seperti Cina, Myanmar, Indonesia, Malaysia, dan Thailand. Tumbuhan ini masih menjadi satu famili dengan jahe dan sudah lama dipercaya menjadi tanaman obat karena khasiatnya yang sangat beragam.  ",
        benefit: [
           "Membantu menurunkan tekanan darah",
           "Kandungan kencur memiliki sifat antiperadangan dan nyeri",
           "Mengobati kencing batu",
           "Ekstrak kencur bersifat antiinflamasi yang dapat mengobati diare",
           "Mengobati masuk angin dan flu."
        ],
        cooking: [
            "Karedok",
            "Seblak",
            "Peyek udang rebon",
            "Urap sayur",
            "Pecel sayur"
        ],
        photo_url: "https://cdn.discordapp.com/attachments/979692188382412880/983219221016236052/kencur.jpeg" 
    },
]

module.exports = bumbu;
