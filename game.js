// ---------- ข้อมูลอวัยวะ (ม.5) ----------
const organs = [
  {
    name: "ปาก",
    difficulty: 0.2,
    description:
      "ปากเป็นจุดเริ่มต้นของระบบย่อยอาหาร กล้ามเนื้อลิ้นและฟันช่วยบดเคี้ยวให้อาหารมีพื้นที่ผิวมากขึ้น น้ำลายมีเอนไซม์อะไมเลสย่อยแป้งเชิงซ้อนให้เป็นน้ำตาลโมเลกุลเล็กลง เตรียมพร้อมเข้าสู่กระเพาะอาหาร",
  },
  {
    name: "กระเพาะอาหาร",
    difficulty: 0.3,
    description:
      "กระเพาะอาหารมีกรดไฮโดรคลอริกและเอนไซม์เพปซิน ย่อยโปรตีนให้สั้นลง การบีบตัวของกล้ามเนื้อทำให้อาหารกลายเป็นกึ่งเหลวที่เรียกว่าไคม์ ก่อนถูกปล่อยทีละน้อยเข้าสู่ลำไส้เล็ก",
  },
  {
    name: "ลำไส้เล็ก",
    difficulty: 0.4,
    description:
      "ลำไส้เล็กเป็นบริเวณสำคัญของการดูดซึม พับผนังมีวิลไลและไมโครวิลไลเพิ่มพื้นที่ผิว เอนไซม์จากตับอ่อนและน้ำดีช่วยย่อยคาร์โบไฮเดรต โปรตีน และไขมันให้เล็กพอที่จะดูดซึมผ่านผนังลำไส้เข้าสู่กระแสเลือดและท่อน้ำเหลือง",
  },
  {
    name: "ลำไส้ใหญ่",
    difficulty: 0.25,
    description:
      "ลำไส้ใหญ่ดูดซึมน้ำและเกลือแร่ที่เหลืออยู่ แบคทีเรียประจำถิ่นช่วยสังเคราะห์วิตามินบางชนิด เช่น วิตามิน K และ B บางชนิด พร้อมทั้งอัดกากอาหารให้กลายเป็นอุจจาระและขับออกจากร่างกาย",
  },
];

// ---------- สารอาหาร ----------
const nutrients = [
  {
    type: "คาร์โบไฮเดรตเชิงซ้อน",
    coins: 3,
    text:
      "ให้พลังงานระยะยาว ย่อยจากแป้งด้วยอะไมเลสและเอนไซม์อื่น ๆ จนเป็นกลูโคส แล้วดูดซึมผ่านวิลไลในลำไส้เล็กเข้าสู่กระแสเลือด",
  },
  {
    type: "โปรตีน (กรดอะมิโน)",
    coins: 5,
    text:
      "ถูกย่อยจากสายโพลีเปปไทด์ด้วยเพปซินและทริปซิน จนเป็นกรดอะมิโน ใช้สร้างเอนไซม์ ฮอร์โมน และซ่อมแซมเนื้อเยื่อ ดูดซึมผ่านผนังลำไส้เล็กเข้าสู่หลอดเลือดฝอย",
  },
  {
    type: "ไขมันไม่อิ่มตัว",
    coins: 4,
    text:
      "ถูกน้ำดีช่วยแตกตัวเป็นหยดเล็ก ๆ (emulsification) แล้วเอนไซม์ไลเปสย่อยเป็นกรดไขมันและกลีเซอรอล ดูดซึมเป็นไคโลไมครอนเข้าสู่ท่อน้ำเหลืองก่อนเข้าสู่กระแสเลือด",
  },
  {
    type: "วิตามินและแร่ธาตุ",
    coins: 6,
    text:
      "แม้ต้องการในปริมาณน้อยแต่จำเป็นต่อการทำงานของเอนไซม์และระบบต่าง ๆ เช่น ระบบประสาท เลือด และกระดูก ส่วนใหญ่ดูดซึมที่ลำไส้เล็ก บางชนิดดูดซึมที่ลำไส้ใหญ่",
  },
  {
    type: "ใยอาหาร (ไฟเบอร์)",
    coins: 4,
    text:
      "ไม่ถูกย่อยเป็นโมเลกุลเล็ก แต่ช่วยเพิ่มกากอาหาร กระตุ้นการเคลื่อนไหวของลำไส้ ลดเวลาที่ของเสียค้างในลำไส้ใหญ่ ลดความเสี่ยงท้องผูกและมะเร็งลำไส้ใหญ่",
  },
  {
    type: "น้ำ",
    coins: 2,
    text:
      "เป็นส่วนประกอบสำคัญของเลือดและน้ำเหลือง ช่วยลำเลียงสารอาหารและของเสีย การดูดซึมน้ำเกิดทั้งในลำไส้เล็กและลำไส้ใหญ่",
  },
];

// ---------- ของไม่เหมาะสม ----------
const badThings = [
  {
    type: "ไขมันทรานส์",
    penalty: 3, // จะไม่หักเหรียญแล้ว แต่เก็บไว้เป็นข้อมูล
    text:
      "ทำให้ระดับคอเลสเตอรอลชนิดไม่ดี (LDL) สูงขึ้น และชนิดดี (HDL) ต่ำลง เพิ่มความเสี่ยงโรคหัวใจและหลอดเลือด",
  },
  {
    type: "น้ำตาลปริมาณสูง",
    penalty: 2,
    text:
      "ทำให้ระดับกลูโคสในเลือดแกว่งตัวง่าย เพิ่มความเสี่ยงภาวะดื้ออินซูลินและโรคเบาหวานหากบริโภคต่อเนื่อง",
  },
  {
    type: "โซเดียมสูง",
    penalty: 2,
    text:
      "กระตุ้นการคั่งของน้ำในร่างกาย เพิ่มความดันโลหิต และเพิ่มภาระการทำงานของหัวใจและไต",
  },
];

// ---------- ระบบสืบพันธุ์ (สำหรับมินิเกมจับคู่) ----------
const reproductionPairs = [
  {
    name: "อัณฑะ (Testis)",
    meaning: "ผลิตอสุจิและฮอร์โมนเทสโทสเทอโรน ควบคุมลักษณะเพศชาย",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Figure_28_01_03.JPG/500px-Figure_28_01_03.JPG",
  },
  {
    name: "หลอดนำอสุจิ (Vas deferens)",
    meaning: "ท่อนำอสุจิจากอัณฑะสู่ท่อปัสสาวะ เตรียมผสมกับน้ำเลี้ยง",
    imageUrl: "https://health.campus-star.com/app/uploads/2015/06/%E0%B8%AD%E0%B8%AA%E0%B8%B8%E0%B8%88%E0%B8%B41.gif",
  },
  {
    name: "ถุงน้ำเลี้ยง (Seminal vesicle)",
    meaning: "สร้างน้ำเลี้ยงที่มีฟรักโทสเป็นพลังงานให้อสุจิ และสร้างสารทำให้อสุจิเคลื่อนที่ได้ดี",
    imageUrl: "https://static.cdntap.com/tap-assets-prod/wp-content/uploads/sites/25/2023/06/hydrocele-in-children1.png?width=700&quality=95",
  },
  {
    name: "ต่อมลูกหมาก (Prostate gland)",
    meaning: "หลั่งสารหล่อลื่นและสารปรับสมดุลความเป็นกรด-ด่าง ช่วยให้อสุจิมีชีวิตรอดในช่องคลอด",
    imageUrl: "https://media.istockphoto.com/id/2116867114/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%9E%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%81%E0%B9%82%E0%B8%95%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%9E%E0%B8%B4%E0%B8%A9%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A0%E0%B8%B1%E0%B8%A2%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%81%E0%B8%9B%E0%B8%81%E0%B8%95%E0%B8%B4%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%95%E0%B9%88%E0%B8%AD%E0%B8%A1%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%AB%E0%B8%A1%E0%B8%B2%E0%B8%81.jpg?s=2048x2048&w=is&k=20&c=Lud9-JAeug0YIoUPlLlMQCvjV3p31CpzpT33LDhOrj4=",
  },
  {
    name: "ท่อปัสสาวะ (Urethra)",
    meaning: "ทางผ่านของปัสสาวะและน้ำอสุจิ แต่ไม่เกิดพร้อมกัน ระบบสั่งงานแยกกัน",
    imageUrl: "https://media.istockphoto.com/id/2148671007/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%81%E0%B8%B2%E0%B8%A2%E0%B8%A7%E0%B8%B4%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%94%E0%B8%B4%E0%B8%99%E0%B8%9B%E0%B8%B1%E0%B8%AA%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B8%B0-%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B9%80%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C.jpg?s=2048x2048&w=is&k=20&c=cvxOkuqUZkCyb6PouyZLXQ_Ojwv_-ia1EH0hnDYBeyc=",
  },
  {
    name: "รังไข่ (Ovary)",
    meaning: "สร้างไข่และฮอร์โมนเอสโตรเจน/โปรเจสเทอโรน ควบคุมรอบเดือนและการตั้งครรภ์",
    imageUrl: "https://d8goewwfyuge4.cloudfront.net/web_5303/367bb0c88bcb24e0bb599f9e57d1d95ce0b98718.png",
  },
  {
    name: "ท่อนำไข่ (Fallopian tube)",
    meaning: "ที่อยู่ของการปฏิสนธิ ไข่และอสุจิพบกันบริเวณแอมพูลลาของท่อนำไข่",
    imageUrl: "https://w1.med.cmu.ac.th/obgyn/files/2023/05/word-image-50305-1.jpeg",
  },
  {
    name: "มดลูก (Uterus)",
    meaning: "ผนังมดลูกหนานุ่มสำหรับฝังตัวของตัวอ่อน และเป็นที่เจริญเติบโตระหว่างตั้งครรภ์",
    imageUrl: "https://media.istockphoto.com/id/1159291550/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%A1%E0%B8%94%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B1%E0%B8%81.jpg?s=2048x2048&w=is&k=20&c=4Qj8sjXN57rxS9F96X2PmiTvxAAiY3CBU9TRNUDrfpo=",
  },
  {
    name: "ปากมดลูก (Cervix)",
    meaning: "ช่องเปิดระหว่างมดลูกกับช่องคลอด มีมูกช่วยป้องกันเชื้อโรคและปรับความเป็นกรด-ด่าง",
    imageUrl: "https://media.istockphoto.com/id/1290065010/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B8%AA%E0%B8%B8%E0%B8%82%E0%B8%AA%E0%B8%B1%E0%B8%99%E0%B8%95%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B8%B2%E0%B8%81%E0%B8%A5%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%84%E0%B8%B4%E0%B8%94%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B8%B5%E0%B8%99%E0%B8%B4%E0%B8%A2%E0%B8%A1-%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%87%E0%B8%B2%E0%B8%A1%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%94%E0%B9%83%E0%B8%AA%E0%B8%AA%E0%B8%B2%E0%B8%A7%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%95%E0%B8%81%E0%B8%95%E0%B9%88%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%99%E0%B8%B1%E0%B8%9A%E0%B8%AA%E0%B8%99%E0%B8%B8%E0%B8%99%E0%B8%A1%E0%B8%94%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A3%E0%B8%B1%E0%B8%87%E0%B9%84%E0%B8%82%E0%B9%88%E0%B8%AB%E0%B8%8D%E0%B8%B4.jpg?s=2048x2048&w=is&k=20&c=GImVTb15spXg1HStjzYi4lpz_ihDTgTIQBLyLUkEHyU=",
  },
  {
    name: "ช่องคลอด (Vagina)",
    meaning: "ทางเข้าสู่ระบบสืบพันธุ์เพศหญิง รับอสุจิระหว่างการสืบพันธุ์และเป็นช่องคลอดระหว่างคลอด",
    imageUrl: "https://media.istockphoto.com/id/1239766676/th/%E0%B9%80%E0%B8%A7%E0%B8%84%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C/%E0%B9%84%E0%B8%AD%E0%B8%84%E0%B8%AD%E0%B8%99%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%8A%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%94%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%A1%E0%B8%99%E0%B8%B8%E0%B8%A9%E0%B8%A2%E0%B9%8C.jpg?s=2048x2048&w=is&k=20&c=rVmTMZAjB069ZRO4d8hpfouNj7QvpozKbflgoHO3JKI=",
  },
];

const GRID_ROWS = 6;
const GRID_COLS = 8;
const MIN_DEPTH = 2;
const MAX_DEPTH = 4;

let currentOrganIndex = 0;
let coins = 0;
let radarOwned = false;
let instantDigOwned = true;
let gridData = [];

// ---------- ระบบเสียงเอฟเฟค ----------
let audioContext = null;

function initAudio() {
  try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  } catch (e) {
    console.log("ไม่รองรับ Web Audio API");
  }
}

function playSound(type, options = {}) {
  if (!audioContext) {
    // ลองสร้าง audio context ใหม่ถ้ายังไม่มี
    initAudio();
    if (!audioContext) return;
  }
  
  // ตรวจสอบว่า audio context ถูก suspend หรือไม่ (ต้องมี user interaction)
  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {
      // ไม่สามารถ resume ได้
    });
  }
  
  const duration = options.duration || 0.1;
  const frequency = options.frequency || 440;
  const volume = options.volume || 0.3;
  const type_osc = options.oscType || "sine";

  try {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type_osc;

    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  } catch (e) {
    // ไม่สามารถสร้างเสียงได้
  }
}

function playDigSound() {
  playSound("dig", {
    frequency: 150 + Math.random() * 50,
    duration: 0.15,
    volume: 0.2,
    oscType: "square"
  });
}

function playGoodSound() {
  // เสียงดี - โทนสูงขึ้น
  playSound("good", {
    frequency: 523.25, // C5
    duration: 0.2,
    volume: 0.3,
    oscType: "sine"
  });
  
  setTimeout(() => {
    playSound("good2", {
      frequency: 659.25, // E5
      duration: 0.2,
      volume: 0.25,
      oscType: "sine"
    });
  }, 100);
  
  setTimeout(() => {
    playSound("good3", {
      frequency: 783.99, // G5
      duration: 0.25,
      volume: 0.2,
      oscType: "sine"
    });
  }, 200);
}

