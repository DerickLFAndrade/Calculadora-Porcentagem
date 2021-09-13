<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css"> <!--Estilos css linkado-->
    <link rel="shortcut icon" href="Graphicloads-Flat-Finance-Percentage.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"> <!--Bootstrap-->

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> <!--biblioteca jQuery-->
    <title>Calculadora de Porcentagem</title>
</head>
<body>


        
<section class="container-fluid" id="containerPrimario">
    <section id="logo"><img src="logo-1 (2).png" alt="" id="logoImg" width="300px"></section>
    <section class="container" id="containerSec">
        <div id="conta"><B>VALOR</B>:</div>
        <img src="icon-dollar.svg" alt="" width="18px" id="iconConta"><input id="quantidade"></input>
        <section id="containerSel">
            <div id="textoSel">
                <h3><b>Valor de acréscimo %</b></h3>
            </div>

            <section id="opções">
                <div class="row">
                    <div id="op1"><b>5%</b></div>
                    <div id="op2"><b>10%</b></div>
                   
                    <input type="text" placeholder="Escolher" id="custom"><img src="percentage-icon.png" id="icoPorcentagem"></input>
                </div>
       

        <section class="container" id="containerTerc">
            <span id="texto3b">
                <p><b>Acréscimo:</b></p>
                <hr>
            </span>
            
            <span id="texto3a">
                <p><b>Total a pagar:</b></p>
                <hr>
            </span>

            <span id="valor1">R$ 0.00</span>
            <span id="valor2">R$ 0.00</span>

            <input type="button" value="Resetar" class="btn btn-success" id="botReset">
        </section>
    </section>
    </section>



</section>



    

    
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossorigin="anonymous"></script> <!--Bootstrap-->
        <script src="javascript.js"></script>
        <!--Javascript linkado-->
</body>
</html>