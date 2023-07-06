$(document).ready(function() {
  random_generate();

  function random_generate() {
    var anime_quote = [];

    anime_quote[0] = {
      "quotenumber": 1,
      "quotesentence": "orang mati ketika mereka terbunuh.",
      "quotecharacter": "- Emiya Shirou,",
      "quoteanime": " Fate/stay night"
    }

    anime_quote[1] = {
      "quotenumber": 2,
      "quotesentence": "barang palsu memiliki nilai yang jauh lebih tinggi. Dalam usahanya yang disengaja untuk menjadi nyata, barang palsu tersebut lebih nyata daripada barang asli.",
      "quotecharacter": "- Kaiki Deishū,",
      "quoteanime": " Nisemonogatari"
    }

    anime_quote[2] = {
      "quotenumber": 3,
      "quotesentence": "ketakutan terbesar umat manusia adalah manusia itu sendiri.",
      "quotecharacter": "- Gendo Ikari,",
      "quoteanime": " Neon Genesis Evangelion"
    }

    anime_quote[3] = {
      "quotenumber": 4,
      "quotesentence": " jika Anda hanya bertindak berdasarkan apa yang seharusnya dilakukan tanpa memperhatikan apa yang ingin Anda lakukan, Anda tidak lebih dari sekadar mesin, sebuah fenomena.",
      "quotecharacter": "- Natalia Kaminski,",
      "quoteanime": " Fate/Zero"
    }

    anime_quote[4] = {
      "quotenumber": 5,
      "quotesentence": "Jika aku tak bisa melindungi teman-temanku, maka aku tidak berhak memanggil diriku seorang Hokage. ",
      "quotecharacter": "- Naruto Uzumaki,",
      "quoteanime": " Naruto Shippuden"
    }

    anime_quote[5] = {
      "quotenumber": 6,
      "quotesentence": "Aku akan terus berjalan maju, meski harus merusak diriku sendiri.",
      "quotecharacter": "- Killua Zoldyck,",
      "quoteanime": " Hunter x Hunter"
    }

    anime_quote[6] = {
      "quotenumber": 7,
      "quotesentence": "Seiring berjalannya waktu, kita akan menjadi dewasa dan menemukan jawaban yang kita cari. Itulah menjadi kuat.",
      "quotecharacter": "- Monkey D. Luffy,",
      "quoteanime": " One Piece"
    }

    anime_quote[7] = {
      "quotenumber": 8,
      "quotesentence": "Hidup itu seperti sebuah lonceng, kamu hanya bisa maju jika kamu berani melangkah ke depan.",
      "quotecharacter": "- Kakashi Hatake,",
      "quoteanime": " Naruto Shippuden"
    }

    anime_quote[8] = {
      "quotenumber": 9,
      "quotesentence": "Ketika kamu ingin menyerah, ingatlah alasan mengapa kamu memulainya.",
      "quotecharacter": "- Monkey D. Luffy,",
      "quoteanime": " One Piece"
    }

    anime_quote[9] = {
      "quotenumber": 10,
      "quotesentence": "Ketakutan bukanlah hal yang buruk. Ketakutan memungkinkan kita tetap hidup.",
      "quotecharacter": "- Killua Zoldyck,",
      "quoteanime": " Hunter x Hunter"
    }

    anime_quote[10] = {
      "quotenumber": 11,
      "quotesentence": "Poi!",
      "quotecharacter": "- Yuudachi,",
      "quoteanime": " Kantai Collection"
    }

    anime_quote[11] = {
      "quotenumber": 12,
      "quotesentence": "Aku tidak akan pernah menyerah! Aku akan terus maju, terus melangkah, dan tidak akan mundur!",
      "quotecharacter": "- Naruto Uzumaki,",
      "quoteanime": " Naruto Shippuden"
    }

    anime_quote[12] = {
      "quotenumber": 13,
      "quotesentence": "Bukan kekuatan yang membuat seseorang hebat, tapi tekad dan keberanian yang ia tunjukkan.",
      "quotecharacter": "- Jiraiya,",
      "quoteanime": " Naruto Shippuden"
    }

    anime_quote[13] = {
      "quotenumber": 14,
      "quotesentence": "ada sesuatu yang salah dengan orang-orang yang mencari realitas dalam fiksi.",
      "quotecharacter": "- Kyon,",
      "quoteanime": " Suzumiya Haruhi no Yuuutsu"
    }

    anime_quote[14] = {
      "quotenumber": 15,
      "quotesentence": "Jika kamu tak mampu melindungi temanmu, kamu masih memiliki banyak yang harus dipelajari.",
      "quotecharacter": "- Kakashi Hatake,",
      "quoteanime": " Naruto Shippuden"
    }

    anime_quote[15] = {
      "quotenumber": 16,
      "quotesentence": "orang cenderung memamerkan tindakan kebaikan mereka. Ini bukanlah tindakan kemurahan hati, melainkan suatu tuntutan karena mereka mengharapkan pujian sebagai imbalan.",
      "quotecharacter": "- Itoshiki Nozomu,",
      "quoteanime": " Sayonara Zetsubou Sensei"
    }
    
    anime_quote[16] = {
      "quotenumber": 17,
      "quotesentence": "Aku ingin hidup sesuai dengan kehendakku sendiri, bukan untuk mengejar impian orang lain.",
      "quotecharacter": "-  Killua Zoldyck,",
      "quoteanime": " Hunter x Hunter"
    }
    
    anime_quote[17] = {
      "quotenumber": 18,
      "quotesentence": "Aku lebih suka menjadi penjahat yang jujur daripada menjadi orang baik yang munafik.",
      "quotecharacter": "- Killua Zoldyck,",
      "quoteanime": " Hunter x Hunter"
    }

    anime_quote[18] = {
      "quotenumber": 19,
      "quotesentence": "Ketika kamu memiliki teman, kamu bukanlah pahlawan yang berdiri sendiri. Itulah mengapa kita terus berjuang bersama.",
      "quotecharacter": "- Monkey D. Luffy,",
      "quoteanime": " One Piece"
    }
    
    anime_quote[19] = {
      "quotenumber": 20,
      "quotesentence": "Tidak ada yang bisa memprediksi masa depan. Satu-satunya hal yang bisa kita lakukan adalah bergerak maju dengan keyakinan.",
      "quotecharacter": "- Killua Zoldyck,",
      "quoteanime": " Hunter x Hunter"
    }
    
    anime_quote[20] = {
      "quotenumber": 21,
      "quotesentence": "Ketika ada seseorang yang sangat berharga bagimu, kadang-kadang kamu harus mengorbankan sesuatu yang berharga pula.",
      "quotecharacter": "- Nami,",
      "quoteanime": " One Piece"
    }
    
    anime_quote[21] = {
      "quotenumber": 22,
      "quotesentence": "Keluarga bukanlah tentang ikatan darah, tetapi tentang saling mencintai dan saling mendukung.",
      "quotecharacter": "- Twilight,",
      "quoteanime": " Spy x Family"
    }
    
    anime_quote[22] = {
      "quotenumber": 23,
      "quotesentence": "Ketika kita bersatu, tidak ada misi yang tidak mungkin.",
      "quotecharacter": "- Twilight,",
      "quoteanime": " Spy x Family"
    }
    
    anime_quote[23] = {
      "quotenumber": 24,
      "quotesentence": "Sahabat sejati akan selalu ada di sampingmu, baik di saat senang maupun sedih.",
      "quotecharacter": "- Jinta Yadomi,",
      "quoteanime": " Anohana"
    }
    
    anime_quote[24] = {
      "quotenumber": 25,
      "quotesentence": "Bahkan jika dunia ini berusaha menghancurkanmu, tetaplah tersenyum.",
      "quotecharacter": "- Koro-sensei,",
      "quoteanime": " Assassination Classroom"
    }
    
    anime_quote[25] = {
      "quotenumber": 26,
      "quotesentence": "Kenangan tak akan pernah hilang jika kita masih menyimpannya dalam hati.",
      "quotecharacter": "- Naruko Anjou,",
      "quoteanime": " Anohana"
    }
    
    anime_quote[26] = {
      "quotenumber": 27,
      "quotesentence": "Mempunyai kenangan yang bahagia dan indah tidak selalu akan membawa keselamatan bagimu. Semakin indah sebuah kenangan, semakin menyakitkan ia bisa menjadi. Bahkan bisa menjadi menakutkan. Baik bagi yang pergi... maupun bagi yang ditinggalkan.",
      "quotecharacter": "- Isla,",
      "quoteanime": " Plastic Memories"
    }
    
    anime_quote[27] = {
      "quotenumber": 28,
      "quotesentence": "Kesalahan adalah bagian dari belajar. Jangan pernah takut untuk mencoba dan gagal.",
      "quotecharacter": "- Nagisa Shiota ,",
      "quoteanime": " Assassination Classroom"
    }
    
    anime_quote[28] = {
      "quotenumber": 29,
      "quotesentence": "Jangan pernah meremehkan kekuatan persahabatan. Bersama, kita bisa menghadapi segalanya.",
      "quotecharacter": "- Karma Akabane,",
      "quoteanime": " Assassination Classroom"
    }
    
    anime_quote[29] = {
      "quotenumber": 30,
      "quotesentence": "Hal itu membuatmu sedih ketika seseorang tiba-tiba menghilang tanpa sepatah kata pun. Jika akhirnya kamu hanya akan merasa terluka, lebih baik kamu tidak membentuk ikatan sama sekali.",
      "quotecharacter": "- Yozora Mikazuki,",
      "quoteanime": " Boku wa Tomodachi ga Sukunai"
    }
    
    anime_quote[30] = {
      "quotenumber": 31,
      "quotesentence": "Orang yang lemah tak bisa memahami pikiran orang kuat.",
      "quotecharacter": "- Tadaomi Karasuma,",
      "quoteanime": " Assassination Classroom "
    }
    
    anime_quote[31] = {
      "quotenumber": 32,
      "quotesentence": "Mencintai seseorang berarti memikul rasa sakit dan kesedihan bersamanya. ",
      "quotecharacter": "- Menma,",
      "quoteanime": " Anohana"
    }
    
    anime_quote[32] = {
      "quotenumber": 33,
      "quotesentence": "Jadilah yang terbaik dari dirimu sendiri, bukan yang terbaik dari orang lain.",
      "quotecharacter": "- Irina Jelavić,",
      "quoteanime": " Assassination Classroom"
    }
    
    anime_quote[33] = {
      "quotenumber": 34,
      "quotesentence": "Kehilangan seseorang yang kita sayangi adalah pengalaman yang tak tergantikan.",
      "quotecharacter": "- Atsumu Matsuyuki,",
      "quoteanime": " Anohana"
    }
    
    anime_quote[34] = {
      "quotenumber": 35,
      "quotesentence": "Kamu tidak perlu menjadi sempurna untuk menjadi bagian dari keluarga yang sempurna.",
      "quotecharacter": "- Anya,",
      "quoteanime": " Spy x Family"
    }
    
    anime_quote[35] = {
      "quotenumber": 36,
      "quotesentence": "Ketika kita berbohong bersama, kita menjadi keluarga yang jujur.",
      "quotecharacter": "- Yor,",
      "quoteanime": " Spy x Family"
    }
    
    anime_quote[36] = {
      "quotenumber": 37,
      "quotesentence": "Terimalah masa lalu dan jadikan itu sebagai bagian dari dirimu yang kuat.",
      "quotecharacter": "- Tetsudou Hisakawa,",
      "quoteanime": " Anohana"
    }
    
    anime_quote[37] = {
      "quotenumber": 38,
      "quotesentence": "Keluarga adalah tempat di mana kita menemukan cinta, kebahagiaan, dan kehangatan sejati.",
      "quotecharacter": "- Twilight,",
      "quoteanime": " Spy x Family"
    }
    
    anime_quote[38] = {
      "quotenumber": 39,
      "quotesentence": "Karena dia belajar tentang kebahagiaan, dia merasa kesepian untuk pertama kalinya. Dan karena dia mengenal kesedihan, dia mengerti kebahagiaan untuk pertama kalinya.",
      "quotecharacter": "- Himura Yuu,",
      "quoteanime": " Ef - A Fairy Tale Of The Two"
    }
    
    anime_quote[39] = {
      "quotenumber": 40,
      "quotesentence": "Bermain game sendirian itu membosankan. Kamu butuh seseorang yang bisa kamu kalahkan begitu buruk hingga mereka tidak bisa pulih.",
      "quotecharacter": "- Five,",
      "quoteanime": " Zankyou no Terror"
    }
    
    anime_quote[40] = {
      "quotenumber": 41,
      "quotesentence": "Ketika kamu merasa sedih, lihatlah keindahan dunia di sekitarmu.",
      "quotecharacter": "- Totoro,",
      "quoteanime": " My Neighbor Totoro"
    }
    
    anime_quote[41] = {
      "quotenumber": 42,
      "quotesentence": "Jika kita berusaha dengan sungguh-sungguh, kita bisa meraih impian kita.",
      "quotecharacter": "- Doraemon,",
      "quoteanime": " Doraemon"
    }
    
    anime_quote[42] = {
      "quotenumber": 43,
      "quotesentence": "Akhirnya kita menjadi teman. Aku sudah mengatakan semua yang ingin kukatakan. Sekarang kita tahu segalanya tentang satu sama lain. Namun, sejak saat kita menjadi teman, kita tidak akan pernah berbicara satu sama lain lagi.",
      "quotecharacter": "- Touma Kazusa,",
      "quoteanime": " White Album 2"
    }
    
    anime_quote[43] = {
      "quotenumber": 44,
      "quotesentence": "Kebahagiaan bisa ditemukan dalam hal-hal sederhana, seperti menyentuh rumput atau mendengarkan suara angin.",
      "quotecharacter": "- Totoro,",
      "quoteanime": " My Neighbor Totoro"
    }
    
    anime_quote[44] = {
      "quotenumber": 45,
      "quotesentence": "Kecelakaan atau amnesia, kamu tidak bisa mengulang hidupmu dan memulai dari awal. Jika kamu berjuang, kamu hanya akan menyakiti dirimu sendiri dan orang-orang di sekitarmu.",
      "quotecharacter": "- Tada Banri,",
      "quoteanime": " Golden Time"
    }
    
    anime_quote[45] = {
      "quotenumber": 46,
      "quotesentence": "Ketika kita saling membantu dan peduli, hidup menjadi lebih berarti.",
      "quotecharacter": "- Totoro,",
      "quoteanime": " My Neighbor Totoro"
    }
    
    anime_quote[46] = {
      "quotenumber": 47,
      "quotesentence": "Orang palsu memiliki citra yang harus dijaga. Orang asli hanya tidak peduli.",
      "quotecharacter": "- Hachiman Hikigaya,",
      "quoteanime": " Yahari Ore No Seishun Love Come Wa Machigatteiru"
    }
    
    anime_quote[47] = {
      "quotenumber": 48,
      "quotesentence": "Jangan menyerah hanya karena kegagalan. Teruslah berusaha dan suatu saat kamu akan berhasil.",
      "quotecharacter": "- Doraemon,",
      "quoteanime": " Doraemon"
    }
    
    anime_quote[48] = {
      "quotenumber": 49,
      "quotesentence": "Ketika kamu membantu orang lain, kamu juga membantu dirimu sendiri.",
      "quotecharacter": "- Doraemon,",
      "quoteanime": " Doraemon"
    }
    
    anime_quote[49] = {
      "quotenumber": 50,
      "quotesentence": "Ketika kamu memiliki tekad, tidak ada hal yang tidak mungkin.",
      "quotecharacter": "- Doraemon,",
      "quoteanime": " Doraemon"
    }
    
    anime_quote[50] = {
      "quotenumber": 51,
      "quotesentence": "Ketika kamu menyerah, keajaiban berakhir.",
      "quotecharacter": "- Chihiro Ogino,",
      "quoteanime": "  Spirited Away"
    }
    
    anime_quote[51] = {
      "quotenumber": 52,
      "quotesentence": "Orang yang tidak bekerja keras tidak berhak untuk iri terhadap orang-orang berbakat. Orang gagal karena mereka tidak memahami kerja keras yang diperlukan untuk meraih kesuksesan.",
      "quotecharacter": "- Yukino Yukinoshita,",
      "quoteanime": " Yahari Ore no Seishun Love Come wa Machigatteiru."
    }
    
    anime_quote[52] = {
      "quotenumber": 53,
      "quotesentence": "Kamu harus melangkah dengan keberanian, bahkan jika kamu merasa takut.",
      "quotecharacter": "- Haku,",
      "quoteanime": " Spirited Away"
    }
    
    anime_quote[53] = {
      "quotenumber": 54,
      "quotesentence": "Jika semua orang sempurna, tidak akan ada kebutuhan untuk peduli terhadap orang lain. Simpati atau cinta diperlukan karena manusia tidak sempurna. Manusia yang sempurna  tidak bisa mencintai siapapun.",
      "quotecharacter": "- Keima Katsuragi,",
      "quoteanime": " Kami Nomi zo Shiru Sekai"
    }
    
    anime_quote[54] = {
      "quotenumber": 55,
      "quotesentence": "Aku menjadi seperti sekarang karena segala sesuatu yang telah terjadi. Jika aku mencoba menyangkal masa laluku, aku menyangkal diriku yang telah aku jadikan sekarang. Aku tidak ingin melakukannya.",
      "quotecharacter": "- Iori Nagase,",
      "quoteanime": " Kokoro Connect"
    }
    
    anime_quote[55] = {
      "quotenumber": 56,
      "quotesentence": "Orang yang berani menghadapi bahaya adalah orang yang tidak akan terluka.",
      "quotecharacter": "- Kamajii,",
      "quoteanime": " Spirited Away"
    }
    
    anime_quote[56] = {
      "quotenumber": 57,
      "quotesentence": "Kadang-kadang kamu harus meninggalkan masa lalu untuk menemukan yang baru. ",
      "quotecharacter": "- Lin,",
      "quoteanime": " Spirited Away"
    }
    
    anime_quote[57] = {
      "quotenumber": 58,
      "quotesentence": "Bukanlah hal yang buruk menjadi sedikit tak tahu, karena itulah saat kita belajar hal-hal baru.",
      "quotecharacter": "- Kamajii,",
      "quoteanime": " Spirited Away"
    }
    
    anime_quote[58] = {
      "quotenumber": 59,
      "quotesentence": "Kehidupan adalah anugerah, maka hargailah setiap momennya.",
      "quotecharacter": "- Zeniba,",
      "quoteanime": " Spirited Away"
    }
    
    anime_quote[59] = {
      "quotenumber": 60,
      "quotesentence": "Pemikiran positif dapat mengubah segalanya.",
      "quotecharacter": "- Chihiro Ogino,",
      "quoteanime": " Spirited Away"
    }
    
    anime_quote[60] = {
      "quotenumber": 61,
      "quotesentence": "Jangan biarkan rasa takut menghentikanmu dari mencoba hal-hal baru.",
      "quotecharacter": "- Haku,",
      "quoteanime": " Spirited Away"
    }
    
    anime_quote[61] = {
      "quotenumber": 62,
      "quotesentence": "Ketika kamu memberi dengan tulus, kamu akan mendapatkan lebih dari yang kamu harapkan.",
      "quotecharacter": "- Lin,",
      "quoteanime": " Spirited Away"
    }
    
    anime_quote[62] = {
      "quotenumber": 63,
      "quotesentence": "Jangan biarkan orang lain menentukan jalan hidupmu, hanya kamu yang dapat mengendalikannya.",
      "quotecharacter": "- Zeniba,",
      "quoteanime": " Spirited Away"
    }
    
    anime_quote[63] = {
      "quotenumber": 64,
      "quotesentence": "Janganlah percaya pada dirimu yang percaya padaku, dan janganlah percaya pada diriku yang percaya padamu. Percayalah pada dirimu yang percaya pada dirimu sendiri!",
      "quotecharacter": "- Kamina,",
      "quoteanime": " Tengen Toppa Gurren Lagann"
    }
    
    anime_quote[64] = {
      "quotenumber": 65,
      "quotesentence": "meskipun kehidupan akhirnya berakhir, itu tidak berarti bahwa fakta bahwa kita bertemu atau waktu yang kita habiskan bersama akan menghilang.",
      "quotecharacter": "- Mei,",
      "quoteanime": " Arashi no Yoru ni"
    }
    
    anime_quote[65] = {
      "quotenumber": 66,
      "quotesentence": "Tak peduli seberapa jauh kita dipisahkan, jika kita yakin, suatu saat kita pasti akan bertemu.",
      "quotecharacter": "- Taki Tachibana,",
      "quoteanime": " Kimi no Na"
    }
    
    anime_quote[66] = {
      "quotenumber": 67,
      "quotesentence": "Aku ingin melihatmu. Aku ingin memelukmu dengan sangat kuat.",
      "quotecharacter": "- Mitsuha Miyamizu,",
      "quoteanime": " Kimi no Na"
    }
    
    anime_quote[67] = {
      "quotenumber": 68,
      "quotesentence": "Tidak peduli berapa kali kita dipisahkan, takdir akan selalu mengarahkan kita untuk bersatu.",
      "quotecharacter": "- Taki Tachibana,",
      "quoteanime": " Kimi no Na"
   }
   
   anime_quote[68] = {
      "quotenumber": 69,
      "quotesentence": "Kita mungkin terpisah, tapi jangan pernah berhenti mencariku. Kita akan bertemu lagi.",
      "quotecharacter": "- Mitsuha Miyamizu,",
      "quoteanime": " Kimi no Na"
    }
    
    anime_quote[69] = {
      "quotenumber": 70,
      "quotesentence": "Aku berjanji, meskipun aku tidak tahu siapa namamu atau dimana kamu berada, aku akan mencarimu.",
      "quotecharacter": "- Mitsuha Miyamizu,",
      "quoteanime": " Kimi no Na"
    }
   
   anime_quote[70] = {
      "quotenumber": 71,
      "quotesentence": "Ketika kita menatap langit yang sama, kita akan terhubung satu sama lain.",
      "quotecharacter": "- Taki Tachibana,",
      "quoteanime": " Kimi no Na"
    }
    
    anime_quote[71] = {
      "quotenumber": 72,
      "quotesentence": "Jika kamu ingin menghentikan penderitaan, kamu harus bertarung.",
      "quotecharacter": "- Tanjiro Kamado,",
      "quoteanime": " Demon Slayer (Kimetsu no Yaiba)"
    }
    
    anime_quote[72] = {
      "quotenumber": 73,
      "quotesentence": "Meski dunia ini keras, aku akan melindungimu.",
      "quotecharacter": "- Tanjiro Kamado,",
      "quoteanime": " Demon Slayer (Kimetsu no Yaiba)"
    }
    
    anime_quote[73] = {
      "quotenumber": 74,
      "quotesentence": "Keinginan terkuat seseorang ada di balik tatapan mereka yang penuh dengan keputusasaan.",
      "quotecharacter": "- Tanjiro Kamado,",
      "quoteanime": " Demon Slayer (Kimetsu no Yaiba)"
    }
    
    anime_quote[74] = {
      "quotenumber": 75,
      "quotesentence": "Keberanian bukanlah ketiadaan ketakutan, melainkan tindakan di tengah ketakutan.",
      "quotecharacter": "- Tanjiro Kamado,",
      "quoteanime": " Demon Slayer (Kimetsu no Yaiba)"
    }
    
    anime_quote[75] = {
      "quotenumber": 76,
      "quotesentence": "Ketika kita menatap langit yang sama, kita akan terhubung satu sama lain.",
      "quotecharacter": "- Taki Tachibana,",
      "quoteanime": " Kimi no Na"
    }
    
    anime_quote[76] = {
      "quotenumber": 77,
      "quotesentence": "Kita mungkin hidup dalam waktu yang berbeda, tapi hati kita selalu bersama.",
      "quotecharacter": "- Mitsuha Miyamizu,",
      "quoteanime": " Kimi no Na"
    }
    
    anime_quote[77] = {
      "quotenumber": 78,
      "quotesentence": "Kesabaran dan tekad adalah kunci untuk menghadapi kesulitan.",
      "quotecharacter": "- Nezuko Kamado,",
      "quoteanime": " Demon Slayer (Kimetsu no Yaiba)"
    }
    
    anime_quote[78] = {
      "quotenumber": 79,
      "quotesentence": "Jika kamu tak tahu rasa sakit, kamu tak bisa memahami kebahagiaan.",
      "quotecharacter": "- Kyojuro Rengoku,",
      "quoteanime": " Demon Slayer (Kimetsu no Yaiba)"
    }
    
    anime_quote[79] = {
      "quotenumber": 80,
      "quotesentence": "Setiap luka yang kau derita akan menjadi kekuatan untuk melindungi orang yang kamu cintai.",
      "quotecharacter": "- Zenitsu Agatsuma,",
      "quoteanime": " Demon Slayer (Kimetsu no Yaiba)"
    }
    
    anime_quote[80] = {
      "quotenumber": 81,
      "quotesentence": "Sebuah senyuman adalah senjata paling kuat yang bisa kamu miliki.",
      "quotecharacter": "- Mitsuri Kanroji,",
      "quoteanime": " Demon Slayer (Kimetsu no Yaiba)"
    }
    
    anime_quote[81] = {
      "quotenumber": 82,
      "quotesentence": "Jika aku bisa bertemu denganmu lagi, bahkan jika aku harus mengorbankan hidupku, itu akan menjadi hal yang indah bagiku.",
      "quotecharacter": "- Taki Tachibana,",
      "quoteanime": " Kimi no Na"
    }
    
    anime_quote[82] = {
      "quotenumber": 83,
      "quotesentence": "Kisah kita tidak akan pernah berakhir, meskipun waktu terus berjalan.",
      "quotecharacter": "- Mitsuha Miyamizu,",
      "quoteanime": "Kimi no Na"
    }

    
   /* 
    anime_quote[] = {
      "quotenumber": ,
      "quotesentence": "",
      "quotecharacter": "- ,",
      "quoteanime": " "
    }
  */
    
    var random_number = Math.floor(Math.random() * (anime_quote.length));
    $('.sentence').text(anime_quote[random_number].quotesentence);
    $('.author').text(anime_quote[random_number].quotecharacter);
    $('.title').text(anime_quote[random_number].quoteanime);
  }

  $(".quote-masta").on("click", function() {
    random_generate();
  });
});