function playBadSound() {
  // เสียงไม่ดี - โทนต่ำ
  playSound("bad", {
    frequency: 200,
    duration: 0.3,
    volume: 0.25,
    oscType: "sawtooth"
  });
}

function playPurchaseSound() {
  playSound("purchase", {
    frequency: 440,
    duration: 0.15,
    volume: 0.3,
    oscType: "sine"
  });
  
  setTimeout(() => {
    playSound("purchase2", {
      frequency: 554.37,
      duration: 0.15,
      volume: 0.25,
      oscType: "sine"
    });
  }, 80);
}

function playClickSound() {
  playSound("click", {
    frequency: 800,
    duration: 0.05,
    volume: 0.15,
    oscType: "square"
  });
}

function playOrganChangeSound() {
  // เสียงเปลี่ยนอวัยวะ - โน้ตสั้นๆ
  playSound("organ1", {
    frequency: 392, // G4
    duration: 0.15,
    volume: 0.25,
    oscType: "sine"
  });
  
  setTimeout(() => {
    playSound("organ2", {
      frequency: 523.25, // C5
      duration: 0.2,
      volume: 0.2,
      oscType: "sine"
    });
  }, 150);
}

// สำหรับระบบ "กดค้าง 3 วินาที"
let holdTimeoutId = null;
let holdTargetIndex = null;
let isMouseDown = false;
let holdCellElement = null;

// สำหรับมินิเกมจับคู่ระบบสืบพันธุ์
let matchCards = [];
let matchFirstCard = null;
let matchLockBoard = false;
let matchMatchedCount = 0;
let matchGameCompleted = false;

// สำหรับเกมลูกแก้วระบบไหลเวียนเลือด
let bloodScore = 0;
let bloodPatientStatus = 100; // 0-100
let bloodCurrentLocation = "ปอด";
let bloodCurrentQuestion = null;
let bloodQuestionAnswered = false;
let bloodLocations = ["ปอด", "หัวใจห้องบนขวา", "หัวใจห้องล่างขวา", "หัวใจห้องบนซ้าย", "หัวใจห้องล่างซ้าย", "สมอง", "ตับ", "ไต", "กล้ามเนื้อ", "ลำไส้"];

// คำถามและสถานการณ์สำหรับเลือดแดง (Arterial Blood)
const arterialQuestions = [
  {
    situation: "คุณเดินทางมาถึงหัวใจห้องบนขวาแล้ว ตอนนี้คุณต้องการเดินทางไปปอดเพื่อรับออกซิเจน คุณต้องผ่านลิ้นหัวใจชื่ออะไร?",
    question: "ลิ้นหัวใจที่อยู่ระหว่างหัวใจห้องบนขวาและห้องล่างขวาเรียกว่าอะไร?",
    answers: ["ลิ้นไตรคัสปิด (Tricuspid valve)", "ลิ้นไมทรัล (Mitral valve)", "ลิ้นพัลโมนารี (Pulmonary valve)", "ลิ้นเอออร์ติก (Aortic valve)"],
    correct: 0,
    explanation: "ลิ้นไตรคัสปิดอยู่ระหว่างหัวใจห้องบนขวาและห้องล่างขวา ป้องกันเลือดไหลย้อนกลับ"
  },
  {
    situation: "คุณได้รับออกซิเจนจากปอดแล้ว ตอนนี้คุณเป็นเลือดแดงที่มีออกซิเจนสูง กำลังเดินทางกลับสู่หัวใจ",
    question: "หลอดเลือดที่นำเลือดจากปอดกลับสู่หัวใจห้องบนซ้ายเรียกว่าอะไร?",
    answers: ["หลอดเลือดดำพัลโมนารี (Pulmonary vein)", "หลอดเลือดแดงพัลโมนารี (Pulmonary artery)", "หลอดเลือดดำเวนา คาวา (Vena cava)", "หลอดเลือดแดงเอออร์ตา (Aorta)"],
    correct: 0,
    explanation: "หลอดเลือดดำพัลโมนารีเป็นหลอดเลือดที่นำเลือดที่มีออกซิเจนสูงจากปอดกลับสู่หัวใจห้องบนซ้าย"
  },
  {
    situation: "คุณเดินทางมาถึงหัวใจห้องล่างซ้ายแล้ว ตอนนี้คุณจะถูกสูบฉีดไปยังส่วนต่างๆ ของร่างกาย",
    question: "หลอดเลือดแดงที่ใหญ่ที่สุดในร่างกายคืออะไร?",
    answers: ["หลอดเลือดแดงเอออร์ตา (Aorta)", "หลอดเลือดแดงพัลโมนารี (Pulmonary artery)", "หลอดเลือดแดงคาโรติด (Carotid artery)", "หลอดเลือดแดงโคโรนารี (Coronary artery)"],
    correct: 0,
    explanation: "หลอดเลือดแดงเอออร์ตาเป็นหลอดเลือดแดงที่ใหญ่ที่สุด รับเลือดจากหัวใจห้องล่างซ้ายไปยังส่วนต่างๆ ของร่างกาย"
  },
  {
    situation: "คุณกำลังเดินทางไปยังสมองเพื่อส่งออกซิเจน",
    question: "อวัยวะใดที่ต้องการออกซิเจนมากที่สุดในร่างกาย?",
    answers: ["สมอง (Brain)", "หัวใจ (Heart)", "ตับ (Liver)", "ไต (Kidney)"],
    correct: 0,
    explanation: "สมองต้องการออกซิเจนมากที่สุด โดยใช้ประมาณ 20% ของออกซิเจนทั้งหมดในร่างกาย"
  },
  {
    situation: "คุณเดินทางมาถึงกล้ามเนื้อแล้ว กำลังส่งออกซิเจนให้กับเซลล์กล้ามเนื้อ",
    question: "หลอดเลือดฝอย (Capillary) มีหน้าที่อะไร?",
    answers: ["แลกเปลี่ยนออกซิเจนและคาร์บอนไดออกไซด์กับเซลล์ (Gaseous Exchange)", "นำเลือดกลับสู่หัวใจ (Return to Heart)", "สูบฉีดเลือดไปยังอวัยวะ (Pump Blood to Organs)", "กรองของเสีย (Filter Waste)"],
    correct: 0,
    explanation: "หลอดเลือดฝอยเป็นหลอดเลือดที่เล็กที่สุด ทำหน้าที่แลกเปลี่ยนออกซิเจน คาร์บอนไดออกไซด์ และสารอาหารกับเซลล์"
  },
  {
    situation: "คุณกำลังเดินทางผ่านหลอดเลือดแดงไปเลี้ยงสมอง",
    question: "หลอดเลือดแดงโคโรนารี (Coronary artery) เลี้ยงอวัยวะใด?",
    answers: ["หัวใจ (Heart)", "สมอง (Brain)", "ปอด (Lung)", "ตับ (Liver)"],
    correct: 0,
    explanation: "หลอดเลือดแดงโคโรนารีเลี้ยงเนื้อกล้ามเนื้อของหัวใจเพื่อให้ได้รับออกซิเจน"
  },
  {
    situation: "คุณเดินทางผ่านหลอดเลือดฝอยที่มีผนังบาง",
    question: "หลอดเลือดฝอย (Capillary) เหมาะสำหรับแลกเปลี่ยนสารเพราะเหตุใด?",
    answers: ["มีผนังเพียง 1 ชั้นเซลล์ทำให้แลกเปลี่ยนได้ง่าย (Thin Wall)", "มีผนังหนาและแข็ง (Thick Wall)", "มีลิ้นหัวใจควบคุม (Heart Valve)", "มีระบบกรองเพิ่มเติม (Filter System)"],
    correct: 0,
    explanation: "หลอดเลือดฝอยมีผนังบางมากเพียง 1 ชั้นเซลล์ ทำให้สามารถแลกเปลี่ยนออกซิเจน คาร์บอนไดออกไซด์ และสารอาหาร"
  },
  {
    situation: "คุณเดินทางมาถึงไต ที่มีการกรองของเสีย",
    question: "ไตกรองโลหิตเพื่อผลิตสารชนิดใด?",
    answers: ["ปัสสาวะ (Urine)", "เหลือง (Bile)", "อาการเหงื่อ (Sweat)", "น้ำลาย (Saliva)"],
    correct: 0,
    explanation: "ไตกรองเลือดเพื่อผลิตปัสสาวะซึ่งประกอบด้วยของเสีย เช่น ยูเรีย และน้ำส่วนเกิน"
  },
  {
    situation: "คุณกำลังเดินทางผ่านลิ้นไมทรัล",
    question: "ลิ้นไมทรัล (Mitral valve) อยู่ระหว่างห้องใดของหัวใจ?",
    answers: ["หัวใจห้องบนซ้ายและห้องล่างซ้าย (Left Atrium and Ventricle)", "หัวใจห้องบนขวาและห้องล่างขวา (Right Atrium and Ventricle)", "หัวใจด้านซ้ายและด้านขวา (Left and Right Heart)", "หลอดเลือดและหัวใจ (Artery and Heart)"],
    correct: 0,
    explanation: "ลิ้นไมทรัลอยู่ระหว่างหัวใจห้องบนซ้ายและห้องล่างซ้าย ป้องกันเลือดไหลย้อนกลับ"
  },
  {
    situation: "คุณกำลังเดินทางในท่อไข่ที่บรรทุกลิ่มเลือด",
    question: "ลิ่มเลือดแดง (Red Blood Cell) มีอายุการใช้งานนานเท่าไหร่?",
    answers: ["ประมาณ 120 วัน (About 120 days)", "ประมาณ 30 วัน (About 30 days)", "ประมาณ 1 ปี (About 1 year)", "ตลอดชีวิต (Lifetime)"],
    correct: 0,
    explanation: "ลิ่มเลือดแดงมีอายุการใช้งานประมาณ 120 วัน หลังจากนั้นจะถูกทำลายในม้าม"
  },
  {
    situation: "คุณเดินทางมาถึงหลอดเลือดแดงใจใหญ่",
    question: "หลอดเลือดแดงซึบคลาเวียนขวา (Right Subclavian artery) เลี้ยงส่วนใด?",
    answers: ["แขนและไหล่ขวา (Right Arm and Shoulder)", "ขาขวา (Right Leg)", "สมองซ้าย (Left Brain)", "ปอด (Lung)"],
    correct: 0,
    explanation: "หลอดเลือดแดงซับคลาเวียนขวาเลี้ยงแขน ไหล่ และส่วนบนของเนื้อหนังด้านขวา"
  },
  {
    situation: "คุณเดินทางผ่านเลือดที่อัดแน่นไปด้วยคาร์บอนไดออกไซด์",
    question: "เลือดที่มีคาร์บอนไดออกไซด์สูงมักจะ (สีอะไร) เมื่อออกจากร่างกาย?",
    answers: ["ดำ/ม่วง (Black/Purple)", "แดง (Red)", "สีชมพู (Pink)", "สีเหลือง (Yellow)"],
    correct: 0,
    explanation: "เลือดที่มีคาร์บอนไดออกไซด์สูงปรากฏเป็นสีม่วงดำ เนื่องจากฮีโมโกลบิน"
  },
  {
    situation: "คุณกำลังเดินทางผ่านจุดที่หลอดเลือดแดงและดำมีวาล์วควบคุม",
    question: "ลิ้นเอออร์ติก (Aortic valve) มีหน้าที่อะไร?",
    answers: ["ป้องกันเลือดไหลย้อนกลับจากเอออร์ตาไปหัวใจ (Prevent Backflow)", "เพิ่มความดันเลือด (Increase Blood Pressure)", "ช่วยในการสูบฉีดเลือด (Assist in Pumping)", "กรองเลือด (Filter Blood)"],
    correct: 0,
    explanation: "ลิ้นเอออร์ติกป้องกันเลือดไหลย้อนกลับจากหลอดเลือดแดงเอออร์ตาไปยังหัวใจ"
  },
  {
    situation: "คุณกำลังเดินทางผ่านถุงเพื่อกรองของเสียในปัสสาวะ",
    question: "หน่วยกรองสำหรับของเสียในไตเรียกว่าอะไร?",
    answers: ["เนเฟรอน (Nephron)", "ล้อบูล (Lobule)", "ไซนัส (Sinus)", "ศูนย์กลางประสาท"],
    correct: 0,
    explanation: "เนเฟรอนเป็นหน่วยกรองที่เล็กที่สุดในไต มีหลายล้านตัวในไตแต่ละตัว"
  },
  {
    situation: "คุณเดินทางผ่านส่วนที่ลิ่มเลือดผ่านการแลกเปลี่ยนก๊าซ",
    question: "กระบวนการแลกเปลี่ยนออกซิเจนจากหลอดเลือดไปยังเซลล์เรียกว่าอะไร?",
    answers: ["การแพร่ (Diffusion)", "การดูดซึม (Absorption)", "การขนส่ง (Transport)", "การสูบฉีด (Injection)"],
    correct: 0,
    explanation: "ออกซิเจนแพร่จากบริเวณที่มีความเข้มข้นสูงไปยังบริเวณที่มีความเข้มข้นต่ำ"
  }
];

