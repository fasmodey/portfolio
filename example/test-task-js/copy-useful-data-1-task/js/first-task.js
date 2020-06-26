//Get data button click
document.querySelector('.table-container__button').addEventListener('click', (event) => {
    event.preventDefault();
    const frame_height = +document.querySelector('#frame_height').value;
    const frame_width = +document.querySelector('#frame_width').value;
    const pic_height = +document.querySelector('#pic_height').value;
    const pic_width = +document.querySelector('#pic_width').value;
    const pic_y = +document.querySelector('#pic_y').value;
    const pic_x = +document.querySelector('#pic_x').value;

    const getRandom = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    
    //Create array with random numbers[0 - 99]
    const matrixArray = (height, width) => {
        let arr = new Array();
        
        for (let i = 0; i < height; i++) {
            arr[i] = new Array();
            
            for (let j = 0; j < width; j++) {
                arr[i][j] = getRandom(0, 100);
            }
        }
        
        return arr;
    };
    
    let matrix = matrixArray(frame_height, frame_width);

    //Copy useful data
    const swapElement = (matrix) => {
    
        for (let i = 0; i < pic_height; i++) {
            
            for (let j = 0; j < pic_width; j++) {
                let item = matrix[i + pic_y][j + pic_x];
    
                matrix[i + pic_y][j + pic_x] = matrix[i][j];
                matrix[i][j] = item;
            }
        }
    };
    
    //Table formatting
    const drawTable = (matrix, name) => {
        const table = document.createElement('table');
        table.classList.add(`main-table-${name}`);
    
        document.querySelector('.table-container').appendChild(table);
    
        for (let i = 0; i < matrix.length; i++) {
            const tr = document.createElement('tr');
            tr.classList.add('matrix-row');
    
            for (let j = 0; j < matrix[i].length; j++) {
                const td = document.createElement('td');
                td.classList.add('matrix-item');
                td.textContent = matrix[i][j];
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
    };
    
    const paintPic = (name, textColor, borderColor) => {
        for (let i = pic_y; i < pic_y + pic_height; i++) {
            for (let j = pic_x; j < pic_x + pic_width; j++) {
                document.querySelector(`.main-table-${name}`).rows[i].cells[j].style.color = textColor;
                document.querySelector(`.main-table-${name}`).rows[i].cells[j].style.border = borderColor;
            }
        }
    };
    
    const rezultFocus = (name, textColor, borderColor) => {
        for (let i = 0; i < pic_height; i++) {
            for (let j = 0; j < pic_width; j++) {
                document.querySelector(`.main-table-${name}`).rows[i].cells[j].style.color = textColor;
                document.querySelector(`.main-table-${name}`).rows[i].cells[j].style.border = borderColor;
            }
        }
    };
    
    //Draw table before change
    drawTable(matrix, 'before');
    paintPic('before', 'rgb(255, 238, 0)', '2px solid red');
    swapElement(matrix)
    //Draw table after change
    const title = document.createElement('h2');
    title.classList.add('after-copy');
    title.textContent = 'After';
    document.querySelector('.table-container').appendChild(title);

    drawTable(matrix, 'after');
    paintPic('after', 'rgb(255, 238, 0)', '2px solid rgb(0, 195, 255)');
    rezultFocus('before', 'rgb(255, 238, 0)', '2px solid rgb(0, 195, 255)');
    rezultFocus('after', 'rgb(255, 238, 0)', '2px solid red');
});