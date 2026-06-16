# Interactive Sci-Fi Hub

Интерактивный игровой веб-интерфейс в стиле Sci-Fi / Cyberpunk с высокопроизводительным параллаксом и бесшовной анимацией переключения экранов.

🔗 **Live Demo:** [https://vohidovamin.github.io/Xeno-reapers/](https://vohidovamin.github.io/Xeno-reapers/)

---

## 🛠️ Стек технологий & Языки

* **Languages:** JavaScript (ES6+), HTML5, CSS3
* **Framework & Core:** React 18+ (Functional Components, Hooks)
* **Routing:** React Router DOM v6
* **Build Tool & Environment:** Vite, Node.js
* **Deployment:** GitHub Pages

---

## ⚡ Ключевые технические фишки (Features)

* **Performance Mouse Tracking (Параллакс):** Оптимизированная обработка движения мыши. Координаты курсора транслируются напрямую в CSS-переменные через `style.setProperty`, что исключает лишние ререндеры React State и обеспечивает стабильные 60 FPS.
* **GPU Hardware Acceleration:** Анимация фона изолирована в псевдоэлементе `::before` с использованием `transform: scale(1.1)`. Это исключает пересчет геометрии страницы (Reflow) и задействует мощности видеокарты (Composite Layers).
* **Async Router Delay:** Реализован паттерн плавного транзита между страницами. Роутинг искусственно удерживается через `setTimeout` на 500мс, давая CSS-анимации ухода полностью отыграть свой цикл.
* **Motion Design:** Синхронизированная анимация выезда контента по вертикальной оси между экранами `Intro` и `HeroScreen`.

---

## 👤 Автор / Author

* **Разработчик:** Vohidov Amin
* **Роль:** Frontend Developer / AI Prompt Engineer (Generative AI & Design)
* **GitHub:** [@vohidovamin](https://github.com/vohidovamin)