// คำถามและสถานการณ์สำหรับเลือดดำ (Venous Blood)
const venousQuestions = [
  {
    situation: "คุณได้ส่งออกซิเจนให้กับเซลล์แล้ว ตอนนี้คุณเป็นเลือดที่มีคาร์บอนไดออกไซด์สูง กำลังเดินทางกลับสู่หัวใจ",
    question: "หลอดเลือดที่นำเลือดที่มีคาร์บอนไดออกไซด์สูงกลับสู่หัวใจห้องบนขวาเรียกว่าอะไร?",
    answers: ["หลอดเลือดดำเวนา คาวา (Vena cava)", "หลอดเลือดแดงเอออร์ตา (Aorta)", "หลอดเลือดดำพัลโมนารี (Pulmonary vein)", "หลอดเลือดแดงพัลโมนารี (Pulmonary artery)"],
    correct: 0,
    explanation: "หลอดเลือดดำเวนา คาวานำเลือดที่มีคาร์บอนไดออกไซด์สูงจากส่วนต่างๆ ของร่างกายกลับสู่หัวใจห้องบนขวา"
  },
  {
    situation: "คุณเดินทางมาถึงหัวใจห้องบนขวาแล้ว ตอนนี้คุณจะถูกสูบฉีดไปยังปอดเพื่อแลกเปลี่ยนก๊าซ",
    question: "หลอดเลือดที่นำเลือดจากหัวใจห้องล่างขวาไปยังปอดเรียกว่าอะไร?",
    answers: ["หลอดเลือดแดงพัลโมนารี (Pulmonary artery)", "หลอดเลือดดำพัลโมนารี (Pulmonary vein)", "หลอดเลือดแดงเอออร์ตา (Aorta)", "หลอดเลือดดำเวนา คาวา (Vena cava)"],
    correct: 0,
    explanation: "หลอดเลือดแดงพัลโมนารีนำเลือดที่มีคาร์บอนไดออกไซด์สูงจากหัวใจห้องล่างขวาไปยังปอด"
  },
  {
    situation: "คุณเดินทางมาถึงปอดแล้ว กำลังแลกเปลี่ยนคาร์บอนไดออกไซด์กับออกซิเจน",
    question: "การแลกเปลี่ยนก๊าซในปอดเกิดขึ้นที่ไหน?",
    answers: ["ถุงลม (Alveoli)", "หลอดลม (Bronchi)", "หลอดลมฝอย (Bronchioles)", "กล่องเสียง (Larynx)"],
    correct: 0,
    explanation: "ถุงลมเป็นโครงสร้างเล็กๆ ในปอดที่มีผนังบางมาก ทำหน้าที่แลกเปลี่ยนออกซิเจนและคาร์บอนไดออกไซด์"
  },
  {
    situation: "คุณเดินทางมาจากไต กำลังนำของเสียกลับสู่หัวใจ",
    question: "ไตมีหน้าที่อะไรในระบบไหลเวียนเลือด?",
    answers: ["กรองของเสียออกจากเลือด (Filter Waste)", "ผลิตฮอร์โมน (Produce Hormone)", "ย่อยอาหาร (Digest Food)", "ดูดซึมสารอาหาร (Absorb Nutrients)"],
    correct: 0,
    explanation: "ไตทำหน้าที่กรองของเสีย เช่น ยูเรีย และน้ำส่วนเกินออกจากเลือด แล้วขับออกเป็นปัสสาวะ"
  },
  {
    situation: "คุณเดินทางมาจากตับ กำลังนำสารอาหารและของเสียกลับสู่หัวใจ",
    question: "ตับมีหน้าที่อะไรในระบบไหลเวียนเลือด?",
    answers: ["กรองเลือด ผลิตน้ำดี และเก็บสะสมสารอาหาร (Filter, Produce Bile, Store Nutrients)", "สูบฉีดเลือด (Pump Blood)", "แลกเปลี่ยนก๊าซ (Exchange Gas)", "กรองของเสีย (Filter Waste)"],
    correct: 0,
    explanation: "ตับทำหน้าที่กรองเลือดจากลำไส้ ผลิตน้ำดีสำหรับย่อยไขมัน และเก็บสะสมสารอาหารต่างๆ"
  },
  {
    situation: "คุณกำลังเดินทางผ่านหลอดเลือดแดงโคโรนารี เลี้ยงให้กับเนื้อกล้ามเนื้อหัวใจ",
    question: "หลอดเลือดแดงโคโรนารีมีหน้าที่อะไร?",
    answers: ["เลี้ยงเนื้อกล้ามเนื้อของหัวใจ (Nourish Heart Muscle)", "นำเลือดไปยังปอด (Transport to Lung)", "นำเลือดไปยังสมอง (Transport to Brain)", "นำเลือดกลับจากขา (Return from Leg)"],
    correct: 0,
    explanation: "หลอดเลือดแดงโคโรนารีเลี้ยงเนื้อกล้ามเนื้อของหัวใจให้ได้รับออกซิเจนและสารอาหาร"
  },
  {
    situation: "คุณเดินทางมาถึงอวัยวะที่ต้องการออกซิเจนมากที่สุด",
    question: "อวัยวะใดต้องการออกซิเจนมากที่สุด (ร้อยละของการไหลเวียน)?",
    answers: ["สมอง (20%) (Brain)", "หัวใจ (5%) (Heart)", "ตับ (25%) (Liver)", "ไต (20%) (Kidney)"],
    correct: 0,
    explanation: "สมองใช้ออกซิเจนประมาณ 20% ของทั้งร่างกาย เนื่องจากเป็นอวัยวะที่กิจกรรมสูง"
  },
  {
    situation: "คุณเดินทางมาถึงหัวใจ ห้องล่างซ้ายกำลังหดตัวเพื่อสูบฉีดเลือด",
    question: "การหดตัวของหัวใจแต่ละครั้งเรียกว่าอะไร?",
    answers: ["การหดตัว (Contraction/Systole)", "การคลายตัว (Diastole)", "การบีบตัว (Compression)", "การเต้น (Pulsation)"],
    correct: 0,
    explanation: "การหดตัวของหัวใจเรียกว่า Systole ซึ่งเป็นเมื่อกล้ามเนื้อหัวใจหดตัวและสูบฉีดเลือด"
  },
  {
    situation: "คุณกำลังเดินทางผ่านหลอดเลือดดำที่มีวาล์ว",
    question: "หลอดเลือดดำของขา (Greater Saphenous Vein) มีหน้าที่อะไร?",
    answers: ["นำเลือดจากขากลับสู่หัวใจ (Return Blood from Leg to Heart)", "นำเลือดไปยังขา (Transport Blood to Leg)", "แลกเปลี่ยนก๊าซ (Exchange Gas)", "กรองของเสีย (Filter Waste)"],
    correct: 0,
    explanation: "หลอดเลือดดำของขาเป็นหลอดเลือดดำที่ใหญ่ที่สุด นำเลือดจากขากลับสู่หัวใจผ่านเวนา คาวา"
  },
  {
    situation: "คุณเดินทางผ่านปอด แลกเปลี่ยนก๊าซด้านข้างอื่นของหัวใจ",
    question: "ปอดซ้ายและปอดขวามีความแตกต่างอะไร?",
    answers: ["ปอดซ้ายมี 2 葉 ปอดขวามี 3 葉 (Left: 2 lobes, Right: 3 lobes)", "ปอดขวามี 2 葉 ปอดซ้ายมี 3 葉 (Right: 2 lobes, Left: 3 lobes)", "ปอดทั้งคู่มี 3 葉 (Both have 3 lobes)", "ไม่มีความแตกต่าง (No difference)"],
    correct: 0,
    explanation: "ปอดซ้ายมี 2 葉 เพื่อให้ที่ว่างสำหรับหัวใจ ส่วนปอดขวามี 3 葉 เพราะไม่มีหัวใจ"
  },
  {
    situation: "คุณกำลังเดินทางเข้าไปในการไหลเวียนเลือดฝอยในกล้ามเนื้อ",
    question: "ความดันเลือดในหลอดเลือดแดง (Systolic/Diastolic) เป็นเท่าไหร่?",
    answers: ["120/80 mmHg (Normal)", "100/60 mmHg (Low)", "140/90 mmHg (High)", "90/50 mmHg (Critical)"],
    correct: 0,
    explanation: "ความดันเลือดปกติ 120/80 mmHg โดย 120 คือความดันเมื่อหัวใจหดตัว 80 คือเมื่อคลายตัว"
  },
  {
    situation: "คุณกำลังเดินทางผ่านหลอดเลือดแดงและหลอดเลือดดำที่อยู่ใกล้กัน",
    question: "ความแตกต่างระหว่างหลอดเลือดแดง (Artery) และหลอดเลือดดำ (Vein) คืออะไร?",
    answers: ["แดงเนื้อหนาและมีความดันสูง ดำเนื้อบางและมีความดันต่ำ (Red/Thick and High Pressure, Blue/Thin and Low Pressure)", "ตรงกันข้าม (Opposite)", "ไม่มีความแตกต่างในความหนา (No Thickness Difference)", "ดำมีความดันสูงกว่า (Blue higher pressure)"],
    correct: 0,
    explanation: "หลอดเลือดแดงมีเนื้อหนาเพื่อรับความดันสูงจากหัวใจ หลอดเลือดดำมีเนื้อบาง"
  },
  {
    situation: "คุณเดินทางผ่านเบาะหน้าท้องที่เก็บเหลี่ยมเลือด",
    question: "อวัยวะใดเก็บเหลี่ยมเลือด?",
    answers: ["ม้าม (Spleen)", "ตับ (Liver)", "ไต (Kidney)", "ลิ้นหัวใจ (Heart Valve)"],
    correct: 0,
    explanation: "ม้ามเก็บเหลี่ยมเลือดสำรองและทำให้หมดอายุ นอกจากนี้ยังช่วยในภูมิคุ้มกัน"
  },
  {
    situation: "คุณกำลังเดินทางผ่านหลอดเลือดที่มีฝาเดือยป้องกัน",
    question: "หลอดเลือดดำมีลิ้นหัวใจ (Valves) เพื่อควบคุมอะไร?",
    answers: ["ป้องกันเลือดไหลย้อนกลับ (Prevent Backflow)", "เพิ่มความดันเลือด (Increase Blood Pressure)", "ลดการติดเชื้อ (Reduce Infection)", "เพิ่มอุณหภูมิเลือด (Increase Blood Temperature)"],
    correct: 0,
    explanation: "ลิ้นหัวใจในหลอดเลือดดำป้องกันเลือดไหลย้อนกลับ เพื่อให้เลือดไหลไปยังหัวใจ"
  },
  {
    situation: "คุณเดินทางมาถึงลำไส้เล็ก ที่มีการดูดซึมสารอาหาร",
    question: "ลำไส้เล็กดูดซึมสารอาหารไปยังหลอดเลือดใด?",
    answers: ["หลอดเลือดแดงไปยังตับ (Portal vein)", "หลอดเลือดแดงเอออร์ตา (Aorta)", "หลอดเลือดดำเวนา คาวา (Vena cava)", "หลอดเลือดแดงเมเสนทรี (Mesenteric artery)"],
    correct: 0,
    explanation: "สารอาหารที่ดูดซึมจากลำไส้เล็กไปยังตับผ่านหลอดเลือดประตูตับ (Portal vein)"
  },
  {
    situation: "คุณเดินทางผ่านหลอดเลือดดำที่เก็บเลือดจากสมอง",
    question: "หลอดเลือดดำจากสมองไปสู่ที่ใดในการไหลเวียนเลือด?",
    answers: ["หลอดเลือดดำเวนา คาวาบน (Superior Vena cava)", "หลอดเลือดแดงเอออร์ตา (Aorta)", "หัวใจห้องบนขวา (Right Atrium)", "ไต (Kidney)"],
    correct: 0,
    explanation: "เลือดจากสมองไหลย้อนกลับผ่านหลอดเลือดดำเวนา คาวาบนไปยังหัวใจ"
  },
  {
    situation: "คุณกำลังเดินทางกลับจากแขน ที่มีการออกแบบอย่างซับซ้อน",
    question: "หลอดเลือดดำแขนที่ใหญ่ที่สุดเรียกว่าอะไร?",
    answers: ["หลอดเลือดดำแบซิลิค (Basilic vein)", "หลอดเลือดแดงเอออร์ตา (Aorta)", "หลอดเลือดดำเซฟาลิก (Cephalic vein)", "หลอดเลือดแดงอัลนาร์ (Ulnar artery)"],
    correct: 0,
    explanation: "หลอดเลือดดำแบซิลิคอยู่ใต้ชั้นกล้ามเนื้อ และเป็นหลอดเลือดดำแขนที่ใหญ่ที่สุด"
  },
  {
    situation: "คุณเดินทางกลับจากต่อมไทรอยด์ผ่านหลอดเลือดดำ",
    question: "ต่อมไทรอยด์ควบคุมหน้าที่ใดของร่างกาย?",
    answers: ["การเผาผลาญ (Metabolism)", "ความดันโลหิต (Blood Pressure)", "ระดับน้ำตาล (Blood Sugar)", "ระดับแคลเซียม (Calcium Level)"],
    correct: 0,
    explanation: "ต่อมไทรอยด์ควบคุมอัตราการเผาผลาญของร่างกายผ่านฮอร์โมนไทรอก์ซิน"
  },
  {
    situation: "คุณกำลังเดินทางผ่านหลอดเลือดดำรองที่เล็ก",
    question: "ความแตกต่างระหว่างเวนูล (Venule) และหลอดเลือดดำ (Vein) คืออะไร?",
    answers: ["เวนูลเล็กกว่า ต่ออยู่กับหลอดเลือดฝอย (Venule is smaller, connects to capillary)", "เวนูลใหญ่กว่า (Venule is larger)", "เวนูลมีลิ้นหัวใจ ดำไม่มี (Venule has valve, vein doesn't)", "ไม่มีความแตกต่าง (No difference)"],
    correct: 0,
    explanation: "เวนูลเป็นหลอดเลือดดำที่เล็กที่สุด ต่ออยู่กับหลอดเลือดฝอยและรวมตัวกันเป็นหลอดเลือดดำใหญ่"
  },
  {
    situation: "คุณเดินทางกลับจากไตและกำลังเข้าใกล้หัวใจ",
    question: "หลอดเลือดดำจากไตไปสู่หัวใจเรียกว่าอะไร?",
    answers: ["เวนา รีนาลิส (Renal vein)", "หลอดเลือดแดงเรนัล (Renal artery)", "เวนา ลัมบาร์ (Lumbar vein)", "เวนา ไซยาติก (Sciatic vein)"],
    correct: 0,
    explanation: "เวนา รีนาลิสนำเลือดจากไตไปยังหลอดเลือดดำเวนา คาวา"
  },
  {
    situation: "คุณกำลังเดินทางผ่านหลอดเลือดดำที่มีช่องทางรับเข้าหลายตัว",
    question: "เวนา คาวา (Vena cava) มีสองส่วน คือ?",
    answers: ["เวนา คาวา ซูเปริเอร์ (บน) และอินฟีเรียร์ (ล่าง) (Superior and Inferior)", "เวนา คาวา ซ้าย และขวา (Left and Right)", "เวนา คาวา แดง และดำ (Red and Black)", "เวนา คาวา ภายในและนอก (Internal and External)"],
    correct: 0,
    explanation: "เวนา คาวาแบ่งเป็น 2 ส่วน คือ ซูเปริเอร์รับเลือดจากส่วนบน อินฟีเรียร์รับเลือดจากส่วนล่าง"
  },
  {
    situation: "คุณเดินทางกลับจากตับแล้ว ผ่านหลอดเลือดประตูตับ",
    question: "หลอดเลือดประตูตับ (Hepatic portal vein) มีหน้าที่อะไร?",
    answers: ["นำเลือดจากลำไส้เล็กไปยังตับเพื่อผ่านการกรอง (Transport from Small Intestine to Liver for Filtering)", "นำเลือดออกจากตับ (Transport Blood out of Liver)", "เลี้ยงตับ (Nourish Liver)", "แลกเปลี่ยนก๊าซในตับ (Exchange Gas in Liver)"],
    correct: 0,
    explanation: "หลอดเลือดประตูตับนำเลือดที่มีสารอาหารจากลำไส้เล็กไปยังตับเพื่อการกรองและประมวลผล"
  },
  {
    situation: "คุณเดินทางกลับจากปอด ผ่านหลอดเลือดดำพัลโมนารี",
    question: "มีหลอดเลือดดำพัลโมนารีกี่ลำ?",
    answers: ["4 ลำ (2 จากปอดแต่ละข้าง) (4 branches - 2 from each lung)", "2 ลำ (2 branches)", "6 ลำ (6 branches)", "8 ลำ (8 branches)"],
    correct: 0,
    explanation: "มีหลอดเลือดดำพัลโมนารี 4 ลำ คือ 2 ลำจากปอดซ้าย และ 2 ลำจากปอดขวา"
  },
  {
    situation: "คุณกำลังเดินทางผ่านจุดที่มีการแยกหลอดเลือด",
    question: "เลขที่แยกของหลอดเลือดแดงเอออร์ตาเรียกว่าอะไร?",
    answers: ["หลอดเลือดแดงซับคลาเวียน หลอดเลือดแดงแบซิลิส แลสโรลิค (Subclavian, Basilar, Iliac)", "หลอดเลือดแดงแบรนเชียล (Brachial)", "หลอดเลือดแดงดิจิทัล (Digital)", "หลอดเลือดแดงท้องแถบ (Abdominal)"],
    correct: 0,
    explanation: "เอออร์ตาแบ่งออกเป็นหลายส่วน เช่น ซับคลาเวียน เซลियัก และเมเซนทรี"
  }
];

