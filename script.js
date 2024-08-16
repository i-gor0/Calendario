const calendarElement = document.getElementById('calendar');

const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

let mês_atual = new Date().getMonth();
let Ano_atual = new Date().getFullYear();

function generateCalendar(month, year) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarHTML = `
        <div class="calendar">
            <div class="calendar-header">
                <button onclick="prevMonth()">&#10094;</button>
                <h2>${months[month]} ${year}</h2>
                <button onclick="nextMonth()">&#10095;</button>
            </div>
            <div class="calendar-grid">
                <div>Dom</div><div>Seg</div><div>Ter</div><div>Qua</div><div>Qui</div><div>Sex</div><div>Sáb</div>
    `;

    for (let i = 0; i < firstDay; i++) {
        calendarHTML += `<div></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const today = new Date();
        if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            calendarHTML += `<div class="day current-day">${day}</div>`;
        } else {
            calendarHTML += `<div class="day">${day}</div>`; 
        }
    }

    calendarHTML += `
            </div>
            <div class="calendar-footer">
                <button class="button" id="open" onclick="buttonAction()">Feed</button>
            </div>
        </div>
    `;
    calendarElement.innerHTML = calendarHTML;
}

function prevMonth() {
    mês_atual--;
    if (mês_atual < 0) {
        mês_atual = 11;
        Ano_atual--;
    }
    generateCalendar(mês_atual, Ano_atual);
}

function nextMonth() {
    mês_atual++;
    if (mês_atual > 11) {
        mês_atual = 0;
        Ano_atual++
    }
    generateCalendar(mês_atual, Ano_atual);
}

function buttonAction() {
    const feedContainer = document.getElementsByClassName("conteiner_feed")[0];
    feedContainer.style.display = "flex";
}

function closeFeed() {
    const feedContainer = document.getElementsByClassName("conteiner_feed")[0];
    feedContainer.style.display = "none";
}


generateCalendar(mês_atual, Ano_atual);