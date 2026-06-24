SET SERVEROUTPUT ON;
-- CREATING THE CUSTOMERS TABLE
CREATE TABLE Customers(
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    LoanInterest NUMBER,
    Balance NUMBER,
    IsVIP CHAR(1)
);

-- CREATING THE LOANS TABLEE
CREATE TABLE Loans(
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    DueDate DATE,
    FOREIGN KEY(CustomerID) REFERENCES Customers(CustomerID)
);

--USING THE SAMPLE RECORDS FOR THE CUSTOMER TABLE
INSERT INTO Customers VALUES(1,'Rahul',65,10,15000,'N');
INSERT INTO Customers VALUES(2,'Anita',45,12,8000,'N');
INSERT INTO Customers VALUES(3,'Kiran',70,11,20000,'N');

--Using the sample records for the loans table
INSERT INTO Loans VALUES(101,1,SYSDATE+15);
INSERT INTO Loans VALUES(102,2,SYSDATE+45);
INSERT INTO Loans VALUES(103,3,SYSDATE+10);

COMMIT;

--- Exercise-1:Control Statements
-- SCENARIO 1: Discount interest rate for customers age > 60
BEGIN

   FOR c IN(SELECT * FROM Customers)
   LOOP

      IF c.Age>60 THEN
         UPDATE Customers
         SET LoanInterest=LoanInterest-1
         WHERE CustomerID=c.CustomerID;
      END IF;

   END LOOP;

   COMMIT;

END;
/
-- SCENARIO 1:OUTPUT
SELECT * FROM Customers;
-- SCENARIO 2: Promote to VIP if balance > 10,000
BEGIN

   FOR c IN(SELECT * FROM Customers)
   LOOP

      IF c.Balance>10000 THEN

         UPDATE Customers
         SET IsVIP='Y'
         WHERE CustomerID=c.CustomerID;

      END IF;

   END LOOP;

   COMMIT;

END;
/
-- SCENARIO 2:OUTPUT
SELECT * FROM Customers;
-- SCENARIO 3: Print reminders for loans due within next 30 days
BEGIN
   FOR rec IN (
      SELECT l.LoanID,c.CustomerName,l.DueDate
      FROM Customers c
      JOIN Loans l ON c.CustomerID=l.CustomerID
      WHERE l.DueDate<=SYSDATE+30
   )
   LOOP
      DBMS_OUTPUT.PUT_LINE(
         rec.CustomerName||
         ' has loan '||
         rec.LoanID||
         ' due on '||
         TO_CHAR(rec.DueDate,'DD-MON-YYYY')
      );
   END LOOP;
END;
/