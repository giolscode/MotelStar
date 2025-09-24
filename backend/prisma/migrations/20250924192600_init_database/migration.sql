-- CreateTable
CREATE TABLE `Reservation` (
    `id_reservation` INTEGER NOT NULL AUTO_INCREMENT,
    `type_chambre` VARCHAR(191) NOT NULL,
    `reservation_date` DATETIME(3) NOT NULL,
    `arr_date` DATETIME(3) NOT NULL,
    `dep_date` DATETIME(3) NOT NULL,
    `nb_personnes` INTEGER NOT NULL,
    `date_creation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_reservation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
