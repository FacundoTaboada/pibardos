create database library;

create table habits(
    title text,
    notes text,
    difficulty text,
    tags text,
    resetCtr text
);

insert into habits values
    ('Work', 'Finish Deliverables', 'Hard', 'Career', 'Weekly'),
    ('Sleep 8hs', 'Imporve sleep quality', 'Easy', 'Personal', 'Daily');

create table users(
    username text,
    password text
);

insert into users values
    ('lord','lord123'),
    ('otib','otib123'),
    ('buti', 'buti123');