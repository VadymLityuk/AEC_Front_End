<!DOCTYPE html>
<html lang="fr-CA">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>Modern Business - Start Bootstrap Template</title>

  <!-- Bootstrap core CSS -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

  <!-- Custom styles for this template -->
  <link href="/css/modern-business.css" rel="stylesheet">

</head>

<body>

  <!-- Navigation -->
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="/index.php">Start Bootstrap</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/enonce.php">Énoncé</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownBlog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Nouvelles
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownBlog">
              <a class="dropdown-item" href="/nouvelles_categorie.php">Catégorie 1</a>
              <a class="dropdown-item" href="/nouvelles_categorie.php">Catégorie 2</a>
              <a class="dropdown-item" href="/nouvelles_categorie.php">Catégorie 3</a>
			  <a class="dropdown-item" href="/nouvelles.php">Toutes les nouvelles</a>
            </div>
          </li>
		  <li class="nav-item">
            <a class="nav-link" href="/module_personnel.php">Module personnel</a>
          </li>
		  
		  <!-- Le menu Administration doit s'afficher seulement lorsque l'utilisateur est connecté !-->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownPages" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Administration
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownPages">
              <a class="dropdown-item" href="/administration/nouvelles.php">Nouvelles</a>
            </div>
          </li>
		  <li class="nav-item">
            <button class="btn btn-outline-info my-2 my-sm-0" data-toggle="modal" data-target="#modalConnexion">Connexion</button>					
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
<!-- Formulaire de connexion -->
<div class="modal" id="modalConnexion" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
	<div class="modal-content">
	  <div class="modal-header">
		<h5 class="modal-title">Connexion</h5>
		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
		  <span aria-hidden="true">&times;</span>
		</button>
	  </div>
	  <div class="modal-body">
		Formulaire de connexion
	  </div>
	  <div class="modal-footer">
		<button type="submit" class="btn btn-primary">Connexion</button>
		<button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
	  </div>
	</div>
  </div>
</div>	