CREATE DATABASE ZunoDB
Go

USE ZunoDB
GO

CREATE TABLE [Users] (
  [id] uniqueidentifier PRIMARY KEY,
  [username] nvarchar(50),
  [email] nvarchar(50),
  [password] nvarchar,
  [role] nvarchar(10),
  [realName] nvarchar(50),
  [phoneNumber] nvarchar(20),
  [dob] datetime,
  [sex] nvarchar(10),
  [avartar] nvarchar,
  [status] nvarchar,
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [Address] (
  [id] uniqueidentifier PRIMARY KEY,
  [userId] uniqueidentifier,
  [address] nvarchar(200),
  [addNote] nvarchar(500),
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [Shop] (
  [id] uniqueidentifier PRIMARY KEY,
  [userId] uniqueidentifier,
  [realName] nvarchar(80),
  [shopName] nvarchar(100),
  [description] nvarchar(500),
  [phoneContact] nvarchar(20),
  [emailContact] nvarchar(50),
  [addressContact] nvarchar(200),
  [rating] int,
  [certify] bit,
  [productQuantity] int,
  [status] nvarchar,
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [Categories] (
  [id] uniqueidentifier PRIMARY KEY,
  [categoryName] nvarchar(100),
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [Products] (
  [id] uniqueidentifier PRIMARY KEY,
  [shopid] uniqueidentifier,
  [productName] nvarchar(100),
  [desciption] nvarchar,
  [price] decimal,
  [quantity] int,
  [status] nvarchar,
  [rating] int,
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [ProdcutImgs] (
  [id] uniqueidentifier PRIMARY KEY,
  [productId] uniqueidentifier,
  [url] nvarchar,
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [ProductVariants] (
  [id] uniqueidentifier PRIMARY KEY,
  [productId] uniqueidentifier,
  [vartiantName] nvarchar(50),
  [img] nvarchar,
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [ProductCategories] (
  [id] uniqueidentifier PRIMARY KEY,
  [productId] uniqueidentifier,
  [categoryId] uniqueidentifier,
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [Cart] (
  [id] uniqueidentifier PRIMARY KEY,
  [userId] uniqueidentifier,
  [productId] uniqueidentifier,
  [quantity] int
)
GO

CREATE TABLE [PaymentMethod] (
  [id] uniqueidentifier PRIMARY KEY,
  [paymentName] nvarchar(200),
  [description] nvarchar(100),
  [img] nvarchar
)
GO

CREATE TABLE [ShipmentProvider] (
  [id] uniqueidentifier PRIMARY KEY,
  [providerName] nvarchar(100),
  [description] nvarchar(200),
  [price] decimal
)
GO

CREATE TABLE [Transaction] (
  [id] uniqueidentifier PRIMARY KEY,
  [cartId] uniqueidentifier,
  [paymentMethod] uniqueidentifier,
  [shipProvider] uniqueidentifier,
  [payPrice] decimal,
  [status] nvarchar,
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [Shipment] (
  [id] uniqueidentifier PRIMARY KEY,
  [orderId] uniqueidentifier,
  [startDate] datetime,
  [expected] datetime,
  [endDate] datetime,
  [status] nvarchar
)
GO

CREATE TABLE [ProductReview] (
  [id] uniqueidentifier PRIMARY KEY,
  [transactionId] uniqueidentifier,
  [review] int,
  [addNote] nvarchar(100),
  [created_at] datetime,
  [updated_at] datetime
)
GO

CREATE TABLE [ShopReview] (
  [id] uniqueidentifier PRIMARY KEY,
  [transactionId] uniqueidentifier,
  [review] int,
  [addNote] nvarchar(100),
  [created_at] datetime,
  [updated_at] datetime
)
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'nên là mã hóa token',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Users',
@level2type = N'Column', @level2name = 'password';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'seller || customer || admin',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Users',
@level2type = N'Column', @level2name = 'role';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'male || female || others',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Users',
@level2type = N'Column', @level2name = 'sex';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'active || inactive',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Users',
@level2type = N'Column', @level2name = 'status';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'active || inactive',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Shop',
@level2type = N'Column', @level2name = 'status';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'avaiable || out of stock ',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Products',
@level2type = N'Column', @level2name = 'status';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'pending || cancel || complete || not success',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Transaction',
@level2type = N'Column', @level2name = 'status';
GO

EXEC sp_addextendedproperty
@name = N'Column_Description',
@value = 'On the way || Complete || Return',
@level0type = N'Schema', @level0name = 'dbo',
@level1type = N'Table',  @level1name = 'Shipment',
@level2type = N'Column', @level2name = 'status';
GO

ALTER TABLE [Address] ADD FOREIGN KEY ([userId]) REFERENCES [Users] ([id])
GO

ALTER TABLE [Shop] ADD FOREIGN KEY ([userId]) REFERENCES [Users] ([id])
GO

ALTER TABLE [Products] ADD FOREIGN KEY ([shopid]) REFERENCES [Shop] ([id])
GO

ALTER TABLE [ProdcutImgs] ADD FOREIGN KEY ([productId]) REFERENCES [Products] ([id])
GO

ALTER TABLE [ProductVariants] ADD FOREIGN KEY ([productId]) REFERENCES [Products] ([id])
GO

ALTER TABLE [ProductCategories] ADD FOREIGN KEY ([productId]) REFERENCES [Products] ([id])
GO

ALTER TABLE [ProductCategories] ADD FOREIGN KEY ([categoryId]) REFERENCES [Categories] ([id])
GO

ALTER TABLE [Cart] ADD FOREIGN KEY ([userId]) REFERENCES [Users] ([id])
GO

ALTER TABLE [Cart] ADD FOREIGN KEY ([productId]) REFERENCES [Products] ([id])
GO

ALTER TABLE [Transaction] ADD FOREIGN KEY ([cartId]) REFERENCES [Cart] ([id])
GO

ALTER TABLE [Transaction] ADD FOREIGN KEY ([paymentMethod]) REFERENCES [PaymentMethod] ([id])
GO

ALTER TABLE [Transaction] ADD FOREIGN KEY ([shipProvider]) REFERENCES [ShipmentProvider] ([id])
GO

ALTER TABLE [Shipment] ADD FOREIGN KEY ([orderId]) REFERENCES [Transaction] ([id])
GO

ALTER TABLE [ProductReview] ADD FOREIGN KEY ([transactionId]) REFERENCES [Transaction] ([id])
GO

ALTER TABLE [ShopReview] ADD FOREIGN KEY ([transactionId]) REFERENCES [Transaction] ([id])
GO
