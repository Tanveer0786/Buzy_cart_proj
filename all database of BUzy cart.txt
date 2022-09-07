Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(111,'India','Gurgaon',500,400,5000000,4000000,CAST('2016-06-08' as date))
Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(112,'India','New Delhi',550,440,5500000,4500000,CAST('2016-12-09' as date))
Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(113,'India','Nodia',600,475,6000000,4750000,CAST('2017-05-10' as date))
Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(114,'New Zealand','Auckland',650,515,6500000,5150000,CAST('2017-11-13' as date))
Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(115,'New Zealand','Chirstchurch',700,525,7000000,5250000,CAST('2021-04-15' as date))
Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(116,'New Zealand','Wellington',750,555,7500000,5550000,CAST('2018-10-17' as date))
Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(117,'Australia','Canberra',800,585,8000000,5850000,CAST('2019-03-20' as date))
Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(118,'Australia','Darwin',600,325,6000000,3250000,CAST('2019-09-25' as date))
Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(119,'Australia','Sydney',400,300,4000000,3000000,CAST('2020-02-03' as date))
Insert into Inventry(Inventry_id,Inventry_Branch,Country,Total_Product_Purchased,Total_Product_Selled,Total_Amount_Purchasing,Total_Amount_Selling,Dot) values(120,'Germany','Barlin',800,690,8000000,6900000,CAST('2021-01-28' as date))
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(601,'TG','Technogent','Hardware company',501,111,'Delhi','Delhi',110001,'IND-91')
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(602,'TT','TechTrack','Electronic company',502,112,'Gurgaon','Haryana',244413,'IND-91')
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(603,'SW','SwipeWire','Equipment company',503,113,'Chandigarh','Punjab',160001,'IND-91')
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(604,'SP','SalePush','Car company',504,114,'Chennai','Tamil Nadu',600001,'IND-91')
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(605,'MC','MediCare','Healthcare company',505,115,'Hyderabad','Telangana',500030,'IND-91')
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(606,'DM','DigiMail','Digital company',506,116,'Bangalore','Karnataka',560030,'IND-91')
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(607,'WM','WallMart','Grocery company',507,117,'Jaipur','Rajasthan',302001,'IND-91')
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(608,'TCS','TATA','Multimedia company',508,118,'Mumbai','Maharashtra',400001,'IND-91')
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(609,'CC','Coca Cola','Beverage company',509,119,'Pune','Maharashtra',400001,'IND-91')
Insert into Product_Vendor(Vendor_ID,Company_code,Company_Name,Description,Country_code,Branch_id, Address_city, Address_state, Address_postal_code, Address_country_code) values(610,'RI','Reliance','Mobile company',510,120,'Lucknow','UP',226001,'IND-91')




create table dbo.Inventry(
Inventry_id int not null,
Branch varchar(30),
Country varchar (30),
Total_Product_Purchased int,
Total_Product_Selled int,
Total_Amount_Purchasing int,
Total_Amount_Selling int,
Date date,
primary key(Inventry_id)
)
create table [dbo].[Product_Vendor](
  Vendor_ID  int,
  Company_code varchar(30),
  Company_Name  varchar(200),
  Description    varchar(500),
  Country_code    int,
  Branch_id   int,
  Address_city varchar(500),
  Address_state varchar(200),
  Address_postal_code varchar(200),
  Address_country_code varchar(100),
  primary key (Vendor_ID),
  foreign key(Branch_id) REFERENCES Inventry(Inventry_id)
)

Create table Product(
Product_id int,
Prod_Name Varchar(200),
SKU  Varchar(200),
Description varchar(500),
Price Float,
Vendor_id int,
Category_id int,
primary key(Product_id),
foreign key(Vendor_id) References Product_Vendor(Vendor_ID),
foreign key(Category_id) References ProductCategory(Product_category)
)

Create table ProductCategory(
Product_category int,
Name varchar(200),
Code int,
Description varchar(500),
primary key (Product_category),
 
)

Create table PricingHistory(
Pricing_id int,
Product_id int,
Price float,
Started_at date,
Ended_at date
primary key (Pricing_id),
foreign key(Product_id) references Product(Product_id)

)
Create table RelatedProduct(
Related_id int,
Product_id int,
Related_Product_id int,
releveance_Score int,

primary key (Related_Product_id),
Foreign key(Product_id) References Product(Product_id),
Foreign key(Product_id) References Product(Product_id)


)