// คำถามสำหรับโหมดแพทย์ (วินิจฉัยผู้ป่วย)
const diagnosisQuestions = [
  {
    situation: "ผู้ป่วยมีอาการเจ็บหน้าอกร้าวไปที่แขนซ้าย",
    question: "คุณคิดว่าน่าจะเป็นโรคอะไร?",
    answers: ["โรคหัวใจขาดเลือด (Myocardial Infarction)", "โรคปอดอักเสบ (Pneumonia)", "โรคกระเพาะอาหารอักเสบ (Gastritis)", "โรคไตอักเสบ (Nephritis)"],
    correct: 0,
    explanation: "อาการเจ็บหน้าอกร้าวไปที่แขนซ้ายเป็นอาการคลาสสิกของโรคหัวใจขาดเลือด เกิดจากการอุดตันของหลอดเลือดแดงโคโรนารี",
    patientImpact: -15
  },
  {
    situation: "ผู้ป่วยมีอาการหายใจลำบาก เจ็บหน้าอก และไอเป็นเลือด",
    question: "คุณคิดว่าน่าจะเป็นโรคอะไร?",
    answers: ["โรคปอดอุดกั้นเรื้อรัง (COPD)", "โรคหัวใจ (Heart Disease)", "โรคกระเพาะอาหาร (Gastric Disease)", "โรคตับ (Liver Disease)"],
    correct: 0,
    explanation: "อาการหายใจลำบาก เจ็บหน้าอก และไอเป็นเลือดเป็นอาการของโรคปอดอุดกั้นเรื้อรัง",
    patientImpact: -10
  },
  {
    situation: "ผู้ป่วยมีอาการบวมที่ขาและเท้า หายใจลำบากเมื่อนอนราบ",
    question: "คุณคิดว่าน่าจะเป็นโรคอะไร?",
    answers: ["โรคหัวใจล้มเหลว (Heart Failure)", "โรคไต", "โรคตับ", "โรคเบาหวาน"],
    correct: 0,
    explanation: "อาการบวมที่ขาและเท้า หายใจลำบากเมื่อนอนราบเป็นอาการของโรคหัวใจล้มเหลว เกิดจากหัวใจไม่สามารถสูบฉีดเลือดได้อย่างมีประสิทธิภาพ",
    patientImpact: -20
  },
  {
    situation: "ผู้ป่วยมีอาการปวดศีรษะรุนแรง แขนขาอ่อนแรงข้างหนึ่ง และพูดไม่ชัด",
    question: "คุณคิดว่าน่าจะเป็นโรคอะไร?",
    answers: ["โรคหลอดเลือดสมอง (Stroke)", "โรคไมเกรน", "โรคความดันโลหิตสูง", "โรคเบาหวาน"],
    correct: 0,
    explanation: "อาการปวดศีรษะรุนแรง แขนขาอ่อนแรงข้างหนึ่ง และพูดไม่ชัดเป็นอาการของโรคหลอดเลือดสมอง เกิดจากการอุดตันหรือแตกของหลอดเลือดในสมอง",
    patientImpact: -25
  },
  {
    situation: "ผู้ป่วยมีอาการเจ็บหน้าอกเมื่อออกกำลังกาย แต่หายเมื่อพัก",
    question: "คุณคิดว่าน่าจะเป็นโรคอะไร?",
    answers: ["โรคหลอดเลือดหัวใจตีบ (Angina)", "โรคปอด", "โรคกล้ามเนื้อ", "โรคกระดูก"],
    correct: 0,
    explanation: "อาการเจ็บหน้าอกเมื่อออกกำลังกายแต่หายเมื่อพักเป็นอาการของโรคหลอดเลือดหัวใจตีบ เกิดจากการไหลเวียนเลือดไปเลี้ยงหัวใจไม่เพียงพอ",
    patientImpact: -12
  }
];

// ---------- ข้อมูลเกมระบบหายใจ ----------
// โหมดแพทย์ฝึกหัด - ผู้ป่วยและคำถาม
const breathPatientCases = [
  {
    symptoms: "ผู้ป่วยมีอาการหายใจหอบเหนื่อย มีเสียงหวีดในปอด และไอแห้งๆ",
    questions: [
      { text: "อาการนี้เป็นมานานเท่าไหร่?", correct: false },
      { text: "ผู้ป่วยมีประวัติแพ้สารก่อภูมิแพ้หรือไม่?", correct: true },
      { text: "ผู้ป่วยสูบบุหรี่หรือไม่?", correct: false },
      { text: "มีไข้หรือไม่?", correct: false }
    ],
    treatments: [
      { text: "ให้ยาขยายหลอดลมและยาสเตียรอยด์", correct: true, explanation: "ถูกต้อง! อาการนี้บ่งชี้ถึงโรคหอบหืด ต้องใช้ยาขยายหลอดลมและยาสเตียรอยด์เพื่อลดการอักเสบ" },
      { text: "ให้ยาปฏิชีวนะ", correct: false, explanation: "ไม่ถูกต้อง อาการนี้ไม่ใช่การติดเชื้อ" },
      { text: "ให้ออกซิเจนเสริม", correct: false, explanation: "อาจจำเป็นแต่ไม่ใช่การรักษาหลัก" },
      { text: "ให้ยาแก้ไอ", correct: false, explanation: "ไม่เพียงพอ ต้องรักษาที่สาเหตุ" }
    ],
    disease: "โรคหอบหืด (Asthma)"
  },
  {
    symptoms: "ผู้ป่วยมีอาการไอไม่หยุด มีเสมหะสีเขียว และมีไข้",
    questions: [
      { text: "ผู้ป่วยมีอาการเจ็บหน้าอกหรือไม่?", correct: true },
      { text: "ผู้ป่วยดื่มน้ำมากแค่ไหน?", correct: false },
      { text: "ผู้ป่วยมีประวัติโรคหัวใจหรือไม่?", correct: false },
      { text: "ผู้ป่วยทำงานในสภาพแวดล้อมที่มีฝุ่นหรือไม่?", correct: false }
    ],
    treatments: [
      { text: "ให้ยาปฏิชีวนะและยาลดไข้", correct: true, explanation: "ถูกต้อง! อาการนี้บ่งชี้ถึงหลอดลมอักเสบจากเชื้อแบคทีเรีย ต้องใช้ยาปฏิชีวนะ" },
      { text: "ให้ยาขยายหลอดลม", correct: false, explanation: "ไม่เพียงพอ ต้องใช้ยาปฏิชีวนะด้วย" },
      { text: "ให้ยาแก้ไอเท่านั้น", correct: false, explanation: "ไม่ถูกต้อง ต้องรักษาการติดเชื้อ" },
      { text: "ให้ออกซิเจนเสริม", correct: false, explanation: "อาจจำเป็นแต่ไม่ใช่การรักษาหลัก" }
    ],
    disease: "หลอดลมอักเสบ (Bronchitis)"
  },
  {
    symptoms: "ผู้ป่วยมีอาการหายใจไม่ออกเฉียบพลัน หน้าอกแน่น และมีเสียงหายใจผิดปกติ",
    questions: [
      { text: "ผู้ป่วยมีประวัติโรคหอบหืดหรือไม่?", correct: true },
      { text: "ผู้ป่วยดื่มกาแฟหรือไม่?", correct: false },
      { text: "ผู้ป่วยนอนหลับดีหรือไม่?", correct: false },
      { text: "ผู้ป่วยออกกำลังกายบ่อยแค่ไหน?", correct: false }
    ],
    treatments: [
      { text: "ให้ยาขยายหลอดลมฉุกเฉินและออกซิเจน", correct: true, explanation: "ถูกต้อง! นี่คืออาการหอบหืดเฉียบพลัน ต้องให้ยาขยายหลอดลมทันที" },
      { text: "ให้ยาปฏิชีวนะ", correct: false, explanation: "ไม่ถูกต้อง ไม่ใช่การติดเชื้อ" },
      { text: "ให้ยาแก้ปวด", correct: false, explanation: "ไม่เกี่ยวข้องกับอาการ" },
      { text: "รอให้อาการดีขึ้นเอง", correct: false, explanation: "อันตราย! ต้องรักษาทันที" }
    ],
    disease: "หอบหืดเฉียบพลัน (Acute Asthma Attack)"
  },
  {
    symptoms: "ผู้ป่วยมีอาการหายใจลำบากเรื้อรัง ไอเรื้อรัง และมีเสมหะมาก",
    questions: [
      { text: "ผู้ป่วยสูบบุหรี่หรือไม่?", correct: true },
      { text: "ผู้ป่วยอายุเท่าไหร่?", correct: false },
      { text: "ผู้ป่วยดื่มแอลกอฮอล์หรือไม่?", correct: false },
      { text: "ผู้ป่วยมีประวัติโรคภูมิแพ้หรือไม่?", correct: false }
    ],
    treatments: [
      { text: "แนะนำให้เลิกบุหรี่ ให้ยาขยายหลอดลม และกายภาพบำบัด", correct: true, explanation: "ถูกต้อง! อาการนี้บ่งชี้ถึงโรคปอดอุดกั้นเรื้อรัง (COPD) ต้องเลิกบุหรี่และใช้ยาขยายหลอดลม" },
      { text: "ให้ยาปฏิชีวนะ", correct: false, explanation: "ไม่ถูกต้อง ไม่ใช่การติดเชื้อ" },
      { text: "ให้ยาแก้ไอเท่านั้น", correct: false, explanation: "ไม่เพียงพอ ต้องรักษาที่สาเหตุ" },
      { text: "ให้ออกซิเจนเสริมเท่านั้น", correct: false, explanation: "จำเป็นแต่ไม่ใช่การรักษาหลัก" }
    ],
    disease: "โรคปอดอุดกั้นเรื้อรัง (COPD)"
  }
];

// โหมดจับคู่ - อาการกับโรค
const breathMatchingPairs = [
  { symptom: "หายใจหอบเหนื่อย + เสียงหวีด", disease: "โรคหอบหืด", icon: "🌬️" },
  { symptom: "ไอไม่หยุด + เสมหะสีเขียว", disease: "หลอดลมอักเสบ", icon: "🤧" },
  { symptom: "หายใจไม่ออกเฉียบพลัน", disease: "หอบหืดเฉียบพลัน", icon: "⚠️" },
  { symptom: "หายใจลำบากเรื้อรัง + ไอเรื้อรัง", disease: "โรคปอดอุดกั้นเรื้อรัง", icon: "💨" },
  { symptom: "เจ็บหน้าอก + ไอเป็นเลือด", disease: "วัณโรค", icon: "🩸" },
  { symptom: "หายใจเร็ว + หน้าอกแน่น", disease: "ปอดบวม", icon: "🔥" }
];

