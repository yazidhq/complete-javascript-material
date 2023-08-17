// menggunakan jquery (library external)
// $(".search-button").on("click", function () {
//   $.ajax({
//     url:
//       "http://www.omdbapi.com/?apikey=8add069&s=" + $(".input-keyword").val(),
//     success: (result) => {
//       const movies = result.Search;
//       let cards = "";
//       movies.forEach((m) => {
//         cards += showCards(m);
//       });
//       $(".movie-container").html(cards);

//       // ketika tombol detail diklik
//       $(".modal-detail-button").on("click", function () {
//         $.ajax({
//           url:
//             "http://www.omdbapi.com/?apikey=8add069&i=" +
//             $(this).data("imdbid"),
//           success: (m) => {
//             const movieDetail = showMovieDetail(m);
//             $(".modal-body").html(movieDetail);
//           },
//           error: (e) => {
//             console.log(e.responseText);
//           },
//         });
//       });
//     },
//     error: (e) => {
//       console.log(e.responseText);
//     },
//   });
// });

// menggunakan fetch (Vanilla JS)
// method API js untuk mengambil resource dari jaringan, dan mengembalikan promise yang selesai ketika ada response yang tersedia
// const sButton = document.querySelector(".search-button");
// sButton.addEventListener("click", function () {
//   const iKey = document.querySelector(".input-keyword");
//   fetch("http://www.omdbapi.com/?apikey=8add069&s=" + iKey.value)
//     .then((response) => response.json())
//     .then((response) => {
//       // ketika melakukan search
//       const movies = response.Search;
//       let cards = "";
//       movies.forEach((m) => (cards += showCards(m)));
//       const movieCon = document.querySelector(".movie-container");
//       movieCon.innerHTML = cards;
//       // ketika tombol detail diklik
//       const modalDButton = document.querySelectorAll(".modal-detail-button");
//       modalDButton.forEach((dBtn) => {
//         dBtn.addEventListener("click", function () {
//           const imdbid = this.dataset.imdbid;
//           console.log(imdbid);
//           fetch("http://www.omdbapi.com/?apikey=8add069&i=" + imdbid)
//             .then((response) => response.json())
//             .then((m) => {
//               const movieDetail = showMovieDetail(m);
//               const modalBody = document.querySelector(".modal-body");
//               modalBody.innerHTML = movieDetail;
//             });
//         });
//       });
//     });
// });

// fetch rafactoring (penyederhanaan) (Async Await)
// ketika search diklik
const sButton = document.querySelector(".search-button");
sButton.addEventListener("click", async function () {
  try {
    const iKey = document.querySelector(".input-keyword");
    const movies = await getMoviesAPI(iKey.value);
    updateUI(movies);
  } catch (err) {
    alert(err);
  }
});

// ketika detail di klik (event binding: memberi event ke elemen tyan gawalnya belum ada tetapi ketika eventnya ada tetep berjalan)
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

// function fetch search movie
function getMoviesAPI(iKey) {
  return fetch("http://www.omdbapi.com/?apikey=8add069&s=" + iKey)
    .then((response) => {
      // error handing pada fetch
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.Response === "False") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}
function updateUI(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieCon = document.querySelector(".movie-container");
  movieCon.innerHTML = cards;
}

// function fetch detail movie
function getMovieDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=8add069&i=" + imdbid)
    .then((response) => response.json())
    .then((m) => m);
}
function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = movieDetail;
}

// function tampil data
function showCards(m) {
  return `
    <div class="col-md-4 my-5">
      <div class="card" style="width: 18rem">
        <img src="${m.Poster}" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${m.Title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
          <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal"
          data-bs-target="#movieModal" data-imdbid="${m.imdbID}">Show Details</a>
        </div>
      </div>
    </div>
  `;
}
function showMovieDetail(m) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
          <li class="list-group-item"><strong>Sutradara:</strong> ${m.Director}</li>
          <li class="list-group-item"><strong>Actors: </strong>${m.Actors}</li>
          <li class="list-group-item"><strong>Writers: </strong>${m.Writer}</li>
          <li class="list-group-item"><strong>Plot: </strong>${m.Plot}</li>
        </ul>
      </div>
    </div>
  </div>`;
}
