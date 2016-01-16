load data 
infile 'majestic.csv' "str '\n'"
append
into table MAJESTIC_INDEX3
fields terminated by ','
OPTIONALLY ENCLOSED BY '"' AND '"'
trailing nullcols
           ( GLOBALRANK CHAR(4000),
             TLDRANK CHAR(4000),
             DOMAIN CHAR(4000),
             TLD CHAR(4000),
             REFSUBNETS CHAR(4000),
             REFIPS CHAR(4000),
             IDN_DOMAIN CHAR(4000),
             IDN_TLD CHAR(4000),
             PREVGLOBALRANK CHAR(4000),
             PREVTLDRANK CHAR(4000),
             PREVREFSUBNETS CHAR(4000),
             PREVREFIPS CHAR(4000)
           )