// โหมดแข่งกับเวลา - คำถามเร็ว
const breathTimedQuestions = [
  {
    question: "อวัยวะใดทำหน้าที่แลกเปลี่ยนก๊าซออกซิเจนและคาร์บอนไดออกไซด์?",
    answers: ["ถุงลม (Alveoli)", "หลอดลม", "กล่องเสียง", "จมูก"],
    correct: 0
  },
  {
    question: "โรคหอบหืดเกิดจากอะไร?",
    answers: ["การอักเสบและหดตัวของหลอดลม (Inflammation and Contraction of Bronchi)", "การติดเชื้อแบคทีเรีย (Bacterial Infection)", "การสูบบุหรี่ (Smoking)", "การขาดออกซิเจน (Oxygen Deficiency)"],
    correct: 0
  },
  {
    question: "ก๊าซใดที่ร่างกายต้องการจากอากาศ?",
    answers: ["ออกซิเจน (Oxygen)", "คาร์บอนไดออกไซด์ (Carbon Dioxide)", "ไนโตรเจน (Nitrogen)", "อาร์กอน (Argon)"],
    correct: 0
  },
  {
    question: "โรคปอดอุดกั้นเรื้อรัง (COPD) มักเกิดจากอะไร?",
    answers: ["การสูบบุหรี่ (Smoking)", "การติดเชื้อไวรัส (Viral Infection)", "การแพ้สารก่อภูมิแพ้ (Allergens)", "การขาดออกซิเจน (Oxygen Deficiency)"],
    correct: 0
  },
  {
    question: "อวัยวะใดทำหน้าที่กรองและอุ่นอากาศ?",
    answers: ["จมูก (Nose)", "ปอด (Lung)", "หลอดลม (Bronchi)", "กล่องเสียง (Larynx)"],
    correct: 0
  },
  {
    question: "เสียงหวีดในปอดมักบ่งชี้ถึงโรคอะไร?",
    answers: ["โรคหอบหืด (Asthma)", "โรคปอดบวม (Pulmonary Edema)", "วัณโรค (Tuberculosis)", "โรคหัวใจ (Heart Disease)"],
    correct: 0
  },
  {
    question: "ก๊าซใดที่ร่างกายขับออกมาทางลมหายใจ?",
    answers: ["คาร์บอนไดออกไซด์ (Carbon Dioxide)", "ออกซิเจน (Oxygen)", "ไนโตรเจน (Nitrogen)", "ไฮโดรเจน (Hydrogen)"],
    correct: 0
  },
  {
    question: "หลอดลมอักเสบมักเกิดจากอะไร?",
    answers: ["การติดเชื้อไวรัสหรือแบคทีเรีย (Viral or Bacterial Infection)", "การแพ้สารก่อภูมิแพ้ (Allergens)", "การสูบบุหรี่ (Smoking)", "การขาดออกซิเจน (Oxygen Deficiency)"],
    correct: 0
  },
  {
    question: "ถุงลม (Alveoli) ทำหน้าที่ใด?",
    answers: ["แลกเปลี่ยนก๊าซออกซิเจนและคาร์บอนไดออกไซด์ (Exchange Oxygen and Carbon Dioxide)", "ฟอกอากาศ (Filter Air)", "ความชื้นของอากาศ (Air Humidity)", "ลดเสียง (Reduce Sound)"],
    correct: 0
  },
  {
    question: "กล่องเสียง (Larynx) มีหน้าที่อะไร?",
    answers: ["ผลิตเสียงและป้องกันการเข้าของอาหาร (Produce Sound and Prevent Food Entry)", "กรองอากาศ (Filter Air)", "ความชื้นอากาศ (Air Humidity)", "แลกเปลี่ยนก๊าซ (Exchange Gas)"],
    correct: 0
  },
  {
    question: "จมูกมีหน้าที่ใด?",
    answers: ["กรองและอุ่นอากาศก่อนเข้าปอด (Filter and Warm Air Before Entering Lung)", "ผลิตเสียง (Produce Sound)", "แลกเปลี่ยนก๊าซ (Exchange Gas)", "กรองเลือด (Filter Blood)"],
    correct: 0
  },
  {
    question: "หลอดลมหลัก (Bronchi) แบ่งออกเป็นกี่ส่วน?",
    answers: ["2 ส่วน (ซ้ายและขวา) (2 branches - Left and Right)", "3 ส่วน (3 branches)", "4 ส่วน (4 branches)", "หลายส่วนไม่มีจำนวนที่แน่นอน (Multiple, no fixed number)"],
    correct: 0
  },
  {
    question: "ม้านอน (Diaphragm) ทำหน้าที่อะไรในการหายใจ?",
    answers: ["ดึงลง เพื่อดูดอากาศเข้าปอด (Pull Down to Draw Air into Lung)", "ผลิตอากาศ (Produce Air)", "กรองอากาศ (Filter Air)", "ปิดก้องลม (Close Airways)"],
    correct: 0
  },
  {
    question: "อัตราการหายใจปกติของผู้ใหญ่เป็นเท่าไหร่ต่อนาที?",
    answers: ["12-20 ครั้ง (12-20 times)", "30-40 ครั้ง (30-40 times)", "50-60 ครั้ง (50-60 times)", "5-10 ครั้ง (5-10 times)"],
    correct: 0
  },
  {
    question: "โรควัณโรค (Tuberculosis) เกิดจากการติดเชื้ออะไร?",
    answers: ["แบคทีเรีย Mycobacterium tuberculosis (Bacterium Mycobacterium tuberculosis)", "ไวรัส (Virus)", "เชื้อรา (Fungus)", "คนทีธาตุ (Parasite)"],
    correct: 0
  },
  {
    question: "ปอดบวม (Pulmonary Edema) เกิดจากสาเหตุใด?",
    answers: ["เลือดไหลออกหรืออุมน้ำเข้าไปในถุงลม (Blood leakage or Water Accumulation in Alveoli)", "การติดเชื้อ (Infection)", "โรคหอบหืด (Asthma)", "อากาศสกปรก (Dirty Air)"],
    correct: 0
  },
  {
    question: "ปัดเป่า (Emphysema) มักเกิดจากสาเหตุใด?",
    answers: ["การสูบบุหรี่เป็นระยะเวลานาน (Smoking for Long Period)", "การแพ้สารก่อภูมิแพ้ (Allergic Reaction)", "การติดเชื้อแบคทีเรีย (Bacterial Infection)", "สารเคมี (Chemicals)"],
    correct: 0
  },
  {
    question: "ปอดบวมขึ้นเนื่องจาก (Pneumonia) คืออะไร?",
    answers: ["การอักเสบของเนื้อปอดจากการติดเชื้อ (Inflammation of Lung Tissue from Infection)", "การฉีดเข็ม (Injection)", "การเจ็บตัว (Injury)", "การหายใจเร็ว (Rapid Breathing)"],
    correct: 0
  },
  {
    question: "ความดันบริเวณปอดที่ช่วยให้อากาศเข้าออกเรียกว่าอะไร?",
    answers: ["Intrapleural pressure (ความดันในประสาวพลูรา)", "Intrapulmonary pressure (ความดันในปอด)", "Blood pressure (ความดันเลือด)", "Osmotic pressure (ความดันออสโมติก)"],
    correct: 0
  },
  {
    question: "การหายใจเข้าเรียกว่าอะไร?",
    answers: ["สูดลม (Inspiration/Inhalation)", "ปล่อยลม (Expiration)", "หายใจเร็ว (Rapid Breathing)", "หายใจช้า (Slow Breathing)"],
    correct: 0
  },
  {
    question: "ปลายสายหลอดลม (Bronchioles) ต่ออยู่กับ?",
    answers: ["ถุงลม (Alveoli)", "หลอดลมหลัก (Bronchi)", "กล่องเสียง (Larynx)", "จมูก (Nose)"],
    correct: 0
  },
  {
    question: "ความจุปอดของผู้ใหญ่เป็นเท่าไหร่?",
    answers: ["ประมาณ 6 ลิตร (About 6 liters)", "ประมาณ 1-2 ลิตร (About 1-2 liters)", "ประมาณ 10 ลิตร (About 10 liters)", "ประมาณ 0.5 ลิตร (About 0.5 liters)"],
    correct: 0
  },
  {
    question: "เยื่อหุ้มปอด (Pleura) ทำหน้าที่อะไร?",
    answers: ["ปกป้องปอดและหลั่งของเหลวเพื่อลดแรงเสียดทาน (Protect Lung and Secrete Fluid to Reduce Friction)", "ผลิตออกซิเจน (Produce Oxygen)", "กรองอากาศ (Filter Air)", "สูบฉีดอากาศ (Pump Air)"],
    correct: 0
  },
  {
    question: "หลอดลมบอก (Trachea) นำอากาศไปยังไหน?",
    answers: ["หลอดลมหลัก (Bronchi) ของปอด (Bronchi of Lung)", "กล่องเสียง (Larynx)", "จมูก (Nose)", "กระเพาะอาหาร (Stomach)"],
    correct: 0
  },
  {
    question: "วัณโรคควรรักษาด้วยอะไร?",
    answers: ["ยาปฏิชีวนะหลายตัวรวมกัน (Multiple Antibiotics Combined)", "ยาหนึ่งตัว (Single Drug)", "อากาศบริสุทธิ์เท่านั้น (Clean Air Only)", "ออกซิเจนเสริม (Oxygen Supplement)"],
    correct: 0
  },
  {
    question: "โรคหอบหืดควรหลีกเลี่ยงอะไร?",
    answers: ["สารก่อภูมิแพ้ เช่น ฝุ่น สัตว์เลี้ยง อากาศเย็น (Allergens such as Dust, Pets, Cold Air)", "น้ำ (Water)", "ดวงแดด (Sunlight)", "คน (People)"],
    correct: 0
  },
  {
    question: "ช่องหน้าอกมีกี่ซี่โครง?",
    answers: ["12 คู่ (12 pairs)", "10 คู่ (10 pairs)", "14 คู่ (14 pairs)", "8 คู่ (8 pairs)"],
    correct: 0
  }
];

// ตัวแปรสำหรับเกมระบบหายใจ
let breathCurrentMode = "diagnosis";
let breathCurrentCase = null;
let breathSelectedQuestion = null;
let breathPatientsCured = 0;
let breathCorrectAnswers = 0;
let breathTotalAnswers = 0;
let breathMatchCards = [];
let breathFirstMatchCard = null;
let breathMatchLockBoard = false;
let breathMatchesFound = 0;
let breathMatchScore = 0;
let breathTimedActive = false;
let breathTimeLeft = 60;
let breathTankFill = 0;
let breathQuestionsAnswered = 0;
let breathTimedInterval = null;

// DOM
const gridEl = document.getElementById("grid");
const organNameEl = document.getElementById("organName");
const coinsEl = document.getElementById("coins");
const infoBoxEl = document.getElementById("infoBox");
const nextOrganBtn = document.getElementById("nextOrganBtn");
const buyRadarBtn = document.getElementById("buyRadar");
const matchGrid = document.getElementById("matchGrid");
const matchStatusEl = document.getElementById("matchStatus");
const resetMatchBtn = document.getElementById("resetMatchBtn");
const mainGamePanel = document.getElementById("mainGamePanel");
const shopInfoPanel = document.getElementById("shopInfoPanel");
const matchGamePanel = document.getElementById("matchGamePanel");
const bloodGamePanel = document.getElementById("bloodGamePanel");
const bloodPatientStatusEl = document.getElementById("bloodPatientStatus");
const bloodCurrentLocationEl = document.getElementById("bloodCurrentLocation");
const bloodSituationEl = document.getElementById("bloodSituation");
const bloodQuestionEl = document.getElementById("bloodQuestion");
const bloodAnswersEl = document.getElementById("bloodAnswers");
const bloodFeedbackEl = document.getElementById("bloodFeedback");
const redMarble = document.getElementById("redMarble");
const blueMarble = document.getElementById("blueMarble");
const resetBloodBtn = document.getElementById("resetBloodBtn");
const nextMarbleBtn = document.getElementById("nextMarbleBtn");
const lobbyMainBtn = document.getElementById("lobbyMainBtn");
const lobbyMatchBtn = document.getElementById("lobbyMatchBtn");
const lobbyBloodBtn = document.getElementById("lobbyBloodBtn");
const lobbyBreathBtn = document.getElementById("lobbyBreathBtn");
const lobbySection = document.getElementById("lobbySection");
const statusOrgan = document.getElementById("statusOrgan");
const statusCoins = document.getElementById("statusCoins");
const statusShovel = document.getElementById("statusShovel");

// DOM elements สำหรับเกมระบบหายใจ
const breathGamePanel = document.getElementById("breathGamePanel");
const breathModeBtns = document.querySelectorAll(".breath-mode-btn");
const breathDiagnosisMode = document.getElementById("breathDiagnosisMode");
const breathMatchingMode = document.getElementById("breathMatchingMode");
const breathTimedMode = document.getElementById("breathTimedMode");

function init() {
  initAudio();
  updateStatusBar();
  createGrid();
  showOrganIntro();
  attachShopEvents();
  initMatchGame();
  initBloodMarbleGame();
  initBreathGame();
  initLobbySwitch();
}

function initMatchGame() {
  if (!matchGrid || !resetMatchBtn || !matchStatusEl) return;
  resetMatchBtn.addEventListener("click", resetMatchGame);
  resetMatchGame();
}

function resetMatchGame() {
  if (!matchGrid) return;
  matchFirstCard = null;
  matchLockBoard = false;
  matchMatchedCount = 0;
  matchGameCompleted = false;
  buildMatchDeck();
  renderMatchCards();
  matchStatusEl.textContent = "พลิกการ์ดเพื่อจับคู่ภาพกับความหมาย";
}

