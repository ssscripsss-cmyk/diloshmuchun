/* =========================================================
   DILOSH'S GALAXY OF MEMORIES - INTERACTIVE ENGINE
   ========================================================= */

// --- 1. CONFIGURATION & DATA ---
// Start Date: 31 May (Year set to 2025 by default, change if needed)
const START_DATE = new Date('2025-05-31T00:00:00');

// Memory Data (Dilosh & You)
const MEMORIES = {
  planet: {
    badge: '🪐 KOINOT MARKAZI',
    title: 'Dilosh — Mening Butun Olamim 💖',
    caption: 'Mening eng yorqin yulduzim',
    image: 'assets/dilosh_main.jpg',
    desc: 'Diloshim, sen mening hayotimga kirib kelganingdan beri har bir kunim quvonchga, mehrga va maʼnoga toʻldi. Sening birgina tabassuming butun dunyo tashvishlarini unutishga yetadi. Seni cheksiz seviraman!',
  },
  1: {
    badge: '🌟 XOTIRA #1 • 31-MAY',
    title: 'Bizning Ilk Tanishgan Kunimiz ✨',
    caption: '31-May • Taqdir sovgʻasi',
    image: 'assets/photo1.jpg',
    desc: '31-May — hayotimdagi eng qadrli va unutilmas sanalardan biri. Aynan shu kundan boshlab yuragimda sen uchun maxsus bir olam paydo boʻldi. Bu shunchaki tanishuv emas, haqiqiy moʻjiza edi!',
  },
  2: {
    badge: '📸 XOTIRA #2 • BIRINCHI UCHRASHUV',
    title: 'Sening Shirin Tabassuming 🥰',
    caption: 'Koʻzlaringdagi nur',
    image: 'assets/photo2.jpg',
    desc: 'Seni ilk bor koʻrganimda koʻzlaringdagi samimiylik va yuzingdagi mayin tabassum meni butunlay maftun etgan. Oʻsha lahza vaqt toʻxtab qolgandek tuyulgan edi...',
  },
  3: {
    badge: '💖 XOTIRA #3 • SEVGI SABABLARI',
    title: 'Nega Seni Butun Vujudim Bilan Sevaman?',
    caption: 'Chunki sen yagonasan',
    image: 'assets/photo3.jpg',
    desc: 'Sening samimiy qalbing, erkaliklaring, gʻamxoʻrliging va menga boʻlgan ishonching uchun seni juda yaxshi koʻraman. Sen bilan oʻzimni dunyodagi eng baxtli insondek his qilaman.',
  },
  4: {
    badge: '🎁 XOTIRA #4 • SHIRIN ESDA QOLARLI KUN',
    title: 'Kutilmagan Syurprizlar & Kulgular 😂❤️',
    caption: 'Birga kulgan damlarimiz',
    image: 'assets/photo4.jpg',
    desc: 'Birga oʻtkazgan har bir suhbatimiz, kechki gaplashishlarimiz, kulgili hazillarimiz va kichik xafagarchiliklardan keyingi shirin yarashuvlarimiz... Bularning bari men uchun bebaho!',
  },
  5: {
    badge: '✨ XOTIRA #5 • KELAJAK & ORZULAR',
    title: 'Bizning Shirin Orzularimiz 🏡✈️',
    caption: 'Kelajak sari birga',
    image: 'assets/photo5.jpg',
    desc: 'Oldimizda hali qancha goʻzal kunlar, sayohatlar, unutilmas lahzalar va birgalikdagi orzularimiz kutmoqda. Har doim qoʻlingdan tutib, birga boʻlishga vaʼda beraman.',
  },
  6: {
    badge: '💫 XOTIRA #6 • MAXSUS VAʼDA',
    title: 'Mening Doimiy Vaʼdam 💍',
    caption: 'Abadiy sadoqat',
    image: 'assets/photo6.jpg',
    desc: 'Qanday kun boʻlishidan qatʼi nazar — xoh quvonchli, xoh qiyin — men har doim sening yoningda, sening tayanching va suyanching boʻlaman, Diloshim!',
  }
};

