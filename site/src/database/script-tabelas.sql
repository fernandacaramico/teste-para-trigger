-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* início criação tabelas */
use aquatech;

create table triggerizada
(
id int primary key auto_increment,
deucerto varchar(50),
quando datetime
);

create table empresa (
id int primary key auto_increment,
nome varchar(50)
);
/* fim criação tabelas */


/* início criação de trigger */
delimiter $
create trigger testando
after insert on empresa
for each row
begin
	insert into triggerizada values (null, 'sim', now());
end;
delimiter;
/* fim criação de trigger */

/* início criação de usuário */
CREATE USER 'user_datawriterreader'@'localhost' 
IDENTIFIED BY '#Gf_senhaParaAPIWebDataViz';

GRANT SELECT, INSERT, UPDATE, DELETE ON aquatech.* TO 
'user_datawriterreader'@'localhost';

FLUSH PRIVILEGES;
/* fim criação de usuário */

/* início verificando se os comandos funcionaram*/
select * from empresa;
select * from triggerizada;
/* fim verificando se os comandos funcionaram*/