create table ShoppingCartItems(
Shoppingcart_id int,
Customer_id Varchar,
Product_id int,
Minimum_Quantity int,
Quantity int,
Price float,
Price_expires_at datetime
primary key(Shoppingcart_id),
Foreign key(Product_id) references Product(Product_id)

)
Create table Shopping_Cart_history(
HIstory_id int,
Customer_id varchar,
Product_id int,
Occured_at Datetime,
Action_id int,
primary key(HIstory_id),
foreign key(Action_id) references Shopping_Cart_historyAction(Action_id),
foreign key(Product_id) references Product(Product_id),
)

Create table Shopping_Cart_historyAction(
Action_id int,
Action_constant bit,
primary key(Action_id),

)
Create table Order_(
Order_id int,
Customer_id int,
Status_id int,
Customer_comments varchar(500),
primary key(Order_id),
foreign key(Status_id) references Order_Status_Code(Order_status_id)

)
Create table Order_items(
Order_items_id int,
Order_id int,
Product_id int,
Qunatity int,
Price Float,
primary key(Order_items_id),
foreign key(Order_id) references Order_(Order_id)

)
Create table Order_Items_Return(
Return_id int,
Order_items_id int,
Issued_by varchar(200),
Issued_at datetime,
primary key(Return_id ),
foreign key (Order_items_id) references Order_Items(Order_items_id)

)

Create table Order_Status_Code(
Order_status_id int,
Status_code bit,
primary key (Order_status_id),


)
create table shipment(
Shipment_id int,
Order_id int,
to_address varchar,
Tracking_no varchar,
sent_at datetime,
primary key(Shipment_id),
foreign key(Order_id) references Order_(Order_id)

)
create table shipmentItems(
Shipment_id int,
Order_items_id int,

foreign key (Order_items_id) References Order_items(Order_items_id),
foreign key (Shipment_id) references shipment(Shipment_id)
)

create table Customer(
Customer_id int not null,
F_Name varchar(30),
M_Name varchar(30),
L_Name varchar(30),
Email_Address varchar(50),
Created_at datetime,primary key(Customer_id))

select * from Customer 

insert into Customer(Customer_id,F_Name,M_Name,L_Name,Email_Address,Created_at) values(121,'Lucky',null,'Choudhary','luckychoudhary21@gmail.com',cast('2020-07-04 10:30:50' as datetime))
insert into Customer(Customer_id,F_Name,M_Name,L_Name,Email_Address,Created_at) values(122,'Tanbir',null,'Akhtar','tanbirakhtar22@gmail.com',cast('2020-08-09 11:51:51' as datetime))
insert into Customer(Customer_id,F_Name,M_Name,L_Name,Email_Address,Created_at) values(123,'Aditya','Vijay','Singh','adityasingh51@gmail.com',cast('2020-09-04 09:25:52' as datetime))
insert into Customer(Customer_id,F_Name,M_Name,L_Name,Email_Address,Created_at) values(124,'Mahesh','Kumar','Singh','kumarmahesh41@gmail.com',cast('2020-10-04 06:41:53' as datetime))
insert into Customer(Customer_id,F_Name,M_Name,L_Name,Email_Address,Created_at) values(125,'Ashish','kumar','singh','singhashish111@gmail.com',cast('2020-11-02 02:31:55' as datetime))

Create procedure Proc_Customers
As
Begin
  Declare @V_first_name varchar(30)
  Declare @V_last_name varchar(30)
  Declare Cur_employee Cursor For Select F_Name,L_Name  from Customer
  open Cur_employee
  Fetch Next from Cur_employee into @V_first_name, @V_last_name
  while(@@FETCH_STATUS = 0)
  Begin
    Print 'FirstName: ' + @V_first_name + ' LastName: ' + @V_last_name
    Fetch Next from Cur_employee into @V_first_name, @V_last_name
  End
  close Cur_employee
  DeAllocate Cur_employee
End

Exec Proc_Customers
Alter procedure Proc_Customers
@vid varchar(6)
As
Begin
 Declare @V_first_name varchar(30)
 Declare @V_last_name varchar(30)
 Declare Cur_employee Cursor For Select F_Name,L_Name  from Customer Where customer_id = @vid
 open Cur_employee
 Fetch Next from Cur_employee into @V_first_name, @V_last_name
 while(@@FETCH_STATUS = 0)
 Begin
   Print 'FirstName: ' + @V_first_name + ' LastName: ' + @V_last_name
   Fetch Next from Cur_employee into @V_first_name, @V_last_name
 End
 close Cur_employee
 DeAllocate Cur_employee
End
Exec Proc_Customers '125'
Alter procedure Proc_employee
@vid varchar(6),
@V_first_name varchar(30),
@V_last_name varchar(30),
@V_city varchar(30),



As
Begin
  Insert into Customer values(@vid, @V_first_name, @V_last_name,)
End


select * from admin
select * from Inventry

select * from Branch
select * from Product_Vendor

