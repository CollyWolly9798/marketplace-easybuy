🗂 Документація по структурі проєкту
📌 Загальні принципи
Функціональні блоки (реєстрація, каталог, кошик тощо) розміщуються в папці src/features.

Універсальні компоненти (наприклад, кнопки, модальні вікна) зберігаються в src/components.

Глобальні стилі — в src/styles.

Імпорти мають бути відносні (не абсолютні через @/).

📁 Структура проєкту
src/
├── assets/             # Зображення, шрифти, відео
│   └── img/
├── components/         # Універсальні, переюзабельні компоненти
├── contexts/           # React контексти
├── features/           # Функціональні блоки
│   ├── auth/           # Вхід, реєстрація, модалки
│   │   ├── components/
│   │   ├── services/
│   │   └── styles/
│   ├── catalogue/      # Каталог товарів
│   ├── sale/           # Додавання/продаж товарів
│   ├── profile/        # Особистий кабінет
│   └── common/         # Загальні елементи UI (header, footer)
│       ├── header/
│       │   ├── components/
│       │   └── styles/
│       └── footer/
├── hooks/              # Кастомні React-хуки
├── styles/             # Глобальні SCSS: змінні, міксіни
│   ├── _variables.scss
│   ├── _mixins.scss
│   └── main.scss       # Точка входу
├── App.tsx
└── main.tsx

📋 Іменування
Компоненти: PascalCase — SignIn.jsx, SearchBar.jsx

Файли стилів: називаються так само, як компонент — SearchBar.scss

Папки: kebab-case або camelCase — допускається одностайний стиль на проєкті

🎨 Стилі
Кожен компонент має власний SCSS у сусідній папці (або styles/).

Глобальні SCSS — у src/styles/:

_variables.scss

_mixins.scss

main.scss — точка входу
// src/styles/main.scss
@import './variables';
@import './mixins';
@import './reset';

🧩 Імпорт компонентів
✅ Правильно:
import SignIn from '../../features/auth/components/SignIn';
❌ Неправильно:
import SignIn from '@/components/SignIn'; // ми не використовуємо alias @

🚫 Заборонено
Тримати всі компоненти в одній папці components/

Називати файли стилів без імені компонента (типу styles.scss)

Дублювати логіку в кількох фічах

Писати великі компоненти в одному файлі (дробіть на підкомпоненти)

✅ Приклад компонента
features/
└── auth/
    ├── components/
    │   └── SignIn.jsx
    ├── styles/
    │   └── SignIn.scss
    └── services/
        └── authApi.ts
У файлі SignIn.jsx:
import '../styles/SignIn.scss';
🔚 Примітка: Перед створенням нового функціоналу — перевір, чи не існує схожого компонента у features/ або components/.