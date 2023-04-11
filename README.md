# relogio-digital

Projeto iniciado no curso CJRM,
Vamos criar um relógio virtual

## Começando

No arquivo HTML, criamos o template inicial:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="style.css">
    <title>Construindo um Relógio Digital</title>
</head>
<body>

    <div class="clock-container"></div>
    
    <script src="app.js" ></script>
</body>
</html>
```

Criamos um estilo inicial também:

```css
body {
    background-color: #212121;
}

.clock-container {
    font-size: 4em;
    text-align: center;
    margin: 200px auto 0;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
}

.clock-container span {
    padding: 20px;
    background-color: #006ce6;
    border-radius: 10px;
}
```

### JavaScript

Agora referenciamos a div.clock-container.

```js
const clockContainer = document.querySelector(".clock-container")
```

Agora criaremos a função que receberá no momento objeto do momento presente.

```js
const updateCLock = () => {
    const present = new Date()

    console.log(present) // { hora atual }
}
```

Para o relógio precisaremos das `horas`, `minutos` e `segundos`.

```js
const updateCLock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    console.log(hours, minutes, seconds) //output: 20 34 21
}
```

Agora que temos o que precisamos vamos inserir no nosso `HTML`:

```js
const updateCLock = () => {
    const present = new Date()
    const hours = present.getHours()
    const minutes = present.getMinutes()
    const seconds = present.getSeconds()

    const clockHTML = `
        <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> : 
        <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> : 
        <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
    ` // template HTML

    clockContainer.innerHTML = clockHTML // colocamos o template na div.clock-container
}
```

E para essa função ser chamada a cada segundo usaremos o `setInterval()`.

```js
const updateCLock = () => {
    // ... código
}

setInterval(updateCLock, 1000) // A cada segundo chama a função.
```