function buildMatchDeck() {
  matchCards = [];
  reproductionPairs.forEach((item, idx) => {
    matchCards.push({
      pairId: idx,
      kind: "image",
      title: item.name,
      body: `การ์ดรูป: ${item.name}`,
      imageUrl: item.imageUrl || null,
    });
    matchCards.push({
      pairId: idx,
      kind: "meaning",
      title: item.name,
      body: item.meaning,
    });
  });
  shuffleArray(matchCards);
}

function renderMatchCards() {
  matchGrid.innerHTML = "";
  matchCards.forEach((cardData) => {
    const cardEl = document.createElement("div");
    cardEl.className = "match-card face-down";
    const typeLabel = cardData.kind === "image" ? "รูป" : "ความหมาย";
    const metaLabel = cardData.kind === "image" ? "การ์ดภาพของอวัยวะ" : "คำอธิบายหน้าที่";

    // ถ้ามีรูปภาพ ให้แสดงรูปภาพ แทน placeholder
    const imageHtml = cardData.imageUrl 
      ? `<img src="${cardData.imageUrl}" alt="${cardData.title}" class="card-image" />`
      : `<div class="card-placeholder">?</div>`;

    // ถ้ามีรูปภาพ ไม่แสดงข้อความใต้ภาพ
    const textHtml = cardData.imageUrl 
      ? `` 
      : `<div class="card-text">
          <div class="card-title">${cardData.title}</div>
          <div class="card-meta">${metaLabel}</div>
          <div class="card-body">${cardData.body}</div>
        </div>`;

    cardEl.innerHTML = `
      <div class="card-type">${typeLabel}</div>
      ${imageHtml}
      ${textHtml}
    `;

    cardEl.addEventListener("click", () => handleMatchCardClick(cardEl, cardData));
    matchGrid.appendChild(cardEl);
  });
}

function handleMatchCardClick(cardEl, cardData) {
  if (matchLockBoard || cardEl.classList.contains("matched") || cardEl.classList.contains("flipped")) {
    return;
  }

  cardEl.classList.add("flipped");
  cardEl.classList.remove("face-down");

  if (!matchFirstCard) {
    matchFirstCard = { el: cardEl, data: cardData };
    playClickSound();
    return;
  }

  matchLockBoard = true;

  const isPairMatched =
    matchFirstCard.data.pairId === cardData.pairId &&
    matchFirstCard.data.kind !== cardData.kind;

  if (isPairMatched) {
    cardEl.classList.add("matched");
    matchFirstCard.el.classList.add("matched");
    playGoodSound();
    matchMatchedCount += 1;
    matchStatusEl.textContent = `จับคู่ได้แล้ว ${matchMatchedCount}/${reproductionPairs.length}`;

    if (matchMatchedCount === reproductionPairs.length) {
      if (!matchGameCompleted) {
        // ให้รางวัล 100 เหรียญเมื่อจบเกมครั้งแรก
        coins += 100;
        matchGameCompleted = true;
        updateStatusBar();
        playPurchaseSound();
        matchStatusEl.textContent = "จับคู่ครบทุกใบแล้ว! เยี่ยมมาก! คุณได้รับรางวัล 100 เหรียญ";
      } else {
        matchStatusEl.textContent = "จับคู่ครบทุกใบแล้ว! เยี่ยมมาก";
      }
    }

    matchFirstCard = null;
    matchLockBoard = false;
  } else {
    playBadSound();
    setTimeout(() => {
      cardEl.classList.remove("flipped");
      cardEl.classList.add("face-down");
      if (matchFirstCard && matchFirstCard.el) {
        matchFirstCard.el.classList.remove("flipped");
        matchFirstCard.el.classList.add("face-down");
      }
      matchFirstCard = null;
      matchLockBoard = false;
      matchStatusEl.textContent = "ไม่ตรงกัน ลองใหม่อีกครั้ง";
    }, 650);
  }
}

// สุ่มสลับลิสต์ (Fisher–Yates)
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// สำหรับสุ่มคำตอบและติดตามคำตอบที่ถูกต้อง
function shuffleAnswersWithTracking(question) {
  if (!question || !question.answers) return;
  
  // สร้าง array ของ index และตัวเลือกคำตอบ
  const answersWithIndex = question.answers.map((answer, index) => ({
    answer,
    originalIndex: index
  }));
  
  // สุ่มลำดับ
  shuffleArray(answersWithIndex);
  
  // อัปเดตคำตอบและเก็บ index ของคำตอบที่ถูกต้อง
  question.answers = answersWithIndex.map(item => item.answer);
  question.correct = answersWithIndex.findIndex(item => item.originalIndex === question.correct);
}
function initBloodMarbleGame() {
  if (!redMarble || !blueMarble || !resetBloodBtn) return;
  
  resetBloodBtn.addEventListener("click", resetBloodMarbleGame);
  nextMarbleBtn.addEventListener("click", () => {
    hideQuestion();
    nextMarbleBtn.style.display = "none";
    playClickSound();
  });
  
  redMarble.addEventListener("click", () => selectMarble("arterial"));
  blueMarble.addEventListener("click", () => selectMarble("venous"));
  
  resetBloodMarbleGame();
}

function resetBloodMarbleGame() {
  bloodPatientStatus = 100;
  bloodCurrentLocation = "ปอด";
  bloodCurrentQuestion = null;
  bloodQuestionAnswered = false;
  
  updateBloodUI();
  hideQuestion();
  nextMarbleBtn.style.display = "none";
  
  if (bloodSituationEl) {
    bloodSituationEl.textContent = "คลิกลูกแก้วเพื่อเริ่มเกม!";
  }
}

function selectMarble(type) {
  if (bloodQuestionAnswered) return;
  
  playClickSound();
  
  // สุ่มคำถามตามประเภทลูกแก้ว
  let questionPool;
  if (type === "arterial") {
    questionPool = arterialQuestions;
  } else {
    questionPool = venousQuestions;
  }
  
  // สุ่มคำถาม (บางครั้งเป็นคำถามวินิจฉัยผู้ป่วย)
  const useDiagnosis = Math.random() < 0.3; // 30% โอกาสเป็นคำถามวินิจฉัย
  if (useDiagnosis && diagnosisQuestions.length > 0) {
    bloodCurrentQuestion = diagnosisQuestions[Math.floor(Math.random() * diagnosisQuestions.length)];
  } else {
    bloodCurrentQuestion = questionPool[Math.floor(Math.random() * questionPool.length)];
  }
  
  // สำเนาและสุ่มคำตอบ
  bloodCurrentQuestion = JSON.parse(JSON.stringify(bloodCurrentQuestion));
  shuffleAnswersWithTracking(bloodCurrentQuestion);
  
  // อัปเดตตำแหน่ง
  const newLocation = bloodLocations[Math.floor(Math.random() * bloodLocations.length)];
  bloodCurrentLocation = newLocation;
  
  // แสดงสถานการณ์และคำถาม
  showQuestion();
}

function showQuestion() {
  if (!bloodCurrentQuestion) return;
  
  // แสดงสถานการณ์
  if (bloodSituationEl) {
    bloodSituationEl.textContent = bloodCurrentQuestion.situation;
  }
  
  // แสดงคำถาม
  if (bloodQuestionEl) {
    bloodQuestionEl.textContent = bloodCurrentQuestion.question;
    bloodQuestionEl.style.display = "block";
  }
  
  // แสดงตัวเลือกคำตอบ
  if (bloodAnswersEl) {
    bloodAnswersEl.innerHTML = "";
    bloodAnswersEl.style.display = "block";
    
    bloodCurrentQuestion.answers.forEach((answer, index) => {
      const answerBtn = document.createElement("button");
      answerBtn.className = "blood-answer-btn";
      answerBtn.textContent = answer;
      answerBtn.addEventListener("click", () => handleAnswer(index));
      bloodAnswersEl.appendChild(answerBtn);
    });
  }
  
  // ซ่อน feedback
  if (bloodFeedbackEl) {
    bloodFeedbackEl.style.display = "none";
  }
  
  bloodQuestionAnswered = false;
}

function hideQuestion() {
  if (bloodQuestionEl) bloodQuestionEl.style.display = "none";
  if (bloodAnswersEl) bloodAnswersEl.style.display = "none";
  if (bloodFeedbackEl) bloodFeedbackEl.style.display = "none";
  if (bloodSituationEl) {
    bloodSituationEl.textContent = "คลิกลูกแก้วเพื่อเริ่มเกม!";
  }
  bloodCurrentQuestion = null;
  bloodQuestionAnswered = false;
}

function handleAnswer(selectedIndex) {
  if (bloodQuestionAnswered || !bloodCurrentQuestion) return;
  
  bloodQuestionAnswered = true;
  const isCorrect = selectedIndex === bloodCurrentQuestion.correct;
  
  // แสดง feedback
  if (bloodFeedbackEl) {
    if (isCorrect) {
      bloodFeedbackEl.className = "blood-feedback correct";
      bloodFeedbackEl.innerHTML = `
        <div class="feedback-icon">✅</div>
        <div class="feedback-text">
          <strong>ถูกต้อง!</strong><br/>
          ${bloodCurrentQuestion.explanation}
        </div>
      `;
      
      // เพิ่มเหรียญ
      const coinsEarned = bloodCurrentQuestion.patientImpact ? 20 : 15;
      coins += coinsEarned;
      
      // อัปเดต feedback ให้แสดงเหรียญที่ได้รับ
      bloodFeedbackEl.innerHTML = `
        <div class="feedback-icon">✅</div>
        <div class="feedback-text">
          <strong>ถูกต้อง!</strong><br/>
          ${bloodCurrentQuestion.explanation}<br/>
          <span style="color: #16a34a; font-weight: 600;">ได้รับ ${coinsEarned} เหรียญสารอาหาร</span>
        </div>
      `;
      
      // ถ้าเป็นคำถามวินิจฉัย ผู้ป่วยดีขึ้น
      if (bloodCurrentQuestion.patientImpact) {
        bloodPatientStatus = Math.min(100, bloodPatientStatus + 5);
      }
      
      // อัปเดต status bar
      updateStatusBar();
      
      playGoodSound();
    } else {
      bloodFeedbackEl.className = "blood-feedback incorrect";
      bloodFeedbackEl.innerHTML = `
        <div class="feedback-icon">❌</div>
        <div class="feedback-text">
          <strong>ผิด!</strong><br/>
          คำตอบที่ถูกต้อง: ${bloodCurrentQuestion.answers[bloodCurrentQuestion.correct]}<br/>
          ${bloodCurrentQuestion.explanation}
        </div>
      `;
      
      // ถ้าเป็นคำถามวินิจฉัย ผู้ป่วยแย่ลง
      if (bloodCurrentQuestion.patientImpact) {
        bloodPatientStatus = Math.max(0, bloodPatientStatus + bloodCurrentQuestion.patientImpact);
      } else {
        bloodPatientStatus = Math.max(0, bloodPatientStatus - 3);
      }
      
      playBadSound();
    }
    bloodFeedbackEl.style.display = "block";
  }
  
  // ปิดการใช้งานปุ่มคำตอบ
  const answerBtns = bloodAnswersEl.querySelectorAll(".blood-answer-btn");
  answerBtns.forEach((btn, index) => {
    btn.disabled = true;
    if (index === bloodCurrentQuestion.correct) {
      btn.classList.add("correct-answer");
    } else if (index === selectedIndex && !isCorrect) {
      btn.classList.add("incorrect-answer");
    }
  });
  
  // แสดงปุ่มสุ่มลูกแก้วถัดไป
  nextMarbleBtn.style.display = "block";
  
  updateBloodUI();
}

function updateBloodUI() {
  if (bloodCurrentLocationEl) bloodCurrentLocationEl.textContent = bloodCurrentLocation;
  
  if (bloodPatientStatusEl) {
    let statusText = "ดี";
    let statusColor = "#16a34a";
    
    if (bloodPatientStatus >= 80) {
      statusText = "ดี";
      statusColor = "#16a34a";
    } else if (bloodPatientStatus >= 50) {
      statusText = "ปานกลาง";
      statusColor = "#f59e0b";
    } else if (bloodPatientStatus >= 20) {
      statusText = "แย่";
      statusColor = "#ef4444";
    } else {
      statusText = "วิกฤต";
      statusColor = "#dc2626";
    }
    
    bloodPatientStatusEl.textContent = `${statusText} (${bloodPatientStatus}%)`;
    bloodPatientStatusEl.style.color = statusColor;
  }
}

// ---------- ล็อบบี้เลือกเกม ----------
// ---------- เกมระบบหายใจ ----------
function initBreathGame() {
  if (!breathGamePanel) return;
  
  // โหมดเลือก
  breathModeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      switchBreathMode(mode);
      breathModeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });
  
  // โหมดแพทย์ฝึกหัด
  const nextPatientBtn = document.getElementById("breathNextPatientBtn");
  if (nextPatientBtn) {
    nextPatientBtn.addEventListener("click", () => {
      loadNextPatient();
    });
  }
  
  // โหมดจับคู่
  const resetMatchBtn = document.getElementById("breathResetMatchBtn");
  if (resetMatchBtn) {
    resetMatchBtn.addEventListener("click", () => {
      resetBreathMatching();
    });
  }
  
  // โหมดแข่งกับเวลา
  const startTimedBtn = document.getElementById("breathStartTimedBtn");
  const resetTimedBtn = document.getElementById("breathResetTimedBtn");
  if (startTimedBtn) {
    startTimedBtn.addEventListener("click", () => {
      startBreathTimed();
    });
  }
  if (resetTimedBtn) {
    resetTimedBtn.addEventListener("click", () => {
      resetBreathTimed();
    });
  }
  
  // เริ่มต้นด้วยโหมดแพทย์ฝึกหัด
  switchBreathMode("diagnosis");
  loadNextPatient();
}

