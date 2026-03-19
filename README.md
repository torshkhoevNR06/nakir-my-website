# NakirMyWebsite

Личный веб-сайт, созданный с использованием Angular.

## Описание

Одностраничное приложение с адаптивным дизайном и современными технологиями.

## Установка

```bash
npm install
```

## Запуск

```bash
ng serve
```

Приложение будет доступно по адресу `http://localhost:4200/`.

## Сборка

```bash
ng build --configuration production
```

Артефакты сборки сохраняются в директории `dist/`.

## Технологии

- Angular 21
- TypeScript
- SCSS
- RxJS

## Структура проекта

```
src/
├── app/                 # Основное приложение
│   ├── app.config.ts    # Конфигурация
│   ├── app.routes.ts    # Маршрутизация
│   ├── app.component.*  # Корневой компонент
│   └── ...
├── assets/              # Статические ресурсы
└── index.html           # Точка входа
```

---

*Создано с ❤️ с использованием Angular CLI версии 21.0.5*

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
