<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
   <link rel="stylesheet" href="{{asset('css/app.css')}}">


</head>

<body >
    <div id="app">
       <div class="conteiner">
           
           <ul class="nav">
             <li class="nav-item">
               <router-link to="/home" class="nav-link">Home</router-link> 
             </li>
             <li class="nav-item">
               <router-link to="/about" class="nav-link" >About</router-link>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">Contact</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="#">Service</a>
             </li>

           </ul>
       </div>

        
        <router-view></router-view>
    </div>
  <script src="{{asset('js/app.js')}}"></script>
</body>

</html>