function switchBreathMode(mode) {
  breathCurrentMode = mode;
  
  if (breathDiagnosisMode) breathDiagnosisMode.classList.toggle("hidden", mode !== "diagnosis");
  if (breathMatchingMode) breathMatchingMode.classList.toggle("hidden", mode !== "matching");
  if (breathTimedMode) breathTimedMode.classList.toggle("hidden", mode !== "timed");
  
  if (mode === "diagnosis") {
    loadNextPatient();
  } else if (mode === "matching") {
    resetBreathMatching();
  } else if (mode === "timed") {
    resetBreathTimed();
  }
}

// โหมดแพทย์ฝึกหัด
function loadNextPatient() {
  breathCurrentCase = breathPatientCases[Math.floor(Math.random() * breathPatientCases.length)];
  breathSelectedQuestion = null;
  
  const patientSymptoms = document.getElementById("breathPatientSymptoms");
  const questionOptions = document.getElementById("breathQuestionOptions");
  const answersArea = document.getElementById("breathAnswersArea");
  const feedback = document.getElementById("breathFeedback");
  const nextBtn = document.getElementById("breathNextPatientBtn");
  
  if (patientSymptoms) {
    patientSymptoms.textContent = breathCurrentCase.symptoms;
  }
  
  if (questionOptions) {
    questionOptions.innerHTML = "";
    breathCurrentCase.questions.forEach((q, index) => {
      const btn = document.createElement("button");
      btn.className = "breath-option-btn";
      btn.textContent = q.text;
      btn.addEventListener("click", () => selectBreathQuestion(index));
      questionOptions.appendChild(btn);
    });
  }
  
  if (answersArea) answersArea.style.display = "none";
  if (feedback) feedback.style.display = "none";
  if (nextBtn) nextBtn.style.display = "none";
}

function selectBreathQuestion(index) {
  breathSelectedQuestion = index;
  const questionOptions = document.getElementById("breathQuestionOptions");
  const answersArea = document.getElementById("breathAnswersArea");
  const treatmentOptions = document.getElementById("breathTreatmentOptions");
  
  if (questionOptions) {
    const btns = questionOptions.querySelectorAll(".breath-option-btn");
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === index) {
        btn.classList.add("selected");
      }
    });
  }
  
  if (answersArea && treatmentOptions) {
    answersArea.style.display = "block";
    treatmentOptions.innerHTML = "";
    breathCurrentCase.treatments.forEach((t, i) => {
      const btn = document.createElement("button");
      btn.className = "breath-option-btn";
      btn.textContent = t.text;
      btn.addEventListener("click", () => selectBreathTreatment(i));
      treatmentOptions.appendChild(btn);
    });
  }
}

function selectBreathTreatment(index) {
  const treatment = breathCurrentCase.treatments[index];
  const feedback = document.getElementById("breathFeedback");
  const nextBtn = document.getElementById("breathNextPatientBtn");
  const treatmentOptions = document.getElementById("breathTreatmentOptions");
  
  if (treatmentOptions) {
    const btns = treatmentOptions.querySelectorAll(".breath-option-btn");
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === index) {
        btn.classList.add(treatment.correct ? "correct" : "incorrect");
      } else if (treatment.correct && i !== index) {
        // แสดงคำตอบที่ถูกต้อง
        const correctIndex = breathCurrentCase.treatments.findIndex(t => t.correct);
        if (i === correctIndex) {
          btn.classList.add("correct");
        }
      }
    });
  }
  
  if (treatment.correct) {
    breathPatientsCured++;
    breathCorrectAnswers++;
    const coinsEarned = 20;
    coins += coinsEarned;
    updateStatusBar();
    playGoodSound();
    
    if (feedback) {
      feedback.className = `breath-feedback correct`;
      feedback.innerHTML = `
        <div class="feedback-icon">✅</div>
        <div class="feedback-text">
          <strong>ถูกต้อง!</strong><br/>
          ${treatment.explanation}<br/>
          <strong>โรค: ${breathCurrentCase.disease}</strong><br/>
          <span style="color: #16a34a; font-weight: 600;">ได้รับ ${coinsEarned} เหรียญสารอาหาร</span>
        </div>
      `;
      feedback.style.display = "block";
    }
  } else {
    playBadSound();
    
    if (feedback) {
      feedback.className = `breath-feedback incorrect`;
      feedback.innerHTML = `
        <div class="feedback-icon">❌</div>
        <div class="feedback-text">
          <strong>ไม่ถูกต้อง</strong><br/>
          ${treatment.explanation}<br/>
          <strong>โรค: ${breathCurrentCase.disease}</strong>
        </div>
      `;
      feedback.style.display = "block";
    }
  }
  
  breathTotalAnswers++;
  updateBreathStats();
  
  if (nextBtn) nextBtn.style.display = "block";
}

// โหมดจับคู่
function resetBreathMatching() {
  breathMatchesFound = 0;
  breathMatchScore = 0;
  breathFirstMatchCard = null;
  breathMatchLockBoard = false;
  
  // สร้างการ์ด
  breathMatchCards = [];
  breathMatchingPairs.forEach((pair, idx) => {
    breathMatchCards.push({
      pairId: idx,
      type: "symptom",
      text: pair.symptom,
      icon: pair.icon
    });
    breathMatchCards.push({
      pairId: idx,
      type: "disease",
      text: pair.disease
    });
  });
  
  shuffleArray(breathMatchCards);
  renderBreathMatchCards();
  updateBreathMatchStats();
}

function renderBreathMatchCards() {
  const grid = document.getElementById("breathMatchGrid");
  if (!grid) return;
  
  grid.innerHTML = "";
  breathMatchCards.forEach((card, index) => {
    const cardEl = document.createElement("div");
    cardEl.className = "breath-match-card face-down";
    cardEl.dataset.index = index;
    
    const typeLabel = card.type === "symptom" ? "อาการ" : "โรค";
    cardEl.innerHTML = `
      <div class="card-type">${typeLabel}</div>
      <div class="card-content">${card.icon || ""} ${card.text}</div>
    `;
    
    cardEl.addEventListener("click", () => handleBreathMatchClick(cardEl, card, index));
    grid.appendChild(cardEl);
  });
  
  const totalEl = document.getElementById("breathTotalMatches");
  if (totalEl) totalEl.textContent = breathMatchingPairs.length;
}

function handleBreathMatchClick(cardEl, cardData, index) {
  if (breathMatchLockBoard || cardEl.classList.contains("matched") || cardEl.classList.contains("flipped")) {
    return;
  }
  
  cardEl.classList.add("flipped");
  cardEl.classList.remove("face-down");
  playClickSound();
  
  if (!breathFirstMatchCard) {
    breathFirstMatchCard = { el: cardEl, data: cardData, index };
    return;
  }
  
  breathMatchLockBoard = true;
  
  const isPairMatched =
    breathFirstMatchCard.data.pairId === cardData.pairId &&
    breathFirstMatchCard.data.type !== cardData.type;
  
  if (isPairMatched) {
    cardEl.classList.add("matched");
    breathFirstMatchCard.el.classList.add("matched");
    breathMatchesFound++;
    breathMatchScore += 10;
    updateBreathMatchStats();
    playGoodSound();
    
    if (breathMatchesFound === breathMatchingPairs.length) {
      const bonus = 50;
      coins += bonus;
      updateStatusBar();
      playPurchaseSound();
      // แสดงข้อความรางวัล
      setTimeout(() => {
        alert(`ยินดีด้วย! คุณจับคู่ครบทุกใบแล้ว! ได้รับรางวัล ${bonus} เหรียญสารอาหาร`);
      }, 500);
    }
    
    breathFirstMatchCard = null;
    breathMatchLockBoard = false;
  } else {
    playBadSound();
    setTimeout(() => {
      cardEl.classList.remove("flipped");
      cardEl.classList.add("face-down");
      if (breathFirstMatchCard && breathFirstMatchCard.el) {
        breathFirstMatchCard.el.classList.remove("flipped");
        breathFirstMatchCard.el.classList.add("face-down");
      }
      breathFirstMatchCard = null;
      breathMatchLockBoard = false;
    }, 650);
  }
}

// โหมดแข่งกับเวลา
function startBreathTimed() {
  breathTimedActive = true;
  breathTimeLeft = 60;
  breathTankFill = 0;
  breathQuestionsAnswered = 0;
  
  const startBtn = document.getElementById("breathStartTimedBtn");
  const resetBtn = document.getElementById("breathResetTimedBtn");
  if (startBtn) startBtn.style.display = "none";
  if (resetBtn) resetBtn.style.display = "block";
  
  updateBreathTimedUI();
  loadBreathTimedQuestion();
  
  breathTimedInterval = setInterval(() => {
    breathTimeLeft--;
    updateBreathTimedUI();
    
    if (breathTimeLeft <= 0) {
      endBreathTimed();
    }
  }, 1000);
}

function loadBreathTimedQuestion() {
  const question = breathTimedQuestions[Math.floor(Math.random() * breathTimedQuestions.length)];
  // สำเนาและสุ่มคำตอบ
  const questionCopy = JSON.parse(JSON.stringify(question));
  shuffleAnswersWithTracking(questionCopy);
  
  const questionEl = document.getElementById("breathTimedQuestion");
  const answersEl = document.getElementById("breathTimedAnswers");
  
  if (questionEl) {
    questionEl.textContent = questionCopy.question;
    questionEl.dataset.correct = questionCopy.correct;
  }
  
  if (answersEl) {
    answersEl.innerHTML = "";
    questionCopy.answers.forEach((answer, index) => {
      const btn = document.createElement("button");
      btn.className = "breath-timed-answer-btn";
      btn.textContent = answer;
      btn.addEventListener("click", () => handleBreathTimedAnswer(index));
      answersEl.appendChild(btn);
    });
  }
}

function handleBreathTimedAnswer(selectedIndex) {
  if (!breathTimedActive) return;
  
  const questionEl = document.getElementById("breathTimedQuestion");
  const correctIndex = parseInt(questionEl.dataset.correct);
  const isCorrect = selectedIndex === correctIndex;
  
  if (isCorrect) {
    breathQuestionsAnswered++;
    breathTankFill = Math.min(100, breathTankFill + 15);
    playGoodSound();
    
    if (breathTankFill >= 100) {
      endBreathTimed(true);
      return;
    }
  } else {
    breathTankFill = Math.max(0, breathTankFill - 5);
    playBadSound();
  }
  
  updateBreathTimedUI();
  loadBreathTimedQuestion();
}

function endBreathTimed(won = false) {
  breathTimedActive = false;
  if (breathTimedInterval) {
    clearInterval(breathTimedInterval);
    breathTimedInterval = null;
  }
  
  if (won) {
    const bonus = 30 + breathQuestionsAnswered * 5;
    coins += bonus;
    updateStatusBar();
    playPurchaseSound();
    alert(`ชนะ! คุณตอบคำถามได้ ${breathQuestionsAnswered} ข้อ และได้รับ ${bonus} เหรียญสารอาหาร!`);
  } else {
    const coinsEarned = Math.max(0, breathQuestionsAnswered * 3);
    coins += coinsEarned;
    updateStatusBar();
    playBadSound();
    if (coinsEarned > 0) {
      alert(`เกมจบ! คุณตอบคำถามได้ ${breathQuestionsAnswered} ข้อ และได้รับ ${coinsEarned} เหรียญสารอาหาร`);
    } else {
      alert(`เกมจบ! คุณตอบคำถามได้ ${breathQuestionsAnswered} ข้อ`);
    }
  }
}

function resetBreathTimed() {
  if (breathTimedInterval) {
    clearInterval(breathTimedInterval);
    breathTimedInterval = null;
  }
  breathTimedActive = false;
  breathTimeLeft = 60;
  breathTankFill = 0;
  breathQuestionsAnswered = 0;
  
  const startBtn = document.getElementById("breathStartTimedBtn");
  const resetBtn = document.getElementById("breathResetTimedBtn");
  if (startBtn) startBtn.style.display = "block";
  if (resetBtn) resetBtn.style.display = "none";
  
  updateBreathTimedUI();
  const questionEl = document.getElementById("breathTimedQuestion");
  const answersEl = document.getElementById("breathTimedAnswers");
  if (questionEl) questionEl.textContent = "กดปุ่ม 'เริ่มเกม' เพื่อเริ่มเล่น";
  if (answersEl) answersEl.innerHTML = "";
}

function updateBreathTimedUI() {
  const timeEl = document.getElementById("breathTimeLeft");
  const tankFillEl = document.getElementById("tankFill");
  const tankPercentEl = document.getElementById("tankPercentage");
  const questionsEl = document.getElementById("breathQuestionsAnswered");
  
  if (timeEl) timeEl.textContent = breathTimeLeft;
  if (tankFillEl) tankFillEl.style.height = `${breathTankFill}%`;
  if (tankPercentEl) tankPercentEl.textContent = `${breathTankFill}%`;
  if (questionsEl) questionsEl.textContent = breathQuestionsAnswered;
}

function updateBreathStats() {
  const curedEl = document.getElementById("breathPatientsCured");
  const accuracyEl = document.getElementById("breathAccuracy");
  
  if (curedEl) curedEl.textContent = breathPatientsCured;
  if (accuracyEl) {
    const accuracy = breathTotalAnswers > 0 ? Math.round((breathCorrectAnswers / breathTotalAnswers) * 100) : 100;
    accuracyEl.textContent = `${accuracy}%`;
  }
}

function updateBreathMatchStats() {
  const foundEl = document.getElementById("breathMatchesFound");
  const scoreEl = document.getElementById("breathMatchScore");
  
  if (foundEl) foundEl.textContent = breathMatchesFound;
  if (scoreEl) scoreEl.textContent = breathMatchScore;
}

function initLobbySwitch() {
  if (!lobbyMainBtn || !lobbyMatchBtn || !lobbyBloodBtn || !lobbyBreathBtn) return;
  lobbyMainBtn.addEventListener("click", () => switchLobby("main"));
  lobbyMatchBtn.addEventListener("click", () => switchLobby("match"));
  lobbyBloodBtn.addEventListener("click", () => switchLobby("blood"));
  lobbyBreathBtn.addEventListener("click", () => switchLobby("breath"));
  switchLobby("main");
}

