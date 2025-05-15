BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Address] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [userId] UNIQUEIDENTIFIER,
    [address] NVARCHAR(200),
    [addNote] NVARCHAR(500),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Address__3213E83F859344C0] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Cart] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [userId] UNIQUEIDENTIFIER,
    [productId] UNIQUEIDENTIFIER,
    [quantity] INT,
    CONSTRAINT [PK__Cart__3213E83F54D0BFD3] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Categories] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [categoryName] NVARCHAR(100),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Categori__3213E83FA17A0498] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PaymentMethod] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [paymentName] NVARCHAR(200),
    [description] NVARCHAR(100),
    [img] NVARCHAR(1),
    CONSTRAINT [PK__PaymentM__3213E83F50E79A44] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProdcutImgs] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [productId] UNIQUEIDENTIFIER,
    [url] NVARCHAR(1),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ProdcutI__3213E83F7E6E4A86] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductCategories] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [productId] UNIQUEIDENTIFIER,
    [categoryId] UNIQUEIDENTIFIER,
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ProductC__3213E83F532D7E96] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductReview] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [transactionId] UNIQUEIDENTIFIER,
    [review] INT,
    [addNote] NVARCHAR(100),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ProductR__3213E83F6E68DDA9] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Products] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [shopid] UNIQUEIDENTIFIER,
    [productName] NVARCHAR(100),
    [desciption] NVARCHAR(1),
    [price] DECIMAL(18,0),
    [quantity] INT,
    [status] NVARCHAR(1),
    [rating] INT,
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Products__3213E83F10301EA2] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductVariants] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [productId] UNIQUEIDENTIFIER,
    [vartiantName] NVARCHAR(50),
    [img] NVARCHAR(1),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ProductV__3213E83FD5304443] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Shipment] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [orderId] UNIQUEIDENTIFIER,
    [startDate] DATETIME,
    [expected] DATETIME,
    [endDate] DATETIME,
    [status] NVARCHAR(1),
    CONSTRAINT [PK__Shipment__3213E83F51ED03B1] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ShipmentProvider] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [providerName] NVARCHAR(100),
    [description] NVARCHAR(200),
    [price] DECIMAL(18,0),
    CONSTRAINT [PK__Shipment__3213E83FA0EE6DA4] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Shop] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [userId] UNIQUEIDENTIFIER,
    [realName] NVARCHAR(80),
    [shopName] NVARCHAR(100),
    [description] NVARCHAR(500),
    [phoneContact] NVARCHAR(20),
    [emailContact] NVARCHAR(50),
    [addressContact] NVARCHAR(200),
    [rating] INT,
    [certify] BIT,
    [productQuantity] INT,
    [status] NVARCHAR(1),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Shop__3213E83FDC22EC67] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ShopReview] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [transactionId] UNIQUEIDENTIFIER,
    [review] INT,
    [addNote] NVARCHAR(100),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ShopRevi__3213E83F3474544A] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Transaction] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [cartId] UNIQUEIDENTIFIER,
    [paymentMethod] UNIQUEIDENTIFIER,
    [shipProvider] UNIQUEIDENTIFIER,
    [payPrice] DECIMAL(18,0),
    [status] NVARCHAR(1),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Transact__3213E83F9643BD6D] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [username] NVARCHAR(50),
    [email] NVARCHAR(50),
    [password] NVARCHAR(1),
    [role] NVARCHAR(10),
    [realName] NVARCHAR(50),
    [phoneNumber] NVARCHAR(20),
    [dob] DATETIME,
    [sex] NVARCHAR(10),
    [avartar] NVARCHAR(1),
    [status] NVARCHAR(1),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Users__3213E83FDD6C5002] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Address] ADD CONSTRAINT [FK__Address__userId__571DF1D5] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Cart] ADD CONSTRAINT [FK__Cart__productId__7C4F7684] FOREIGN KEY ([productId]) REFERENCES [dbo].[Products]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Cart] ADD CONSTRAINT [FK__Cart__userId__7B5B524B] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProdcutImgs] ADD CONSTRAINT [FK__ProdcutIm__produ__778AC167] FOREIGN KEY ([productId]) REFERENCES [dbo].[Products]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProductCategories] ADD CONSTRAINT [FK__ProductCa__categ__5AEE82B9] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Categories]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProductCategories] ADD CONSTRAINT [FK__ProductCa__produ__797309D9] FOREIGN KEY ([productId]) REFERENCES [dbo].[Products]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProductReview] ADD CONSTRAINT [FK__ProductRe__trans__01142BA1] FOREIGN KEY ([transactionId]) REFERENCES [dbo].[Transaction]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Products] ADD CONSTRAINT [FK__Products__shopid__76969D2E] FOREIGN KEY ([shopid]) REFERENCES [dbo].[Shop]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProductVariants] ADD CONSTRAINT [FK__ProductVa__produ__787EE5A0] FOREIGN KEY ([productId]) REFERENCES [dbo].[Products]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Shipment] ADD CONSTRAINT [FK__Shipment__orderI__00200768] FOREIGN KEY ([orderId]) REFERENCES [dbo].[Transaction]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Shop] ADD CONSTRAINT [FK__Shop__userId__75A278F5] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ShopReview] ADD CONSTRAINT [FK__ShopRevie__trans__02084FDA] FOREIGN KEY ([transactionId]) REFERENCES [dbo].[Transaction]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Transaction] ADD CONSTRAINT [FK__Transacti__cartI__7D439ABD] FOREIGN KEY ([cartId]) REFERENCES [dbo].[Cart]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Transaction] ADD CONSTRAINT [FK__Transacti__payme__7E37BEF6] FOREIGN KEY ([paymentMethod]) REFERENCES [dbo].[PaymentMethod]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Transaction] ADD CONSTRAINT [FK__Transacti__shipP__7F2BE32F] FOREIGN KEY ([shipProvider]) REFERENCES [dbo].[ShipmentProvider]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH

