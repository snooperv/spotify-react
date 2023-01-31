# Инструкция

## Установка проекта

В директории проекта нужно написать:

### `npm install`

Для запуска проекта:

### `npm start`

Приложение откроется по пути [http://localhost:3000](http://localhost:3000) в браузере.

***

## Подключение API

Для того, чтобы работал API нужно изменить данные в файле:

    src/components/spotify.ts

Из второй строки необходимо взять данные и поставить в настройки своего API:

    > const redirectUri = "http://localhost:3000/login";

А в третью строку необходимо вставить свой id:

    > const clientId = "Ваш_clientId";