function switchLobby(mode) {
  const isMain = mode === "main";
  const isMatch = mode === "match";
  const isBlood = mode === "blood";
  const isBreath = mode === "breath";
  
  togglePanel(mainGamePanel, isMain);
  togglePanel(shopInfoPanel, isMain);
  togglePanel(matchGamePanel, isMatch);
  togglePanel(bloodGamePanel, isBlood);
  togglePanel(breathGamePanel, isBreath);
  
  // ซ่อน status pills ยกเว้นเหรียญ เมื่อเข้าโหมดเกมอื่น
  togglePanel(statusOrgan, isMain);
  // statusCoins ไม่ต้องซ่อน (แสดงเสมอ)
  togglePanel(statusShovel, isMain);

  if (lobbyMainBtn && lobbyMatchBtn && lobbyBloodBtn && lobbyBreathBtn) {
    lobbyMainBtn.classList.toggle("btn-ghost", !isMain);
    lobbyMatchBtn.classList.toggle("btn-ghost", !isMatch);
    lobbyBloodBtn.classList.toggle("btn-ghost", !isBlood);
    lobbyBreathBtn.classList.toggle("btn-ghost", !isBreath);
  }

  if (isMain) {
    matchStatusEl && (matchStatusEl.textContent = "พลิกการ์ดเพื่อจับคู่ภาพกับความหมาย");
  } else if (isBlood) {
    resetBloodMarbleGame();
  } else if (isBreath) {
    switchBreathMode("diagnosis");
  }
}

function togglePanel(el, show) {
  if (!el) return;
  if (show) {
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
}

function updateStatusBar() {
  organNameEl.textContent = organs[currentOrganIndex].name;
  coinsEl.textContent = coins;
}

function createGrid() {
  gridEl.innerHTML = "";
  gridData = [];
  const organ = organs[currentOrganIndex];

  for (let r = 0; r < GRID_ROWS; r++) {
    for (let c = 0; c < GRID_COLS; c++) {
      const cellIndex = r * GRID_COLS + c;
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.dataset.index = cellIndex;

      const rand = Math.random();
      const baseGoodChance = 0.35 - organ.difficulty;
      const goodChance = Math.max(0.1, Math.min(0.8, baseGoodChance));
      const badChance = 0.15 + organ.difficulty;

      let cellType = "empty";
      if (rand < goodChance) {
        cellType = "good";
      } else if (rand < goodChance + badChance) {
        cellType = "bad";
      }

      const depthRandomFactor = 1.0;
      const randomDepth =
        MIN_DEPTH +
        Math.floor(
          Math.random() * (MAX_DEPTH - MIN_DEPTH + 1) * depthRandomFactor
        );
      const depth = Math.max(MIN_DEPTH, randomDepth);

      gridData[cellIndex] = {
        type: cellType,
        dug: false,
        depth,
        revealed: false,
      };

      // เริ่มต้นเป็นดินผิวหน้า ไม่มีสัญลักษณ์
      cell.classList.add("digging-stage-0");
      cell.textContent = "";

      // ระบบขุด: ถ้าซื้อ instantDig หรือระดับจอบถึง 20 แล้วจะคลิกเดียวได้เลย
      if (instantDigOwned) {
        cell.addEventListener("click", () => performInstantDig(cellIndex));
      } else {
        // ระบบกดค้าง 3 วินาที (รองรับการกดค้างต่อเนื่อง)
        cell.addEventListener("mousedown", (e) => startHoldDig(cellIndex, cell));
        cell.addEventListener("mouseup", () => stopContinuousDig(cell));
        cell.addEventListener("mouseleave", () => stopContinuousDig(cell));
      }

      gridEl.appendChild(cell);
    }
  }

  if (radarOwned) applyRadarHints();
}

function showOrganIntro() {
  const organ = organs[currentOrganIndex];
  infoBoxEl.innerHTML = `
    <div class="info-entry">
      <strong>ตอนนี้คุณอยู่ที่: ${organ.name}</strong><br/>
      ${organ.description}<br/>
      ผนังลำไส้เหมือนชั้นดินที่มีสารอาหารฝังอยู่ลึก ต้องกดค้างเพื่อขุดดินออกทีละชั้นจนกว่าจะพบสารอาหารที่พร้อมดูดซึม
    </div>
  `;
}

// ---------- ระบบกดค้าง 3 วินาที ----------
function startHoldDig(index, cellEl) {
  const data = gridData[index];
  if (!data || data.revealed) return;

  // ถ้ามีการกดค้างเก่าอยู่ ให้ยกเลิกก่อน
  cancelHoldDig();

  isMouseDown = true;
  holdTargetIndex = index;
  holdCellElement = cellEl;
  
  holdTimeoutId = setTimeout(() => {
    performDig(index, true); // ส่ง true เพื่อบอกว่ามาจากการกดค้าง
  }, 500);
}

function stopContinuousDig(cellEl) {
  // ตรวจสอบว่าเป็น cell เดียวกันหรือไม่
  if (holdCellElement === cellEl) {
    isMouseDown = false;
    cancelHoldDig();
  }
}

function cancelHoldDig() {
  if (holdTimeoutId !== null) {
    clearTimeout(holdTimeoutId);
    holdTimeoutId = null;
    holdTargetIndex = null;
    holdCellElement = null;
  }
}

// ทำการขุดแบบคลิกเดียวจนเสร็จ (สำหรับ instantDig หรือระดับจอบ 20)
function performInstantDig(index) {
  const data = gridData[index];
  if (!data || data.revealed) return;

  const cellEl = gridEl.querySelector(`.cell[data-index="${index}"]`);
  const remainingDepth = data.depth;
  
  // ขุดจนเสร็จ
  data.depth = 0;
  data.dug = true;
  
  // เล่นเสียงขุด
  playDigSound();
  
  // ขุดเสร็จแล้ว แสดงผล
  revealCell(index, cellEl);
  
  updateStatusBar();
  checkEnergyAndProgress();
}

// ทำการขุด 1 ครั้ง (หลังจากกดค้างครบเวลา)
function performDig(index, fromHold = false) {
  const data = gridData[index];
  if (!data || data.revealed) {
    cancelHoldDig();
    return;
  }

  const cellEl = gridEl.querySelector(`.cell[data-index="${index}"]`);

  // ขุด 1 ชั้น
  data.depth -= 1;
  data.dug = true;

  // เล่นเสียงขุด
  playDigSound();
  
  updateDiggingVisual(cellEl, data);

  if (data.depth <= 0) {
    revealCell(index, cellEl);
    // ถ้าขุดเสร็จแล้ว ให้หยุดการกดค้างต่อเนื่อง
    cancelHoldDig();
  } else {
    infoBoxEl.innerHTML = `
      <div class="info-entry">
        คุณขุดชั้นดินออกไปแล้ว เหลือความลึกประมาณ
        <strong>${data.depth}</strong> ชั้น ก่อนจะรู้ว่าบริเวณนี้มีสารอาหารสะสมหรือไม่
      </div>
    `;
    
    // ถ้ามาจากการกดค้างและเมาส์ยังกดอยู่ ให้เริ่มกดค้างรอบถัดไปอัตโนมัติ
    if (fromHold && isMouseDown && holdTargetIndex === index && holdCellElement === cellEl) {
      holdTimeoutId = setTimeout(() => {
        performDig(index, true);
      }, 500);
    } else {
      cancelHoldDig();
    }
  }

  updateStatusBar();
  checkEnergyAndProgress();
}

function updateDiggingVisual(cellEl, data) {
  if (!cellEl) return;

  cellEl.classList.add("cell-digging");
  cellEl.classList.remove(
    "digging-stage-0",
    "digging-stage-1",
    "digging-stage-2",
    "digging-stage-3"
  );

  // เปลี่ยนเฉพาะโทนสี ไม่มีสัญลักษณ์ใด ๆ
  if (data.depth >= 3) {
    cellEl.classList.add("digging-stage-1");
  } else if (data.depth === 2) {
    cellEl.classList.add("digging-stage-2");
  } else if (data.depth === 1) {
    cellEl.classList.add("digging-stage-3");
  }

  cellEl.textContent = "";
}

function revealCell(index, cellEl) {
  const data = gridData[index];
  if (!data || data.revealed) return;
  data.revealed = true;

  cellEl.classList.remove(
    "digging-stage-0",
    "digging-stage-1",
    "digging-stage-2",
    "digging-stage-3",
    "cell-digging"
  );
  cellEl.classList.add("dug-empty");
  cellEl.textContent = "";

  if (data.type === "good") {
    const nutrient = nutrients[Math.floor(Math.random() * nutrients.length)];
    coins += nutrient.coins;
    cellEl.classList.remove("dug-empty");
    cellEl.classList.add("good");
    // ไม่แสดงสัญลักษณ์ในช่อง
    cellEl.textContent = "";

    // เล่นเสียงเจอสารอาหารดี
    playGoodSound();

    infoBoxEl.innerHTML = `
      <div class="info-entry">
        <strong>ขุดลึกจนเจอสารอาหารพร้อมดูดซึม!</strong><br/>
        ชนิด: <strong>${nutrient.type}</strong><br/>
        เหรียญที่ได้: +${nutrient.coins}<br/>
        เชื่อมโยงกับระบบย่อยอาหาร: ${nutrient.text}
      </div>
    `;
  } else if (data.type === "bad") {
    const bad = badThings[Math.floor(Math.random() * badThings.length)];
    // ไม่มีการลบเหรียญแล้ว
    cellEl.classList.remove("dug-empty");
    cellEl.classList.add("bad");
    cellEl.textContent = "";

    // เล่นเสียงเจอของไม่ดี
    playBadSound();

    infoBoxEl.innerHTML = `
      <div class="info-entry">
        <strong>ขุดเจออาหารที่ไม่เหมาะสม!</strong><br/>
        ประเภท: <strong>${bad.type}</strong><br/>
        ผลกระทบต่อสุขภาพ: ${bad.text}
      </div>
    `;
  } else {
    infoBoxEl.innerHTML = `
      <div class="info-entry">
        ขุดทะลุชั้นดินบริเวณนี้แล้ว แต่แทบไม่พบการสะสมของสารอาหาร<br/>
        ลองขุดตำแหน่งอื่นของผนังลำไส้ต่อไป
      </div>
    `;
  }

  coinsEl.textContent = coins;
}

function checkEnergyAndProgress() {
  // นับจำนวนช่องที่มีสารอาหารดีและถูกขุดเจอแล้ว
  const goodCellsFound = gridData.filter((cell) => cell.type === "good" && cell.revealed).length;
  // นับจำนวนช่องที่มีสารอาหารดีทั้งหมด
  const totalGoodCells = gridData.filter((cell) => cell.type === "good").length;

  // เมื่อขุดเจอสารอาหารดีครบทุกช่องแล้ว สามารถไปยังอวัยวะถัดไปได้
  if (totalGoodCells > 0 && goodCellsFound === totalGoodCells) {
    if (currentOrganIndex < organs.length - 1) {
      nextOrganBtn.disabled = false;
      infoBoxEl.innerHTML += `
        <div class="info-entry">
          ขุดเจอสารอาหารดีครบทุกช่องแล้ว!<br/>
          สามารถกด "<strong>ไปยังอวัยวะถัดไป</strong>" เพื่อดูการย่อยและดูดซึมในส่วนถัดไป
        </div>
      `;
    } else {
      nextOrganBtn.disabled = false;
      infoBoxEl.innerHTML += `
        <div class="info-entry">
          คุณสำรวจมาจนถึงลำไส้ใหญ่แล้ว<br/>
          ถ้ากด "<strong>ไปยังอวัยวะถัดไป</strong>" ระบบจะวนกลับไปเริ่มที่ปากอีกครั้ง<br/>
          เหรียญและไอเทมทั้งหมดจะยังคงอยู่ เพื่อให้ลองวางแผนการขุดใหม่
        </div>
      `;
    }
  }
}

// ---------- ร้านค้า ----------
function attachShopEvents() {
  nextOrganBtn.addEventListener("click", () => {
    // เล่นเสียงเปลี่ยนอวัยวะ
    playOrganChangeSound();
    
    // วนลูปอวัยวะ: ถึงอันสุดท้ายแล้วกลับไป 0
    if (currentOrganIndex < organs.length - 1) {
      currentOrganIndex++;
    } else {
      currentOrganIndex = 0;
    }

    nextOrganBtn.disabled = true;
    createGrid();
    updateStatusBar();
    showOrganIntro();
  });

  buyRadarBtn.addEventListener("click", () => {
    const cost = 1000;
    if (radarOwned) {
      playClickSound();
      showShopMessage("คุณมีเรดาร์อยู่แล้ว");
      return;
    }
    if (coins < cost) {
      playClickSound();
      showShopMessage("เหรียญไม่พอสำหรับซื้อเรดาร์");
      return;
    }
    playPurchaseSound();
    coins -= cost;
    radarOwned = true;
    updateStatusBar();
    applyRadarHints();
    showShopMessage(
      "ติดตั้งเรดาร์แล้ว! ตำแหน่งที่มีโอกาสสะสมสารอาหารมากจะมีกรอบสีเขียว"
    );
  });

  // ปุ่มปลดล็อกขุดคลิกเดียวถูกลบออกจาก UI: ฟีเจอร์เปิดใช้งานโดยดีฟอลต์
}

function applyRadarHints() {
  gridData.forEach((data, index) => {
    const cellEl = gridEl.querySelector(`.cell[data-index="${index}"]`);
    if (!cellEl) return;
    cellEl.classList.remove("radar-hint");
    if (!data.revealed && data.type === "good") {
      cellEl.classList.add("radar-hint");
    }
  });
}

function showShopMessage(msg) {
  infoBoxEl.innerHTML = `
    <div class="info-entry">
      <strong>ร้านค้า:</strong> ${msg}
    </div>
  `;
}

// เริ่มเกม
document.addEventListener("DOMContentLoaded", init);