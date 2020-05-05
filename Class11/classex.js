// Define your Book class here:
class Book {
  constructor(title, author, copyrightDate, isbn, numOfPages, numOfCheckouts) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.isbn = isbn;
    this.numOfPages = numOfPages;
    this.numOfCheckouts = numOfCheckouts;
  }

  isDiscarded() {
    if ((this.reportStatus = "true")) {
      console.log(`${this.title} is discarded.`);
    } else {
      console.log(`${this.title} is not discarded.`);
    }
  }
}

// Define your Manual and Novel classes here:
// haven't quite figured out how to get this function to work. having it call on the isDiscarded function didn't work or calling on any other property in the parent class.
// Manual is discarded if it is over 5 years old.
class Manual extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numOfPages,
    numOfCheckouts,
    isDiscarded
  ) {
    super(title, author, copyrightDate, isbn, numOfPages, numOfCheckouts),
      isDiscarded;
    this.reportStatus = function () {
      if (this.copyrightDate <= 2015) {
        console.log(`${this.title} is discarded.`);
      }
    };
  }
}

// function discards novel if it has been checked out over 100 times
//
class Novel extends Book {
  constructor(
    title,
    author,
    copyrightDate,
    isbn,
    numOfPages,
    numOfCheckouts,
    isDiscarded
  ) {
    super(
      title,
      author,
      copyrightDate,
      isbn,
      numOfPages,
      numOfCheckouts,
      isDiscarded
    );
    this.reportStatus = function () {
      if (this.numOfCheckouts <= 100) {
        console.log(`${this.title} is discarded.`);
      }
    };
  }
}

// Declare the objects for exercises 2 and 3 here:
let topSecretShuttleBuildingManual = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  00000000,
  1147,
  1,
  "No"
);
let prideAndPrejudice = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  111111111111,
  432,
  32,
  "No"
);

// Code exercises 4 & 5 here:
topSecretShuttleBuildingManual.reportStatus();
console.log((prideAndPrejudice.numOfCheckouts = 37));
console.log(prideAndPrejudice.isDiscarded());
