// Menggunakan data konstanta ini sebagai fallback jika API gagal
const localLevel1Questions = [
    {
        question: "Apa itu technopreneur di bidang desain komunikasi visual?",
        options: ["Pekerja kantoran", "Wirausaha berbasis teknologi", "Fotografer freelance", "Desainer grafis junior"],
        correct: 1,
        explanation: "Technopreneur adalah wirausaha yang mengembangkan bisnis dengan memanfaatkan teknologi digital, seperti desain grafis, media sosial, dan fotografi."
    },
    {
        question: "Apa yang dimaksud K3LH?",
        options: ["Kamera, Komputer, Lighting, Harddisk", "Keselamatan dan Kesehatan Kerja serta Lingkungan Hidup", "Komunitas Kreatif Lokal Harapan", "Kode Etik 3D"],
        correct: 1,
        explanation: "K3LH merupakan aturan dan prosedur keselamatan kerja dan perlindungan lingkungan di tempat kerja, termasuk di industri desain dan fotografi."
    },
    {
        question: "Proses berpikir kreatif biasanya dimulai dengan...",
        options: ["Meniru karya orang lain", "Membaca buku pelajaran", "Mencari ide dan inspirasi", "Memotret langsung"],
        correct: 2,
        explanation: "Berpikir kreatif dimulai dengan pencarian ide atau inspirasi agar menghasilkan konsep desain atau karya yang baru dan unik."
    },
    {
        question: "Sketsa adalah...",
        options: ["Foto model", "Gambar rancangan awal", "Desain digital", "Filter foto"],
        correct: 1,
        explanation: "Sketsa adalah gambar rancangan awal yang menjadi acuan sebelum karya desain atau ilustrasi dibuat secara utuh."
    },
    {
        question: "Fungsi tipografi dalam desain adalah...",
        options: ["Menyusun teks agar komunikatif", "Mengatur warna foto", "Memilih kamera", "Menentukan ISO"],
        correct: 0,
        explanation: "Tipografi berfungsi mengatur bentuk dan tata letak huruf agar pesan desain lebih mudah terbaca dan menarik."
    },
    {
        question: "Bitmap adalah...",
        options: ["Gambar berbasis pixel", "Gambar berbasis vector", "Format animasi", "Kamera digital"],
        correct: 0,
        explanation: "Bitmap merupakan gambar yang terdiri dari pixel-pixel kecil. Saat diperbesar, gambar bisa pecah."
    },
    {
        question: "Vector adalah...",
        options: ["Gambar yang pecah saat diperbesar", "Gambar berbasis garis dan bidang", "File foto hitam putih", "Filter kamera"],
        correct: 1,
        explanation: "Vector adalah gambar yang dibentuk dari garis, bidang, dan kurva, sehingga tetap tajam saat diperbesar."
    },
    {
        question: "Industri 4.0 identik dengan...",
        options: ["Desain manual", "Teknologi digital dan otomatisasi", "Poster tradisional", "Lensa fix"],
        correct: 1,
        explanation: "Industri 4.0 adalah era otomatisasi industri berbasis teknologi digital, termasuk di bidang desain dan fotografi."
    },
    {
        question: "Society 5.0 adalah konsep tentang...",
        options: ["Masyarakat digital seimbang dengan kemanusiaan", "Dunia fotografi outdoor", "Komunitas pegiat desain", "Kamera film lawas"],
        correct: 0,
        explanation: "Society 5.0 merupakan konsep masyarakat yang memanfaatkan teknologi digital tanpa meninggalkan nilai kemanusiaan."
    },
    {
        question: "Industri hijau bertujuan untuk...",
        options: ["Produksi massal tanpa batas", "Mendorong produksi ramah lingkungan", "Meningkatkan harga jual desain", "Memakai tinta mahal"],
        correct: 1,
        explanation: "Industri hijau berfokus pada proses produksi yang ramah lingkungan, hemat energi, dan minim limbah."
    },
    {
        question: "Komposisi fotografi artinya...",
        options: ["Editing warna foto", "Mengatur letak objek dalam frame", "Menambahkan teks", "Memilih ISO"],
        correct: 1,
        explanation: "Komposisi adalah cara menempatkan objek dan elemen foto dalam frame agar hasilnya seimbang dan menarik."
    },
    {
        question: "Jenis kamera DSLR adalah...",
        options: ["Analog", "Digital Single Lens Reflex", "Kamera HP", "Komputer"],
        correct: 1,
        explanation: "DSLR merupakan kamera digital dengan sistem cermin dan lensa yang bisa diganti-ganti."
    },
    {
        question: "Aperture berfungsi untuk...",
        options: ["Mengatur ukuran file", "Mengatur bukaan lensa", "Memilih mode kamera", "Menambahkan filter"],
        correct: 1,
        explanation: "Aperture mengatur seberapa besar bukaan lensa saat memotret yang mempengaruhi cahaya dan depth of field."
    },
    {
        question: "ISO di kamera berfungsi untuk...",
        options: ["Mengatur warna foto", "Sensitivitas sensor terhadap cahaya", "Memilih jenis lensa", "Membuat desain poster"],
        correct: 1,
        explanation: "ISO mengatur seberapa sensitif sensor kamera terhadap cahaya, semakin tinggi ISO, semakin terang hasil gambar."
    },
    {
        question: "Shutter speed cepat cocok untuk...",
        options: ["Foto malam", "Memotret objek bergerak cepat", "Memotret pemandangan", "Foto siluet"],
        correct: 1,
        explanation: "Shutter speed cepat berguna untuk membekukan gerakan objek agar tidak blur."
    },
    {
        question: "Editing foto biasanya dilakukan untuk...",
        options: ["Mengatur exposure dan warna", "Mengganti kamera", "Mengatur komposisi cetak", "Memilih mode Manual"],
        correct: 0,
        explanation: "Editing bertujuan memperbaiki hasil foto dari segi cahaya, warna, hingga komposisi agar lebih optimal."
    },
    {
        question: "Aplikasi editing foto berbasis mobile contohnya...",
        options: ["CorelDRAW", "Lightroom Mobile", "Notepad", "Kalkulator"],
        correct: 1,
        explanation: "Lightroom Mobile adalah aplikasi editing foto profesional berbasis mobile yang banyak dipakai fotografer."
    },
    {
        question: "Mode Manual di kamera memungkinkan...",
        options: ["Semua pengaturan diatur manual", "ISO saja otomatis", "Aperture terkunci", "Flash selalu aktif"],
        correct: 0,
        explanation: "Mode Manual memberi kontrol penuh atas ISO, shutter speed, aperture, dan white balance."
    },
    {
        question: "Jenis software berbasis vector contohnya...",
        options: ["Photoshop", "Adobe Illustrator", "Lightroom", "Camera360"],
        correct: 1,
        explanation: "Adobe Illustrator adalah software desain berbasis vector yang ideal untuk logo, ikon, dan ilustrasi."
    },
    {
        question: "Histogram di kamera berfungsi untuk...",
        options: ["Melihat distribusi cahaya", "Memilih mode fokus", "Mengatur shutter speed", "Memilih lensa"],
        correct: 0,
        explanation: "Histogram menampilkan distribusi cahaya dalam foto dari area gelap hingga terang agar exposure lebih akurat."
    }
];

