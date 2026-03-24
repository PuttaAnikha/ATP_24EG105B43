/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/
      class Book
      {
        title;
        author;
        pages;
        isAvailable;
        constructor(title,author,pages,isAvailable)
        {
this.title=title;
this.author=author;
this.pages=pages;
this.isAvailable=isAvailable;
        }
        borrow()
        {
          return this.isAvailable=false;
        }
        returnBook()
        {
            return this.isAvailable=true;
        }
        getInfo()
        {
            console.log( (`${this.title} by ${this.author}`));
        }
        isLongBook()
        {
            if(this.pages>300)
            {
                return true;
            }
            else
                return false;
        }
        
      }
      //1. Create at least 5 book objects using the class:
      //Example: "Harry Potter", "1984", "The Hobbit", etc.
      const b1=new Book("c programming","dennis ritchie",300,true);
      const b2=new Book("The Hobbit"," anikha",500,true);
      const b3=new Book("Harry Potter","swathi",300,true);
      const b4=new Book("Secret Garden","Harshith",100,true);
      const b5=new Book("Fareheit 451","ray bradburyy",300,true);
      //2. Perform the following operations:

      //i. Display info of all books
      
      b1.getInfo();
      b2.getInfo();
      b3.getInfo();
      b4.getInfo();
      b5.getInfo();
      //ii. Borrow 2 books and show their availability status
      console.log(b1.borrow());
      console.log(b4.borrow());
      //iii. Return 1 book and show updated status
      console.log(b4.returnBook());
      //iv. Count how many books are "long books" (more than 300 pages)
      const books=[b1,b2,b3,b4,b5];
      let longCount=books.filter(bk=>bk.isLongBook());
    console.log(longCount.length)
      

      //v. List all available books*/
    let available=books.filter(book=>book.isAvailable)
    console.log(available)