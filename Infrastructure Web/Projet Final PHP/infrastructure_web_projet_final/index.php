<?php include_once('include/header.php'); ?>

  <header>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <!-- Slide One - Set the background image for this slide in the line below -->
        <div class="carousel-item active" style="background-image: url('http://placehold.it/1900x1080')">
          <div class="carousel-caption d-none d-md-block">
            <h3>Image #1</h3>
            <p>Description de l'image #1.</p>
          </div>
        </div>
        <!-- Slide Two - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('http://placehold.it/1900x1080')">
          <div class="carousel-caption d-none d-md-block">
            <h3>Image #2</h3>
            <p>Description de l'image #2.</p>
          </div>
        </div>
        <!-- Slide Three - Set the background image for this slide in the line below -->
        <div class="carousel-item" style="background-image: url('http://placehold.it/1900x1080')">
          <div class="carousel-caption d-none d-md-block">
            <h3>Image #2</h3>
            <p>Description de l'image #3.</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Précédent</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Suivant</span>
      </a>
    </div>
  </header>

  <!-- Page Content -->
  <div class="container">

    <h1 class="my-4">Projet final</h1>

    <!-- Marketing Icons Section -->
    <div class="row">
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Nouvelle #1</h4>
          <div class="card-body">
			<h6 class="card-title">Date de la nouvelle</h6>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div class="card-footer">
            <a href="nouvelle.php" class="btn btn-primary">Plus d'information</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Nouvelle #2</h4>
          <div class="card-body">
			<h6 class="card-title">Date de la nouvelle</h6>
            <p class="card-text">Nouvelle active la seconde plus récente</p>
          </div>
          <div class="card-footer">
            <a href="nouvelle.php" class="btn btn-primary">Plus d'information</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card h-100">
          <h4 class="card-header">Nouvelle #3</h4>
          <div class="card-body">
			<h6 class="card-title">Date de la nouvelle</h6>
            <p class="card-text">Nouvelle active la troisième plus récente</p>
          </div>
          <div class="card-footer">
            <a href="nouvelle.php" class="btn btn-primary">Plus d'information</a>
          </div>
        </div>
      </div>
    </div>
    <!-- /.row -->
	
  </div>
  <!-- /.container -->

<?php include_once('include/footer.php'); ?>
