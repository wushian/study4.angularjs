CREATE TABLE [dbo].[Customers] (
    [Id]           INT           IDENTITY (1, 1) NOT NULL,
    [FirstName]    NVARCHAR (5)  NULL,
    [LastName]     NVARCHAR (10) NULL,
    [Position]     NVARCHAR (5)  NULL,
    [CreateTime]   DATETIME      NULL,
    [ModifiedTime] DATETIME      NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

