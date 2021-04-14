alert ('This is readrs website, you are welcome');
console.log ('This is readrs website, you are welcome');


var booksyear=prompt('please enter how many books you read year? ');

if (booksyear>5)
 {
   alert ('congratulations, you are now in our reading challenge !')
  }

if (booksyear<=5)
 {
   alert ('keep going!');
   console.log ('no');
    }

var imageone='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkSX3Tp_XRfcGoMhXayQVtbTDsxuhplq6Zw&usqp=CAU" alt="novels">';

var imagetwo='<img src="https://1.bp.blogspot.com/-G9yONwqzjHI/XqLQvrU1ZMI/AAAAAAAADUs/k4Z9HKs8sDYJBZ_sTtZJLl5VKWHD9UQrACLcBGAsYHQ/s1600/different-types-of-novel.webp" alt="Readers"/>';

var booksfav = prompt('which kind of books do you reads usually? novels or political?');

if (booksfav === 'novels')
{
  document.write(imageone);
  }
   else {
    document. write('novels');
    }

if (booksfav === 'political')
{
  document.write(imagetwo);
  }
   


