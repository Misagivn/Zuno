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
    CONSTRAINT [PK__Address__3213E83F4E99BE28] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Cart] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [userId] UNIQUEIDENTIFIER,
    [productId] UNIQUEIDENTIFIER,
    [quantity] INT,
    CONSTRAINT [PK__Cart__3213E83FF410D630] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Categories] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [categoryName] NVARCHAR(100),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Categori__3213E83F04D7DBFB] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PaymentMethod] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [paymentName] NVARCHAR(50),
    [description] NVARCHAR(200),
    [img] NVARCHAR(1000),
    CONSTRAINT [PK__PaymentM__3213E83F2481F3D5] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductCategories] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [productId] UNIQUEIDENTIFIER,
    [categoryId] UNIQUEIDENTIFIER,
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ProductC__3213E83F7818D905] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductImgs] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [productId] UNIQUEIDENTIFIER,
    [url] NVARCHAR(1000),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ProductI__3213E83F2094CC3F] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductReview] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [transactionId] UNIQUEIDENTIFIER,
    [review] INT,
    [addNote] NVARCHAR(100),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ProductR__3213E83F096E28A6] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Products] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [shopId] UNIQUEIDENTIFIER,
    [productName] NVARCHAR(100),
    [description] NVARCHAR(max),
    [price] DECIMAL(18,2),
    [quantity] INT,
    [status] NVARCHAR(20),
    [rating] INT,
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Products__3213E83FBBF1499B] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ProductVariants] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [productId] UNIQUEIDENTIFIER,
    [variantName] NVARCHAR(50),
    [imgUrl] NVARCHAR(1000),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ProductV__3213E83F76828AE3] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Shipment] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [orderId] UNIQUEIDENTIFIER,
    [startDate] DATETIME,
    [expected] DATETIME,
    [endDate] DATETIME,
    [status] NVARCHAR(20),
    CONSTRAINT [PK__Shipment__3213E83FC3F07487] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ShipmentProvider] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [providerName] NVARCHAR(50),
    [description] NVARCHAR(200),
    [price] DECIMAL(18,2),
    CONSTRAINT [PK__Shipment__3213E83FC5432258] PRIMARY KEY CLUSTERED ([id])
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
    [status] NVARCHAR(20),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Shop__3213E83FECD91443] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[ShopReview] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [transactionId] UNIQUEIDENTIFIER,
    [review] INT,
    [addNote] NVARCHAR(1000),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__ShopRevi__3213E83FFCD8F2A1] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Transaction] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [cartId] UNIQUEIDENTIFIER,
    [paymentMethod] UNIQUEIDENTIFIER,
    [shipProvider] UNIQUEIDENTIFIER,
    [payPrice] DECIMAL(18,2),
    [status] NVARCHAR(20),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Transact__3213E83F6595FDFE] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Users] (
    [id] UNIQUEIDENTIFIER NOT NULL,
    [userName] NVARCHAR(50),
    [email] NVARCHAR(50),
    [password] NVARCHAR(30),
    [role] NVARCHAR(10),
    [realName] NVARCHAR(50),
    [phoneNumber] NVARCHAR(20),
    [dob] DATETIME,
    [sex] NVARCHAR(10),
    [avatar] NVARCHAR(500),
    [status] NVARCHAR(20),
    [created_at] DATETIME,
    [updated_at] DATETIME,
    CONSTRAINT [PK__Users__3213E83FF4FE2834] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Address] ADD CONSTRAINT [FK__Address__userId__398D8EEE] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Cart] ADD CONSTRAINT [FK__Cart__productId__4E88ABD4] FOREIGN KEY ([productId]) REFERENCES [dbo].[Products]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Cart] ADD CONSTRAINT [FK__Cart__userId__4D94879B] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProductCategories] ADD CONSTRAINT [FK__ProductCa__categ__4AB81AF0] FOREIGN KEY ([categoryId]) REFERENCES [dbo].[Categories]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProductCategories] ADD CONSTRAINT [FK__ProductCa__produ__49C3F6B7] FOREIGN KEY ([productId]) REFERENCES [dbo].[Products]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProductImgs] ADD CONSTRAINT [FK__ProductIm__produ__440B1D61] FOREIGN KEY ([productId]) REFERENCES [dbo].[Products]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProductReview] ADD CONSTRAINT [FK__ProductRe__trans__5CD6CB2B] FOREIGN KEY ([transactionId]) REFERENCES [dbo].[Transaction]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Products] ADD CONSTRAINT [FK__Products__shopId__412EB0B6] FOREIGN KEY ([shopId]) REFERENCES [dbo].[Shop]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ProductVariants] ADD CONSTRAINT [FK__ProductVa__produ__46E78A0C] FOREIGN KEY ([productId]) REFERENCES [dbo].[Products]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Shipment] ADD CONSTRAINT [FK__Shipment__orderI__59FA5E80] FOREIGN KEY ([orderId]) REFERENCES [dbo].[Transaction]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Shop] ADD CONSTRAINT [FK__Shop__userId__3C69FB99] FOREIGN KEY ([userId]) REFERENCES [dbo].[Users]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[ShopReview] ADD CONSTRAINT [FK__ShopRevie__trans__5FB337D6] FOREIGN KEY ([transactionId]) REFERENCES [dbo].[Transaction]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Transaction] ADD CONSTRAINT [FK__Transacti__cartI__5535A963] FOREIGN KEY ([cartId]) REFERENCES [dbo].[Cart]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Transaction] ADD CONSTRAINT [FK__Transacti__payme__5629CD9C] FOREIGN KEY ([paymentMethod]) REFERENCES [dbo].[PaymentMethod]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE [dbo].[Transaction] ADD CONSTRAINT [FK__Transacti__shipP__571DF1D5] FOREIGN KEY ([shipProvider]) REFERENCES [dbo].[ShipmentProvider]([id]) ON DELETE NO ACTION ON UPDATE NO ACTION;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
