const levels = [
  { answer: "画蛇添足", hint: "已经完整的东西，又多加了不需要的部分。", note: "蛇本来没有脚，给蛇添脚就是多此一举。", art: [["✍", "🐍"], ["➕", "🦶"]] },
  { answer: "杯弓蛇影", hint: "把虚幻的影子误当成可怕的东西。", note: "杯中映着弓影，看起来像蛇。", art: [["🍵", "🏹"], ["〰", "🐍"]] },
  { answer: "守株待兔", hint: "死守偶然经验，不主动努力。", note: "守着树桩等兔子再撞上来。", art: [["🌳", "🪵"], ["🧍", "⏳", "🐇"]] },
  { answer: "亡羊补牢", hint: "出了问题后及时补救，还不算晚。", note: "羊丢了，再修羊圈。", art: [["🐑", "➡", "⬜"], ["🔨", "🚧"]] },
  { answer: "对牛弹琴", hint: "对不懂道理的人讲高深内容。", note: "给牛弹琴，牛听不懂。", art: [["🐂"], ["🎸", "🎵", "❓"]] },
  { answer: "掩耳盗铃", hint: "自己欺骗自己。", note: "捂住耳朵偷铃铛，以为别人也听不见。", art: [["🙉", "🔔"], ["🤏", "🏃"]] },
  { answer: "狐假虎威", hint: "借别人的势力吓唬人。", note: "狐狸借老虎的威风。", art: [["🦊", "➡"], ["🐯", "💢"]] },
  { answer: "刻舟求剑", hint: "用静止办法处理变化的事情。", note: "剑落水后，在船边刻记号寻找。", art: [["⛵", "✂"], ["⚔", "🌊"]] },
  { answer: "井底之蛙", hint: "见识狭窄。", note: "井底的青蛙只能看到小小天空。", art: [["▣"], ["🐸", "☁"]] },
  { answer: "盲人摸象", hint: "只看到局部就以为了解全部。", note: "盲人摸到象的不同部位，各说各的。", art: [["🙈", "🖐"], ["🐘", "〰"]] },
  { answer: "指鹿为马", hint: "故意颠倒黑白。", note: "指着鹿却说是马。", art: [["👉", "🦌"], ["💬", "🐎"]] },
  { answer: "滥竽充数", hint: "没有本领的人混在行家里凑数。", note: "不会吹竽也混在乐队里。", art: [["🎺", "🎺", "🎺"], ["😶", "0"]] },
  { answer: "叶公好龙", hint: "表面喜欢，真遇到却害怕。", note: "叶公说爱龙，真龙来了反而怕。", art: [["🧔", "❤️", "🐉"], ["🐉", "😱"]] },
  { answer: "买椟还珠", hint: "取舍不当，舍本逐末。", note: "买了盒子，却把珍珠还回去。", art: [["🎁", "💎"], ["✅", "🎁"], ["↩", "💎"]] },
  { answer: "拔苗助长", hint: "急于求成，反而坏事。", note: "把禾苗往上拔，想让它快长。", art: [["🌱", "⬆"], ["✋", "💨"]] },
  { answer: "纸上谈兵", hint: "只会空谈理论，不能解决实际问题。", note: "只在纸面上谈打仗。", art: [["📄", "🛡"], ["💬", "⚔"]] },
  { answer: "水滴石穿", hint: "坚持不懈，微小力量也能成功。", note: "水滴久了能穿透石头。", art: [["💧", "💧", "💧"], ["🪨", "○"]] },
  { answer: "胸有成竹", hint: "做事前已经有完整打算。", note: "心里先有竹子的样子。", art: [["🫀"], ["🎋", "✅"]] },
  { answer: "三心二意", hint: "心思不专一。", note: "三颗心，两种意思。", art: [["❤️", "❤️", "❤️"], ["💭", "💭"]] },
  { answer: "七上八下", hint: "心里慌乱不安。", note: "七在上，八在下。", art: [["7", "⬆"], ["8", "⬇"]] },
  { answer: "四面楚歌", hint: "陷入四面受敌的困境。", note: "四面都传来楚歌。", art: [["🎵", "🎵"], ["🎵", "😰", "🎵"], ["🎵", "🎵"]] },
  { answer: "一石二鸟", hint: "做一件事达到两个目的。", note: "一块石头打下两只鸟。", art: [["1", "🪨", "➡"], ["🐦", "🐦"]] },
  { answer: "九牛一毛", hint: "极大数量中的极小部分。", note: "九头牛身上的一根毛。", art: [["🐂", "🐂", "🐂"], ["🐂", "➗", "🧵"]] },
  { answer: "五花八门", hint: "种类繁多，变化多端。", note: "五种花，八扇门。", art: [["🌸", "🌼", "🌺", "🌷", "🌻"], ["🚪", "🚪", "🚪"]] },
  { answer: "十全十美", hint: "十分完美，没有欠缺。", note: "两个十，表示圆满。", art: [["10", "✅"], ["10", "⭐"]] },
  { answer: "头重脚轻", hint: "上面重，下面轻，也比喻基础不稳。", note: "大头小脚，站不稳。", art: [["🗿"], ["⬇"], ["🦶"]] },
  { answer: "唇亡齿寒", hint: "关系密切，一方受损另一方也受影响。", note: "嘴唇没了，牙齿就冷。", art: [["💋", "❌"], ["🦷", "🥶"]] },
  { answer: "心口不一", hint: "心里想的和嘴上说的不一样。", note: "心和口各说一套。", art: [["❤️", "❌"], ["👄", "✅"]] },
  { answer: "口是心非", hint: "嘴上说是，心里却不是。", note: "口里是，心里非。", art: [["👄", "✅"], ["❤️", "❌"]] },
  { answer: "目瞪口呆", hint: "吃惊得说不出话。", note: "眼睛瞪大，嘴巴发呆。", art: [["👀", "😳"], ["👄", "…"]] },
  { answer: "手舞足蹈", hint: "高兴得手脚都动起来。", note: "手在舞，脚在跳。", art: [["🙌", "💃"], ["🦶", "🕺"]] },
  { answer: "眉开眼笑", hint: "非常高兴的样子。", note: "眉眼都带着笑。", art: [["🙂"], ["〰", "👀"]] },
  { answer: "怒发冲冠", hint: "愤怒到极点。", note: "怒气让头发冲起帽子。", art: [["😡"], ["💇", "⬆", "🎩"]] },
  { answer: "面红耳赤", hint: "因激动、羞愧或争执而脸耳发红。", note: "脸红，耳朵也红。", art: [["😊", "🔴"], ["👂", "🔴"]] },
  { answer: "眼高手低", hint: "要求高但能力低。", note: "眼睛在高处，手却在低处。", art: [["👀", "⬆"], ["✋", "⬇"]] },
  { answer: "左顾右盼", hint: "向左右两边看。", note: "左边顾，右边盼。", art: [["⬅", "👀", "➡"], ["↔", "🔁"]] },
  { answer: "东张西望", hint: "到处看。", note: "向东张望，向西张望。", art: [["E", "👀"], ["W", "👀"]] },
  { answer: "前仰后合", hint: "身体前后晃动，多形容大笑。", note: "一会儿前仰，一会儿后合。", art: [["↗", "😂"], ["↙", "😂"]] },
  { answer: "南辕北辙", hint: "行动和目的相反。", note: "车辕向南，车轮却往北走。", art: [["S", "🐎"], ["N", "🛞"]] },
  { answer: "声东击西", hint: "制造假象迷惑对方。", note: "东边发声，西边攻击。", art: [["E", "🔊"], ["W", "⚔"]] },
  { answer: "画龙点睛", hint: "关键一笔让整体生动起来。", note: "给龙点上眼睛。", art: [["✍", "🐉"], ["•", "👁"]] },
  { answer: "锦上添花", hint: "好上加好。", note: "锦缎上再添花。", art: [["🧵", "✨"], ["➕", "🌸"]] },
  { answer: "雪中送炭", hint: "在别人困难时给予帮助。", note: "雪天送来炭火。", art: [["❄", "❄"], ["🎁", "🪨", "🔥"]] },
  { answer: "火上浇油", hint: "使情况更加严重。", note: "火上再倒油。", art: [["🔥"], ["🛢", "⬇"]] },
  { answer: "落井下石", hint: "趁人危难时加以打击。", note: "人落井后，还往下扔石头。", art: [["▣", "🧍"], ["⬇", "🪨"]] },
  { answer: "隔岸观火", hint: "对别人的危难旁观不救。", note: "隔着河岸看火。", art: [["🏞", "👀"], ["🌊", "🔥"]] },
  { answer: "悬崖勒马", hint: "到危险边缘及时醒悟回头。", note: "悬崖边拉住马。", art: [["⛰", "⚠"], ["🪢", "🐎"]] },
  { answer: "青出于蓝", hint: "学生或后辈胜过老师前辈。", note: "青色从蓝草中提取，却比蓝更鲜明。", art: [["🔵"], ["⬇", "🟢", "✨"]] },
  { answer: "门庭若市", hint: "来的人很多，非常热闹。", note: "门前像市场一样热闹。", art: [["🚪"], ["🚶", "🚶", "🚶"], ["🛒", "📣"]] },
  { answer: "百发百中", hint: "射击或做事命中率极高。", note: "每次发射都命中目标。", art: [["100", "🏹"], ["🎯", "100"]] }
];

