//Load Express Framework
var express = require('express');

//Load Mustache Template Engine
var mustachex = require('mustachex');

//Load Oracle
var oracledb = require('oracledb');

//Call express
var app = express();

var bodyParser = require('body-parser');

var orawrap = require('orawrap');
var dbConfig = {
    user: '*********', //give user name and password
    password: '***',
    connectString: '*****************', //give server name
    poolMax: 20,
    poolMin: 2,
    poolIncrement: 2,
    poolTimeout: 10
};

//Set Global App Settings
app.engine('html', mustachex.express);
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//No index
app.get('/majestic/domain/no_idx', function(req, res) {
  res.render('domain_noidx.html');
});

app.post('/search_noidx', function(req, res) {

 var domain_noidx = req.body.domain_noidx;
 var sql_statement =  "SELECT globalrank, tldrank FROM majestic where domain='" + domain_noidx + "'";
 orawrap.execute(
         sql_statement,
         function(err, result_noidx)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_noidx',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result_noidx.rows.length >0) {
	       res.render('result_noidx', 
	       {
                 globalrank: result_noidx.rows[0][0],
                 tldrank: result_noidx.rows[0][1]
               }
               );
             }
	     else {
               res.render('error_noidx',
               {
                  message: "No domain with such name"

               }
               );
             }  
	   }
        }
      );
});

//Index 1
app.get('/majestic/domain/idx1', function(req, res) {
  res.render('domain_idx1.html');
});

app.post('/search_idx1', function(req, res) {

 var domain_idx1 = req.body.domain_idx1;
 var sql_statement =  "SELECT globalrank, tldrank FROM majestic_index1 where domain='" + domain_idx1 + "'";
 orawrap.execute(
         sql_statement,
         function(err, result_idx1)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_idx1',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result_idx1.rows.length >0) {
	       res.render('result_idx1', 
	       {
                 globalrank: result_idx1.rows[0][0],
                 tldrank: result_idx1.rows[0][1]
               }
               );
             }
	     else {
               res.render('error_idx1',
               {
                  message: "No domain with such name"

               }
               );
             }  
	   }
        }
      );
});
 
//Index 2
app.get('/majestic/domain/idx2', function(req, res) {
  res.render('domain_idx2.html');
});

app.post('/search_idx2', function(req, res) {

 var domain_idx2 = req.body.domain_idx2;
 var sql_statement =  "SELECT globalrank, tldrank FROM majestic_index2 where domain='" + domain_idx2 + "'";
 orawrap.execute(
         sql_statement,
         function(err, result_idx2)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_idx2',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result_idx2.rows.length >0) {
	       res.render('result_idx2', 
	       {
                 globalrank: result_idx2.rows[0][0],
                 tldrank: result_idx2.rows[0][1]
               }
               );
             }
	     else {
               res.render('error_idx2',
               {
                  message: "No domain with such name"

               }
               );
             }  
	   }
        }
      );
    
 
});

//Index 3
app.get('/majestic/domain/idx3', function(req, res) {
  res.render('domain_idx3.html');
});

app.post('/search_idx3', function(req, res) {

 var domain_idx3 = req.body.domain_idx3;
 var sql_statement =  "SELECT globalrank, tldrank FROM majestic_index3 where domain='" + domain_idx3 + "'";
 orawrap.execute(
         sql_statement,
         function(err, result_idx3)
         {
           if (err) { 
	      console.error(err);
	      res.render('error_idx3',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result_idx3.rows.length >0) {
	       res.render('result_idx3', 
	       {
                 globalrank: result_idx3.rows[0][0],
                 tldrank: result_idx3.rows[0][1]
               }
               );
             }
	     else {
               res.render('error_idx3',
               {
                  message: "No domain with such name"

               }
               );
             }  
	   }
        }
      );
    
});

//To get the list**************************************************************
//No index
app.get('/majestic/domain2/no_idx', function(req, res) {
  res.render('domain2_noidx.html');
});

app.post('/search2_noidx', function(req, res) {

 var domain2_noidx = req.body.domain2_noidx;
 var sql_statement =  "SELECT globalrank, domain FROM majestic where tld = '" + domain2_noidx + "'";
 orawrap.execute(
         sql_statement, {}, {maxRows: 40000},
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error2_noidx',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {		 
	       res.render('result2_noidx', 
	       {
                 
                 everything: result.rows
                 
               }
                 
               );

             }
	     else {
               res.render('error2_noidx',
               {
                  message: "No domain with such name"

               }
               );
             }  
	   }
        }
      );
    
  
});

//Index1
app.get('/majestic/domain2/idx1', function(req, res) {
  res.render('domain2_idx1.html');
});

app.post('/search2_idx1', function(req, res) {

 var domain2_idx1 = req.body.domain2_idx1;
 var sql_statement =  "SELECT globalrank, domain FROM majestic_index1 where tld = '" + domain2_idx1 + "'";
 orawrap.execute(
         sql_statement, {}, {maxRows: 40000},
         function(err, result)
         {
           if (err) { 
	      console.error(err);
	      res.render('error2_idx1',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result.rows.length >0) {		 
	       res.render('result2_idx1', 
	       {
                 
                 everything: result.rows
                 
               }
                 
               );

             }
	     else {
               res.render('error2_idx1',
               {
                  message: "No domain with such name"

               }
               );
             }  
	   }
        }
      );
    
  
});


//Index2
app.get('/majestic/domain2/idx2', function(req, res) {
  res.render('domain2_idx2.html');
});

app.post('/search2_idx2', function(req, res) {

 var domain2_idx2 = req.body.domain2_idx2;
 var sql_statement =  "SELECT globalrank, domain FROM majestic_index2 where tld = '" + domain2_idx2 + "'";
 orawrap.execute(
         sql_statement, {}, {maxRows: 40000},
         function(err, result2_idx2)
         {
           if (err) { 
	      console.error(err);
	      res.render('error2_idx2',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result2_idx2.rows.length >0) {		 
	       res.render('result2_idx2', 
	       {
                 
                 everything: result2_idx2.rows
                 
               }
                 
               );

             }
	     else {
               res.render('error2_idx2',
               {
                  message: "No domain with such name"

               }
               );
             }  
	   }
        }
      );
    
  
});


//Index3
app.get('/majestic/domain2/idx3', function(req, res) {
  res.render('domain2_idx3.html');
});

app.post('/search2_idx3', function(req, res) {

 var domain2_idx3 = req.body.domain2_idx3;
 var sql_statement =  "SELECT globalrank, domain FROM majestic_index3 where tld = '" + domain2_idx3 + "'";
 orawrap.execute(
         sql_statement, {}, {maxRows: 40000},
         function(err, result2_idx3)
         {
           if (err) { 
	      console.error(err);
	      res.render('error2_idx3',
	        {
		  message: err.message
		}
              );
	      
	   }
           else {
	     if (result2_idx3.rows.length >0) {		 
	       res.render('result2_idx3', 
	       {
                 
                 everything: result2_idx3.rows
                 
               }
                 
               );

             }
	     else {
               res.render('error2_idx3',
               {
                  message: "No domain with such name"

               }
               );
             }  
	   }
        }
      );
    
  
});



//Create Server
var port = Number(process.env.PORT || 8018);

orawrap.createPool(dbConfig, function(err, pool) {
    if (err) throw err; 
   app.listen(port, function() {
       console.log("(Orawrap)Listening on " + port);
   });

});


