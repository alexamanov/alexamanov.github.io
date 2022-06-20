const info = {
    en: {
        activity: ['Web development', 'Solve problems', 'System design', 'Team work']
    },
    ru: {
        activity: ['Веб разработка', 'Анализ и решение задач', 'Проектирование систем', 'Работа в команде']
    }
}

const pageList = $('.page-list'),
    ru = $('.ru'),
    en = $('.en'),
    activity = $('.title');

$(window).on('hashchange', function(e) {
    let lang = window.location.hash.slice(1);

    if(lang === 'ru') {
        pageList.html('<li><a href="pages/about.html">О себе</a></li><li><a href="pages/skills.html">Навыки и умения</a></li><li><a href="pages/projects.html">Мои работы</a></li>');
        ru.addClass('active-lang');
        en.removeClass('active-lang');

        for (let i = 0; i < info.ru.activity.length; i++) {
            activity[i+1].innerHTML = info.ru.activity[i];
        }
    } else if(lang === 'en') {
        pageList.html('<li><a href="pages/about.html">About me</a></li><li><a href="pages/skills.html">Skills</a></li><li><a href="pages/projects.html">My works</a></li>');
        en.addClass('active-lang');
        ru.removeClass('active-lang');
        for (let i = 0; i < info.en.activity.length; i++) {
            activity[i+1].innerHTML = info.en.activity[i];
        }
    }
});
