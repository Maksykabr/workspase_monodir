const express = require('express');

const app = express();
const port = 3000;

const data = {
    "Перший рівень": "0100000000",
    "Другий рівень": "0110100000",
    "Третій рівень": "0110165000",
    "Четвертий рівень": "",
    "Категорія": "",
    "Назва об'єкта українською мовою": "СЕЛИЩА МІСЬКОГО ТИПУ, ПІДПОРЯДКОВАНІ ЗАЛІЗНИЧНІЙ РАЙРАДІ М.СІМФЕРОПОЛЯ",
    "Масив елементів четвертого рівня": []
}
app.get('/', (req, res) => {   
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});