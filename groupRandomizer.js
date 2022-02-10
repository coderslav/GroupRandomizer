let group = ['person1', 'person2', 'person3', 'person4', 'person5', 'person6', 'person7', 'person8', 'person9', 'person10', 'person11', 'person12', 'person13'];
let firstOrSecondRowGroup = ['person14', 'person15'];

const display = [[], [], [], [], [], [], []];

for (let i = group.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = group[i];
    group[i] = group[j];
    group[j] = temp;
}
let firstTwoRows = group.slice(9).concat(firstOrSecondRowGroup);
group.splice(9);
for (let i = firstTwoRows.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = firstTwoRows[i];
    firstTwoRows[i] = firstTwoRows[j];
    firstTwoRows[j] = temp;
}
group = group.concat(firstTwoRows);

for (let i = 0; i < 7; i++) {
    for (let n = 0; n < 2; n++) {
        let student = group.pop();
        display[i].push(student);
    }
}
let lastStudent = group.pop();
display[Math.round(6 * Math.random())].push(lastStudent);
for (let i = 0; i < display.length; i++) {
    if (display[i].length < 3) {
        display[i].splice(1, 0, '**');
    }
}

for (let i = 0; i < 5; i++) {
    console.log('>'.repeat(16) + '|' + '<'.repeat(16));
}
console.log(display[0].join(' + '), '------', ['**', '**', '**'].join(' + '));
for (let i = 1; i < 7; i += 2) {
    console.log(display[i].join(' + '), '------', display[i + 1].join(' + '));
}
for (let i = 0; i < 5; i++) {
    console.log('>'.repeat(16) + '|' + '<'.repeat(16));
}