// Compliments List for Dilosh
const COMPLIMENTS = [
  "Dilosh, sening kulishing dunyodagi eng chiroyli musiqa! 🎶✨",
  "Sening koʻzlaring koinotdagi barcha yulduzlardan ham porloq! 🌟",
  "Sen bilan gaplashganda vaqt qanday oʻtib ketganini sezmay qolaman 🥰",
  "Dunyodagi eng yoqimli va shirin inson — bu sensan, Diloshim! 🌸",
  "Sening mehring va eʼtiboring mening hayotimdagi eng katta baxt! 💖",
  "Sen xafa boʻlsang butun koinot qorongʻu boʻlib qoladi, shuning uchun faqat kulib yur! 😊",
  "Seni uchratganim — taqdirimning eng goʻzal tuhfasi! 🎁"
];

// Reasons why I love you
const REASONS = [
  "1. Sening bekorga arazlashlaring ham juda yoqimli boʻlgani uchun.",
  "2. Har safar 'Assalomu alaykum' degan ovozing qalbimga xotirjamlik bergani uchun.",
  "3. Doim meni qoʻllab-quvvatlab, menga ishonganing uchun.",
  "4. Koʻzlaringdagi cheksiz mehr va samimiylik uchun.",
  "5. Sening borligingning oʻzi hayotimni bayramga aylantirgani uchun! ✨"
];

// --- 2. LIVE RELATIONSHIP TIMER ---
function updateTimer() {
  const now = new Date();
  const diff = now - START_DATE;

  if (diff < 0) {
    // If future date, just show 0
    document.getElementById('days').textContent = '0';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}
setInterval(updateTimer, 1000);
updateTimer();

// --- 3. SYNTHESIZED ROMANTIC MUSIC (WebAudio API) ---
// Generates dreamy soothing ambient chords so it works immediately without external mp3
class AmbientLoveMusic {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.interval = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }

  playChord(freqs, duration = 4) {
    if (!this.ctx || !this.isPlaying) return;

    freqs.forEach(freq => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.04, this.ctx.currentTime + 1.5);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    });
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;

    // Romantic chord progression (Fmaj7 -> Am7 -> G -> Cmaj7)
    const chords = [
      [349.23, 440.00, 523.25, 659.25], // Fmaj7
      [220.00, 261.63, 329.63, 392.00], // Am7
      [196.00, 246.94, 293.66, 392.00], // G
      [261.63, 329.63, 392.00, 493.88]  // Cmaj7
    ];

    let chordIndex = 0;
    this.playChord(chords[0], 5);

    this.interval = setInterval(() => {
      if (!this.isPlaying) return;
      chordIndex = (chordIndex + 1) % chords.length;
      this.playChord(chords[chordIndex], 5);
    }, 4500);
  }

  stop() {
    this.isPlaying = false;
    if (this.interval) clearInterval(this.interval);
  }

  playSparkleSound() {
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((note, i) => {
      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(note, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.6);
      }, i * 80);
    });
  }
}

const synthMusic = new AmbientLoveMusic();
const bgAudio = document.getElementById('bg-audio');
let musicPlaying = false;

function toggleMusic() {
  const musicWave = document.getElementById('music-wave');
  const musicIcon = document.getElementById('music-icon');

  if (!musicPlaying) {
    // Try to play audio file or fallback to synth
    if (bgAudio && bgAudio.src && !bgAudio.error) {
      bgAudio.play().then(() => {
        musicPlaying = true;
      }).catch(() => {
        synthMusic.start();
        musicPlaying = true;
      });
    } else {
      synthMusic.start();
      musicPlaying = true;
    }
    musicWave.classList.add('playing');
    musicIcon.textContent = '💖';
  } else {
    if (bgAudio) bgAudio.pause();
    synthMusic.stop();
    musicPlaying = false;
    musicWave.classList.remove('playing');
    musicIcon.textContent = '🎵';
  }
}

// --- 4. CANVAS UNIVERSE & CONSTELLATION ENGINE ---
const canvas = document.getElementById('universe');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];
let shootingStars = [];

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
  createStars();
}

window.addEventListener('resize', resizeCanvas);