const state = {
  current: Number(localStorage.getItem("idiom-current") || 0),
  completed: new Set(JSON.parse(localStorage.getItem("idiom-completed") || "[]")),
  revealed: 0
};

const picture = document.querySelector("#picture");
const levelNumber = document.querySelector("#levelNumber");
const progressText = document.querySelector("#progressText");
const answerSlots = document.querySelector("#answerSlots");
const answerInput = document.querySelector("#answerInput");
const message = document.querySelector("#message");
const hintText = document.querySelector("#hintText");
const levelGrid = document.querySelector("#levelGrid");

document.querySelector("#submitButton").addEventListener("click", submitAnswer);
document.querySelector("#hintButton").addEventListener("click", showHint);
document.querySelector("#nextButton").addEventListener("click", goNext);
document.querySelector("#resetButton").addEventListener("click", resetGame);
answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") submitAnswer();
});
answerInput.addEventListener("input", syncSlots);

function render() {
  state.current = Math.max(0, Math.min(state.current, levels.length - 1));
  const level = levels[state.current];
  levelNumber.textContent = state.current + 1;
  updateProgress();
  answerInput.value = "";
  hintText.textContent = "";
  state.revealed = 0;
  setMessage("观察图片，输入对应的四字成语。");
  renderPicture(level);
  renderSlots(level.answer.length);
  renderLevelGrid();
  answerInput.focus();
  save();
}

