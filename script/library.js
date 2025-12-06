document.addEventListener('DOMContentLoaded', function() {
    // Описания игр
    const gameDescriptions = {
      "CS:GO": "Counter-Strike: Global Offensive - это многопользовательский тактический шутер от первого лица, где команды террористов сражаются против контртеррористов в различных режимах игры.",
      "Dota 2": "Dota 2 - это многопользовательская онлайн-баталия (MOBA), где две команды по пять игроков сражаются, чтобы уничтожить вражескую древнюю крепость.",
      "Valorant": "Valorant - это тактический шутер от первого лица с персонажами, обладающими уникальными способностями, и точным геймплеем, похожим на CS:GO.",
      "GTA V": "Grand Theft Auto V - это приключенческий боевик с открытым миром, где вы можете играть за трех разных персонажей и исследовать огромный город Лос-Сантос.",
      "Minecraft": "Minecraft - это песочница с открытым миром, где игроки могут строить, исследовать и выживать в мире, состоящем из блоков.",
      "PUBG": "PlayerUnknown's Battlegrounds - это королевская битва, где 100 игроков сражаются за выживание на постоянно уменьшающейся карте.",
      "Fortnite": "Fortnite - это королевская битва с элементами строительства, где игроки могут собирать ресурсы и строить защитные сооружения.",
      "Apex Legends": "Apex Legends - это королевская битва с героями, каждый из которых обладает уникальными способностями.",
      "Rocket League": "Rocket League - это футбол на ракетных автомобилях, где игроки соревнуются, забивая мячи в ворота противника.",
      "League of Legends": "League of Legends - это популярная MOBA, где две команды по пять игроков сражаются, чтобы уничтожить вражеский нексус.",
      "Rust": "Rust - это хардкорная survival MMO, где игроки должны выживать, строить базы и сражаться с другими игроками.",
      "Overwatch": "Overwatch - это командный шутер с уникальными героями, каждый из которых обладает особыми способностями.",
      "Warzone": "Call of Duty: Warzone - это бесплатная королевская битва из вселенной Call of Duty с реалистичным геймплеем.",
      "Cyberpunk 2077": "Cyberpunk 2077 - это RPG с открытым миром в киберпанковом сеттинге, где вы играете за наемника Ви.",
      "The Witcher 3": "The Witcher 3: Wild Hunt - это эпическая RPG, где вы играете за ведьмака Геральта, охотящегося на монстров.",
      "Among Us": "Among Us - это социальная игра, где экипаж космического корабля должен выявить самозванцев среди себя.",
      "Elden Ring": "Elden Ring - это action-RPG с открытым миром от создателей Dark Souls с сложным геймплеем и богатым лором.",
      "Battlefield 2042": "Battlefield 2042 - это масштабный военный шутер с разрушаемостью и боями на 128 игроков.",
      "Rainbow Six Siege": "Tom Clancy's Rainbow Six Siege - это тактический шутер, где команды атакующих и защитников сражаются в разрушаемых окружениях.",
      "Starfield": "Starfield - это космическая RPG от создателей The Elder Scrolls и Fallout с исследованием планет и глубоким сюжетом.",
      "Hogwarts Legacy": "Hogwarts Legacy - это action-RPG по вселенной Гарри Поттера, где вы играете за студента Хогвартса.",
      "Diablo IV": "Diablo IV - это хардкорный action-RPG в жанре hack and slash с мрачной атмосферой и бесконечным лутом.",
      "Dead Cells": "Dead Cells - это roguelike-metroidvania с пиксельной графикой и сложным, но увлекательным геймплеем.",
      "Metro Exodus": "Metro Exodus - это шутер с элементами survival horror по мотивам книг Дмитрия Глуховского.",
      "DOOM Eternal": "DOOM Eternal - это скоростной шутер, где вы играете за Doom Slayer, уничтожающего полчища демонов.",
      "Escape from Tarkov": "Escape from Tarkov - это хардкорный тактический шутер с элементами survival и реалистичной механикой боя.",
      "Sekiro": "Sekiro: Shadows Die Twice - это action-adventure с глубокой боевой системой и сложными боями с боссами.",
      "NFS Heat": "Need for Speed Heat - это аркадные гонки с полицейскими погонями и тюнингом автомобилей.",
      "Mortal Kombat 11": "Mortal Kombat 11 - это файтинг с жестокими фаталити и глубокой боевой системой.",
      "Resident Evil 4": "Resident Evil 4 - это ремейк классического survival horror с переработанной графикой и геймплеем."
    };
  
    const gamePCs = {};
    const allGames = Object.keys(gameDescriptions);
    
    allGames.forEach(game => {
        const pcCount = Math.floor(Math.random() * 4) + 1; // 1-4 компьютера на игру
        const pcs = [];
        
        while (pcs.length < pcCount) {
            const pcNum = Math.floor(Math.random() * 12) + 1;
            if (!pcs.includes(pcNum)) {
                pcs.push(pcNum);
            }
        }
        
        gamePCs[game] = pcs.sort((a, b) => a - b);
    });

    // Элементы DOM
    const gameCards = document.querySelectorAll('.game-card');
    const gameInfoPanel = document.querySelector('.game-info-panel');
    const closeBtn = document.querySelector('.close-btn');
    const infoGameName = document.querySelector('.info-game-name');
    const descriptionBtn = document.querySelector('.description-btn');
    const pcBtn = document.querySelector('.pc-btn');
    const descriptionContent = document.querySelector('.description-content');
    const pcContent = document.querySelector('.pc-content');
    const pcList = document.querySelector('.pc-list');
    const bookingModal = document.querySelector('.booking-modal');
const bookingForm = document.getElementById('booking-form');
const fullnameInput = document.getElementById('fullname');
const phoneInput = document.getElementById('phone');
const selectedPcDisplay = document.getElementById('selected-pc');
const bookingNotification = document.querySelector('.booking-notification');
const notificationName = document.getElementById('notification-name');
const notificationPhone = document.getElementById('notification-phone');
const notificationPc = document.getElementById('notification-pc');
const notificationGame = document.getElementById('notification-game');
const closeModalBtn = document.querySelector('.close-modal-btn');
const closeNotificationBtn = document.querySelector('.close-notification-btn');
const okBtn = document.querySelector('.ok-btn');

let selectedPcNumber = null;

    

    // Обработчики для карточек игр
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            const gameName = this.querySelector('.game-name').textContent;
            currentGame = gameName;
            
            // Активируем панель информации
            gameInfoPanel.classList.add('active');
            
            // Устанавливаем название игры
            infoGameName.textContent = gameName;
            
            // Показываем описание по умолчанию
            showDescription();
            
            // Прокручиваем к панели на мобильных устройствах
            if (window.innerWidth <= 1024) {
                gameInfoPanel.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Кнопка закрытия
    closeBtn.addEventListener('click', function() {
        gameInfoPanel.classList.remove('active');
    });

    // Кнопка "Описание"
    descriptionBtn.addEventListener('click', showDescription);

    function showDescription() {
        if (!currentGame) return;
        
        descriptionContent.classList.remove('hidden');
        pcContent.classList.add('hidden');
        
        descriptionContent.innerHTML = `<p>${gameDescriptions[currentGame]}</p>`;
        descriptionContent.innerHTML += `<p class="game-meta">Доступна на ${gamePCs[currentGame].length} компьютерах</p>`;
    }

    // Кнопка "Номер ПК"
    pcBtn.addEventListener('click', function() {
        if (!currentGame) return;
        
        descriptionContent.classList.add('hidden');
        pcContent.classList.remove('hidden');
        
        // Показываем список компьютеров
        pcList.innerHTML = '';
        gamePCs[currentGame].forEach(pc => {
            const pcItem = document.createElement('div');
            pcItem.className = 'pc-item';
            pcItem.textContent = `ПК #${pc}`;
            pcItem.addEventListener('click', () => bookPC(pc));
            pcList.appendChild(pcItem);
        });
    });

    // Функция бронирования ПК
    function bookPC(pcNumber) {
        selectedPcNumber = pcNumber;
        selectedPcDisplay.textContent = `ПК #${pcNumber}`;
        bookingModal.classList.remove('hidden');
    }

    // Анимация появления карточек с задержкой
    gameCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = fullnameInput.value;
    const phone = phoneInput.value;
    
    // Закрываем модальное окно
    bookingModal.classList.add('hidden');
    
    // Показываем уведомление
    notificationName.textContent = fullname;
    notificationPhone.textContent = phone;
    notificationPc.textContent = `ПК #${selectedPcNumber}`;
    notificationGame.textContent = currentGame;
    
    bookingNotification.classList.remove('hidden');
    
    // Очищаем форму
    bookingForm.reset();
});

// Закрытие модального окна
closeModalBtn.addEventListener('click', function() {
    bookingModal.classList.add('hidden');
});

// Закрытие уведомления
closeNotificationBtn.addEventListener('click', function() {
    bookingNotification.classList.add('hidden');
});

okBtn.addEventListener('click', function() {
    bookingNotification.classList.add('hidden');
});

// Закрытие при клике вне области
window.addEventListener('click', function(e) {
    if (e.target === bookingModal) {
        bookingModal.classList.add('hidden');
    }
    if (e.target === bookingNotification) {
        bookingNotification.classList.add('hidden');
    }
});