function createStars() {
  stars = [];
  const starCount = Math.floor((width * height) / 3000);
  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.8 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.02 + 0.005,
      color: ['#ffffff', '#fbcfe8', '#e9d5ff', '#bae6fd'][Math.floor(Math.random() * 4)]
    });
  }
}

function spawnShootingStar() {
  if (shootingStars.length < 2 && Math.random() < 0.015) {
    shootingStars.push({
      x: Math.random() * width * 0.8,
      y: Math.random() * height * 0.3,
      len: Math.random() * 120 + 80,
      speed: Math.random() * 10 + 12,
      angle: Math.PI / 4 + (Math.random() * 0.2 - 0.1),
      alpha: 1,
      decay: 0.012
    });
  }
}

function drawUniverse() {
  ctx.clearRect(0, 0, width, height);

  // Deep Nebula gradient
  const grad = ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width);
  grad.addColorStop(0, 'rgba(30, 20, 55, 0.4)');
  grad.addColorStop(0.5, 'rgba(15, 10, 30, 0.7)');
  grad.addColorStop(1, 'rgba(5, 5, 15, 1)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  // Draw twinkling stars
  stars.forEach(star => {
    star.alpha += Math.sin(Date.now() * star.speed) * 0.02;
    const currentAlpha = Math.max(0.1, Math.min(1, star.alpha));

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.globalAlpha = currentAlpha;
    ctx.shadowBlur = star.size * 4;
    ctx.shadowColor = star.color;
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  // Draw shooting stars
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const s = shootingStars[i];
    ctx.globalAlpha = s.alpha;
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    const endX = s.x - Math.cos(s.angle) * s.len;
    const endY = s.y - Math.sin(s.angle) * s.len;
    ctx.lineTo(endX, endY);
    ctx.stroke();

    s.x += Math.cos(s.angle) * s.speed;
    s.y += Math.sin(s.angle) * s.speed;
    s.alpha -= s.decay;

    if (s.alpha <= 0 || s.x > width || s.y > height) {
      shootingStars.splice(i, 1);
    }
  }

  ctx.globalAlpha = 1;
  spawnShootingStar();
  requestAnimationFrame(drawUniverse);
}

resizeCanvas();
drawUniverse();

// --- 5. UI INTERACTIONS & MODAL ENGINE ---
const welcomeScreen = document.getElementById('welcome-screen');
const mainContent = document.getElementById('main-content');
const enterBtn = document.getElementById('enter-btn');
const memoryModal = document.getElementById('memory-modal');
const modalClose = document.getElementById('modal-close');
const letterModal = document.getElementById('letter-modal');
const letterBtn = document.getElementById('letter-btn');
const letterClose = document.getElementById('letter-close');
const wishPopup = document.getElementById('wish-popup');
const complimentBtn = document.getElementById('compliment-btn');
const reasonsBtn = document.getElementById('reasons-btn');
const musicToggle = document.getElementById('music-toggle');

// Start Button
enterBtn.addEventListener('click', () => {
  welcomeScreen.classList.remove('active');
  welcomeScreen.classList.add('hidden');
  mainContent.classList.remove('hidden');
  mainContent.classList.add('active');

  synthMusic.playSparkleSound();
  toggleMusic(); // Start sweet music
});

// Music toggle button
musicToggle.addEventListener('click', toggleMusic);

// Open Memory Function
function openMemory(id) {
  const data = MEMORIES[id];
  if (!data) return;

  synthMusic.playSparkleSound();

  document.getElementById('modal-badge').textContent = data.badge;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-caption').textContent = data.caption;
  document.getElementById('modal-desc').textContent = data.desc;

  const img = document.getElementById('modal-img');
  const placeholder = document.getElementById('photo-placeholder');

  img.style.display = 'block';
  placeholder.style.display = 'none';
  img.src = data.image;

  memoryModal.classList.remove('hidden');
}

// Memory Star Clicks
document.querySelectorAll('.memory-star').forEach(star => {
  star.addEventListener('click', () => {
    const id = star.getAttribute('data-id');
    openMemory(id);
  });
});

// Planet Dilosh Click
document.getElementById('planet-dilosh').addEventListener('click', () => {
  openMemory('planet');
});

// Close Modals
modalClose.addEventListener('click', () => {
  memoryModal.classList.add('hidden');
});

memoryModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    memoryModal.classList.add('hidden');
  }
});

