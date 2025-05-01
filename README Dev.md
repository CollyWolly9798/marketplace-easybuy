🗂 Документація по структурі проєкту 📌 Загальні принципи Усі функціональні блоки (реєстрація, каталог, кошик тощо)
зберігаються у папці src/features.

Універсальні компоненти (наприклад, кнопки, модальні вікна) зберігаються в src/components.

Глобальні стилі — в src/styles.

Імпорти мають бути відносні (не абсолютні через @/).

📁 Структура проєкту bash Копіювати Редагувати src/ ├── features/ │ ├── auth/ # Вхід, реєстрація, модалки │ │ ├──
components/ │ │ ├── styles/ │ │ └── services/ │ ├── catalogue/ # Каталог товарів │ ├── sale/ # Додавання/продаж товарів
│ ├── profile/ # Особистий кабінет │ └── common/ # Загальні елементи UI (header, footer) │ ├── header/ │ │ ├──
components/ │ │ └── styles/ │ └── footer/ ├── components/ # Універсальні, переюзабельні компоненти ├── contexts/ # React
контексти ├── hooks/ # Кастомні React-хуки ├── assets/ # Зображення, шрифти, відео │ └── img/ ├── styles/ # Глобальні
SCSS: змінні, міксіни ├── App.tsx ├── main.tsx

📋 Іменування Компоненти: PascalCase — SignIn.jsx, SearchBar.jsx

Файли стилів: називаються так само, як компонент — SearchBar.scss

Папки: kebab-case або camelCase — допускається одностайний стиль на проєкті

🎨 Стилі Кожен компонент має власний SCSS у сусідній папці (або styles/).

Глобальні SCSS — у src/styles/:

\_variables.scss

\_mixins.scss

main.scss — точка входу

// src/styles/main.scss @import './variables'; @import './mixins'; @import './reset';

🧩 Імпорт компонентів ✅ ПРАВИЛЬНО:

jsx import SignIn from '../../features/auth/components/SignIn'; ❌ НЕПРАВИЛЬНО:

jsx import SignIn from '@/components/SignIn'; // ми не використовуємо alias @

🚫 Заборонено Тримати всі компоненти в одній папці components/

Називати файли стилів без імені компонента (типу styles.scss)

Дублювати логіку в кількох фічах

Писати великі компоненти в одному файлі (дробіть на підкомпоненти)

✅ Приклад компонента markdown features/ └── auth/ ├── components/ │ └── SignIn.jsx ├── styles/ │ └── SignIn.scss └──
services/ └── authApi.ts У файлі SignIn.jsx:

jsx import '../styles/SignIn.scss'; 🔚 Примітка: Перед створенням нового функціоналу — перевір, чи не існує схожого
компонента у features/ або components/.