const localLevel2Questions = [
    {
        question: "Apa itu komposisi Rule of Thirds?",
        options: ["Aturan ISO", "Pembagian frame jadi tiga bagian", "Tipe lensa", "Teknik pencahayaan"],
        correct: 1,
        explanation: "Rule of Thirds adalah teknik komposisi dengan membagi frame jadi 9 kotak untuk meletakkan objek utama di titik pertemuan garis.",
        image: "https://main.mobile.doss.co.id/storage/uploads/2023/06/ruleofthirds-example-0007-scaled.webp"
    },
    {
        question: "Lensa fix dikenal karena...",
        options: ["Bisa zoom", "Tidak bisa zoom", "Auto fokus tinggi", "Berat dan mahal"],
        correct: 1,
        explanation: "Lensa fix memiliki focal length tetap, kualitas optiknya lebih baik, dan biasanya aperture-nya lebih besar.",
        image: "https://id.canon/media/migration/shared/live/products/ID/EF50mm%20f1.8%20STM-big.png"
    },
    {
        question: "Efek dari aperture besar (f/1.8) adalah...",
        options: ["Depth of field luas", "Semua objek fokus", "Latar blur/bokeh", "ISO jadi kecil"],
        correct: 2,
        explanation: "Aperture besar (angka f kecil) membuat area fokus sempit dan latar belakang blur, cocok untuk portrait."
    },
    {
        question: "Shutter speed lambat cocok untuk...",
        options: ["Bekukan gerakan", "Bokeh", "Foto long exposure", "ISO tinggi"],
        correct: 2,
        explanation: "Shutter speed lambat membiarkan cahaya masuk lebih lama, cocok untuk efek motion blur atau light trail."
    },
    {
        question: "Fungsi lensa telephoto adalah...",
        options: ["Wide angle", "Zoom objek jauh", "Blur latar", "Foto produk"],
        correct: 1,
        explanation: "Telephoto digunakan untuk memotret objek yang jauh agar tampak dekat tanpa harus mendekati subjek."
    },
    {
        question: "Apa itu noise pada foto?",
        options: ["Filter efek", "Keburaman", "Bintik pada gambar", "Overexposure"],
        correct: 2,
        explanation: "Noise adalah bintik atau butiran pada gambar, biasanya muncul saat ISO tinggi atau kondisi low light."
    },
    {
        question: "Motion blur dipengaruhi oleh...",
        options: ["ISO", "Aperture", "Shutter Speed", "White Balance"],
        correct: 2,
        explanation: "Motion blur terjadi jika shutter speed terlalu lambat saat objek bergerak, menyebabkan gambar kabur."
    },
    {
        question: "Foto siluet tercipta karena...",
        options: ["Backlight", "Flash", "ISO tinggi", "White Balance"],
        correct: 0,
        explanation: "Foto siluet dibuat saat cahaya berasal dari belakang objek, membuat objek tampak gelap tanpa detail."
    },
    {
        question: "Society 5.0 menitikberatkan pada...",
        options: ["AI dan manusia hidup selaras", "Produksi massal", "Desain manual saja", "Lensa fix"],
        correct: 0,
        explanation: "Society 5.0 adalah konsep masyarakat modern yang seimbang antara teknologi AI dan nilai kemanusiaan."
    },
    {
        question: "Aplikasi berbasis bitmap contohnya...",
        options: ["Adobe Illustrator", "Corel PhotoPaint", "Lightroom Mobile", "Word"],
        correct: 1,
        explanation: "Corel PhotoPaint adalah aplikasi editing gambar berbasis bitmap, cocok untuk photo editing berbasis pixel."
    }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let quizData = []; // Akan diisi dari API atau data lokal
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 20;
let bonusTime = 0;
let soundEnabled = true;
let currentLevel = 1;

// Elemen HTML sudah benar, tidak perlu diubah lagi
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const timerEl = document.getElementById('timer');
const progressBar = document.querySelector('.progress-bar');
const hornSound = document.getElementById('horn-sound');
const ahhSound = document.getElementById('ahh-sound');
const victorySound = document.getElementById('victory-sound');
const resultContainer = document.getElementById('result-container');
const resultIcon = document.getElementById('result-icon');
const resultScore = document.getElementById('result-score');
const resultMessage = document.getElementById('result-message');
const resultDetail = document.getElementById('result-detail');
const retryBtn = document.getElementById('retry-btn');
const nextLevelBtn = document.getElementById('next-level-btn');

const soundToggleBtn = document.getElementById('soundToggleBtn');
const soundIcon = document.getElementById('soundIcon');

soundToggleBtn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    soundIcon.className = soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
});