function renderPicture(level) {
  picture.innerHTML = "";
  const scene = document.createElement("div");
  scene.className = "scene";
  level.art.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "scene-row";
    row.forEach((item, index) => {
      const tile = document.createElement("div");
      tile.className = getTileClass(item, index);
      tile.textContent = item;
      rowElement.appendChild(tile);
    });
    scene.appendChild(rowElement);
  });
  picture.appendChild(scene);
}

function getTileClass(item, index) {
  const classes = ["tile"];
  if (/^[\u4e00-\u9fa5]{1,3}$/.test(item)) classes.push("word");
  if (item.length > 2) classes.push("small");
  if (index % 3 === 1) classes.push("accent");
  if (index % 3 === 2) classes.push("green");
  if (/[0-9]|东|西|南|北/.test(item)) classes.push("blue");
  return classes.join(" ");
}

function renderSlots(count) {
  answerSlots.innerHTML = "";
  for (let index = 0; index < count; index += 1) {
    const slot = document.createElement("div");
    slot.className = "slot";
    answerSlots.appendChild(slot);
  }
}

function syncSlots() {
  const normalized = normalize(answerInput.value);
  [...answerSlots.children].forEach((slot, index) => {
    slot.textContent = normalized[index] || "";
  });
}

function submitAnswer() {
  const level = levels[state.current];
  if (normalize(answerInput.value) !== level.answer) {
    setMessage("还差一点，再观察图里的关系。", "error");
    return;
  }
  state.completed.add(state.current);
  setMessage(`答对了：${level.note}`, "success");
  hintText.textContent = "可以点“下一关”继续挑战。";
  syncSlots();
  updateProgress();
  renderLevelGrid();
  save();
}

function showHint() {
  const level = levels[state.current];
  state.revealed = Math.min(level.answer.length, state.revealed + 1);
  const visible = level.answer
    .split("")
    .map((char, index) => (index < state.revealed ? char : "＿"))
    .join("");
  hintText.textContent = `${level.hint} 答案提示：${visible}`;
}

function goNext() {
  state.current = (state.current + 1) % levels.length;
  render();
}

function resetGame() {
  const confirmed = window.confirm("确定要清空进度并从第一关开始吗？");
  if (!confirmed) return;
  state.current = 0;
  state.completed.clear();
  render();
}

function renderLevelGrid() {
  levelGrid.innerHTML = "";
  levels.forEach((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "level-button";
    if (index === state.current) button.classList.add("current");
    if (state.completed.has(index)) button.classList.add("done");
    button.textContent = index + 1;
    button.addEventListener("click", () => {
      state.current = index;
      render();
    });
    levelGrid.appendChild(button);
  });
}

function setMessage(text, type = "") {
  message.textContent = text;
  message.className = `message ${type}`.trim();
}

function updateProgress() {
  progressText.textContent = `${state.completed.size}/${levels.length}`;
}

function normalize(value) {
  return value.replace(/[^\u4e00-\u9fa5]/g, "").trim();
}

function save() {
  localStorage.setItem("idiom-current", String(state.current));
  localStorage.setItem("idiom-completed", JSON.stringify([...state.completed]));
}

render();