// Like Button in Modal
document.getElementById('like-memory-btn').addEventListener('click', function() {
  synthMusic.playSparkleSound();
  this.innerHTML = '<span>💖 Diloshim Sevaman! 💖</span>';
  this.style.background = '#ec4899';
  setTimeout(() => {
    this.innerHTML = '<span class="heart">❤️</span> <span id="like-count">Cheksiz Sevgi</span>';
    this.style.background = '';
  }, 2000);
});

// Romantic Letter Modal
letterBtn.addEventListener('click', () => {
  synthMusic.playSparkleSound();
  letterModal.classList.remove('hidden');
});

letterClose.addEventListener('click', () => {
  letterModal.classList.add('hidden');
});

letterModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-backdrop')) {
    letterModal.classList.add('hidden');
  }
});

// Compliment Button
complimentBtn.addEventListener('click', () => {
  synthMusic.playSparkleSound();
  const randomComp = COMPLIMENTS[Math.floor(Math.random() * COMPLIMENTS.length)];
  showWishToast('Shirin Soʻz Diloshga 🌸', randomComp);
});

// Reasons Button
let reasonIndex = 0;
reasonsBtn.addEventListener('click', () => {
  synthMusic.playSparkleSound();
  const reason = REASONS[reasonIndex % REASONS.length];
  reasonIndex++;
  showWishToast('Seni Sevish Sababim 💖', reason);
});

// Show Floating Wish Toast
function showWishToast(title, text) {
  wishPopup.querySelector('h4').textContent = title;
  document.getElementById('wish-text').textContent = text;
  wishPopup.classList.remove('hidden');

  setTimeout(() => {
    wishPopup.classList.add('hidden');
  }, 5000);
}

// Random Shooting Star Wishes
setInterval(() => {
  if (Math.random() < 0.3 && mainContent.classList.contains('active') && wishPopup.classList.contains('hidden')) {
    const wishes = [
      "Yulduz uchdi! Diloshim, doim yuzingda tabassum boʻlsin ✨",
      "Yulduz uchdi! Niyat qil — butun umr birga boʻlamiz 💖",
      "Koinotdagi eng baxtli inson — bu sening yoningda boʻlgan inson! 🪐"
    ];
    showWishToast('Yulduz Uchdi! 🌠', wishes[Math.floor(Math.random() * wishes.length)]);
  }
}, 30000);
// --- QR CODE & SHARE ENGINE ---
const qrModal = document.getElementById('qr-modal');
const qrModalBtn = document.getElementById('qr-modal-btn');
const welcomeQrBtn = document.getElementById('welcome-qr-btn');
const qrBottomBtn = document.getElementById('qr-bottom-btn');
const qrClose = document.getElementById('qr-close');
const qrImage = document.getElementById('qr-image');
const shareLinkInput = document.getElementById('share-link-input');
const copyLinkBtn = document.getElementById('copy-link-btn');

function openQRModal() {
  synthMusic.playSparkleSound();
  const currentUrl = window.location.href;
  shareLinkInput.value = currentUrl;

  // Generate QR Code via free API
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}&color=0f172a&bgcolor=ffffff`;
  qrImage.src = qrApiUrl;

  qrModal.classList.remove('hidden');
}

[qrModalBtn, welcomeQrBtn, qrBottomBtn].forEach(btn => {
  if (btn) btn.addEventListener('click', openQRModal);
});

if (qrClose) {
  qrClose.addEventListener('click', () => qrModal.classList.add('hidden'));
}

if (qrModal) {
  qrModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      qrModal.classList.add('hidden');
    }
  });
}

if (copyLinkBtn) {
  copyLinkBtn.addEventListener('click', () => {
    shareLinkInput.select();
    navigator.clipboard.writeText(shareLinkInput.value).then(() => {
      copyLinkBtn.textContent = 'Nusxalandi! ⚡';
      setTimeout(() => { copyLinkBtn.textContent = 'Nusxalash 📋'; }, 2000);
    });
  });
}
