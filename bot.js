const question = document.getElementById("quest");
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");

let init = 0;
let users = [];
const botSay = (user) => {
  return [
    "halo, nama saya auryn. siapa nama kamu?",
    `ohh ${user?.nama}, kamu kelas berapa sekarang?`,
    `hmm kelas ${user?.kelas}, Smk pa Sma nih??`,
    `${user?.sekolah}?, ${user?.sekolah} mana tuh?? `,
    `ohh di ${user?.lokasi}, oke kapan kapan kesana boleh nggak`,
  ];
};
question.innerText = botSay()[0];

const botStart = () => {
  init++;

  if (init == 1) {
    question.innerText = botQuest({ nama: answer.value });
  } else if (init == 2) {
    question.innerText = botQuest({ kelas: answer.value });
  } else if (init == 3) {
    question.innerText = botQuest({ sekolah: answer.value });
  } else if (init == 4) {
    question.innerText = botQuest({ lokasi: answer.value });
  } else if (init == 5) {
    finish();
  } else {
    window.location.reload();
  }
};

const botQuest = (result) => {
  setTimeout(() => {
    question.innerText = botSay(result)[init];
  }, 1000);
  users.push(answer.value);
  answer.value = "";
};

const finish = () => {
  question.innerText = `oke thanx ${users[0]}, udah dulu yaah. daaahhh...`;
  answer.value = "Oke Auryn thanx juga";
};

submit.addEventListener("click", botStart);
