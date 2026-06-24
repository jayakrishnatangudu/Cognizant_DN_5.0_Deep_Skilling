-- Exercise 3 : Stored Procedures

CREATE TABLE savings_acc(
accId NUMBER PRIMARY KEY,
customerID NUMBER,
balance NUMBER
);

INSERT INTO savings_acc VALUES(101,1,25000);
INSERT INTO savings_acc VALUES(102,2,18000);
INSERT INTO savings_acc VALUES(103,3,32000);
INSERT INTO savings_acc VALUES(104,4,15000);

COMMIT;
-- Scenario 1 : Process Monthly Interest
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
AS
BEGIN
   UPDATE savings_acc
   SET balance=balance+(balance*0.01);

   COMMIT;
END;
/

BEGIN
   ProcessMonthlyInterest;
END;
/

SELECT * FROM savings_acc;

-- Scenario 2 : Update Employee Bonus


CREATE TABLE employees(
empID NUMBER PRIMARY KEY,
empName VARCHAR2(30),
department VARCHAR2(20),
salary NUMBER
);

INSERT INTO employees VALUES(1,'Alice','HR',55000);
INSERT INTO employees VALUES(2,'Bob','IT',45000);
INSERT INTO employees VALUES(3,'Charlie','IT',60000);
INSERT INTO employees VALUES(4,'David','Finance',50000);

COMMIT;

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
deptName IN VARCHAR2,
bonusPercent IN NUMBER
)
AS
BEGIN
   UPDATE employees
   SET salary=salary+(salary*bonusPercent/100)
   WHERE department=deptName;

   COMMIT;
END;
/

SELECT * FROM employees;

BEGIN
   UpdateEmployeeBonus('IT',10);
END;
/

SELECT * FROM employees;

-- Scenario 3 : Transfer Funds

CREATE OR REPLACE PROCEDURE TransferFunds(
fromAccId IN NUMBER,
toAccId IN NUMBER,
amount IN NUMBER
)
AS
sourceBalance NUMBER;
BEGIN

   SELECT balance
   INTO sourceBalance
   FROM savings_acc
   WHERE accId=fromAccId;

   IF sourceBalance<amount THEN

      DBMS_OUTPUT.PUT_LINE('Insufficient Balance');

   ELSE

      UPDATE savings_acc
      SET balance=balance-amount
      WHERE accId=fromAccId;

      UPDATE savings_acc
      SET balance=balance+amount
      WHERE accId=toAccId;

      COMMIT;

      DBMS_OUTPUT.PUT_LINE('Transfer Successful');

   END IF;

END;
/

SELECT * FROM savings_acc;

BEGIN
   TransferFunds(102,104,5000);
END;
/

SELECT * FROM savings_acc;