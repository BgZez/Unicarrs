CREATE DATABASE IF NOT EXISTS db_estoque;
USE db_estoque;

CREATE TABLE tbl_veiculos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(100),
    modelo VARCHAR(100),
    ano INT,
    cor VARCHAR(50),
    preco DECIMAL(12,2),
    quilometragem BIGINT,
    foto LONGTEXT
    status VARCHAR(20)
);

INSERT INTO tbl_veiculos
(marca, modelo, ano, cor, preco, quilometragem, foto, status) VALUES
("Hyundai", "i30", 2012, "Preto", 35000.00, 210000,
 "https://uploads.vrum.com.br/2022/11/6808297d-hyundai-i30-modelo-2011-preto-de-frente-no-asfalto.jpg",
 "DISPONIVEL"),

("Honda", "City", 2015, "Azul", 50000.00, 219000,
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9x4nEKgF1R-_V-dVsIUrrGRdh4_6d5C2mtw&s",
 "VENDIDO"),

("Ford", "Fiesta", 2014, "Prata", 45000.00, 223000,
 "https://img0.icarros.com/dbimg/galeriaimgmodelo/2/16912_1.jpg",
 "DISPONIVEL"),

("Renault", "Logan", 2013, "Verde", 37000.00, 226000,
 "https://preview.free3d.com/img/2016/12/2399362126876509390/v10m5uju.jpg",
 "DISPONIVEL"),

("Chevrolet", "Onix", 2023, "Vermelho", 70000.00, 228000,
 "https://s3.sa-east-1.amazonaws.com/revista.mobiauto/Chevrolet/Onix+e+Onix+Plus+2022/Chevrolet+Onix+RS+2022+dianteira.jpg",
 "DISPONIVEL"),

("Toyota", "Corolla", 2015, "Preto", 67000.00, 240000,
 "https://img.olx.com.br/images/74/744548787825550.jpg",
 "DISPONIVEL"),

("Audi", "A3", 2015, "Branco", 55000.00, 285000,
 "https://s3.ecompletocarros.dev/images/lojas/207/veiculos/154656/veiculoInfoVeiculoImagesMobile/vehicle_image_1690601440_d41d8cd98f00b204e9800998ecf8427e.jpeg",
 "DISPONIVEL"),

("Volkswagen", "Virtus", 2019, "Cinza", 63000.00, 307000,
 "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaZRvglrjl7zrXFYpRzJLJm7aD_ScDBtEsQ&s",
 "DISPONIVEL");


 select * from tbl_veiculos