// --- Fungsi Baru: Ambil Soal dari API ---
async function fetchQuestionsFromApi(level) {
    // Ambil API Key dari parameter URL
    const urlParams = new URLSearchParams(window.location.search);
    const API_KEY = urlParams.get('key'); // Mengambil nilai dari ?key=xxx

    if (!API_KEY) {
        console.warn('Parameter "key" tidak ditemukan di URL. Menggunakan data lokal.');
        return null; // Mengembalikan null jika API Key tidak ada
    }

    const apiUrl = `https://dashboard-kuis.ngopikode.my.id/api/quiz?key=${API_KEY}&level=${level}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.error(`HTTP error! status: ${response.status}`);
            const errorData = await response.json();
            console.error('API Error:', errorData.message);
            return null; // Mengembalikan null jika ada kesalahan HTTP
        }
        const data = await response.json();
        console.log('Soal berhasil diambil dari API:');
        return data;
    } catch (error) {
        console.error('Gagal mengambil soal dari API:', error);
        return null;
    }
}

// --- Modifikasi Fungsi startLevel ---
async function startLevel(level) {
    currentLevel = level;
    score = 0;
    currentQuestion = 0;

    // Tampilkan loader saat data dimuat
    document.getElementById('loader').style.display = 'flex';
    document.getElementById('level-selection').style.display = 'none';
    document.getElementById('main-container').style.display = 'none'; // Sembunyikan main container dulu

    let questionsToLoad = null;

    try {
        // Coba ambil dari API
        questionsToLoad = await fetchQuestionsFromApi(level);
    } catch (error) {
        console.error("Kesalahan saat mengambil data dari API, menggunakan data lokal:", error);
    }

    if (!questionsToLoad || questionsToLoad.length === 0) {
        // Jika API gagal atau mengembalikan data kosong, gunakan data lokal
        console.warn('Menggunakan data lokal karena API gagal atau kosong.');
        questionsToLoad = level === 1 ? localLevel1Questions : localLevel2Questions;
    }

    // Pastikan data yang diambil (baik dari API atau lokal) di-shuffle dan diformat ulang
    // agar `correct` mengacu pada indeks pilihan setelah di-shuffle
    quizData = shuffle(questionsToLoad.map(q => {
        const shuffledOptions = shuffle([...q.options]);
        return {
            question: q.question,
            options: shuffledOptions,
            correct: shuffledOptions.indexOf(q.options[q.correct]), // Sesuaikan indeks jawaban benar
            image: q.image || null,
            explanation: q.explanation
        };
    }));

    // Sembunyikan loader dan tampilkan main container setelah data siap
    document.getElementById('loader').style.display = 'none';
    document.getElementById('main-container').style.display = 'block';
    loadQuestion();
}

window.addEventListener('load', () => {
    // Sembunyikan loader setelah 1.2 detik dan tampilkan pemilihan level
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('level-selection').style.display = 'block';
    }, 1200);
});

document.addEventListener("pointerdown", function (e) {
    const numParticles = 17;

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        const x = e.clientX;
        const y = e.clientY;
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;

        const angle = Math.random() * 2 * Math.PI;
        const distance = 40 + Math.random() * 30;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        particle.style.setProperty("--dx", `${dx}px`);
        particle.style.setProperty("--dy", `${dy}px`);

        document.body.appendChild(particle);

        particle.addEventListener("animationend", () => {
            particle.remove();
        });
    }
});


function loadQuestion() {
    const question = quizData[currentQuestion];
    questionEl.textContent = question.question;
    optionsEl.innerHTML = '';

    // Hapus gambar sebelumnya (jika ada)
    const existingImage = document.getElementById('question-image');
    if (existingImage) existingImage.parentElement.remove(); // hapus termasuk wrapper <div>

    // Jika ada gambar, tambahkan ke elemen
    if (question.image) {
        const wrapper = document.createElement('div');
        wrapper.className = 'text-center';

        const img = document.createElement('img');
        img.src = question.image;
        img.alt = 'Gambar soal';
        img.className = 'img-fluid rounded mb-3';
        img.style.maxHeight = '150px';
        img.style.maxWidth = '100%';
        img.id = 'question-image';

        wrapper.appendChild(img);
        questionEl.parentNode.insertBefore(wrapper, optionsEl);
    }

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(button, index));
        optionsEl.appendChild(button);
    });

    nextBtn.style.display = 'none';

    let nextTime = 20;
    if (currentLevel === 2) nextTime = 30;
    timeLeft = nextTime + bonusTime;
    bonusTime = 0;
    if (timer) clearInterval(timer);
    startTimer();
    updateProgress();
}

function selectOption(selectedButton, optionIndex) {
    const question = quizData[currentQuestion];
    const isCorrect = optionIndex === question.correct;
    const buttons = optionsEl.getElementsByClassName('option');

    Array.from(buttons).forEach((btn, i) => {
        btn.disabled = true;
        const icon = document.createElement('i');
        icon.classList.add('fas', 'ms-2');
        if (i === question.correct) {
            btn.classList.add('correct');
            icon.classList.add('fa-check-circle', 'text-success');
            btn.appendChild(icon);
        }
        if (i === optionIndex && !isCorrect) {
            btn.classList.add('incorrect');
            icon.classList.add('fa-times-circle', 'text-danger');
            btn.appendChild(icon);
        }
    });

    selectedButton.classList.add('selected');
    clearInterval(timer);
    nextBtn.style.display = 'block';

    alertAnswer({isCorrect: isCorrect});
}

function checkAnswer() {
    const question = quizData[currentQuestion];
    const buttons = optionsEl.getElementsByClassName('option');
    Array.from(buttons).forEach((btn, i) => {
        btn.disabled = true;
        if (i === question.correct) {
            btn.classList.add('correct');
            const icon = document.createElement('i');
            icon.classList.add('fas', 'fa-check-circle', 'ms-2', 'text-success');
            btn.appendChild(icon);
        }
    });
    nextBtn.style.display = 'block';
}


function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Timer: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            checkAnswer();
            alertAnswer({isTimeout: true});
        }
    }, 1000);
}

function alertAnswer({isCorrect = false, isTimeout = false}) {
    const question = quizData[currentQuestion];
    if (isCorrect && !isTimeout) {
        score++;
        bonusTime += 4;
        if (soundEnabled) hornSound.play();
        confetti({
            particleCount: 100,
            spread: 70,
            origin: {y: 0.6}
        });
        Swal.fire({
            title: 'Benar!',
            html: `<p class="mb-2">+3 Detik Bonus!</p><strong>Penjelasan:</strong><p class="text-dark">${question.explanation}</p>`,
            icon: 'success',
            confirmButtonText: 'Oke, lanjut!'
        });
    } else {
        if (soundEnabled) ahhSound.play();
        Swal.fire({
            title: isTimeout ? 'Oops, waktu habis!' : 'Salah!',
            html: `<p class="mb-2">Yuk coba baca dulu.</p><strong>Penjelasan:</strong><p class="text-dark">${question.explanation}</p>`,
            icon: isTimeout ? 'info' : 'error',
            confirmButtonText: 'Oke deh'
        });
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizData.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress.toString());
}

function showResults() {
    document.getElementById('main-container').style.display = 'none';
    resultContainer.style.display = 'block';

    // Menentukan skor kelulusan secara dinamis (75% dari total soal)
    const passingScore = Math.floor(quizData.length * 0.75);
    const hasPassed = score >= passingScore;

    // Mengupdate elemen UI berdasarkan hasil kelulusan
    resultIcon.className = `fas ${hasPassed ? 'fa-trophy text-success' : 'fa-times-circle text-danger'} fa-3x`;
    resultScore.textContent = `Skor kamu: ${score} / ${quizData.length}`;
    resultMessage.textContent = hasPassed ? 'Mantap! Kamu berhasil!' : 'Belum cukup, ayo coba lagi!';

    // Pesan detail kelulusan
    if (currentLevel === 1) {
        resultDetail.innerHTML = hasPassed
            ? `Kamu bisa lanjut ke <strong>Level 2</strong>! Ayo pilih untuk melanjutkan.`
            : `Skor kamu belum cukup (minimal ${passingScore}) untuk lanjut ke Level 2. Yuk coba lagi!`;
    } else {
        resultDetail.textContent = `Kamu sudah menyelesaikan Level 2!`;
    }

    // Menampilkan tombol yang sesuai
    retryBtn.style.display = hasPassed ? 'none' : 'block';
    nextLevelBtn.style.display = hasPassed && currentLevel === 1 ? 'block' : 'none';

    // Membuka Level 2 jika lulus Level 1
    if (currentLevel === 1 && hasPassed) {
        document.getElementById('level2-btn').disabled = false;
        document.getElementById('level2-btn').classList.remove('btn-secondary');
        document.getElementById('level2-btn').classList.add('btn-primary');
        Swal.fire({
            title: 'Level 2 Terbuka!',
            text: 'Kamu berhasil lolos dan bisa lanjut ke level selanjutnya.',
            icon: 'success',
            confirmButtonText: 'Lanjut!'
        });
    }

    // Perayaan jika skor sempurna
    if (score === quizData.length) {
        if (soundEnabled) victorySound.play();
        confetti({particleCount: 200, spread: 100, origin: {y: 0.6}});
        Swal.fire({
            title: 'Skor Sempurna!',
            text: 'Keren banget, semua jawaban benar!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });
    }
}

function shareScore() {
    const shareCard = document.getElementById('result-container');
    document.getElementById('exit-btn').style.display = 'none';

    html2canvas(shareCard).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        // Auto-download gambar
        const link = document.createElement('a');
        link.href = imgData;
        link.download = `skor-${currentLevel}-${score}.png`;
        link.click();

        document.getElementById('exit-btn').style.display = 'block';
    });
}

function goToLevelSelection() {
    document.getElementById('level-selection').style.display = 'block';
    document.getElementById('main-container').style.display = 'none';
    resultContainer.style.display = 'none';
    document.getElementById('loader').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 1200);
}

function exitApp() {
    if (window.AppInventor) {
        window.AppInventor.setWebViewString("exit");
    }

    // loader make it center
    document.getElementById('loader').style.display = 'flex';

    // reload the page
    setTimeout(() => {
        location.reload();
    }, 1200);
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
});